import React from "react";
import { Loader } from "rsuite";
import "./LoadingPage.css"

export default function LoadingPage() {
  return (
    <div>
      {/* <ul className="loading-page">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
      </ul> */}
       <div id="loaderInverseWrapper" style={{ height: 800 }}>
        <Loader inverse center size='lg' content="loading..." />
      </div>
    </div>
   
  );
}
