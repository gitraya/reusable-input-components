import './Input.css';
import { useState } from 'react';

const Input = ({
  inputId,
  label,
  value,
  placeholder,
  disabled,
  size,
  error,
  helperText,
  fullWidth,
  startIcon,
  endIcon,
}) => {
  const [state, setstate] = useState({
    value: value,
  });
  const controlClass = `input-control ${error ? 'error' : ''} ${
    startIcon ? 'input-icon' : ''
  } ${fullWidth ? 'fullWidth' : ''}`;
  const iconClass = `icon ${startIcon ? 'startIcon' : ''} ${
    endIcon ? 'endIcon' : ''
  }`;

  function onValueChange(value) {
    setstate({
      value: value,
    });
  }

  switch (size) {
    case 'sm':
      size = { padding: '10px 12px', width: '200px' };
      break;
    case 'md':
      size = { padding: '18px 12px', width: '200px' };
      break;
    default:
      size = { padding: '18px 12px', width: '200px' };
      break;
  }

  return (
    <div className={controlClass}>
      <label className="label" htmlFor={inputId}>
        {label}
      </label>
      <div className="input-wrap">
        <i className={iconClass}>{startIcon}</i>
        <input
          id={inputId}
          value={state.value}
          placeholder={placeholder}
          disabled={disabled}
          className="input"
          style={size}
          onChange={(e) => onValueChange(e.target.value)}
        />
        <i className={iconClass}>{endIcon}</i>
      </div>
      <small className="helperText">{helperText}</small>
    </div>
  );
};

// Input.defaultProps = {
//   size: 'md',
// };

export default Input;
