import { Link, Outlet } from 'react-router-dom';
import './Sidebar.css';

function Sidebar() {
  return (
    <div className="wrapper">
      <div className="l-wrapper">
        <div className="side-wrapper">
          <Link className="side-title">
            <img className="icon-image" src="/icon.svg" alt="" />
            <h2 className="icon-title">Ai 프로그램</h2>
          </Link>
          <ul className="side-list">
            <Link to="/question" className="list-items">
              긴 글에서 정보 추출하기AI
            </Link>
            <Link to="/wiki" className="list-items">
              위키 백과에서 질문하기AI
            </Link>
            <Link to="/law" className="list-items">
              법률 관련 질문하기AI
            </Link>
          </ul>
        </div>
        <Outlet />
      </div>
    </div>
  );
}

export default Sidebar;
