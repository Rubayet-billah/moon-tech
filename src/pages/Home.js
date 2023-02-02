import React from "react";
import ProductCard from "../components/ProductCard";
import { useProducts } from "../context/ProductProvider";

const Home = () => {
  const {
    state: { products, loading, error },
  } = useProducts();
  let content;
  if (loading) {
    content = <p>Loading...</p>;
  }
  if (error) {
    content = <p>Error Here</p>;
  }
  if (!loading && !error && products.length === 0) {
    content = <p>Sorry No products to show</p>;
  }
  if (!loading && !error && products.length) {
    content = (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 max-w-7xl gap-14 mx-auto my-10">
        {products?.map((product, idx) => (
          <ProductCard key={idx} product={product} />
        ))}
      </div>
    );
  }
  return content;
};

export default Home;
