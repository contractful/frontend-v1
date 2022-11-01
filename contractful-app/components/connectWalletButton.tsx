import { ConnectButton } from "@rainbow-me/rainbowkit";

import {
  Button, Avatar
} from '@mui/material'

import WalletIcon from '@mui/icons-material/Wallet'

export const ConnectWalletButton = () => {
  return (
    <ConnectButton.Custom>
      {({
        account,
        chain,
        openAccountModal,
        openChainModal,
        openConnectModal,
        mounted,
      }) => {
        const ready = mounted;
        const connected = ready && account && chain;

        return (
          <div
            {...(!ready && {
              "aria-hidden": true,
              style: {
                opacity: 0,
                pointerEvents: "none",
                userSelect: "none",
              },
            })}
          >
            {(() => {
              if (!connected) {
                return (
                  <Button
                    variant="outlined"
                    size="large"
                    startIcon={<WalletIcon />}
                    fullWidth
                    color="inherit"
                    onClick={openConnectModal}
                  >
                      Connect Wallet
                  </Button>
                );
              }

              if (chain.unsupported) {
                return (
                  <Button
                    variant="outlined"
                    size="large"
                    startIcon={<WalletIcon />}
                    fullWidth
                    color="inherit"
                    onClick={openChainModal}
                  >
                      Wrong network
                  </Button>
                );
              }

              return (
                <>
                <Button
                  variant="outlined"
                  size="large"
                  startIcon={chain.hasIcon && (
                    <Avatar
                      src={chain.iconUrl} 
                      sx={{ 
                        width: 24,
                        height: 24 
                      }}
                    />
                  )}
                  fullWidth
                  color="inherit"
                  onClick={openAccountModal}
                >
                    Connected ({chain.name})
                </Button>
              </>
              );
            })()}
          </div>
        );
      }}
    </ConnectButton.Custom>
  );
};
