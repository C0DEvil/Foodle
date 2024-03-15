import React from "react";
import { OFFER_LOGO, CUSTOM_OFFER_LOGO } from "./constants";

const OfferCarousel = ({ resMenu }) => {
  return (
    <div style={{ display: "flex", flexWrap: "nowrap", overflow: "scroll" }}>
      {resMenu?.data?.cards[1]?.card?.card.gridElements?.infoWithStyle?.offers.map(
        (item) => {
          return (
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                border: "1px solid #E9E9EB",
                borderRadius: "10px",
                minWidth: "250px",
                height: "68px",
                padding: "8px",
                margin: "10px",
              }}
              key={item?.info?.offerIds}
            >
              {item?.info?.offerTag && (
                <p
                  style={{
                    writingMode: "sideways-lr",
                    fontSize: "10px",
                    textAlign: "center",
                    fontWeight: "600",
                    color: "#E46D47",
                    fontFamily:
                      "ProximaNova, arial, Helvetica Neue, sans-serif",
                    borderRight: "1px solid #E9E9EB",
                  }}
                >
                  {item?.info?.offerTag}
                </p>
              )}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "start",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "flex-start",
                    padding: "0",
                    marginBottom: "-25px",
                  }}
                >
                  <img
                    src={
                      item.info.logoBottom
                        ? CUSTOM_OFFER_LOGO + item.info.logoBottom
                        : OFFER_LOGO
                    }
                    alt="offerLogo"
                    style={{ width: "20px", height: "20px" }}
                  />
                  <p
                    style={{
                      fontSize: "15px",
                      fontWeight: "600",
                      fontFamily:
                        "ProximaNovaCondensedBold, arial, Helvetica Neue, sans-serif",
                      color: "#686B78",
                    }}
                  >
                    {item?.info?.header}
                  </p>
                </div>
                <p
                  style={{
                    fontFamily:
                      "ProximaNovaCondensedRegular, arial, Helvetica Neue, sans-serif",
                    color: "#93959F",
                    fontWeight: "700",
                    fontSize: "12px",
                    textAlign: "left",
                    width: "250px",
                  }}
                >
                  {item?.info?.couponCode} | {item?.info?.description}
                </p>
              </div>
            </div>
          );
        }
      )}
    </div>
  );
};

export default OfferCarousel;
