import React, { useState } from "react";

export default function Register() {
  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
  });

  const [records, setRecords] = useState([]);

  const { name, username, email, password } = user;

  const handleChange = (e) => {
    return setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newRecord = {
      ...user,
      id: new Date().getTime().toString(),
    };

    setRecords([...records, newRecord]);

    // cleaning the form after submitting it
    setUser({ name: "", username: "", email: "", password: "" });
  };

  return (
    <div>
      <form className="create-user-form">
        <div className="form-card">
          <h3 className="h3">Create Account</h3>
          <input
            type="text"
            placeholder="NAME"
            className="input-fields"
            name="name"
            value={name}
            onChange={(e) => handleChange(e)}
          />
          <input
            type="text"
            placeholder="USERNAME"
            className="input-fields"
            name="username"
            value={username}
            onChange={(e) => handleChange(e)}
          />
          <input
            type="email"
            placeholder="E-MAIL"
            className="input-fields"
            name="email"
            value={email}
            onChange={(e) => handleChange(e)}
          />
          <input
            type="password"
            placeholder="PASSWORD"
            className="input-fields"
            name="password"
            value={password}
            onChange={(e) => handleChange(e)}
          />

          <button
            type="button"
            className="btn btn-dark"
            onClick={(e) => handleSubmit(e)}
          >
            Register
          </button>
        </div>
      </form>

      <div>
        {records.map((eachReacord) => {
          const { id, name, username, email, password } = eachReacord;

          return (
            <div className="show-records" key={id}>
              <p>{name}</p>
              <p>{username}</p>
              <p>{email}</p>
              <p>{password}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
