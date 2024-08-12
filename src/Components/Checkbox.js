import React from 'react';

export default function Checkbox(props) {
  return (
    <div className='checkbox'>
      <input 
      style={
        {...props}  
    }
      type="checkbox"/>
    </div>
  );
}
Checkbox.defaultProps = {
    cursor:'pointer'
}