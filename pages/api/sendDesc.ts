import type { NextApiRequest, NextApiResponse } from 'next'
import { storeDesc } from '../../hooks/useStoreIPFS'

type Data = {
  cid: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
    if (req.method === 'POST') {
        const desc = req.body.desc;
        const cid = storeDesc(desc);
        //window.localStorage.setItem('cid', cid != null ? cid.toString() : ""); // storing cid in local storage for now
        console.log(cid);
        res.status(200).json({ cid: cid });
    }

}
