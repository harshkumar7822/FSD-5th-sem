import React from 'react';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();

  const navItemStyle = {
    cursor: "pointer",
    userSelect: "none"
  };

  return (
    <div>
      <nav style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "navy",
        color: "white",
        padding: "15px 25px",
        fontSize: "18px"
      }}>
        <div style={{ fontSize: "24px", fontWeight: "bold", cursor: "pointer" }} onClick={() => navigate("/")}>
          Myapp
        </div>

        <div style={{
          display: "flex",
          gap: "25px"
        }}>
          <div style={navItemStyle} onClick={() => navigate("/")}>Home</div>
          <div style={navItemStyle} onClick={() => navigate("/product")}>Products</div>
          <div style={navItemStyle} onClick={() => navigate("/about")}>About</div>
          <div style={navItemStyle} onClick={() => navigate("/cart")}>Cart</div>
        </div>

      </nav>
    </div>
  );
};

export default Header;