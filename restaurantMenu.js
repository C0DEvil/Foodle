import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { HOTEL_MENU_1, HOTEL_MENU_2 } from "./constants";
import { LiaStarSolid } from "react-icons/lia";
import { MdOutlineDeliveryDining } from "react-icons/md";
import { CgTimelapse } from "react-icons/cg";
import { HiOutlineCurrencyRupee } from "react-icons/hi2";
import OfferCarousel from "./offerCarousel";
import TopPicksCarousel from "./topPicksCarousel";
import DropdownMenu from "./remItemsDropdown";

const RestaurantMenu = () => {
  const { id } = useParams();
  const [resMenu, setResMenu] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const call = await fetch(HOTEL_MENU_1 + id + HOTEL_MENU_2);
      const data = await call.json();
      setResMenu(data);
    };
    fetchData();
  }, []);

  console.log(resMenu);

  const remItems =
    resMenu?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.slice(
      2,
      resMenu?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards
        .length - 2
    );

  return (
    <div style={{ width: "52%", margin: "auto", border: "1px solid" }}>
      <p>
        Home / {resMenu?.data?.cards[0]?.card?.card?.info?.city} /{" "}
        {resMenu?.data?.cards[0]?.card?.card?.info?.name}
      </p>
      <div
        className="menuTop"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "end",
        }}
      >
        <div>
          <h2
            style={{
              fontFamily: "ProximaNova, arial, Helvetica Neue, sans-serif",
              fontWeight: "600",
              color: "282C3F",
            }}
          >
            {resMenu?.data?.cards[0]?.card?.card?.info?.name}
          </h2>
          <p
            style={{
              fontFamily: "ProximaNova, arial, Helvetica Neue, sans-serif",
              color: "#7E808C",
              fontWeight: "300",
              fontSize: "13px",
            }}
          >
            {resMenu?.data?.cards[0]?.card?.card?.info?.cuisines.join(",")}
          </p>
          <p
            style={{
              fontFamily: "ProximaNova, arial, Helvetica Neue, sans-serif",
              color: "#7E808C",
              fontWeight: "300",
              fontSize: "13px",
            }}
          >
            {resMenu?.data?.cards[0]?.card?.card?.info?.areaName},
            {resMenu?.data?.cards[0]?.card?.card?.info?.sla?.lastMileTravel} km
          </p>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "end",
            border: "1px solid #E9E9EB",
            borderRadius: "5px",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#3d9b6d",
            }}
          >
            <LiaStarSolid />
            <p
              style={{
                fontFamily: "ProximaNova, arial, Helvetica Neue, sans-serif",
                fontSize: "14px",
                fontWeight: "700",
                margin: "5px",
                position: "relative",
                top: "2px",
              }}
            >
              {resMenu?.data?.cards[0]?.card?.card?.info?.avgRatingString}
            </p>
          </div>
          <p
            style={{
              fontFamily: "ProximaNova, arial, Helvetica Neue, sans-serif",
              fontSize: "11px",
              fontWeight: "700",
              margin: "10px 0 5px",
              padding: "10px",
              color: "#93959F",
              borderTop: "1px solid #E9E9EB",
            }}
          >
            {resMenu?.data?.cards[0]?.card?.card?.info?.totalRatingsString}
          </p>
        </div>
      </div>
      <div
        className={
          "deliveryMessage" +
          (resMenu?.data?.cards[0]?.card?.card?.info?.feeDetails?.message
            ? " Show"
            : " Hidden")
        }
      >
        <MdOutlineDeliveryDining style={{ scale: "1.2", marginRight: "5px" }} />
        {resMenu?.data?.cards[0]?.card?.card?.info?.feeDetails?.message}
      </div>
      <hr></hr>
      <div
        style={{
          fontFamily: "ProximaNova, arial, Helvetica Neue, sans-serif",
          fontSize: "15px",
          fontWeight: "700",
          color: "#3E4152",
          display: "flex",
        }}
      >
        <CgTimelapse style={{ scale: "1.4", margin: "0 5px 0 15px" }} />
        {resMenu?.data?.cards[0]?.card?.card?.info?.availability?.opened
          ? resMenu?.data?.cards[0]?.card?.card?.info?.sla?.slaString
          : "Closed Currently"}
        <HiOutlineCurrencyRupee
          style={{ scale: "1.4", margin: "0 5px 0 20px" }}
        />
        {resMenu?.data?.cards[0]?.card?.card?.info?.costForTwoMessage}
      </div>
      {resMenu?.data?.cards[0]?.card?.card?.info?.availability
        ?.nextOpenTimeMessage && (
        <div
          style={{
            width: "90%",
            height: "40px",
            backgroundColor: "#F1F1F6",
            textAlign: "center",
            color: "#F57E47",
            fontFamily: "ProximaNova, arial, Helvetica Neue, sans-serif",
            fontSize: "15px",
            margin: "auto",
            padding: "auto",
          }}
        >
          {
            resMenu?.data?.cards[0]?.card?.card?.info?.availability
              ?.nextOpenTimeMessage
          }
        </div>
      )}
      <OfferCarousel resMenu={resMenu} />
      <hr></hr>
      {resMenu?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]
        ?.card?.card?.carousel && (
        <h2
          style={{
            fontFamily: "ProximaNova, arial, Helvetica Neue, sans-serif",
            fontWeight: "600",
            color: "282C3F",
          }}
        >
          Top Picks
        </h2>
      )}
      {resMenu?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]
        ?.card?.card?.carousel && (
        <div
          className="top-picks-container"
          style={{
            display: "flex",
            width: "100%",
            borderRadius: "5px",
            overflow: "scroll",
            position: "inherit",
            top: "-130px",
            margin: "-110px 0",
          }}
        >
          {resMenu?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.carousel?.map(
            (item) => {
              return <TopPicksCarousel item={item} key={item.bannerId} />;
            }
          )}
        </div>
      )}
      <hr></hr>
      {console.log(remItems)}
      {remItems?.map((itm) => {
        return (
          <div>
            <div
              style={{
                height: "10px",
                width: "100%",
                backgroundColor: "#F1F1F6",
              }}
            ></div>
            <DropdownMenu item={itm} />
            <div
              style={{
                height: "10px",
                width: "100%",
                backgroundColor: "#F1F1F6",
              }}
            ></div>
          </div>
        );
      })}
    </div>
  );
};

export default RestaurantMenu;
