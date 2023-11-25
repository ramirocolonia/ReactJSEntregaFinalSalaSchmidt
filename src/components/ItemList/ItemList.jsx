import { memo } from "react";
import Item from "../Item/Item";

const ItemList = memo(({ items }) => {
  return (
    <div
      className="container mt-3"
      style={{
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
      }}
    >
      {items.map((product) => (
        <Item key={product.id} item={product} />
      ))}
    </div>
  );
});

export default ItemList;
