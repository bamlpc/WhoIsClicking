import { React, useState } from 'react';
import { AiOutlineEyeInvisible, AiOutlineEye } from 'react-icons/ai';
import './Input.css'

const Input = ( {attribute, handleChange, toogle, param} ) => {
    const hide = toogle
    const [showPassword, setShowPassword] = useState(false);
    const toogleButton = () => {
      setShowPassword(showPassword => !showPassword);
    }

    return (
        <div className="input-element-wrapper">
            <input 
                id={attribute.id}
                name={attribute.name}
                placeholder={attribute.placeholder}
                type={showPassword || attribute.type === "text" ? "text" : "password"} 
                onChange={ (e) => handleChange(e.target.name, e.target.value) }
                className={param ? 'input-error' : 'box-field'}
                />
            {hide &&
            <button className="hidebutton" onClick={toogleButton}>
              { showPassword ? <AiOutlineEye /> : <AiOutlineEyeInvisible /> }
            </button>}
          </div>
    )
}

export default Input