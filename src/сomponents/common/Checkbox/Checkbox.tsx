import React, { useEffect, useState } from 'react';
import './Checkbox.scss';
import { CheckOutlined } from '@ant-design/icons';
import { TagType } from '../../../types/types';


type CheckboxPropsType = {
  className: string;
  tagName: TagType;

  addCategory: (tag: TagType) => void;
  removeCategory: (tag: TagType) => void;
}

export const Checkbox: React.FC<CheckboxPropsType> = (props) => {

  const [isActive, setIsActive] = useState(false);

  useEffect(() => {

    if (isActive) {
      props.addCategory(props.tagName);
    } else {
      props.removeCategory(props.tagName);
    }

  }, [isActive])

  return (
    <React.Fragment>

      <div onClick={() => { setIsActive(current => !current) }}
        className={`${props.className} checkbox ${isActive ? 'checkbox-active' : ''}`}>
        {isActive && <CheckOutlined style={{ fontSize: "15px", color: 'white', backgroundColor: '#9fcb22' }} />}
      </div>
      <span>
        {props.tagName}
      </span>

    </React.Fragment>
  );
}