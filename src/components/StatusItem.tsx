import React, { Fragment } from "react";
import { Label, Table, Divider, List } from "semantic-ui-react";
import StatusList from "../components/StatusList";

const yellow = ["yellow", "pink", "red"];
const pink = ["pink"];
const red = ["red"];

export interface IStatusItemProps {
  OR?: any;
  label?: any;
  status?: any;
  label3?: any;
  number?: any;
  statOption?: any;
  statuslist?: any;
  title?: any;
}

const StatusItem = (props: IStatusItemProps) => {
  const {
    OR,
    label,
    status,
    label3,
    number,
    statOption,
    statuslist,
    title
  } = props;
  return (
    <Fragment>
      {status.map((stat: any) => (
        <div>
          {console.log(stat, "VALUE")}
          <List.Item>
            <Label
              size="big"
              style={{ marginBottom: 10, marginTop: 20 }}
              color={stat.color}
            >
              {stat.number}
            </Label>
            <text style={{ marginLeft: 28 }}>{stat.statOption}</text>
          </List.Item>
        </div>
      ))}
    </Fragment>
  );
};

export default StatusItem;
