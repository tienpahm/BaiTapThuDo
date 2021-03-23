import React from "react";
import Data from "../Data/Data.json";
import {useSelector} from "react-redux";

export default function NavTab() {
  const renderNavTab = () => {
    return Data.navPills.map((item, index) => {
      if (index === 0) {
        return (
          <li className="nav-item" key={index}>
            <a
              className="nav-link active btn-default"
              data-toggle="pill"
              href={`#${item.tabName}`}>
              {item.showName}
            </a>
          </li>
        );
      } else {
        return (
          <li className="nav-item" key={index}>
            <a
              className="nav-link btn-default"
              data-toggle="pill"
              href={`#${item.tabName}`}>
              {item.showName}
            </a>
          </li>
        );
      }
    });
  };

  return <ul className="nav nav-pills">{renderNavTab()}</ul>;
}
