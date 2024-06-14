import useAxiosAi from '@hooks/useAxiosAi.mjs';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import './Question.css';

function Question() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const axios = useAxiosAi();
  const [result, setResult] = useState('');

  const onSubmit = async formData => {
    formData = { ...formData, request: 'reserved field' };
    console.log(formData);
    try {
      const result = await axios.post('/MRCServlet', formData);
      setResult(result.data.return_object.MRCInfo.answer);
      console.log(result.data.return_object.MRCInfo.answer);
      alert('해석 완료!');
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    // <div className="wrapper">
    //   <div className="l-wrapper">
    <div className="contents-wrap">
      <h1 className="contents-title">Ai_Interpreting_Question</h1>
      <details className="tip">
        <summary className="tip-title">사용 방법</summary>
        <div className="tip-content">
          해석을 원하는 글을 복사하여{' '}
          <span className="spotlight-text">[긴 글]</span> 에 붙여넣고 긴 글에서
          얻고 싶은 정보를{' '}
          <span className="spotlight-text">[얻고 싶은 정보]</span> 에 입력하여{' '}
          <span className="spotlight-text yellow">'해석하기'</span> 버튼을
          누르면 <span className="spotlight-text">[결과 보기]</span> 에 AI가
          해석한 결과를 출력합니다.
        </div>
      </details>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label className="passage-label" htmlFor="passage">
          [ 긴 글 ]
        </label>
        <br />

        <textarea
          className="passage"
          id="passage"
          defaultValue="루트비히 판 베토벤(독일어: Ludwig van Beethoven, 문화어: 루드위히 판 베토벤, 1770년 12월 17일 ~ 1827년 3월 26일)은 독일의 서양 고전 음악 작곡가이다. 독일의 본에서 태어났으며, 성인이 된 이후 거의 오스트리아 빈에서 살았다. 감기와 폐렴으로 인한 합병증으로 투병하다가 57세로 생을 마친 그는 고전주의와 낭만주의의 전환기에 활동한 주요 음악가이며, 작곡가로 널리 존경받고 있다. 음악의 성인(聖人) 또는 악성(樂聖)이라는 별칭으로 부르기도 한다. 가장 잘 알려진 작품 가운데에는 〈교향곡 5번〉, 〈교향곡 6번〉, 〈교향곡 9번〉, 〈비창 소나타〉, 〈월광 소나타〉 등이 있다."
          {...register('argument.passage', {
            required: '추출하고 싶은 글 원문을 입력하세요.',
          })}
        />
        {errors?.argument?.passage && (
          <p className="error-message">{errors.argument.passage.message}</p>
        )}
        <br />
        <p className="question-label" htmlFor="question">
          [ 얻고 싶은 정보 ]
        </p>
        <input
          type="text"
          className="question"
          id="question"
          defaultValue="베토벤의 출생일"
          {...register('argument.question', {
            required: '추출하고 싶은 정보를 입력하세요.',
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
        <p className="result">{result}</p>
      </form>
    </div>
    //   </div>
    // </div>
  );
}

export default Question;
