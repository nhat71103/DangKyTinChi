// Header.js
import React, { useState, useContext } from "react";
import "./Header.css";
import Login from "./Login";
import Logo from "./images/Logo.jpg";
import { AuthContext } from "./AuthContext";

function Header() {
  const [inputValue, setInputValue] = useState("");
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const { isLoggedIn, user, logout } = useContext(AuthContext); // Lấy trạng thái đăng nhập từ AuthContext

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const openLoginModal = () => {
    setIsLoginOpen(true);
  };

  const closeLoginModal = () => {
    setIsLoginOpen(false);
  };

  return (
    <div className="header">
      <div className="logo">
        <img alt="Logo" src={Logo}></img>
        <h1>Công Ty DakSystem</h1>
      </div>
      <div className="search-container">
        <i className="fas fa-search search-icon"></i>
        <input
          className="search-bar"
          type="text"
          placeholder={inputValue ? "" : "Tìm kiếm khóa học, bài viết, video, ..."}
          value={inputValue}
          onChange={handleChange}
        />
      </div>
      <div className="user-info">
        <i className="fas fa-bell"></i>
        {isLoggedIn ? (
          <div className="logged-in-info">
            <span className="user-name">Chào, {user?.name || "Người dùng"}!</span>
            <button className="logout-btn" onClick={logout}>
              Đăng xuất
            </button>
          </div>
        ) : (
          <>
            <i className="fas fa-user-circle" onClick={openLoginModal}></i>
            <button className="login-btn" onClick={openLoginModal}>
              Đăng nhập
            </button>
          </>
        )}
      </div>

      {isLoginOpen && <Login onClose={closeLoginModal} />}
    </div>
  );
}

export default Header;
