import React from "react";
import "../../src/stylesheet/navigation.scss";
import { View } from "app-studio";

export const Header = () => {
  return (
    <View width={"100%"} padding={"25px 5px"} backgroundColor={"black"}>
      <ul className="header-list">
        <li className="header-item">
          <a href="menu.html" className="icon-text">
            Menu
          </a>
        </li>
        <li className="header-item">
          <a href="about.html" className="icon-text">
            About
          </a>
        </li>
        <li className="header-item">
          <a href="rewards.html" className="icon-text">
            Rewards
          </a>
        </li>
      </ul>
    </View>
  );
};
