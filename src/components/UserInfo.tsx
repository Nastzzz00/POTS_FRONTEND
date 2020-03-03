import React from "react";
import { Jumbotron, Row, Container, Col } from "react-bootstrap";
import { Avatar } from "antd";
import "../App.css";

export interface IUserInfoProps {
  user?: any;
  date?: any;
}

const UserInfo = (props: IUserInfoProps) => {
  const { user, date } = props;
  return (
    <Jumbotron style={{ height: 10 }}>
      <div className="container-userinfo">
        <div style={{ textAlign: "left", marginTop: -20, marginBottom: 5 }}>
          <h2 style={{ color: "#5673a9" }}>Hello, Admin {user}!</h2>
        </div>

        <div>
          <h5 style={{ textAlign: "left", marginBottom: 5 }}>
            Your last log-in was:
          </h5>
        </div>

        <div>
          <h5 style={{ textAlign: "left" }}>January 12, 2020 14:33 +GST</h5>
        </div>
      </div>
      <div className="Datetoday" style={{ textAlign: "right" }}>
        <h5>Today is: {date}</h5>
      </div>
      <div className="Adminavatar" style={{ textAlign: "left" }}>
        <Avatar style={{ backgroundColor: "#5673a9" }} icon="user" size={80} />
      </div>
    </Jumbotron>
  );
};

export default UserInfo;
