import React from 'react'
import "./Card1.css"

const Card1 = () => {
  return (
    <div>
      <h1 className="subheading">Card 1</h1>
      <div class="card1_container">
        <div class="box">
          <div class="body">
            <div class="img_container">
              <div>
                <img
                  src="https://images.pexels.com/photos/574070/pexels-photo-574070.jpeg"
                  alt=""
                />
              </div>
            </div>
            <div class="content">
              <div class="info_container">
                <h1>
                  title<span>(2024)</span>
                </h1>
                <p>7⭐</p>
                <blockquote>"your review"</blockquote>
                <p>your description</p>
                <div class="btn_container">
                  <a
                    class="btn btn-primary"
                    href=""
                    role="button"
                  >
                    Update
                  </a>
                  <a
                    class="btn btn-danger"
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