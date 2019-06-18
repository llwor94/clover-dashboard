import React from "react";
import css from "../../styles/layout.scss";

const SideNav = () => {
  return (
    <div className={css.sideNav}>
      <img className={css.logo} src="/static/clover-logo.png" />
    </div>
  );
};

export default SideNav;
