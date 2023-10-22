import "./Header.css";
import { useState } from "react";
import { MenuButton } from "../MenuButton/MenuButton";

export const Header = () => {
  const [isActive, setActive] = useState();
  return (
    <div className="header">
      <div className="header-container">
        <div className="header-logo">LOGO</div>
        <MenuButton isActive={isActive} setActive={setActive} />
      </div>
    </div>
  );
};
