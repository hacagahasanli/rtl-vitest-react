import { useState } from 'react';

import './App.css';

function App() {
  const [disabled, setDisabled] = useState(false);
  const [buttonColor, setButtonColor] = useState('red');

  const nextColor = buttonColor === 'red' ? 'blue' : 'red';

  const onButtonClick = () => setButtonColor(nextColor);

  return (
    <div>
      <button
        disabled={disabled}
        className={buttonColor}
        onClick={onButtonClick}
      >{`Change to ${nextColor}`}</button>
      <br />
      <input
        type='checkbox'
        defaultChecked={false}
        id='disabled-button-checkbox'
        onChange={(e) => setDisabled(e.target.checked)}
      />
      <label htmlFor='disabled-button-checkbox'>Disable button</label>
    </div>
  );
}

export default App;
