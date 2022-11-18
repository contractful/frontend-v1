# contractful frontend

![Vercel](https://vercelbadge.vercel.app/api/Mijail-Piekarz/contractful-frontend-v1)

🙌️  News: **[For early MVP access, click here to participate in our survey from Nov to Dec 2022](https://forms.gle/E3xPJwu6wBbnvB7t6)**.

The frontend that makes peer-2-peer, safe and secure Hiring Agreements accessible to everyone.

✨ Official demo: <https://contractful.vercel.app/>.

For details on the protocol and user case in general, please visit [the contractful protocol's README](https://github.com/contractful/protocol-v1).

You will also find [more details on the devpost page on the contractful project](https://devpost.com/software/contractful-hiring-agreements).

## Quick start

- Beta contractful Hiring Agreements run on the Polygon Mumbai testnet and are quoted in fDAI (fake DAI).
  - You can mint fDAI, [using the contract here](https://mumbai.polygonscan.com/address/0x10055ef62E88eF68b5011F4c7b5Ab9B99f00BB40#writeContract). Note: You might need to add fDAI as a custom token to your Wallet (e.g. MetaMask).
  - You might also need testnet MATIC in order to mint fDAI. You can receive these MATIC [using the faucet for the Polygon Mumbai testnet](https://faucet.polygon.technology/).
- As a client:
  - Visit: <https://contractful.vercel.app/>.
  - Choose to create an Agreement.
  - Connect your Wallet (specifically for the client).
  - Fill out the details of Hiring Agreement (incl. a description, engagement period and start, as well as the pre-defined hourly rate) and create it.
  - You are now able to review the newly created Hiring Agreement. Your partner is now able to consent to it.
- As a freelancer or service provider:
  - Also, visit: <https://contractful.vercel.app/>.
  - Navigate to review an Agreement and connect the Wallet of the freelancer or service provider (**that is different to the client's wallet address**).
  - Read the Agreement carefully, and choose to consent to it.

😃 Enjoy full security and automation while focussing on building awesome web3 tech.

## Local setup

The full protocol of the solution can be interfaced by using the official demo (see above). Anyway, here you will learn here, how to use the contractful frontend just from your local machine.

To fire up the fronted locally, please use the following instructions:

- Make sure, you have `node` and `npm` installed. The project is tested with:

```
% node --version
v18.7.0

% npm --version
8.15.0
```

- `git clone` this repository.
- `cd` into `frontend-v1`.
- When starting the frontend for the first time, please install all dependencies: `npm i`.
- Use `npx next dev` to start the frontend.
- Finally, visit: <http://localhost:3000/>.

### Use IPFS

Specify the key to access the IPFS Gateway API in the `.env.local` variables. The contractful frontend uses the following service: <https://web3.storage/>. Also, you can optionally specify an AES encryption key in your `.env.local`.

👍 Well done - you are now able to create, deploy and sign trustless decentralized Hiring Agreements from your local machine.

## Notes for development

### Build and lint

Use the following command to build or lint the frontend application:

```
# Building:
npx next build

# Linting:
npx next lint && npx tsc --noEmit

# Combined in a pre-commit hook:
npm run pre-commit
```

### Initial bootstrap of the frontend application

Initially, this application was bootstrapped using the following commands (for the UI application skeleton):

```
npx create-next-app@latest --typescript

npm i mui@latest
npm i @mui/material @emotion/react @emotion/styled
npm i @mui/icons-material
npm i @mui/x-date-pickers
npm i dayjs
npm i react-cookie

[...]
```

There are several other libraries involved (e.g. for the integration of the browser Wallet and the Polygon blockchain). Please visit [./package.json](./package.json) for a complete list of all dependencies.

😀 Have fun coding!
