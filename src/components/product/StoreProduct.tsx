import Form from "react-bootstrap/Form";
import { useState, useEffect } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { getDataCategory } from "../../app/feature/categorySlice";
import { RootState, AppDispatch } from "../../app/store";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";

const StoreProduct = () => {
  const [name, setName] = useState<string>("");
  const [price, setPrice] = useState<string>("");
  const [categoryName, setCategory] = useState<string>("")
  const navigate = useNavigate();

  const { category } = useSelector((state: RootState) => state.category);
  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    dispatch(getDataCategory());
  }, [dispatch]);

  const handleCategoryChange = (e : React.ChangeEvent<HTMLSelectElement>) => {
    setCategory(e.target.value);
  };

  const saveProduct = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await axios.post(`${import.meta.env.VITE_REACT_APP_API}products`, {
        pd_name: name,
        pd_price: price,
        pd_ct_id : categoryName
      });
      swal({
        icon: "success",
        text: "berhasil menambahkan data",
      });
      navigate("/");
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
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Category</Form.Label>
        <Form.Select aria-label="Default select example" onChange={handleCategoryChange}>
          <option>Select Category</option>
        {category.map((cat) => (
              <option value={cat.ct_name}>{cat.ct_name}</option>
        ))}
          </Form.Select>
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Price</Form.Label>
        <Form.Control
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
      </Form.Group>
      <button type="submit" className="btn btn-primary btn-lg ">
        Tambah Data
      </button>
    </Form>
  );
};

export default StoreProduct;
