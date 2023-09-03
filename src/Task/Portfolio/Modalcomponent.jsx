import React from "react";
import { Modal, Button } from "react-bootstrap";

const Modalcomponent = ({ show, onClose }) => {
  return (
    <div>
      <Modal show={show} onHide={onClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>My Projects</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ul>
            <li>
              <a href="https://ifuran.github.io/eduwork/ifran_freeclass_eduwork/tugas_html/">Membuat halaman dengan HTML</a>
            </li>
            <li>
              <a href="https://ifuran.github.io/eduwork/freeclass_eduwork/tugas_css/">Styling halaman dengan CSS</a>
            </li>
            <li>
              <a href="https://ifuran.github.io/eduwork/freeclass_eduwork/tugas_bootstrap/">Membuat halmaan dengan Bootstrap</a>
            </li>
            <li>
              <a href="https://ifuran.github.io/eduwork/javascript/konversi-nilai/">Konversi nilai</a>
            </li>
            <li>
              <a href="https://ifuran.github.io/eduwork/javascript/game-tebak-tebakan/">Game tebak-tebakan angka menggunakan Javascript</a>
            </li>
            <li>
              <a href="https://ifuran.github.io/eduwork/javascript/mini-library/">Membuat tabel data dengan konsep OOP Javascript</a>
            </li>
            <li>
              <a href="https://ifuran.github.io/eduwork/javascript/latihan-callback/">Menampilkan data dari API ke dalam tabel</a>
            </li>
            <li>
              <a href="https://github.com/Ifuran/eduwork/tree/main/javascript/portal-berita">Membuat portal berita menggunakan NewsAPI.org</a>
            </li>
          </ul>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={onClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Modalcomponent;
