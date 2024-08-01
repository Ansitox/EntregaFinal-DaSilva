import { ProductCard } from "../../components/ProductCard/ProductCard";

export const ItemList = ({ items, renderSkeleton }) => {
  return (
    <div className="cards-container">
      {items.length === 0 && <>{renderSkeleton(6)}</>}

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
