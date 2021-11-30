import React, { useState } from 'react';
import './Checkbox.scss';
import { CheckOutlined } from '@ant-design/icons';

type CheckboxPropsType = {
  className: string;
}

export const Checkbox: React.FC<CheckboxPropsType> = (props) => {

  const [isActive, setIsActive] = useState(false);

  return (
    <div onClick={() => { setIsActive(current => !current) }}
      className={`${props.className} checkbox ${isActive ? 'checkbox-active' : ''}`}>
      {isActive && <CheckOutlined style={{ fontSize: "15px", color: 'white', backgroundColor: '#9fcb22' }} />}
    </div>
  );
}