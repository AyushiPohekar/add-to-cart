import React from "react";
import "./Product.css";
import Navbar from "./Navbar";

export default function Product() {
    //  const clicked={"location.href:#navbar"}
   
  return (
    <div className="container Product">
      <div className="row">
        <div className="col-xl-3 col-lg-4 col-md-4 col-sm-6">
          <div className="card ProductCard">
            <img
              src="https://dummyimage.com/450x400/dee6e4/4c757d.jpg"
              className="card-img-top"
              alt="product1-image"
            />

            <div className="card-body text-center">
              <h5 className="card-title producttitle">Fancy Item</h5>
              <p className="card-text Producttext">$40.00-$50.00</p>
              <a  className="btn btn-outline-dark"   href="#">
                View options
              </a>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-lg-4 col-md-4 col-sm-6">
          <div className="card ProductCard">
            <div className="badge bg-dark text-white Productbadge ">Sale</div>
            <img
              src="https://dummyimage.com/450x400/dee6e4/4c757d.jpg"
              className="card-img-top Productimg"
              alt="product1-image"
            />

            <div className="card-body text-center">
              <h5 className="card-title producttitle">Fancy Item</h5>
              <p className="stars">⭐⭐⭐⭐⭐</p>
              <p className="card-text Producttext1">$40.00-$50.00</p>
             
              <a type="button" class="btn btn-outline-dark" href="#">
                View options
              </a>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-lg-4 col-md-4 col-sm-6">
          <div className="card ProductCard">
            <div className="badge bg-dark text-white Productbadge ">Sale</div>
            <img
              src="https://dummyimage.com/450x400/dee6e4/4c757d.jpg"
              className="card-img-top"
              alt="product1-image"
            />

            <div className="card-body text-center">
              <h5 className="card-title producttitle">Sale Item</h5>
              <p className="card-text Producttext">
                <span className="text-muted Productspan">$50.00</span>$65.00
              </p>
              <a class="btn btn-outline-dark" href='#'>
                Add to Cart
              </a>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-lg-4 col-md-4 col-sm-6">
          <div className="card ProductCard">
            <img
              src="https://dummyimage.com/450x400/dee6e4/4c757d.jpg"
              className="card-img-top"
              alt="product1-image"
            />

            <div className="card-body text-center">
              <h5 className="card-title producttitle">Sale Item</h5>
              <p className="stars">⭐⭐⭐⭐⭐</p>
              <p className="card-text Producttext1">$40.00</p>
              
              <a  class="btn btn-outline-dark" href="#">
                Add to Cart
              </a>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-lg-4 col-md-4 col-sm-6">
          <div className="card ProductCard">
            <div className="badge bg-dark text-white Productbadge ">Sale</div>
            <img
              src="https://dummyimage.com/450x400/dee6e4/4c757d.jpg"
              className="card-img-top"
              alt="product1-image"
            />

            <div className="card-body text-center">
              <h5 className="card-title producttitle">Sale Item</h5>
              <p className="card-text Producttext">
                <span className="text-muted Productspan">$50.00</span>$65.00
              </p>
              <a  class="btn btn-outline-dark" href="#">
                Add to Cart
              </a>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-lg-4 col-md-4 col-sm-6">
          <div className="card ProductCard">
            <img
              src="https://dummyimage.com/450x400/dee6e4/4c757d.jpg"
              className="card-img-top"
              alt="product1-image"
            />

            <div className="card-body text-center">
              <h5 className="card-title producttitle">Fancy Item</h5>
              <p className="card-text Producttext">$160.00-$680.00</p>
              <a class="btn btn-outline-dark" href="#">
                View options
              </a>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-lg-4 col-md-4 col-sm-6">
          <div className="card ProductCard">
            <div className="badge bg-dark text-white Productbadge ">Sale</div>
            <img
              src="https://dummyimage.com/450x400/dee6e4/4c757d.jpg"
              className="card-img-top"
              alt="product1-image"
            />

            <div className="card-body text-center">
              <h5 className="card-title producttitle">Fancy Item</h5>
              <p className="stars">⭐⭐⭐⭐⭐</p>
              <p className="card-text Producttext1">
                <span className="text-muted Productspan">$60.00</span>$18.00
              </p>
              
              <a class="btn btn-outline-dark" href='#'>
                Add to Cart
              </a>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-lg-4 col-md-4 col-sm-6">
          <div className="card ProductCard">
            <img
              src="https://dummyimage.com/450x400/dee6e4/4c757d.jpg"
              className="card-img-top"
              alt="product1-image"
            />

            <div className="card-body text-center">
              <h5 className="card-title producttitle">Popular Item</h5>
              <p className="stars">⭐⭐⭐⭐⭐</p>
              <p className="card-text Producttext1">$40.00</p>
             
              <a class="btn btn-outline-dark" href="#">
                Add to Cart
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
