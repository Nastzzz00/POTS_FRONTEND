import React from "react";

import { Avatar, Icon } from "antd";

export interface IAvatarProps {}

const AvatarComponent = (props: IAvatarProps) => {
  const {} = props;
  return (
    <div>
      <Avatar icon="user" />
      <Avatar icon={<Icon type="user" />} />
      <Avatar>U</Avatar>
      <Avatar>USER</Avatar>
      <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
      <Avatar style={{ color: "#f56a00", backgroundColor: "#fde3cf" }}>
        U
      </Avatar>
      <Avatar style={{ backgroundColor: "#87d068" }} icon="user" />
    </div>
  );
};

export default AvatarComponent;
