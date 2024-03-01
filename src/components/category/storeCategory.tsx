import Form from "react-bootstrap/Form";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";
const StoreCategory = () => {
  const [name, setName] = useState<string>("");
  const navigate = useNavigate();

  const saveProduct = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await axios.post(`${import.meta.env.VITE_REACT_APP_API}category`, {
        ct_name: name,
      });
      swal({
        icon: "success",
        text: "berhasil menambahkan data",
      });
      navigate("/category");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Form className="mt-4" onSubmit={saveProduct}>
      <h1>Tambah Product</h1>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Name</Form.Label>
        <Form.Control
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </Form.Group>
      <button type="submit" className="btn btn-primary btn-lg ">
        Tambah Data
      </button>
    </Form>
  );
};

export default StoreCategory;
