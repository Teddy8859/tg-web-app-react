import { useInsertionEffect } from 'react';
import './App.css';
const tg = window.Telegram.WebApp;

function App() {

  useInsertionEffect( ()=> {
    tg.ready();
  })
  const onClose = () => {
    tg.close();

  }

  return (
    <div className="App">
     work <button onClick={onClose}>Закрыть</button>
    </div>
  );
}

export default App;
