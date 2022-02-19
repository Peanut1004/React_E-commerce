import './App.css';
import './scss/style.scss'
import { useState } from 'react';
import Header from './component/Header';
import Main from './component/Main/Main';
import Menu from './component/Menu/Menu';



function App() {
  const [valueSearch, setValueSearch] = useState('');
  const [valueTitle, setValueTitle] = useState('');

  const handleSearch = (value) => {
    setValueSearch(value)
  }

  const handleTitle = (value) => {
    setValueTitle(value)
  }
  
  return (
    <div>
      <Header handleSearch={handleSearch}/>
      <div>
        <Menu handleTitle={handleTitle}/>
        <Main valueSearch={valueSearch} valueTitle={valueTitle}/>
      </div>
    </div>
  );
}

export default App;
