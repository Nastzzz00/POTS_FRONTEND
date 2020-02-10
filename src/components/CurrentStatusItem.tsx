import React from "react";

import { Card, Feed, Label } from "semantic-ui-react";
import CurrentStatus from "./CurrentStatus";

export interface ICurrentStatusitemProps {
  currentstatus?: any;
  status?: any;
  title?: any;
}

const CurrentStatusItem = (props: ICurrentStatusitemProps) => {
  const { currentstatus, status, title } = props;
  return (
    <Card style={{ maxHeight: 200, overflow: "auto" }}>
      <CurrentStatus />
      {props.status.map((current: any) => (
        <Card.Content style={{ marginLeft: 10 }}>
          <Feed>
            <Feed.Event>
              <Feed.Content>
                <Feed.Summary>{current.currentstatus}</Feed.Summary>
              </Feed.Content>
            </Feed.Event>
          </Feed>
        </Card.Content>
      ))}
    </Card>
  );
};

export default CurrentStatusItem;
