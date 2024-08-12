import React from 'react';
export default function Paragraph(props) {
  return (
    <div className='paragraph'>
      <p
      style={
        {...props}
      }
      >
        {props.paragraphText}</p>
    </div>
  );
}
Paragraph.defaultProps = {
    paragraphText: 'Enter Text Here',
    fontSize:'14px'
}
