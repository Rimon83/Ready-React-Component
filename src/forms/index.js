import React from 'react'
import Form1 from './(form1)/Form1';
import Form2 from './(form2)/Form2';

const FormPage = () => {
  return (
    <div className="main-container">
      <h1 className="heading">Forms</h1>
      <div className="sub-main-container">
        <Form1 />
        <div>
          <h1 className="subheading">Form 2</h1>
          <Form2 />
        </div>
      </div>
    </div>
  );
}

export default FormPage