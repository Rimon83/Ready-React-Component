import React from "react";
import "./Card3.css"
import products from "./data.json"
import Stars from "./(stars review)/Stars";

const numbers = [2, 3, 4, 5, 6, 7, 8, 9, 10];


const Card3 = () => {
  return (
    <div className="main_container">
      {products &&
        products.map((product) => (
          <div className="product_container" key={product.id}>
            <div className="product_image_container">
              <img
                className="product_image"
                src={product.image}
                alt="product"
                width={250}
              />
            </div>

            <div className="product_title limit_text_to_2_lines">
              {product.name}
            </div>

            <Stars totalStarsCount={product.rating.count} />

            <div className="product_price">
              {(product.priceCents / 100).toFixed(2)}
            </div>

            <div className="product_quantity_container">
              <select>
                <option value="1">1</option>
                {numbers &&
                  numbers.map((number) => (
                    <option key={number} value={number}>
                      {number}
                    </option>
                  ))}
              </select>
            </div>

            <button
              className="add_to_cart_button button_primary"
              data-id={product.id}
            >
              Add to Cart
            </button>
          </div>
        ))}
    </div>
  );
};

export default Card3;
