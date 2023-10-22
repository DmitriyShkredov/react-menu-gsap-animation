import "./Header.css";
import { useState } from "react";
import { MenuButton } from "../MenuButton/MenuButton";
import { Menu } from "../Menu/Menu";

export const Header = () => {
  const [isActive, setActive] = useState();
  return (
    <div className="header">
      <div className="header-container">
        <div className="header-logo">LOGO</div>
        <MenuButton isActive={isActive} setActive={setActive} />
        <Menu isActive={isActive} />
      </div>
    </div>
  );
};
