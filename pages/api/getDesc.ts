import type { NextApiRequest, NextApiResponse } from 'next'
import { retrieveDesc } from '../../hooks/useStoreIPFS'

type Data = {
  desc: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
    if (req.method === 'POST') {
        const cid = req.body.cid;
        const desc = retrieveDesc(cid);
        res.status(200).json({ desc: desc });
    }

}