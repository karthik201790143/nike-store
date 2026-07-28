import Products from "../data/Products";

const Womens = ({ search }) => {
  return (
    <Products
      search={search}
      category="women"
      title="Women Collection"
    />
  );
};

export default Womens;