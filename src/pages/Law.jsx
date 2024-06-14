import useAxiosAi from '@hooks/useAxiosAi.mjs';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import './Law.css';

function Law() {
  const { register, handleSubmit } = useForm();
  const axios = useAxiosAi();
  const [result, setResult] = useState('');

  const onSubmit = async formData => {
    formData = {
      request_id: 'reserved field',
      ...formData,
    };
    console.log('formData', formData);
    try {
      const result = await axios.post('/LegalQA', formData);
      setResult(result.data.return_object.LegalInfo.AnswerInfo[0]);
      console.log('답변', result.data.return_object.LegalInfo.AnswerInfo[0]);
      alert('해석 완료!');
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <div className="contents-wrap">
      <h1 className="contents-title">Ai_Law_Question</h1>
      <details className="tip">
        <summary className="tip-title">사용 방법</summary>
        <div className="tip-content">
          <span className="spotlight-text">[질문]</span> 에 법률에 대해 궁금한
          질문을 입력하고{' '}
          <span className="spotlight-text yellow">'해석하기'</span> 버튼을
          누르면 AI가 1,447개의 국내 법률을 기반으로 최적의 답을 찾아
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
          defaultValue="국회의장의 역할은?"
          {...register('argument.question', {
            required: '질문하고 싶은 법률 관련 질문을 입력하세요.',
          })}
        />

        <button className="submit" type="submit">
          해석하기
        </button>

        <hr className="content-hr" />
        <h3 className="result-label">[ 결과 보기 ]</h3>
        <p className="result">{result?.answer}</p>
      </form>
    </div>
  );
}

export default Law;
