import { useState, useEffect } from "react";
import { Row, Col } from "react-bootstrap";
// import products from "../products";
import Product from "../components/Product";
// import { useGetProductQuery } from "../features/products/productApi.js";
import axios from "axios";

const HomeScreen = () => {
  const [products, setProducts] = useState([]);
  // const { data: products, isLoading, isError } = useGetProductQuery();

  useEffect(() => {
    const fetchProducts = async () => {
      const { data } = await axios.get("http://localhost:8000/api/products");
      setProducts(data);
    };
    fetchProducts();
  }, []);

  return (
    <>
      {/* {isLoading ? (
        <>
          <h2>Loading.....</h2>
        </>
      ) : isError ? (
        <>
          <h2>Errorn While Fetching....</h2>
        </> */}
      {/* ) : ( */}
      <div>
        <h1>Latest Products</h1>
        <Row>
          {products.map((product) => (
            <Col key={product._id} sm={22} md={6} lg={4} xl={3}>
              {/* <h3>{product.name}</h3> */}
              <Product product={product} />
            </Col>
          ))}
        </Row>
      </div>
      {/* )} */}
    </>
  );
};

export default HomeScreen;
