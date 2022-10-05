import "bootstrap/dist/css/bootstrap.min.css";

const Product = (props) => {
  const { title, imageUrl, brand } = props.details;
  return (
    <div className="col-sm-3 m-0.5">
      <div className="card">
        <img src={imageUrl} className="card-img-top" alt="ntg" />
        <div className="card-body">
          <h5 className="card-title"> {title}</h5>
          <p className="card-text">{brand}</p>
          <a href="#" className="btn btn-primary">
            Add To Cart
          </a>
        </div>
      </div>
    </div>
  );
};

export default Product;
