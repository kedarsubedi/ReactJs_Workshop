import { useState } from "react";

const ProductQunt = () => {
    const [quantity, setQunatiy] = useState(1);
    const price = ''

    const handPlusClick = () =>{
        setQunatiy(quantity + 1);
    };
    const handlMinusClick = () => {
        if(quantity > 1){
            setQunatiy(quantity - 1);
        }
    };
    const getTotalPrice = (quantity) => {
        return `${quantity} * 1200 = Rs. ${quantity * 1200}`;
      };
    return (
        <>
            <div className="product-quantity">
                <span className="qunatity-text">Quantity:</span>
                <button className="minus-button" onClick={handlMinusClick}>-</button>
                <span className="quantity-value">{quantity}</span>
                <button className='plus-button' onClick={handPlusClick}>+</button>
            </div>
            <p className='total-price'>{getTotalPrice(quantity, price)}</p>
        </>
    );
};

export default ProductQunt;