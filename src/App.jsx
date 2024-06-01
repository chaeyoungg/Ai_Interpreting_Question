import Question from '@pages/Question';
import './App.css';
import Sidebar from '@layout/Sidebar';
import { RouterProvider } from 'react-router-dom';
import router from './routes';

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
