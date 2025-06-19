import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Notifikasi from "./Notifikasi";

const TambahMahasiswa = () => {
  const [nama, setNama] = useState("");
  const [prodi, setProdi] = useState("");
  const [notif, setNotif] = useState("");
  const navigate = useNavigate();

  const tambah = async () => {
    await axios.post("http://localhost:3001/mahasiswa", { nama, prodi });
    setNotif("Data berhasil ditambahkan!");
    setNama("");
    setProdi("");
    setTimeout(() => {
      setNotif("");
      navigate("/");
    }, 2000);
  };

  return (
    <div className="container mt-4">
      <h2>Tambah Mahasiswa</h2>
      {notif && <Notifikasi message={notif} />}
      <div className="mb-3">
        <input type="text" className="form-control mb-2" placeholder="Nama" value={nama} onChange={(e) => setNama(e.target.value)} />
        <input type="text" className="form-control mb-2" placeholder="Prodi" value={prodi} onChange={(e) => setProdi(e.target.value)} />
        <button className="btn btn-success" onClick={tambah}>Simpan</button>
      </div>
    </div>
  );
};

export default TambahMahasiswa;
