import React from "react";
import { Wrapper } from "./style";
import { CalendarOutlined } from "@ant-design/icons";
function index() {
  return (
    <Wrapper>
      <div className="icon-box mr-10">
        <CalendarOutlined />
      </div>
      <div className="bold-15 mr-100">Your School</div>
      <a href="/" className="icon-text borderbtm mr-10">
        New signups
      </a>
      <a href="/" className="icon-text mr-10">
        Revenue
      </a>
      <a href="/" className="icon-text mr-10">
        Product Sales
      </a>
      <a href="/" className="icon-text mr-10">
        Active Learners
      </a>
      <button className="btn mr-10">
        last 7 days <span>&#8964;</span>
      </button>
    </Wrapper>
  );
}

export default index;
