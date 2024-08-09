import React from 'react';

export default function TextField(props) {
  return (
    <div>
      <input
      type={props.type}
      placeholder={props.placeHolder}
      style={
        {...props}
      }
       />
    </div>
  );
}
TextField.defaultProps = {
  type: 'text',
  placeHolder:'Enter your text',
  border:'1px solid black',
  borderRadius:'15px',
  color:'black',
  width:'150px',
  height:'4vh',
  padding:'5px 10px'
}
