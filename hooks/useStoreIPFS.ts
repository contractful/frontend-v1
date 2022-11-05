import { CIDString, Web3Storage } from 'web3.storage';
import { useEffect, useState } from 'react';

var CryptoJS = require("crypto-js");

const client = new Web3Storage({ token: process.env.WEB3_STORAGE_API_TOKEN! });

// example system key, need to store this somewhere
const aesKey = CryptoJS.enc.Hex.parse("000102030405060708090a0b0c0d0e0f").toString();

export const storeDesc = (content: string | null | undefined) => {
  if (content?.length == 0) return;
  console.log(content);
  const stringifiedContent = JSON.stringify({content});

  const putIPFS = async () => {
    const encryptedContent = CryptoJS.AES.encrypt(stringifiedContent, aesKey).toString();
    console.log(encryptedContent);
    const ipfsFile = new File([encryptedContent], CryptoJS.SHA256(encryptedContent), { type: 'text/plain' });
    const ipfsCid = await client.put([ipfsFile]);
    window.localStorage.setItem('cid', ipfsCid.toString()); // storing cid in local storage for now
    console.log(ipfsCid);
  };

  putIPFS();
}

export const retrieveDesc = () : string | null | undefined => {

  const cid = window.localStorage.getItem('cid') ?? ''; // retrieving cid from local storage

  console.log(cid);
  const getFromIPFS = async (cid: string) => {
    const res = await client.get(cid);

    if (res == null) return;
  
    const files = await res.files();
  
    if (files == null || files.length == 0) return;
  
    const file = files[0];
    const reader = new FileReader();
  
    reader.addEventListener('load', (event) => {
      let rawContent;
      try {
        console.log(reader.result);
        const result = CryptoJS.AES.decrypt(reader.result, aesKey).toString(CryptoJS.enc.Utf8);
        rawContent = JSON.parse(result);
        console.log(rawContent.content);
        return rawContent.content;
      } catch (e) {
        console.error(e);
        return;
      }
    });
  
    reader.readAsBinaryString(file);
  };

  getFromIPFS(cid);
  return;

}
