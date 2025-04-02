import React from "react";
import C360Tab from "./C360Tab";

const Tabs: React.FC = () => {
  return (
    <div>
      <nav>
        <div className="nav nav-tabs" id="nav-tab" role="tablist">
          <button
            className="nav-link"
            id="nav-empro-tab"
            data-bs-toggle="tab"
            data-bs-target="#nav-empro"
            type="button"
            role="tab"
            aria-controls="nav-empro"
            aria-selected="true"
          >
            EMPRO
          </button>
          <button
            className="nav-link active"
            id="nav-c360-tab"
            data-bs-toggle="tab"
            data-bs-target="#nav-c360"
            type="button"
            role="tab"
            aria-controls="nav-c360"
            aria-selected="false"
          >
            c360
          </button>          
        </div>
      </nav>
      <div className="tab-content" id="nav-tabContent">
        <div
          className="tab-pane fade "
          id="nav-empro"
          role="tabpanel"
          aria-labelledby="nav-empro-tab"
        >
          <p>EMPRO Content</p>
        </div>
        <div className="tab-pane fade show active" id="nav-c360" role="tabpanel" aria-labelledby="nav-c360-tab">
          <C360Tab />
        </div>
      </div>
    </div>
  );
};

export default Tabs;
