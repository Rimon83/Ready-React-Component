import React, { useEffect, useState } from "react";
import "./Form2.css";

const Form2 = () => {
  // regexp for first name and last name
  const nameRegex = /^[A-Za-z]{3,15}$/;
  // regexp for email
  const emailRegex = /^[A-Za-z0-9.-_%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/g;
  //regexp for phone
  const phoneRegex = /^\(?\d{3}\)?[-]\d{3}[-]\d{4}$/;
  // regexp for change format phone for saving
  const phoneSavingRegex = /[()-. ]/g;
  // regexp for textArea
  const textareaRegex = / {2,}/g;

  const [firstNameCheck, setFirstNameCheck] = useState(false);
  const [lastNameCheck, setLastNameCheck] = useState(false);
  const [emailCheck, setEmailCheck] = useState(false);
  const [phoneCheck, setPhoneCheck] = useState(false);
  const [showMessage, setShowMessage] = useState(false)

  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNum: "",
    textArea: "",
  });

  const handleChange = (event) => {
    let { name, value } = event.target;
    switch (name) {
      case "firstName":
        if (nameRegex.test(value)) {
          setFirstNameCheck(true);
        } else {
          setFirstNameCheck(false);
        }
        break;
      case "lastName":
        if (nameRegex.test(value)) {
          setLastNameCheck(true);
        } else {
          setLastNameCheck(false);
        }
        break;

      case "email":
        if (emailRegex.test(value)) {
          setEmailCheck(true);
        } else {
          setEmailCheck(false);
        }
        break;

      case "phoneNum":
        if (phoneRegex.test(value)) {
          setPhoneCheck(true);
          value = value.replaceAll(phoneSavingRegex, "");
        } else {
          setPhoneCheck(false);
        }

      case "textArea":
        value = value.replaceAll(textareaRegex, " ");
        break;

      default:
        console.log("There is error");
    }

    setUserData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (firstNameCheck && lastNameCheck && phoneCheck && emailCheck && userData.textArea){
     setShowMessage(true)
    }
    setTimeout(() => {
          setShowMessage(false);


    }, 2000)
  };
  // useEffect(() => {
  //  userData = interactive()
  // }, [userData])
  return (
      
      <section className="form2_container">
        <div className={`displayMessage ${showMessage ? "showMessage" : ""}`}>
          Successfully send data
        </div>
        <form className="form2">
          <div className="input-container">
            <label htmlFor="firstName">First Name </label>

            <input
              type="text"
              id="firstName"
              name="firstName"
              placeholder="First Name"
              value={userData.firstName}
              onChange={handleChange}
              className={`${
                userData.firstName && !firstNameCheck ? "invalid" : ""
              }`}
              required
            />
            <p
              className={`format ${
                userData.firstName && !firstNameCheck ? "block" : ""
              }`}
            >
              Only accept characters, at least 3 characters and at most 15
              characters
            </p>
          </div>

          <div className="input-container">
            <label htmlFor="lastName">Last Name</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              placeholder="Last Name"
              value={userData.lastName}
              onChange={handleChange}
              className={`${
                userData.lastName && !lastNameCheck ? "invalid" : ""
              }`}
              required
            />
           
            <p
              className={`format ${
                userData.lastName && !lastNameCheck ? "block" : ""
              }`}
            >
              Only accept characters, at least 3 characters and at most 15
              characters
            </p>
          </div>

          <div className="input-container">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              value={userData.email}
              onChange={handleChange}
              className={`${userData.email && !emailCheck ? "invalid" : ""}`}
              required
            />
            <p
              className={`format ${
                userData.email && !emailCheck ? "block" : ""
              }`}
            >
              Example: seDD12@gmail.com
            </p>
          </div>

          <div className="input-container">
            <label htmlFor="phoneNum">Phone Number: </label>
            <input
              type="text"
              name="phoneNum"
              id="phoneNum"
              placeholder="Phone Number"
              value={userData.phone}
              onChange={handleChange}
              className={`${userData.phoneNum && !phoneCheck ? "invalid" : ""}`}
            />
            <p
              className={`format ${
                userData.phoneNum && !phoneCheck ? "block" : ""
              }`}
            >
              Examples: (123)-456-7890 or 123-456-7890
            </p>
          </div>

          <label htmlFor="textArea">Type your problem</label>
          <textarea
            name="textArea"
            id="textArea"
            cols="30"
            rows="10"
            placeholder="Describe the problem"
            value={userData.textArea}
            onChange={handleChange}
            required
          ></textarea>
          <div>
            <input
              type="submit"
              className={`btn ${
                firstNameCheck &&
                lastNameCheck &&
                phoneCheck &&
                emailCheck &&
                userData.textArea
                  ? "hoverable"
                  : ""
              }`}
              onClick={handleSubmit}
              disabled={
                !firstNameCheck ||
                !lastNameCheck ||
                !phoneCheck ||
                !emailCheck ||
                !userData.textArea
              }
            />
          </div>
        </form>
      </section>
  );
};

export default Form2;
