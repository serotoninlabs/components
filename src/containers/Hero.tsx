import styled from "styled-components";

export interface HeroProps {
  imageURL: string;
  gradient?: string;
}

export const Hero = styled.div<HeroProps>`
  padding: 30px 15px;
  font-family: "Nunito Sans", sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-image: ${(props) => {
    let gradient = "";
    if (props.gradient) {
      gradient = props.gradient + ", ";
    }
    return `${gradient} url("${props.imageURL}")`;
  }};
  /* Set a specific height */
  height: 800px;
  /* Position and center the image to scale nicely on all screens */
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  /* text */
  > h1,
  h2 {
    color: white;
    font-family: "Nunito", serif;
    letter-spacing: 1.1px;
    text-shadow: 2px 2px rgba(0, 0, 0, 0.1);
  }
  > h1 {
    font-size: 60px;
    margin: 10px;
  }
  > h2 {
    font-size: 30px;
    margin-bottom: 40px;
  }
`;
