import React from 'react';
import TextareaAutosize from 'react-textarea-autosize';


const ExtendedInput = ({ label, name, defaultValue, type, required,readOnly,className='input'}) => {
  return (
    <label htmlFor={name} className='flex flex-col my-3'>
      <span className='d-flex flex-column align-items-center justify-content-center'>{label}</span>
      <TextareaAutosize
        required={required}
        type={type }
        name={name}
        className={className}
        defaultValue={defaultValue}
        readOnly={readOnly}
      />
    </label>
  );
};

export default ExtendedInput;


