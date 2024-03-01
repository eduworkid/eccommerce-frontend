import Form from "react-bootstrap/Form";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import swal from "sweetalert";
const EditCategory = () => {
  const [name, setName] = useState<string>("");
  const navigate = useNavigate();
  const {id} = useParams();

  const getCategoryById = async ()=> {
    try {
        const response = await axios.get(`${import.meta.env.VITE_REACT_APP_API}category/${id}`)
       setName(response.data.ct_name)
    } catch (error) {
        console.log(error);
    }
  }
  useEffect(() => {
    getCategoryById();
  },[id])
  const saveProduct = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await axios.put(`${import.meta.env.VITE_REACT_APP_API}category/${id}`, {
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

export default EditCategory;
