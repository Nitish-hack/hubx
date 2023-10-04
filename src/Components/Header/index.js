import React from 'react';
import { Wrapper } from './style';

import { PlusOutlined, EyeOutlined, PoweroffOutlined, QuestionOutlined } from '@ant-design/icons';
function index() {
  return (
    <Wrapper>
      <div className='nav-items'>
        <h3 >Dashboard</h3>
        <ul>
          <li className="navlink">
            <div className='logo '><PlusOutlined /></div>
            course
          </li>
          <li className='navlink'>
            <div className='logo'><EyeOutlined /></div>
            Preview home page
          </li>

          <li className='navlink'>
            <div className='logo'><EyeOutlined /></div>
            Preview after login page
          </li>
          <li className='navlink'>
            <div className='logo'><PoweroffOutlined /></div>
            View welcome screen
          </li>
        </ul>
      </div>

      <li className='navlink'>
        <div className='logo' style={{ background: "rgb(85 204 193)", color: "white" }}><QuestionOutlined /></div>
        Help
      </li>

    </Wrapper>
  );
}

export default index;

