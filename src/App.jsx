import Question from '@pages/Question';
import './App.css';
import Sidebar from '@layout/Sidebar';

function App() {
  return (
    <div className="wrapper">
      <div className="l-wrapper">
        <Sidebar />
        <Question />
      </div>
    </div>
  );
}

export default App;
