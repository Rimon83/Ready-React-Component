import React, { useEffect, useState } from "react";
import "./Form1.css";
import data from "./dataConstant.json";
import interactive from "./main";
import { FaCircleCheck } from "react-icons/fa6";
import { FaLock } from "react-icons/fa";
import { MdAccountCircle } from "react-icons/md";
import { MdOutlinePayment } from "react-icons/md";

// get constant data
const months = data.months;
const years = data.years;

const Form1 = () => {
  const [clientInfo, setClientInfo] = useState({
    email: "",
    name: "",
    password: "",
    conpassword: "",
    fname: "",
    lname: "",
    phone: "",
    holdername: "",
    cardno: "",
    cvc: "",
    month: "",
    year: "",
  });

  console.log(clientInfo);

  const handleChangeData = (ev) => {
    const { name, value } = ev.target;
    setClientInfo((prev) => ({ ...prev, [name]: value }));
  };

  useEffect(() => {
    (function () {
      interactive();
    })();
  }, []);
  return (
    <>
      <h1 className="subheading">Multi steps Form</h1>

      <div className="container">
        <div className="card">
          <h2>
            <strong>Create New Account</strong>
          </h2>
          <p>Fill out all form fields</p>

          {/* form */}
          <div className="form_container">
            <form id="form_content">
              {/* progressbar  */}
              <ul id="progressbar">
                <li className="active_link" id="account">
                  <div className="progress_icons">
                    <FaLock />
                  </div>

                  <span>Account</span>
                </li>
                <li id="personal">
                  <div className="progress_icons">
                    <MdAccountCircle />
                  </div>
                  <span>Personal</span>
                </li>
                <li id="payment">
                  <div className="progress_icons">
                    <MdOutlinePayment />
                  </div>
                  <span>Payment</span>
                </li>
                <li id="confirm">
                  <div className="progress_icons">
                    <FaCircleCheck />
                  </div>
                  <span>Finish</span>
                </li>
              </ul>

              {/* Account fieldset */}
              <fieldset>
                <div className="fs_card">
                  <h2 className="fs_title">Account Information</h2>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={clientInfo.email}
                    onChange={handleChangeData}
                    required
                  />
                  <input
                    type="text"
                    name="name"
                    placeholder="UserName"
                    value={clientInfo.name}
                    onChange={handleChangeData}
                    required
                  />
                  <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={clientInfo.password}
                    onChange={handleChangeData}
                    required
                  />
                  <input
                    type="password"
                    name="conpassword"
                    placeholder="Confirm Password"
                    required
                    value={clientInfo.conpassword}
                    onChange={handleChangeData}
                  />
                </div>
                <input
                  type="button"
                  name="next"
                  className="next btn_next"
                  value="Next Step"
                />
              </fieldset>

              {/* personal Information */}
              <fieldset>
                <div className="fs_card">
                  <h2 className="fs_title">Personal Information</h2>
                  <input
                    type="text"
                    name="fname"
                    placeholder="First Name"
                    required
                    value={clientInfo.fname}
                    onChange={handleChangeData}
                  />
                  <input
                    type="text"
                    name="lname"
                    placeholder="Last Name"
                    required
                    value={clientInfo.lname}
                    onChange={handleChangeData}
                  />
                  <input
                    type="text"
                    name="phone"
                    placeholder="Phone No."
                    required
                    value={clientInfo.phone}
                    onChange={handleChangeData}
                  />
                </div>
                <input
                  type="button"
                  name="previous"
                  className="previous btn_previous"
                  value="Previous"
                />
                <input
                  type="button"
                  name="next"
                  className="next btn_next"
                  value="Next Step"
                />
              </fieldset>

              {/* payment Information */}
              <fieldset>
                <div className="fs_card">
                  <h2 className="fs_title">Payment Information</h2>

                  <div className="payment_img">
                    <img src="images/payment methods.png" />
                  </div>

                  <div className="pay_input">
                    <label>Card Holder Name*</label>
                    <input
                      type="text"
                      name="holdername"
                      placeholder=""
                      required
                      value={clientInfo.holdername}
                      onChange={handleChangeData}
                    />
                  </div>

                  <div className="pay_input">
                    <label>Card Number*</label>
                    <input
                      type="text"
                      name="cardno"
                      placeholder=""
                      required
                      value={clientInfo.cardno}
                      onChange={handleChangeData}
                    />
                  </div>

                  <div className="pay_input">
                    <label>CVC*</label>
                    <input
                      type="password"
                      name="cvc"
                      placeholder=""
                      required
                      value={clientInfo.cvc}
                      onChange={handleChangeData}
                    />
                  </div>

                  <div className="pay_input">
                    <label className="pay_label">Expiry Date*</label>

                    <div className="date_container">
                      <select
                        id="month"
                        name="month"
                        onChange={handleChangeData}
                        required
                      >
                        <option value={clientInfo.month}>Month</option>
                        {months.length > 0 &&
                          months.map((month, index) => (
                            <option key={index} value={month}>
                              {month}
                            </option>
                          ))}
                      </select>

                      <select
                        id="year"
                        name="year"
                        required
                        onChange={handleChangeData}
                      >
                        <option value={clientInfo.year}>Year</option>
                        {years.length > 0 &&
                          years.map((year, index) => (
                            <option key={index} value={year}>
                              {year}
                            </option>
                          ))}
                      </select>
                    </div>
                  </div>

                  <div className="btn_container">
                    <input
                      type="button"
                      name="previous"
                      className="previous btn_previous"
                      value="Previous"
                    />
                    <input
                      type="button"
                      name="make_payment"
                      className="next btn_next"
                      value="Confirm"
                    />
                  </div>
                </div>
              </fieldset>

              {/* success page */}
              <fieldset>
                <div className="fs_success">
                  <h2 className="">Success !</h2>
                  <div>
                    <FaCircleCheck size={100} color="green" />
                  </div>
                  <div>
                    <h5>You Have Successfully Signed Up</h5>
                  </div>
                </div>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Form1;
