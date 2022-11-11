import { Web3Storage, File } from 'web3.storage';

var CryptoJS = require("crypto-js");

const client = new Web3Storage({ token: process.env.NEXT_PUBLIC_WEB3_STORAGE_API_TOKEN! });

const aesKey = process.env.NEXT_PUBLIC_DESC_ENCRYPTION_KEY;

export const storeDesc = async (content: string | null | undefined) : Promise<string | null | undefined> => {
  if (content?.length == 0) return;
  const stringifiedContent = JSON.stringify({content});

  const putIPFS = async () => {
    const encryptedContent = aesKey ? CryptoJS.AES.encrypt(stringifiedContent, aesKey).toString() : stringifiedContent;
    const fileName = CryptoJS.SHA256(encryptedContent).toString();

    const ipfsFile = new File([encryptedContent], fileName, {type: 'text/plain'});
    const ipfsCid = await client.put([ipfsFile]);

    return ipfsCid;
  };

  return putIPFS();
}

export const retrieveDesc = async (cid: string) : Promise<string | null | undefined> => {

  const res = await client.get(cid);

  if (res == null) return;

  const files = await res.files();

  if (files == null || files.length == 0) return;

  const file = files[0];
  const fileText = await file.text();
  const result = aesKey ? CryptoJS.AES.decrypt(fileText, aesKey).toString(CryptoJS.enc.Utf8) : fileText;
  return JSON.parse(result).content;

}
