import axios from 'axios';

function useAxiosAi() {
  const instance = axios.create({
    baseURL: 'http://aiopen.etri.re.kr:8000',
    timeout: 10000 * 10,
    headers: {
      'content-type': 'application/json',
      accept: 'application/json',
      Authorization: 'b746159e-4fff-4d0b-a261-83e8c1fa6a35',
    },
  });

  return instance;
}

export default useAxiosAi;
