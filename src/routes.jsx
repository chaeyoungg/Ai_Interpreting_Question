import Sidebar from '@layout/Sidebar';
import Question from '@pages/Question';
import Wiki from '@pages/Wiki';
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
      {
        path: '/wiki',
        element: <Wiki />,
      },
    ],
  },
]);

export default router;
