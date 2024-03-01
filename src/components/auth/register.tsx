import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";
import "./index.css";
const Register = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [address, setAdress] = useState<string>("");
  const navigate = useNavigate();

  const saveUser = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await axios.post(`${import.meta.env.VITE_REACT_APP_API_AUTH}register`, {
        us_name: name,
        us_email: email,
        us_password: password,
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
    <section className="vh-100">
      <div className="container py-5 h-100">
        <div className="row d-flex align-items-center justify-content-center h-100">
          <div className="col-md-8 col-lg-7 col-xl-6">
            <img
              src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
              className="img-fluid"
              alt="Phone image"
            />
          </div>
          <div className="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
            <form onSubmit={saveUser}>
              <div className="form-outline mb-4">
                <input
                  type="text"
                  id="form1Example13"
                  className="form-control form-control-lg"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <label className="form-label" htmlFor="form1Example13">
                  Name
                </label>
              </div>
              <div className="form-outline mb-4">
                <input
                  type="email"
                  id="form1Example13"
                  className="form-control form-control-lg"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <label className="form-label" htmlFor="form1Example13">
                  Email address
                </label>
              </div>
              <div className="form-outline mb-4">
                <input
                  type="password"
                  id="form1Example23"
                  className="form-control form-control-lg"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <label className="form-label" htmlFor="form1Example23">
                  Password
                </label>
              </div>

              <div className="form-outline mb-4">
                <input
                  type="text"
                  id="form1Example13"
                  className="form-control form-control-lg"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
                <label className="form-label" htmlFor="form1Example13">
                  Phone
                </label>
              </div>
              <div className="form-outline mb-4">
                <input
                  type="text"
                  id="form1Example13"
                  className="form-control form-control-lg"
                  value={address}
                  onChange={(e) => setAdress(e.target.value)}
                />
                <label className="form-label" htmlFor="form1Example13">
                  Adress
                </label>
              </div>

              <div className="d-flex justify-content-around align-items-center mb-4">
                <a href="/login">Have Account?</a>
              </div>

              <button
                type="submit"
                className="btn btn-primary btn-lg btn-block"
              >
                Sign in
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Register;
