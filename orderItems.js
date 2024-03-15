import React from "react";
import { DROP_IT_DOWN } from "./constants";

// const renderVariants = () => {
//   return variantsV2.variantGroups.map((group) => (
//     <div key={group.groupId}>
//       <h4>{group.name}</h4>
//       <ul>
//         {group.variations.map((variation) => (
//           <li key={variation.id}>
//             {variation.name}: ${variation.price / 100}
//           </li>
//         ))}
//       </ul>
//     </div>
//   ));
// };

const OrderItems = ({ cuisine }) => {
  return (
    <div className="cuisine-card">
      <img
        src={DROP_IT_DOWN + cuisine?.info?.imageId}
        alt={cuisine?.info?.name}
      />
      <div className="cuisine-details">
        <h2>{cuisine?.info?.name}</h2>
        <p>
          <strong>Category:</strong> {cuisine?.info?.category}
        </p>
        <p>{cuisine?.info?.description}</p>
        <p>
          <strong>Default Price:</strong> ${cuisine?.info?.defaultPrice / 100}
        </p>
      </div>
    </div>
  );
};

export default OrderItems;
