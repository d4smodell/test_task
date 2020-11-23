import React from "react";
import { Card } from "antd";
import { MinusOutlined, PlusOutlined } from '@ant-design/icons';
import { Progress, Button } from 'antd';
import "./SortedPlaces.css";

const CardWrapper = props => {
  return (
    <div className={'card'}>
      <Card style={{ width: 424, height: 224 }}>
        <h1>{props.title}</h1>
        <div className={"plus_min"}>
          <Button size='large' type='primary' shape='circle' icon={<MinusOutlined />} />
          Занято
          <Button size='large' type='primary' shape='circle' icon={<PlusOutlined />} />
        </div>
        <div className="progress_bar">
        <Progress percent={2} />
        </div>
        <div>
          Свободно <span style={{color: "#1890FF"}}>15</span><br/>
          Всего <span style={{color: "#1890FF"}}>15</span>
        </div>
      </Card>
    </div>
  );
};

export const SortedPlaces = (props) => {
  return (
    <div className={"card_container"}>
      <CardWrapper title={'Мужские'}/>
      <CardWrapper title={'Женские'}/>
      <CardWrapper title={'Мужские с кислородом'}/>
      <CardWrapper title={'Женские с кислородом'}/>
    </div>
  );
};
