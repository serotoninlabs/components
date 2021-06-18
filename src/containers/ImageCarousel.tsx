import React, { useMemo, useState, useEffect } from "react";
import styled from "styled-components";
import { media } from "../utils/media";

// Otherwise next.js breaks when importing flickity
const Flickity =
  typeof window !== "undefined"
    ? require("react-flickity-component")
    : () => null;

const CarouselWrap = styled.div`
  z-index: 10;
  position: relative;
  min-height: calc(100vw / 1.4);

  .carousel {
    outline: 0;
  }

  img {
    max-width: 100%;
    width: auto;
    object-fit: contain;
  }

  .flickity-page-dots {
    position: absolute;
    top: 35px;
    left: 0px;
    right: 0px;
    width: 100%;
    padding: 0;
    text-align: center;
    margin: auto;

    ${media.tablet} {
      top: 25px;
    }
    ${media.mobile} {
      display: none;
    }

    .dot {
      display: inline-flex;
      position: relative;
      cursor: pointer;
      height: 18px;
      width: 18px;
      border-radius: 50%;
      margin: auto 1em;

      background-color: #fff;
      &.is-selected {
        background-color: ${({theme}) => theme.colors.primary.text};
      }
    }
  }
`;

const flickityOptions = {
  wrapAround: true,
  autoPlay: false,
  prevNextButtons: false,
  watchCSS: false,
};

interface CarouselProps {
  imgList: Array<string>;
  dots?: boolean;
  timeInterval?: number;
}
export const ImageCarousel: React.FC<CarouselProps> = ({imgList, dots, timeInterval}) => {
  const [flicketyRef, setFlicketyRef] = useState<any>();
  const [numLoaded, setNumLoaded] = useState(0);
  const loaded = numLoaded >= imgList.length;

  React.useEffect(() => {
    if (flicketyRef && loaded) {
      // not sure why, but this is necessary otherwise it doesn't actually start
      setTimeout(() => {
        flicketyRef.playPlayer();
      }, 0);
    }
  }, [flicketyRef, loaded]);

  return (
    <CarouselWrap>
      <Flickity
        flickityRef={(ref: any) => setFlicketyRef(ref)}
        className={'carousel'}
        options={flickityOptions}
        disableImagesLoaded={false}
        reloadOnUpdate
        static
      >
        {imgList.map((src, idx) => (
          <img
            key={idx}
            src={src}
            onLoad={() => setNumLoaded(numLoaded + 1)}
            style={{ opacity: idx === 0 || loaded ? 1 : 0 }}
          />
        ))}
      </Flickity>
    </CarouselWrap>
  )
}
