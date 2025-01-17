import React, { useContext } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./component/Header";
import Sidebar from "./component/Sidebar";
import Content from "./component/Content";
import Homepage from "./component/Homepage";
import Footer from "./component/Footer";
import "./App.css";
import { AuthProvider, AuthContext } from "./component/AuthContext";
import ProtectedRoute from "./component/ProtectedRoute";

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <div className="app">
          <Header />
          <div className="container">
            <Sidebar />
            <div className="content-area">
              <MainContent />
            </div>
          </div>
          <Footer />
        </div>
      </Router>
    </AuthProvider>
  );
};

const MainContent = () => {
  const { isLoggedIn } = useContext(AuthContext);

  // Khi người dùng cố gắng truy cập vào các route chưa đăng nhập
  if (!isLoggedIn) {
    return (
      <>
        {/* Hiển thị cảnh báo khi chưa đăng nhập */}
        <div className="login-warning animated-warning">
          <div className="warning-icon">⚠️</div>
          <p>
            <strong>Vui lòng đăng nhập để truy cập vào nội dung!</strong> <br />
            Chúng tôi cam kết bảo mật mọi thông tin của bạn.
          </p>
        </div>
        {/* Routes */}
        <Routes>
          <Route
            path="/homepage"
            element={
              <ProtectedRoute element={<Homepage />} />
            }
          />
          <Route
            path="/content"
            element={
              <ProtectedRoute element={<Content />} />
            }
          />
        </Routes>
      </>
    );
  }

  return (
    <>
      {/* Routes */}
      <Routes>
        <Route
          path="/homepage"
          element={<ProtectedRoute element={<Homepage />} />}
        />
        <Route
          path="/content"
          element={<ProtectedRoute element={<Content />} />}
        />
      </Routes>
    </>
  );
};

export default App;
