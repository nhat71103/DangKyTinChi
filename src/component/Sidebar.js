import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import './Sidebar.css';

function Sidebar() {
  return (
    <div className="sidebar">
      <ul>
        <li>
          <Link to="/homepage">
            <i className="fas fa-home"></i>Trang chủ
          </Link>
        </li>
        <li>
          <Link to="/content">
            <i className="fas fa-code"></i>Lộ trình
          </Link>
        </li>
        <li>
          <i className="fas fa-file-alt"></i>Chứng chỉ
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
