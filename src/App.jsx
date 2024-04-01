import { useState } from 'react';
import './App.css';

function App() {
  const [buttonColor, setButtonColor] = useState('red');
  const nextColor = buttonColor === 'red' ? 'blue' : 'red';

  const onButtonClick = () => setButtonColor(nextColor);

  return (
    <div>
      <button
        className={buttonColor}
        onClick={onButtonClick}
      >{`Change to ${nextColor}`}</button>
      <br />
      <input
        type='checkbox'
        defaultChecked={false}
        id='disabled-button-checkbox'
      />
      <label htmlFor='disabled-button-checkbox'>Disable button</label>
    </div>
  );
}

export default App;
