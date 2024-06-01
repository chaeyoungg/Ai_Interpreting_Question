import Sidebar from '@layout/Sidebar';
import Question from '@pages/Question';
import { createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Sidebar />,
    children: [
      {
        path: '/',
        element: <Question />,
      },
      {
        path: '/question',
        element: <Question />,
      },
    ],
  },
]);

export default router;
