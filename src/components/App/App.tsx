import React from 'react';
import { Route, Routes } from 'react-router-dom';
import style from "./styles.module.scss";
import Books from "../Books/Books";
import Card from '../Card/Card';

function App() {

  return (
    <div className={style.page}>
      <Routes>
        <Route path='/' element={<Books />} />
        <Route path='/book/:id' element={<Card />} />
      </Routes>
    </div>
  );
}

export default App;