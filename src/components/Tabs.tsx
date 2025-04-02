import React from "react";
import C360Tab from "./C360Tab";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

const TabWrapper: React.FC = () => {
  return (
    <div>
      <Tabs
        defaultActiveKey="c360"
        id="tab-wrapper"
      >
        <Tab eventKey="empro" title="EMPRO">
          EMPRO
        </Tab>
        <Tab eventKey="c360" title="c360">
          <C360Tab />
        </Tab>
      </Tabs>
    </div>
  );
};

export default TabWrapper;
