import React, { Component } from 'react'
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {ProductConsumer} from '../context';
import PropTypes from 'prop-types';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import DoneIcon from '@mui/icons-material/Done';


export default class Product extends Component {
    render() {
        const {id, title, img, price, inCart} = this.props.product;
        return (
            <ProducrWrapper className="col-9 mx-auto col-md-6 col-lg-3 my-3">
               <div className="card">
                <ProductConsumer>
                        {value => (<div className="img-container p-5" onClick={() => value.handleDetail(id)}>
                            <Link to="/details">
                                <img src={img} alt="product" className="card-img-top" />
                            </Link>
                            <button className="cart-btn" disabled={inCart ? true : false}
                                onClick={() => {
                                    value.addToCart(id);
                                    value.openModal(id);
                                }}>
                                {inCart ? (<DoneIcon />) : (<AddShoppingCartIcon />)}
                            </button>
                        </div>)}
                </ProductConsumer>
                 <div className="card-footer d-flex justify-content-between">
                     <p className="align-self-center mb-0">
                         {title}
                     </p>
                     <h5 className="text-blue font-italic mb-0">
                         {price}
                         <span className="mr-1">€</span>
                     </h5>
                 </div>
               </div>
            </ProducrWrapper>
        );
    }
}
Product.propTypes = {
    product:PropTypes.shape({
        id:PropTypes.number,
        img:PropTypes.string,
        title:PropTypes.string,
        price:PropTypes.number,
        inCart:PropTypes.bool
    }).isRequired
}
const ProducrWrapper =styled.div`
.card{
    border:none;
    border-radius: .25rem;
    border-color:tranparent;

    background:var(--plain);
}
.card-footer{
    background: var(--surface);
    border:none;
    border-bottom: .25rem; 
}

.img-container{
    background: var(--plain);
    position:relative;
    overflow:hidden;
}
.card-img-top{
    transition:all 1s linear;
}
.img-container:hover .card-img-top{
    transform:scale(1.2);
}
.cart-btn{
    position:absolute;
    bottom:0;
    right:0;
    padding:0.2rem 0.4rem;
    background:transparent;
    border:none;
    border-radius: .25rem;
    color:var(--onsurface);
    font-size:1.4rem;
    transform:translate(100%, 100%);
    transition:all .2s linear;
}
.img-container:hover .cart-btn{
    transform:translate(0, 0);
}
.cart-btn:hover{
    background: var(--hover);
    cursor:pointer;
}
`;