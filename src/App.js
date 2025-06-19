import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import TambahMahasiswa from "./components/TambahMahasiswa";
import EditMahasiswa from "./components/EditMahasiswa";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tambah" element={<TambahMahasiswa />} />
        <Route path="/edit/:id" element={<EditMahasiswa />} />
      </Routes>
    </Router>
  );
};

export default App;
