import useAxiosAi from '@hooks/useAxiosAi.mjs';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import './Wiki.css';

function Wiki() {
  const { register, handleSubmit } = useForm();
  const axios = useAxiosAi();
  const [result, setResult] = useState('');

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
      console.log('답변', result.data.return_object.WiKiInfo.AnswerInfo[0]);
      alert('해석 완료!');
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <div className="contents-wrap">
      <h1 className="contents-title">Ai_Wikipedia_Question</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label className="passage-label" htmlFor="passage">
          [ 질문 ]
        </label>
        <br />

        <input
          className="question"
          id="question"
          defaultValue="대한민국 국회의원의 임기는?"
          {...register('argument.question', {
            required: '추출하고 싶은 글 원문을 입력하세요.',
          })}
        />
        {/* <label className="passage-label" htmlFor="question">
          [ 얻고 싶은 정보 ]
        </label>
        <br />
        <input
          type="text"
          className="question"
          id="question"
          defaultValue="베토벤의 출생일"
          {...register('argument.question', {
            required: '추출하고 싶은 정보를 입력하세요.',
          })}
        /> */}

        <button className="submit" type="submit">
          해석하기
        </button>

        <hr className="content-hr" />
        <h3 className="result-label">[ 결과 보기 ]</h3>
        <p className="result">{result?.answer}</p>
        <div>
          {result?.url?.map((data, index) => (
            <p key={index}>{data}</p>
          ))}
        </div>
      </form>
    </div>
  );
}

export default Wiki;
