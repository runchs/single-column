import React from "react";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

import C360Tab from "../components/tabs/C360Tab";
import EmproTab from "../components/tabs/EmproTab";

const informationView: React.FC = () => {
  return (
    <div>
      <Tabs
        defaultActiveKey="c360"
        id="information-view"
        className="tabs-wrp"
      >
        <Tab eventKey="empro" title="EMPRO">
          <div className="tab-content-wrp"><EmproTab /></div>
        </Tab>
        <Tab eventKey="c360" title="c360">
          <div className="tab-content-wrp"><C360Tab /></div>
        </Tab>
      </Tabs>
    </div>
  );
};

export default informationView;
