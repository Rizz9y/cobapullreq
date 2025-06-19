import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import Notifikasi from "./Notifikasi";
import logo from "../assets/logo.png";

const Home = () => {
  const [mahasiswa, setMahasiswa] = useState([]);
  const [notif, setNotif] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    fetchMahasiswa();
  }, []);

  const fetchMahasiswa = async () => {
    const res = await axios.get("http://localhost:3001/mahasiswa");
    setMahasiswa(res.data);
  };

  const hapusMahasiswa = async (id) => {
    await axios.delete(`http://localhost:3001/mahasiswa/${id}`);
    setNotif("Data berhasil dihapus");
    fetchMahasiswa();
    setTimeout(() => setNotif(""), 3000);
  };

  return (
    <div className="container mt-4">
      <img src={logo} alt="Logo" width={100} />
      <h2>Data Mahasiswa UPN Veteran Jakarta</h2>
      <Link to="/tambah" className="btn btn-primary my-3">Tambah Mahasiswa</Link>
      {notif && <Notifikasi message={notif} />}
      <ul className="list-group">
        {mahasiswa.map((mhs) => (
          <li key={mhs.id} className="list-group-item d-flex justify-content-between align-items-center">
            {mhs.nama} - {mhs.prodi}
            <div>
              <button className="btn btn-warning btn-sm me-2" onClick={() => navigate(`/edit/${mhs.id}`)}>Edit</button>
              <button className="btn btn-danger btn-sm" onClick={() => hapusMahasiswa(mhs.id)}>Hapus</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
