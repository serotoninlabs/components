import React, { useState, useEffect } from "react";
import styled from "styled-components";

const StyledPhoto = styled.div`
  img {
    max-width: 100%;
    width: auto;
    object-fit: contain;
  }
`;

const ShowPhoto: React.FC<{img: string}> = ({img}) => {
  return (
    <StyledPhoto>
      <img src={img} />
    </StyledPhoto>
  )
}

const StyledDot = styled.div<{active: boolean;}>`
  display: inline-flex;
  position: relative;
  height: 50px;
  margin: auto;
  cursor: pointer;

  > span {
    background-color: ${(props) => props.active ? props.theme.colors.primary.text : "#fff"};
    height: 25px;
    width: 25px;
    border-radius: 50%;
    margin: auto 1em;
  }
`;

const DotsWrapper = styled.div`
  display: block;
  text-align: center;
  position: absolute;
  bottom: 0;
  right: 0;
`;

const StyledCarousel = styled.div`
  display: block;
  height: auto;
  position: relative;
  width: 100%;
  z-index: 10;
`;

const Dot: React.FC<DotProps> = ({ current, setCurrent, id }) => {
  const changeImg = (e: any) => {
    e.preventDefault();
    setCurrent(id)
  }
  return (
    <StyledDot
      active={current === id}
      onClick={changeImg}
    >
      <span />
    </StyledDot>
  );
};

interface DotProps {
  id: number; 
  current: number; 
  setCurrent(id: number): void;
}

interface DotsProps {
  list: Array<string>; 
  current: number; 
  setCurrent(id: number): void;
}

const Dots: React.FC<DotsProps> = ({list, current, setCurrent}) => {
  return (
    <DotsWrapper className="dots">
      {
        list.map((img, idx) => (
          <Dot current={current} setCurrent={setCurrent} id={idx} key={idx} />
        ))
      }
    </DotsWrapper>
  )
}


interface CarouselProps {
  imgList: Array<string>; 
  dots?: boolean; 
  timeInterval?: number;
}

export const ImageCarousel: React.FC<CarouselProps> = ({imgList, dots, timeInterval}) => {
  const [current, setCurrent] = useState(0);

  const decideCurrent = () => {
    if (current >= imgList.length - 1) {
      setCurrent(0);
    } else {
      setCurrent(current + 1);
    }
  }

  useEffect(() => {
    const currImg = setTimeout(() => {
      decideCurrent()
    }, timeInterval || 5000);

    return () => {
      clearTimeout(currImg);
    };
  });

  return (
    <StyledCarousel>
      <ShowPhoto img={imgList[current]} />
      {dots && <Dots 
        list={imgList} 
        current={current} 
        setCurrent={setCurrent}
      />}
    </StyledCarousel>
  )
}