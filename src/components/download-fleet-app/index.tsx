import React from "react";

import cloudDownloadButton from "../../assets/images/svgs/cloudDownloadButton.svg";

import "./styles.scss";

export const DownloadFleetApp = () => {
  return (
    <div className="download-app-container__download-container">
      <img src={cloudDownloadButton} alt="downloadButton" />
      <div className="download-app-container__inner-title-container">
        <p className="download-app-container_drag-and-drop-field">
          DRAG AND DROP{" "}
          <span className="download-app-container_format-field">or</span> BROWSE
        </p>
        <p className="download-app-container_format-field">
          Max.30MB,jpg,png,gif,pdf
        </p>
      </div>
    </div>
  );
};
