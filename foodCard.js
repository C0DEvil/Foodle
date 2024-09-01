import { MdStars } from "react-icons/md";
import { FOOD_CARD_IMG } from "./constants";

const FoodCard = ({ foodCardData }) => {
  return (
    <div className="food-card">
      <div className="cardImgOverFlow">
        <img
          src={FOOD_CARD_IMG + foodCardData?.info?.cloudinaryImageId}
          id={foodCardData?.info?.id}
          className="cardImg"
        />
      </div>
      <div className="card-info">
        <h3 className="cardInfoText" style={{ textDecoration: "none" }}>
          {foodCardData?.info?.name}
        </h3>
        <div className="cardSecondLine">
          <MdStars id="infoStar" />
          <span className="cardInfoText">{foodCardData?.info?.avgRating}</span>
          <ul>
            <li className="cardInfoText" style={{ textDecoration: "none" }}> {`${foodCardData?.info?.sla?.deliveryTime} mins`}</li>
          </ul>
        </div>
        <div className="cardCuisines cardBottom cardInfoText" style={{ textDecoration: "none" }}>
          {(foodCardData?.info?.cuisines).map((item) => item + ", ")}
        </div>
        <div className="cardBottom cardInfoText" style={{ textDecoration: "none" }}>
          {foodCardData?.info?.areaName}
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
