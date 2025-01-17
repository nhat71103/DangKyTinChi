import React, { useState } from "react";
import "./Login.css";

function Login({ onClose, onLoginSuccess }) {
  const [isLogin, setIsLogin] = useState(true); // Để chuyển đổi giữa đăng nhập và đăng ký
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [users, setUsers] = useState(() => {
    // Lấy danh sách tài khoản từ localStorage
    const savedUsers = localStorage.getItem("users");
    return savedUsers ? JSON.parse(savedUsers) : [];
  });
  const [message, setMessage] = useState(""); // Hiển thị thông báo

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isLogin) {
      // Xử lý đăng nhập
      const user = users.find((u) => u.email === email && u.password === password);
      if (user) {
        setMessage("Đăng nhập thành công!");
        onLoginSuccess(email); // Gọi callback khi đăng nhập thành công
        onClose(); // Đóng form
      } else {
        setMessage("Email hoặc mật khẩu không đúng!");
      }
    } else {
      // Xử lý đăng ký
      if (users.some((u) => u.email === email)) {
        setMessage("Email đã được sử dụng!");
      } else {
        const newUsers = [...users, { email, password }];
        setUsers(newUsers);
        localStorage.setItem("users", JSON.stringify(newUsers)); // Lưu vào localStorage
        setMessage("Đăng ký thành công! Bạn có thể đăng nhập.");
        setIsLogin(true); // Chuyển sang form đăng nhập
      }
    }
  };

  return (
    <div className="login-form-container">
      <div className="login-form">
        <h2>{isLogin ? "Đăng Nhập" : "Đăng Ký"}</h2>
        {message && <div className="message">{message}</div>}
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Mật khẩu"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">{isLogin ? "Đăng Nhập" : "Đăng Ký"}</button>
        </form>
        <div className="toggle">
          <span>{isLogin ? "Chưa có tài khoản?" : "Đã có tài khoản?"}</span>
          <button onClick={() => setIsLogin(!isLogin)}>
            {isLogin ? "Đăng ký" : "Đăng nhập"}
          </button>
        </div>
        <button className="close-btn" onClick={onClose}>
          Đóng
        </button>
      </div>
    </div>
  );
}

export default Login;
