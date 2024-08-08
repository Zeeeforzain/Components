import React from 'react';

export default function Button(props) {
  return (
    <div className='button'>
      <button style={
    {
        backgroundColor: props.backgroundColor, 
        width: props.width, 
        color: props.color,
        border: props.border,
        borderRadius: props.borderRadius,
        padding:props.padding,
        height:props.height,
        fontSize:props.fontSize,
        fontFamily:props.fontFamily,
        fontWeight:props.fontWeight,
        cursor:props.cursor
    }
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