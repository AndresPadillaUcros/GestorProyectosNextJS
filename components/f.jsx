import React from 'react';
import RenderIf from 'components/RenderIf'

const Input = ({ label, name, defaultValue, type, required,className='input',readonly}) => {

  return(
    <>
      <RenderIf isTrue={readonly==true }>
          <label htmlFor={name} className='flex flex-col my-3'>
            <span className='d-flex flex-column align-items-center justify-content-center'>{label}</span>
            <input
              required={required}
              type={type }
              name={name}
              className={className}
              defaultValue={defaultValue}
              readOnly={true}
            />
          </label>
      </RenderIf>

      <RenderIf isTrue={readonly==false }>
        <label htmlFor={name} className='flex flex-col my-3'>
          <span className='d-flex flex-column align-items-center justify-content-center'>{label}</span>
          <input
            required={required}
            type={type }
            name={name}
            className={className}
            defaultValue={defaultValue}
            readOnly={false}
          />
        </label>
      </RenderIf>
    </>
  )

};

export default Input;