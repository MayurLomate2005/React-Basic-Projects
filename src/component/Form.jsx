import React, { useState } from "react";
import "./Form.css";

const Form = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const [userdetail, setuserdetail] = useState([]);
  const [showhistory, setshowhistory] = useState(false);

  const submithandler = (e) => {
    e.preventDefault();

    const newuser = {
      Name: name,
      Age: age,
      Email: email,
    };

    setuserdetail([...userdetail, newuser]);
    setName("");
    setAge("");
    setEmail("");
    setshowhistory(false);
  };

  const display = () => {
    setshowhistory(true);
  };

  return (
    <div className="form-container">
      <h2>User Details Form</h2>
      <form onSubmit={submithandler} className="form-box">
        <input
          type="text"
          placeholder="Enter Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="form-input"
        />
        <input
          type="number"
          placeholder="Enter Your Age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          className="form-input"
        />
        <input
          type="email"
          placeholder="Enter Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="form-input"
        />
        <button type="submit" className="form-button">
          Submit
        </button>
      </form>

      <button
        onClick={display}
        className="form-button"
        style={{ marginTop: "10px" }}
      >
        Show History
      </button>

      {showhistory && (
        <div>
          <h3>Submitted Users :</h3>
          <table>
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Age</th>
                <th>Email</th>
              </tr>
            </thead>
              <tbody>
                {userdetail.map((user, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{user.Name}</td>
                    <td>{user.Age}</td>
                    <td>{user.Email}</td>
                  </tr>
                ))}
              </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Form;
