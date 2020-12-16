import React from "react";
import styled from "styled-components";
import partyWizardGif from "./party-wizard.gif";

const PartyButton = styled.button`
  display: flex !important;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  appearance: none !important;
  background: transparent !important;
  border: none !important;
  > img {
    cursor: pointer;
    visibility: hidden !important;
    opacity: 0;
  }
  &:hover {
    > img {
      visibility: visible !important;
      opacity: 1;
      transition: opacity 0.25s 0.25s ease-in;
    }
  }
`;

export const PartyWizard = ({ onClick }: any) => {
  return (
    <PartyButton onClick={onClick}>
      <img src={partyWizardGif} height="20px" width="20px" />
    </PartyButton>
  );
};
