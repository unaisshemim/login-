import axios from "axios";
import React, { useState } from "react";
import "./LoginForm.scss";
function LoginForm({login}) {

  const [data, setData] = useState({});
  const handleChange = (e) => {
    setData(() => {
      return { ...data, [e.target.name]: e.target.value };
    });
  };

  const handleSubmit = async() => {
    try {
      const res=await axios.post("http://localhost:5002/login",data)
      login(true)
      console.log(res)
    } catch (error) {
      console.log(error)
    }

  }
  return (
    <div className="main-form-container">
      <form className="form-container">
        <div class="form-outline mb-4">
          <input
            type="email"
            id="form2Example1"
            class="form-control"
            onChange={handleChange}
            name="email"
          />
          <label class="form-label" for="form2Example1">
            Email address
          </label>
        </div>

        <div class="form-outline mb-4">
          <input
            type="password"
            id="form2Example2"
            class="form-control"
            onChange={handleChange}
            name="password"
          />
          <label class="form-label" for="form2Example2">
            Password
          </label>
        </div>

        <div class="row mb-4">
          <div class="col d-flex justify-content-center">
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                value=""
                id="form2Example31"
                checked
              />
              <label class="form-check-label" for="form2Example31">
                {" "}
                Remember me{" "}
              </label>
            </div>
          </div>

          <div class="col">
            <a href="#!">Forgot password?</a>
          </div>
        </div>

        <button type="button" class="btn btn-primary btn-block mb-4" onClick={()=>{handleSubmit()}}>
          Sign in
        </button>

        <div class="text-center">
          <p>
            Not a member? <a href="#!">Register</a>
          </p>
          <p>or sign up with:</p>
          <button type="button" class="btn btn-link btn-floating mx-1">
            <i class="fab fa-facebook-f"></i>
          </button>

          <button type="button" class="btn btn-link btn-floating mx-1">
            <i class="fab fa-google"></i>
          </button>

          <button type="button" class="btn btn-link btn-floating mx-1">
            <i class="fab fa-twitter"></i>
          </button>

          <button type="button" class="btn btn-link btn-floating mx-1">
            <i class="fab fa-github"></i>
          </button>
        </div>
      </form>
    </div>
  );
}

export default LoginForm;
