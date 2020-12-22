import { ethers } from "ethers";

export function stringToBytes32(input: string): string {
  return ethers.utils.formatBytes32String(input);
}
