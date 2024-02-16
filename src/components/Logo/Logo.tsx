import React from "react";
import logo from "../../assets/logo.svg";
import './styles/index.css';

const Logo: React.FC = () => {
  return <img className="logo" src={logo} />;
};

export default Logo;
