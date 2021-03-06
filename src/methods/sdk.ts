
import XF, { Personal, Esusu, Cooperative } from '@xend-finance/web-sdk';


const chainId = 97;
const privateKey: any = process.env.REACT_APP_PK;
const options = {
    env: "testnet"
}

export const personal = new Personal(chainId, privateKey, options);
export const esusu = new Esusu(chainId, privateKey, options);
export const cooperative = new Cooperative(chainId, privateKey, options);

export default new XF(chainId, privateKey, options);
