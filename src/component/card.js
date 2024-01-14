import dayjs from "dayjs";
import React from "react";
import { Avatar, Card } from "antd";
const { Meta } = Card;

export default function CustomeCard(props) {
  console.log(props, "");
  return (
    <Card
      style={{
        width: 300,
      }}
      cover={
        <img
          alt="example"
          src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
        />
      }
    >
      <Meta
        avatar={
          <Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel" />
        }
        title={props.item.name}
        description={""}
      />
    </Card>
  );
}
