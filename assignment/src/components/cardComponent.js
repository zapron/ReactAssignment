import React from "react";
import { Card } from "antd";
import "antd/dist/antd.css";

const CardComponent = (task) => {
  return (
    <div className="site-card-border-less-wrapper">
      <Card
        title="Welcome to Task Tracker"
        bordered={true}
        style={{ width: 1300, alignContent: "center" }}
      >
        Create View and Delete task made easy
        {task ? <div>task</div> : <div></div>}
      </Card>
    </div>
  );
};

export default CardComponent;
