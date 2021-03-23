import React from "react";
import TabItem from "./TabItem";
import Data from "../Data/Data.json";
export default function TabContent() {
  const renderTabContent = (type) => {
    return Data.tabPanes.map((item, index) => {
      if (item.type === type) {
        return (
          <div class="col-md-3" style={{overflow: "hidden"}}>
            <TabItem item={item} />
          </div>
        );
      }
    });
  };

  return (
    <div class="well">
      <div class="tab-content">
        <div class="tab-pane container active" id="tabTopClothes">
          <div class="container">
            <div class="row">{renderTabContent("topclothes")}</div>
          </div>
        </div>
        <div class="tab-pane container fade" id="tabBotClothes">
          <div class="container">
            <div class="row">{renderTabContent("botclothes")}</div>
          </div>
        </div>
        <div class="tab-pane container fade" id="tabShoes">
          <div class="container">
            <div class="row">{renderTabContent("shoes")}</div>
          </div>
        </div>
        <div class="tab-pane container fade" id="tabHandBags">
          <div class="container">
            <div class="row">{renderTabContent("handbags")}</div>
          </div>
        </div>
        <div class="tab-pane container fade" id="tabNecklaces">
          <div class="container">
            <div class="row">{renderTabContent("necklaces")}</div>
          </div>
        </div>
        <div class="tab-pane container fade" id="tabHairStyle">
          <div class="container">
            <div class="row">{renderTabContent("hairstyle")}</div>
          </div>
        </div>
        <div class="tab-pane container fade" id="tabBackground">
          <div class="container">
            <div class="row">{renderTabContent("background")}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
