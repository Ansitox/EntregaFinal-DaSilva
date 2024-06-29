import { ProductCard } from "../../components/ProductCard/ProductCard";

export const ItemList = ({ items }) => {
  return (
    <div>
      {items.map((item) => {
        return (
          <ProductCard
            key={item.id}
            image={item.image}
            title={item.name}
            description={item.description}
            price={item.price}
            id={item.id}
          />
        );
      })}
    </div>
  );
};
