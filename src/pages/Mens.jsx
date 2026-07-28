import Products from "../data/Products";

const Mens = ({ search }) => {
  return (
    <Products
      search={search}
      category="men"
      title="Men Collection"
    />
  );
};

export default Mens;