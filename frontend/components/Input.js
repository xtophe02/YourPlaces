import React from "react";
import {validate} from '../utils/validators'

const Input = ({ type = "text", placeholder = "", name, icon = null, validators }) => {
  const inputReducer = (state, action) => {
    switch (action.type) {
      case "CHANGE":
        return {
          ...state,
          value: action.val,
          isValid: validate(action.val, action.validators),
        };
      
      case 'TOUCH':
        return{...state, isTouched: true}
      default:
        return state;
    }
  };

  const [inputState, dispatch] = React.useReducer(inputReducer, {
    value: "",
    isValid: false,
    isTouched: false
  });

  const handleChange = (e) => {
    dispatch({ type: "CHANGE", val: e.target.value, validators });
  };
  const handleBlur = (e) => {
    dispatch({ type: "TOUCH"});
  };

  return (
    <div className="field">
      <label className="label">{name}</label>
      <div className={`control ${icon && "has-icons-left"}`}>
        {type === "textarea" ? (
          <textarea
            className={`textarea ${!inputState.isValid && inputState.isTouched && 'is-danger'}`}
            placeholder={placeholder}
            onChange={handleChange}
            value={inputState.value}
            onBlur={handleBlur}
          ></textarea>
        ) : (
          <input
            className={`input ${!inputState.isValid && inputState.isTouched && 'is-danger'}`}
            type={type}
            placeholder={placeholder}
            onChange={handleChange}
            value={inputState.value}
            onBlur={handleBlur}
          />
        )}
        {icon && (
          <span className="icon is-small is-left">
            <i className={`fas ${icon}`}></i>
          </span>
        )}
      </div>
      {!inputState.isValid && inputState.isTouched && (
        <p className="help is-danger">This {name} is invalid</p>
      )}
    </div>
  );
};

export default Input;
