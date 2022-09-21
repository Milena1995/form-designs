import React from "react";
import { Horizontal } from "../style/style";
export const Header = () => {
  return (
    <Horizontal>
      <ul className="list-dsk">
        <li className="item column">
          <span className="material-symbols-outlined"> restaurant </span>
          <a href="menu.html" className="icon-text">
            Menu
          </a>
        </li>
        <li className="item column">
          <span className="material-symbols-outlined"> error </span>
          <a href="about.html" className="icon-text">
            About
          </a>
        </li>
        <li className="item column">
          <span className="material-symbols-outlined"> stars </span>
          <a href="rewards.html" className="icon-text">
            Rewards
          </a>
        </li>
      </ul>
    </Horizontal>
  );
};
