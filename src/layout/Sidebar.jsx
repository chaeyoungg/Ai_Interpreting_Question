import { Link, Outlet } from 'react-router-dom';
import './Sidebar.css';

function Sidebar() {
  return (
    <div className="wrapper">
      <div className="l-wrapper">
        <div className="side-wrapper">
          <Link className="side-title">
            <img className="icon-image" src="/icon.svg" alt="" />
            <h2 className="icon-title">Ai 문장해석</h2>
          </Link>
          <ul className="side-list">
            <li className="list-items">긴 글에서 정보 추출하기AI</li>
            <li className="list-items">ai - 2</li>
            <li className="list-items">ai - 3</li>
            <li className="list-items">ai - 4</li>
          </ul>
        </div>
        <Outlet />
      </div>
    </div>
  );
}

export default Sidebar;
