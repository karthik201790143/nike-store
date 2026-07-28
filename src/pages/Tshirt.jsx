import Products from "../data/Products";

const Tshirt = ({ search }) => {
  return (
    <Products
      search={search}
      category="tshirt"
      title="Tshirt Collection"
    />
  );
};

export default Tshirt;