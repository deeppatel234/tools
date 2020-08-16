import React from "react";
import { NavLink } from "react-router-dom";

import StorageInfo from "../../components/StorageInfo";

import "./index.scss";

const tools = [
  {
    label: "URI",
    url: "uri",
  },
  {
    label: "JSON",
    url: "json",
  },
];

const SideBar = () => {
  const url = new URL(window.location.href)

  const showSideBar = url.searchParams.get('full') !== "true";

  if (!showSideBar) {
    return null;
  }

  return (
    <aside className="sidebar">
      <div className="top-bar">
        {tools.map(({ label, url }) => {
          return (
            <NavLink key={url} className="menu-item" to={url}>
              {label}
            </NavLink>
          );
        })}
      </div>
      <div className="bottom-bar">
        <div className="bottom-item">
          <StorageInfo />
        </div>
      </div>
    </aside>
  );
};

export default SideBar;
