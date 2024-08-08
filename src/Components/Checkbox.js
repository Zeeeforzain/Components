import React from 'react';

export default function Checkbox(props) {
  return (
    <div className='checkbox'>
      <input 
      style={
        {
            backgroundColor: props.backgroundColor, 
            width: props.width, 
            color: props.color,
            border: props.border,
            borderRadius: props.borderRadius,
            padding:props.padding,
            height:props.height,
            cursor:props.cursor
        }
    }
      type="checkbox"/>
    </div>
  );
}
Checkbox.defaultProps = {
    cursor:'pointer'
}