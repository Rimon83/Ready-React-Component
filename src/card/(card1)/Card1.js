import React from 'react'
import "./Card1.css"

const Card1 = () => {
  return (
    <div>
      <h1 className="subheading">Card 1</h1>
      <div className="card1_container">
        <div className="box">
          <div className="body">
            <div className="img_container">
              <div>
                <img
                  src="https://images.pexels.com/photos/574070/pexels-photo-574070.jpeg"
                  alt=""
                />
              </div>
            </div>
            <div className="content">
              <div className="info_container">
                <h1>
                  title<span>(2024)</span>
                </h1>
                <p>7⭐</p>
                <blockquote>"your review"</blockquote>
                <p>your description</p>
                <div className="btn_container">
                  <a
                    className="btn btn-primary"
                    href=""
                    role="button"
                  >
                    Update
                  </a>
                  <a
                    className="btn btn-danger"
                    href=""
                    role="button"
                  >
                    Delete
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card1