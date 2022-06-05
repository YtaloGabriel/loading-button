import React from 'react';
import './App.css';
import Button from './Components/Button';

function App() {
  const [active, setActive] = React.useState('');

  return (
    <div className="App">
      <Button classActive={active} />

      <div className="buttons">
        <button
          onClick={() => {
            setActive('');
          }}
        >
          Initial
        </button>

        <button
          onClick={() => {
            setActive('activeLoading');
          }}
        >
          Loading
        </button>

        <button
          onClick={() => {
            setActive('activePositive');
          }}
        >
          Published
        </button>

        <button
          onClick={() => {
            setActive('activeNegative');
          }}
        >
          Failed
        </button>
      </div>
    </div>
  );
}

export default App;
