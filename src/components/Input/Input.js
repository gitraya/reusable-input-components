import './Input.css';

const Input = ({
  size,
  inputId,
  placeholder,
  error,
  disabled,
  helperText,
  fullWidth,
}) => {
  let inputClass = `input ${error ? 'error' : ''} ${
    fullWidth ? 'fullWidth' : ''
  }`;
  let labelClass = `label`;

  switch (size) {
    case 'sm':
      size = { padding: '10px 12px', width: '200px' };
      break;
    case 'md':
      size = { padding: '18px 12px', width: '200px' };
      break;
  }

  return (
    <div className="input-control">
      <label className={labelClass} htmlFor={inputId}>
        Label
      </label>
      <div className="input-wrap">
        <input
          className={inputClass}
          style={size}
          placeholder={placeholder}
          id={inputId}
          disabled={disabled}
        />
      </div>
      <small className="helperText">{helperText}</small>
    </div>
  );
};

Input.defaultProps = {
  size: 'md',
};

export default Input;
