import React, { useCallback, useState } from 'react';

import './App.css';

function App() {
  const [disabled, setDisabled] = useState(false);
  const [buttonColor, setButtonColor] = useState('red');

  const nextColor = buttonColor === 'red' ? 'blue' : 'red';

  const onCheckboxChange = useCallback(
    (e) => setDisabled(e.target.checked),
    [buttonColor]
  );

  const onButtonClick = useCallback(() => setButtonColor(nextColor), []);

  return (
    <div>
      <button
        disabled={disabled}
        className={disabled ? 'gray' : buttonColor}
        onClick={onButtonClick}
      >{`Change to ${nextColor}`}</button>
      <br />
      <input
        type='checkbox'
        defaultChecked={false}
        id='disabled-button-checkbox'
        onChange={onCheckboxChange}
      />
      <label htmlFor='disabled-button-checkbox'>Disable button</label>
    </div>
  );
}

export default App;
