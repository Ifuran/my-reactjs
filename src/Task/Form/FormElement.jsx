import "./Style.css";
import React from "react";
import { Form, Button } from "react-bootstrap";
import * as Validator from "validatorjs";

// Komponen tampilkan Error
const ShowErrors = ({ errors }) => {
  return (
    <ul>
      {errors.map((error, i) => (
        <li className="text-danger my-1" key={i}>
          {error}
        </li>
      ))}
    </ul>
  );
};

export default class FormElement extends React.Component {
  state = {
    nama: "",
    nim: "",
    email: "",
    jurusan: "",
    tgl_lahir: "",
    jk: "",
    errors: [],
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { nama, nim, email, jurusan, tgl_lahir, jk } = this.state;

    let data = { nama, nim, email, jurusan, tgl_lahir, jk };
    let rules = {
      nama: "required|string",
      nim: "required|integer",
      email: "required|email",
      jurusan: "required",
      tgl_lahir: "required|date",
      jk: "required",
    };
    let messages = {
      required: "Kolom :attribute harus diisi.",
      string: "Kolom :attribute harus berupa teks.",
      integer: "Kolom :attribute harus berupa angka.",
      email: "Kolom :attribute harus berupa alamat email yang valid.",
      date: "Kolom :attribute harus berupa tanggal yang valid.",
    };

    let validation = new Validator(data, rules, messages);
    if (validation.fails()) {
      this.setState({
        errors: [...validation.errors.get("nama"), ...validation.errors.get("nim"), ...validation.errors.get("email"), ...validation.errors.get("jurusan"), ...validation.errors.get("tgl_lahir"), ...validation.errors.get("jk")],
      });
    } else {
      alert(`
            Data diri Anda:
    
            Nama : ${this.state.nama}
            Nim : ${this.state.nim}
            Email : ${this.state.email}
            Jurusan : ${this.state.jurusan}
            Tanggal Lahir : ${this.state.tgl_lahir}
            Jenis Kelamin : ${this.state.jk}          
          `);
      this.setState({
        nama: "",
        nim: "",
        email: "",
        jurusan: "",
        tgl_lahir: "",
        jk: "",
      });
    }
  };

  render() {
    return (
      <div className="container form-wrapper pt-3">
        <div className="row">
          <div className="col-md-6">
            <h2 className="fw-bold pt-5 pb-3">Form Registrasi</h2>
            <Form onSubmit={this.handleSubmit}>
              <Form.Group className="mb-3" controlId="nama">
                {this.state.errors && <ShowErrors errors={this.state.errors}></ShowErrors>}
                <Form.Label>Nama Lengkap</Form.Label>
                <Form.Control type="text" placeholder="Nama lengkap" onChange={(e) => this.setState({ nama: e.target.value })} defaultValue={this.props.nama} />
              </Form.Group>
              <Form.Group className="mb-3" controlId="nim">
                <Form.Label>Nomor Induk Mahasiswa (NIM)</Form.Label>
                <Form.Control type="number" placeholder="Nomor Induk Mahasiswa" onChange={(e) => this.setState({ nim: e.target.value })} value={this.state.nim} />
              </Form.Group>
              <Form.Group className="mb-3" controlId="email">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Email" onChange={(e) => this.setState({ email: e.target.value })} value={this.state.email} />
              </Form.Group>
              <Form.Group className="mb-3" controlId="jurusan">
                <Form.Label>Jurusan</Form.Label>
                <Form.Select aria-label="Default select example" onChange={(e) => this.setState({ jurusan: e.target.value })}>
                  <option>Pilih Jurusan</option>
                  <option value="Ilmu Komputer">Ilmu Komputer</option>
                  <option value="Teknik Informatika">Teknik Informatika</option>
                  <option value="Sistem Informasi">Sistem Informasi</option>
                  <option value="Teknologi Infromasi">Teknologi Infromasi</option>
                </Form.Select>
              </Form.Group>
              <Form.Group className="mb-3" controlId="tgl_lahir">
                <Form.Label>Tanggal Lahir</Form.Label>
                <Form.Control type="date" onChange={(e) => this.setState({ tgl_lahir: e.target.value })} value={this.state.tgl_lahir} />
              </Form.Group>
              <Form.Group className="mb-3" controlId="jk">
                <Form.Label>Jenis Kelamin</Form.Label>
                <Form.Select aria-label="Default select example" onChange={(e) => this.setState({ jk: e.target.value })} value={this.state.jk}>
                  <option>Pilih Jenis Kelamin</option>
                  <option value="Pria">Pria</option>
                  <option value="Wanita">Wanita</option>
                </Form.Select>
              </Form.Group>
              <Button variant="primary" type="submit" className="px-3">
                Daftar
              </Button>
            </Form>
          </div>
          <div className="col-md-6"></div>
        </div>
      </div>
    );
  }
}
