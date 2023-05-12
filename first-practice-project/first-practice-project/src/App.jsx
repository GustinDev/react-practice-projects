import { useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';

function App() {
  const [counter, setCounter] = useState(0);

  let clickHandler = () => {
    setCounter(counter + 1);
  };

  return (
    <>
      <h1></h1>
      <div>
        <a href='https://react.dev' target='_blank' rel='noreferrer'>
          <img src={reactLogo} className='logo react' alt='React logo' />
        </a>
        <h1>{counter}</h1>
      </div>
      <h1>Pruebas</h1>
      <button onClick={clickHandler}>Sumar</button>
    </>
  );
}

export default App;
