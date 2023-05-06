const Productinfo = (props) => {
    return (
        <>
            <div className="product-title">
                <h2>{props.title}</h2>
            </div>
            <div className="product-category">
                {props.category}
            </div>
        </>
    )
}
export default Productinfo;