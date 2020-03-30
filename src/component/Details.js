import React, { Component } from 'react';
import { ProductConsumer } from '../context'
import { Link } from 'react-router-dom'
import { ButtonContainer } from './Button'

export default class Details extends Component {
  render() {
    return (
      <ProductConsumer>
        {value => {
          const {
            id,
            price,
            img,
            breed,
            info,
            title,
            inCart
          } = value.detailProduct;
          return (
            <div className="container py-5">
              {/** title */}
              <div className="row">
                <div className="col-10 mx-auto text-center text-slanted text-blue my-5">
                  <h1>{title}</h1>
                </div>
              </div>
              {/** end title */}
              {/** product info */}
              <div className="row">
                <div className="col-10- mx-auto col-md-6 my-3 text-capitalize">
                  <img src={img} alt={title} />
                  <h2>Name : {title}</h2>
                  <h4 className="text-title  text-muted mt-3 mb-2">
                    Breed : <span className="text-uppercase">{breed}</span>
                  </h4>
                  <h4 className="text-blue">
                    <strong>
                      Price : <span>N</span>
                      {price}
                    </strong>
                  </h4>
                  <p className="text-capitalize font-weight-bold mt-3 mb-0">
                    Information
                                </p>
                  <p className="text-muted lead">{info}</p>
                  {/** buttons */}
                  <div>
                    <Link to="/">
                      <ButtonContainer> back to products</ButtonContainer>
                    </Link>
                    <ButtonContainer
                      cart
                      disabled={inCart ? true : false}
                      onClick={() => {
                        value.addToCart(id)
                      }}>
                      {inCart ? "inCart" : "add to cart"}
                    </ButtonContainer>
                  </div>
                </div>
              </div>
            </div>
          )
        }}
      </ProductConsumer>
    );
  }
}