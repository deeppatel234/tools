import React from "react";
import { NavLink } from "react-router-dom";

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
      {tools.map(({ label, url }) => {
        return (
          <NavLink key={url} className="menu-item" to={url}>
            {label}
          </NavLink>
        );
      })}
    </aside>
  );
};

export default SideBar;
