import { ProductCard } from "../../components/ProductCard/ProductCard";

export const ItemList = ({ items }) => {
  return (
    <div className="cards-container">
      {items.map((item) => {
        return (
          <ProductCard
            key={item.image}
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
