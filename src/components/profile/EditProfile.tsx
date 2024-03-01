import axios from 'axios';
import React,{useEffect, useState} from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import swal from 'sweetalert';
const EditProfile = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [address, setAdress] = useState<string>("");
  const navigate = useNavigate();
  const {id} = useParams()
 const getDataById = async() => {
    try {
        const response = await axios.get(`${import.meta.env.VITE_REACT_APP_API_AUTH}user/${id}`)
        setName(response.data.us_name);
        setEmail(response.data.us_email);
        setPhone(response.data.us_phone_number);
        setAdress(response.data.us_address);
    } catch (error) {
        console.log(error);
    }
 }
 useEffect(() => {
    getDataById();
 },[id])
  const saveUser = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await axios.put(`${import.meta.env.VITE_REACT_APP_API_AUTH}user/${id}`, {
        us_name: name,
        us_email: email,
        us_phone_number: phone,
        us_address: address,
      });
      swal({
        icon: "success",
        text: "Register Berhasil",
      });
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
            <form onSubmit={saveUser}>
              <div className="form-outline mb-4">
              <label className="form-label" htmlFor="form1Example13">
                  Name
                </label>
                <input
                  type="text"
                  id="form1Example13"
                  className="form-control form-control-lg"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                
              </div>
              <div className="form-outline mb-4">
              <label className="form-label" htmlFor="form1Example13">
                  Email address
                </label>
                <input
                  type="email"
                  id="form1Example13"
                  className="form-control form-control-lg"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
               
              </div>
              <div className="form-outline mb-4">
              <label className="form-label" htmlFor="form1Example13">
                  Phone
                </label>
                <input
                  type="text"
                  id="form1Example13"
                  className="form-control form-control-lg"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              
              </div>
              <div className="form-outline mb-4">
              <label className="form-label" htmlFor="form1Example13">
                  Adress
                </label>
                <input
                  type="text"
                  id="form1Example13"
                  className="form-control form-control-lg"
                  value={address}
                  onChange={(e) => setAdress(e.target.value)}
                />
                
              </div>

              <button
                type="submit"
                className="btn btn-primary btn-lg btn-block"
              >
               Save
              </button>
            </form>
          </div>
  )
}

export default EditProfile