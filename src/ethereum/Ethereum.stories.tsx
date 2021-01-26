import { Meta, Story } from "@storybook/react";
import { useWeb3React } from "@web3-react/core";
import { useState } from "react";
import { Button, PrimaryButton } from "../buttons/Button";

import { SelectWalletModal } from "./SelectWalletModal";

export default {
  title: "Components/Ethereum",
} as Meta;

export const Wallets = () => {
  const [showModal, setShowModal] = useState(false);
  const { account } = useWeb3React();

  function onSignature(challenge: string, signature: string, account: string) {
    console.log("signature", { challenge, signature, account });
    setShowModal(false);
  }
  return (
    <div>
      <PrimaryButton onClick={() => setShowModal(true)}>
        select wallet
      </PrimaryButton>
      <div>account: {account}</div>
      <SelectWalletModal
        visible={showModal}
        appName="Test"
        onSignature={onSignature}
      />
    </div>
  );
};
