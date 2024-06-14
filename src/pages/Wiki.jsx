import useAxiosAi from '@hooks/useAxiosAi.mjs';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import './Wiki.css';

function Wiki() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const axios = useAxiosAi();
  const [result, setResult] = useState('');
  const [url, setUrl] = useState([]);

  const setLink = urlArr => {
    if (urlArr.length) {
      urlArr = urlArr.map((data, index) => (
        <a key={index} href={data}>
          ▶ 참고 링크 #{index + 1}
        </a>
      ));
    }
    setUrl(urlArr);
    console.log('urlArr', urlArr);
  };

  const onSubmit = async formData => {
    formData = {
      request_id: 'reserved field',
      argument: {
        ...formData.argument,
        type: 'ENGINE_TYPE',
      },
    };
    console.log('formData', formData);
    try {
      const result = await axios.post('/WikiQA', formData);
      setResult(result.data.return_object.WiKiInfo.AnswerInfo[0]);
      setLink(result.data.return_object.WiKiInfo.AnswerInfo[0].url);
      console.log('답변', result.data.return_object.WiKiInfo.AnswerInfo[0]);
      alert('해석 완료!');
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <div className="contents-wrap">
      <h1 className="contents-title">Ai_Wikipedia_Question</h1>
      <details className="tip">
        <summary className="tip-title">사용 방법</summary>
        <div className="tip-content">
          <span className="spotlight-text">[질문]</span> 에 궁금한 정보에 대한
          질문을 입력하고{' '}
          <span className="spotlight-text yellow">'해석하기'</span> 버튼을
          누르면 AI가 위키 백과를 기반으로 최적의 답을 찾아
          <span className="spotlight-text">[결과 보기]</span> 에 질문에 대한
          답을 출력합니다.
        </div>
      </details>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label className="passage-label" htmlFor="passage">
          [ 질문 ]
        </label>
        <br />
        <input
          className="question"
          id="question"
          defaultValue="대한민국의 대표 국화는?"
          {...register('argument.question', {
            required: 'Wiki 백과에서 찾고 싶은 정보에 대한 질문을 입력하세요.',
          })}
        />
        <button className="submit" type="submit">
          해석하기
        </button>
        {errors?.argument?.question && (
          <p className="error-message">{errors.argument.question.message}</p>
        )}

        <hr className="content-hr" />
        <h3 className="result-label">[ 결과 보기 ]</h3>
        <p className="result">{result?.answer}</p>
        <h3 className="result-label">[ 참고 위키 링크 ]</h3>
        <div className="result-link">{url}</div>
      </form>
    </div>
  );
}

export default Wiki;
