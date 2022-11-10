import { CIDString, Web3Storage } from 'web3.storage';
import { useEffect, useState } from 'react';

var CryptoJS = require("crypto-js");

const client = new Web3Storage({ token: process.env.NEXT_PUBLIC_WEB3_STORAGE_API_TOKEN! });

const aesKey = process.env.NEXT_PUBLIC_DESC_ENCRYPTION_KEY;

export const storeDesc = async (content: string | null | undefined) => {
  if (content?.length == 0) return;
  const stringifiedContent = JSON.stringify({content});

  const putIPFS = async () => {
    const encryptedContent = aesKey ? CryptoJS.AES.encrypt(stringifiedContent, aesKey).toString() : stringifiedContent;
    const ipfsFile = new File([encryptedContent], CryptoJS.SHA256(encryptedContent), { type: 'text/plain' });
    const ipfsCid = await client.put([ipfsFile]);
    return ipfsCid;
  };

  return putIPFS();
}

export const retrieveDesc = async (cid: string) => {

  const res = await client.get(cid);

  if (res == null) return;

  const files = await res.files();

  if (files == null || files.length == 0) return;

  const file = files[0];
  const reader = new FileReader();

  return new Promise((resolve, reject) => {

    reader.onerror = () => {
      reader.abort();
      reject(new DOMException("Error parsing file"));
    }

    reader.onload = () => {
      let rawContent;
      try {
        const result = aesKey ? CryptoJS.AES.decrypt(reader.result, aesKey).toString(CryptoJS.enc.Utf8) : reader.result;
        rawContent = JSON.parse(result);
        resolve(rawContent.content);
      } catch (e) {
        resolve(e);
      }
    };
    reader.readAsBinaryString(file);

  });

}
