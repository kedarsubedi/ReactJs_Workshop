import ProductQunt from "./ProductQunt";
import Productimg from "./Productimg";
import Productinfo from "./Productinfo";

const ProductPage = ({title, category , picture, price}) => {
    return (
        <div className="product-page">
            <Productimg picture={picture}/>
            <div className="product-info">
            <Productinfo title={title} category={category}/>
            <ProductQunt price={price}/>
            </div>
        </div>
    );
};

export default ProductPage;