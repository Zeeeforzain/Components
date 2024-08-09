import React from 'react';

export default function Button(props) {
  return (
    <div className='button'>
      <button style={
    {...props}
}>
    {props.btnName}</button>
    </div>
    
  );
}
Button.defaultProps = {
    btnName: 'Enter Button Name',
    backgroundColor:'Whitesmoke',
    color:'Black'
}