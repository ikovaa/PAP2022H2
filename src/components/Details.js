import React, { Component } from 'react'
import {ProductConsumer} from '../context';
import {Link} from 'react-router-dom';
import {ButtonContainer} from './Button';
import UndoIcon from '@mui/icons-material/Undo';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import DoneIcon from '@mui/icons-material/Done';
import Rating from '@mui/material/Rating';


export default class Details extends Component {
    render() {
        return (
            <ProductConsumer>
                {value=>{
                   const {id, company, img, info, price, title, inCart, rating} = value.detailProduct; 
                   return(
                       <div className="container py-5">
                           {/*title*/}
                            <div className="row>">
                                <div className="col-10 mx-auto text-center text-slanted text-blue my-5">
                                    <h1>{title}</h1>
                                </div>
                            </div>
                            {/*end of title*/}
                            {/*product info*/}
                            <div className="row">
                                <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                                    <img src={img} className="img-fluid" alt="product" />
                                </div>
                            {/*product text*/}
                                <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                                    <h4 className="text-title text-uppercase text-onsurface mt-3 mb-2">
                                        <span className="text-uppercase">{company}</span>
                                    </h4>
                                    <Rating name="read-only" value={rating} precision={0.5} readOnly />
                                    <h4 className="text-onsurface">
                                        <strong>
                                            Preço: {price}<span>€</span>
                                        </strong>
                                    </h4>
                                    <p className="text-capitalize font-weight-bold mt-3 mb-0">
                                            Descrição
                                    </p>
                                    <p className="text-muted lead">
                                        {info}
                                    </p>
                                    {/*buttons*/}
                                    <div>
                                       <Link to="/">
                                           <ButtonContainer>
                                               <UndoIcon />
                                           </ButtonContainer>
                                        </Link>
                                            <ButtonContainer cart disabled={inCart ? true : false}
                                                onClick={() => {
                                                    value.addToCart(id);
                                                    value.openModal(id);
                                                }}>
                                                {inCart ? (<DoneIcon />) : (<AddShoppingCartIcon />)}
                                            </ButtonContainer>
                                    </div>
                                </div>
                            </div>
                        </div>
                      
                       
                   ); 
                }}
            </ProductConsumer>
        )
    }
}
