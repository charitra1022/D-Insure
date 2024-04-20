# D-Insure




### How to run project
1. Create `.env` file in root directory with the following variables:
   - `API_URL`
   - `API_KEY`
   - `PRIVATE_KEY`
2. Create an app in `alchemy` with **Ethereum Sepolia**, and provide the `API_URL` and `API_KEY` from the app configuration dashboard.
3. Add your metamask private key in `PRIVATE_KEY`.
4. Run the following commands one by one:
   - `npm i`
   - `npx hardhat compile`
   - `npx hardhat run scripts/deploy.js --network sepolia`
   - `cd client`
   - `npm i`
   - `npm run dev`
