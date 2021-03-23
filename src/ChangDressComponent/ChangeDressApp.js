import React from "react";
import "./ChangDress.css";
import HeaderChangeDress from "./HeaderChangeDress";
import NavTab from "./NavTab";
import TabContent from "./TabContent";
import Model from "./Model";
export default function ChangeDressApp() {
  return (
    <div className="container-fluid">
      <HeaderChangeDress />
      <div className="row">
        <div className="col-md-8">
          <NavTab />
          <TabContent />
        </div>
        <div className="col-md-4">
          <Model />
        </div>
      </div>
    </div>
  );
}
