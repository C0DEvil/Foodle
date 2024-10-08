import { HiOutlineArrowSmLeft, HiOutlineArrowSmRight } from "react-icons/hi";
import largeDataObject from "./swiggyData.js";
import { useEffect, useRef, useState } from "react";
import { MIDDLE_CAROUSEL_IMG } from "./constants.js";
import MiddleShimmer from "./middleShimmer.js";
import useSwiggyData from "./scrapedData.js";

const carousel2Data =
  largeDataObject.data.cards[1].card.card.imageGridCards.info;

const MiddleCarousel = () => {
  const [, , json] = useSwiggyData();
  const [scroller3, setScroller3] = useState(0);
  const refThree = useRef();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    // Simulating a delay for demonstration purposes
    const timeout = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timeout);
  }, []);
  return loading ? (
    <MiddleShimmer />
  ) : (
    <div id="carouselCont">
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h2>{largeDataObject.data.cards[1].card.card.header.title}</h2>
        <div style={{ display: "flex" }} className="horizScrollOuter">
          <HiOutlineArrowSmLeft
            style={{ borderRadius: "50%", margin: "10px" }}
            onClick={() => {
              const newScroll3 = Math.max(0, scroller3 - 700);
              setScroller3(newScroll3);
              if (refThree.current) refThree.current.scrollLeft = newScroll3;
            }}
            className="horizScroll"
          />
          <HiOutlineArrowSmRight
            style={{ borderRadius: "50%", margin: "10px" }}
            onClick={() => {
              const newScroll3 = Math.min(
                refThree.current.scrollLeftMax,
                scroller3 + 700
              );
              setScroller3(newScroll3);
              if (refThree.current) refThree.current.scrollLeft = newScroll3;
            }}
            className="horizScroll"
          />
        </div>
      </div>
      <div className="carousel2" ref={refThree}>
        {json?.data?.cards[0]?.card?.card?.imageGridCards?.info.map((item) => {
          return (
            <img
              src={MIDDLE_CAROUSEL_IMG + item.imageId}
              key={item.id}
              className="carousel2Img"
            />
          );
        })}
      </div>
    </div>
  );
};

export default MiddleCarousel;
