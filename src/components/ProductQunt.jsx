import { useState } from "react";

const ProductQunt = ({price}) => {
    const [quantity, setQunatiy] = useState(1);

    const handPlusClick = () =>{
        setQunatiy(quantity + 1);
    };
    const handlMinusClick = () => {
        quantity > 1 ? setQunatiy(quantity - 1): '';
    };
    const getTotalPrice = () => {
        return `${quantity} * ${price} = Rs. ${quantity * price}`;
      };
    return (
        <>
            <div className="product-quantity">
                <span className="qunatity-text">Quantity:</span>
                <button className="minus-button" onClick={handlMinusClick}>-</button>
                <span className="quantity-value">{quantity}</span>
                <button className='plus-button' onClick={handPlusClick}>+</button>
            </div>
            <p className='total-price'>{getTotalPrice()}</p>
        </>
    );
};

export default ProductQunt;