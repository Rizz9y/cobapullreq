import React from "react";

const Notifikasi = ({ message }) => {
  return (
    <div className="alert alert-success" role="alert">
      {message}
    </div>
  );
};

export default Notifikasi;
