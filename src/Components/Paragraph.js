import React from 'react';

export default function Paragraph(props) {
  return (
    <div className='paragraph'>
      <p
      style={
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
        }}
      >
        {props.paragraphText}</p>
    </div>
  );
}
Paragraph.defaultProps = {
    paragraphText: 'Enter Text Here',
    fontSize:'14px'
}
