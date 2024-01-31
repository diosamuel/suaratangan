import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from './App.jsx'
import Belajar from "./pages/Belajar.jsx";
import Huruf from "./pages/Huruf.jsx";
import Terjemah from "./pages/Terjemah.jsx";
import Game from "./pages/Game.jsx";
import Artikel from "./pages/Artikel.jsx";
import TentangSIBI from "./pages/TentangSIBI.jsx";
import TentangBISINDO from "./pages/TentangBISINDO.jsx";
import './index.css'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="belajar">
          <Route index element={<Belajar />} />
          <Route path="huruf" element={<Huruf />} />
          <Route path="sibi" element={<TentangSIBI />} />
          <Route path="bisindo" element={<TentangBISINDO />} />
        </Route>
        <Route path="/artikel/:id" element={<Artikel/>}/>
        <Route path="terjemah" element={<Terjemah/>}/>
        <Route path="kuis" element={<Game/>}/>
      </Routes>
    </BrowserRouter>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(
    <App />
,
)
