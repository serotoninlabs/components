import React from "react";
import styled from "styled-components";
import Tooltip from "@material-ui/core/Tooltip";

const StyledA = styled.a`
  && {
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
`;

interface TruncatedEthAddressProps {
  address: string;
}
export const TruncatedEthAddress: React.FC<TruncatedEthAddressProps> = ({
  address,
}) =>
  !address ? null : (
    <Tooltip title={address} placement="top">
      <StyledA
        target="_blank"
        rel="noreferrer"
        href={`https://etherscan.io/address/${address}`}
      >
        {address.substr(0, 6)}...{address.substr(address.length - 4)}
      </StyledA>
    </Tooltip>
  );
