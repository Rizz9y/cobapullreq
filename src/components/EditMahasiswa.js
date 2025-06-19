import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import Notifikasi from "./Notifikasi";
import "bootstrap/dist/css/bootstrap.min.css";

const EditMahasiswa = () => {
  const [nama, setNama] = useState("");
  const [prodi, setProdi] = useState("");
  const [notif, setNotif] = useState("");
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const getMahasiswa = async () => {
      const res = await axios.get("http://localhost:3001/mahasiswa");
      const mhs = res.data.find((m) => m.id === parseInt(id));
      if (mhs) {
        setNama(mhs.nama);
        setProdi(mhs.prodi);
      }
    };
    getMahasiswa();
  }, [id]);

  const simpanEdit = async () => {
    await axios.put(`http://localhost:3001/mahasiswa/${id}`, { nama, prodi });
    setNotif("Data berhasil diubah!");
    setTimeout(() => {
      setNotif("");
      navigate("/");
    }, 2000);
  };

  return (
    <div className="container mt-4">
      <h2>Edit Mahasiswa</h2>
      {notif && <Notifikasi message={notif} />}
      <div className="mb-3">
        <input type="text" className="form-control mb-2" value={nama} onChange={(e) => setNama(e.target.value)} />
        <input type="text" className="form-control mb-2" value={prodi} onChange={(e) => setProdi(e.target.value)} />
        <button className="btn btn-primary" onClick={simpanEdit}>Simpan Perubahan</button>
      </div>
    </div>
  );
};

export default EditMahasiswa;
