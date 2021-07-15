import React from "react";
import "./leftSideBar.css";
import InfoIcon from "@material-ui/icons/Info";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord"

function LeftSideBar() {
  const newsArticle = (heading, subtitle) => (
    <div className="widgets_article">
      <div className="widgets_articleLeft">
          <FiberManualRecordIcon/>
      </div>
      <div className="widgets_articleRight">
          <h4>{heading}</h4>
          <p>{subtitle}</p>
      </div>
    </div>
  );
  return (
    <div className="leftSideBar">
      <div className="widget_header">
        <h2>LinkedIn News</h2>
        <InfoIcon />
      </div>
      {newsArticle("June 12 Riot", "Trendy News - 3423 readers")}
      {newsArticle("Buhari in Lagos", "Trendy News - 3422 readers")}
      {newsArticle("June 12 Riot", "Trendy News - 3423 readers")}
      {newsArticle("Buhari in Lagos", "Trendy News - 3422 readers")}
      {newsArticle("June 12 Riot", "Trendy News - 3423 readers")}
      {newsArticle("Buhari in Lagos", "Trendy News - 3422 readers")}
    </div>
  );
}

export default LeftSideBar;
