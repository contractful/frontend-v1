export interface networkConfigItem {
  fDAI?: `0x${string}`;
}

export interface networkConfigInfo {
  [key: string]: networkConfigItem;
}

export const networkConfig: networkConfigInfo = {
  localhost: {},
  hardhat: {},
  mumbai: {
    fDAI: "0x10055ef62E88eF68b5011F4c7b5Ab9B99f00BB40",
  },
} as const;

export const developmentChains = ["hardhat", "localhost", "ganache"];
export const supportedChainsIds = [80001];
