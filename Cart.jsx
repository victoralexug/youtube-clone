import React, { useRef } from 'react';
import { useCart } from 'react-use-cart';
import { AiOutlineMinus, AiOutlinePlus, AiOutlineLeft, AiOutlineShopping } from 'react-icons/ai';
import { TiDeleteOutline } from 'react-icons/ti';

const Cart = ({ setShowCart }) => {
    
    const cartRef = useRef();

    const {
        isEmpty,
        totalUniqueItems,
        items,
        totalItems,
        cartTotal,
        updateItemQuantity,
        removeItem,
        emptyCart,
    } = useCart();

     
    return(
        <div className="cart-wrapper" ref={cartRef}>
            <div className="cart-container">
                <button
                    type="button"
                    className="cart-heading"
                    onClick={() => setShowCart(false)}>
                    <AiOutlineLeft />
                    <span className="heading">Your Cart</span>
                    <span className="cart-num-items">({totalUniqueItems} items)</span>
                </button>
                <h5> total Items:({totalItems})</h5>

                {isEmpty && (
                    <div className="empty-cart">
                    <AiOutlineShopping size={150} />
                    <h3>Your shopping bag is empty</h3>
                    <button
                        type="button"
                        onClick={() => setShowCart(false)}
                        className="btn"
                    >
                        Continue Shopping
                    </button>
                    </div>
                )}

                <div className="product-container">
                    {items.length >= 1 && items.map((item,index) => (
                        <div className="product" key={index}>
                            <img src={item.img} className="cart-product-image" alt={item.title}/>
                            <div className="item-desc">
                                <div className="flex top">
                                    <h5>{item.title}</h5>
                                    <h4>${item.price}</h4>
                                </div>
                                <div className="flex bottom">
                                    <div>
                                        <p className="quantity-desc">
                                            <span className='minus' onClick={() => {item.quantity > 1 ? updateItemQuantity(item.id,item.quantity -1) : updateItemQuantity(item.id,item.quantity)}}>
                                            <AiOutlineMinus />
                                            </span>
                                            
                                            <span className="num" onClick="">{item.quantity}</span>
                                            <span className="plus" onClick={() => updateItemQuantity(item.id,item.quantity +1)}><AiOutlinePlus /></span>
                                        </p>
                                    </div>
                                    <button
                                        type="button"
                                        className="remove-item"
                                        onClick={() => removeItem(item.id)}
                                    >
                                        <TiDeleteOutline />
                                    </button>
                                </div>
                            </div>
                        </div>
                     ))}
                     
                    <div className='buttons'>
                     {items.length >= 1 && <button className='add-to-cart' onClick={() => emptyCart()}>Clear Cart</button>}
                    </div>
                     
                </div>

                {items.length >= 1 && (
                <div className="cart-bottom">
                    
                    <div className="total">
                        <h3>Subtotal:</h3>
                        <h3>${cartTotal}</h3>
                    </div>
                    <div className="btn-container">
                        <button type="button" className="btn" onClick={null}>
                            Check out (${cartTotal})
                        </button>
                    </div>
                </div>
                )}

            </div>
        </div>
    );
};

export default Cart;