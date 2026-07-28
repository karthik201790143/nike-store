import Products from "../data/Products";

const Kids = ({ search }) => {
  return (
    <Products
      search={search}
      category="kids"
      title="Kids Collection"
    />
  );
};

export default Kids;