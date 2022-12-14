import type { NextApiRequest, NextApiResponse } from 'next';
import { retrieveDesc } from '../../hooks/useStoreIPFS';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        const cid = req.body.cid;
        try {
          const desc = await retrieveDesc(cid);
          res.status(200).json({ desc: desc ?? ""});
        } catch(err) {
          res.status(500).json({ error: "failed to retrieve description, " + err});
        }
        
    }

}