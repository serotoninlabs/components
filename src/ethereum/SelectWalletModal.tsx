import React from "react";
import { useContext, useEffect, useRef, useState } from "react";

import { AbstractConnector } from "@web3-react/abstract-connector";
import styled from "styled-components";
import { Button, InvertedButton, PrimaryButton } from "../buttons";
import { Modal, ModalProps, Row } from "../containers";
import { useWeb3React } from "@web3-react/core";
import { EthereumContext } from "./EthereumContext";
import { magicFactory, injectedFactory } from "./connectors";
import { Heading, SectionHeading } from "../text";
import { InputContainer, InputLabel, TextInput } from "../inputs";

import MagicLogo from "./wallets/magic.svg";
import MetaMaskLogo from "./wallets/metamask.svg";

const WalletChoices = styled(Row)`
  > * {
    margin: 5px;
  }
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-bottom: 15px;
`;
const WalletButton = styled(Button)`
  border: 1px solid #ddd;
  border-radius: 6px;
  padding: 0;
  box-shadow: 0 0 12px rgba(0, 0, 0, 0.12);
  height: 140px;
  width: 140px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  > img {
    flex-grow: 1;
  }
  > span {
    margin: 8px;
  }
`;

export type SelectWalletProps = {
  appName: string;
  onSignature(challenge: string, signature: string, account: string): void;
};
const SelectWallet: React.FC<SelectWalletProps> = ({
  appName,
  onSignature,
}) => {
  type connectorOptions = "metamask" | "magic" | "idk";
  const [loading, setLoading] = useState(false);
  const [connectorChoice, setConnectorChoice] = useState<connectorOptions>();
  const [connector, setConnector] = useState<AbstractConnector>();
  const { requiredChainId, magicApiKey } = useContext(EthereumContext);
  const ctx = useWeb3React();
  const { account, activate, error, library } = ctx;

  useEffect(() => {
    if (connectorChoice && connectorChoice === "metamask") {
      console.log("activate metamask", account, library);
      metamask();
    }
  }, [connectorChoice]);
  useEffect(() => {
    console.log("account change", { connectorChoice, account, library, ctx });
    if (connectorChoice && library && connector === ctx.connector) {
      web3Login();
    }
  }, [library, connector]);

  async function metamask() {
    const injected = await injectedFactory(requiredChainId);
    await activate(injected);
    setConnector(injected);
    localStorage.setItem("WALLET_CHOICE", "metamask");
  }

  async function magic(email: string) {
    console.log("magic");
    const magic = await magicFactory(magicApiKey, requiredChainId, email);
    await activate(magic);
    setConnector(magic);
    localStorage.setItem("WALLET_CHOICE", "magic");
    localStorage.setItem("MAGIC_EMAIL", email);
  }

  async function web3Login() {
    if (!account) {
      throw new Error("no account");
    }
    console.log("ready to activate", ctx, connector);

    const challenge = `Sign in to ${appName} | ${new Date().getTime()}`;
    const s = library.getSigner();
    let signature = await s.signMessage(challenge);
    console.log("sig success", challenge, signature, account);
    onSignature(challenge, signature, account);
    setLoading(false);
  }

  switch (connectorChoice) {
    case "metamask":
      return (
        <>
          <div>Please sign the Metamask message to proceed.</div>
        </>
      );
    case "magic":
      return <MagicHelper onSuccess={magic} />;
    case "idk":
      return <IdkHelper onSuccess={magic} />;
    case undefined:
      return (
        <>
          <SectionHeading>Select your wallet:</SectionHeading>
          <WalletChoices>
            <WalletButton onClick={() => setConnectorChoice("metamask")}>
              <img src={MetaMaskLogo} height={"90px"} width="90px" />
              <span>Metamask</span>
            </WalletButton>
            <WalletButton onClick={() => setConnectorChoice("magic")}>
              <img src={MagicLogo} width="75px" />
              <span>Magic</span>
            </WalletButton>
            {/* <WalletButton onClick={torus}>
                <img src="/images/wallets/portis.svg" width="60px" />
                <span>Portis</span>
              </WalletButton>
              <WalletButton onClick={torus}>
                <img src="/images/wallets/torus.svg" width="70px" />
                <span>Torus</span>
              </WalletButton> */}
          </WalletChoices>
          <Heading>No wallet? No problem.</Heading>
          <InvertedButton onClick={() => setConnectorChoice("idk")}>
            I don't have a wallet
          </InvertedButton>
        </>
      );
    default:
      throw new Error("unsupported wallet");
  }
};

const MagicHelper: React.FC<{ onSuccess(email: string): void }> = ({
  onSuccess,
}) => {
  const input = useRef<HTMLInputElement>();
  function login() {
    if (input && input.current) {
      onSuccess(input.current.value);
    }
  }
  return (
    <>
      <div>
        <InputContainer>
          <InputLabel>Email</InputLabel>
          <TextInput name="email" inputRef={input} />
          <PrimaryButton onClick={login}>Log in</PrimaryButton>
        </InputContainer>
      </div>
    </>
  );
};

const IdkHelper: React.FC<{ onSuccess(email: string): void }> = ({
  onSuccess,
}) => {
  const input = useRef<HTMLInputElement>();
  function login() {
    if (input && input.current) {
      onSuccess(input.current.value);
    }
  }
  return (
    <>
      <div>
        <div>
          If you do not have a wallet, we recommend{" "}
          <a href="https://magic.link" target="_new">
            Magic
          </a>
          . Just enter your email and your wallet will be created:
        </div>
        <InputContainer>
          <InputLabel>Email</InputLabel>
          <TextInput name="email" inputRef={input} />
        </InputContainer>
        <PrimaryButton onClick={login}>Log in</PrimaryButton>
      </div>
    </>
  );
};

export const SelectWalletModal: React.FC<SelectWalletProps & ModalProps> = (
  props
) => {
  return (
    <Modal visible={props.visible}>
      <SelectWallet {...props} />
    </Modal>
  );
};

export default SelectWalletModal;
