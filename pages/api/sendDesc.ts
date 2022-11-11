import { storeDesc } from '../../hooks/useStoreIPFS'

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const desc = req.body.desc;
        try {
          const cid = await storeDesc(desc);
          res.status(200).json({cid: cid ?? ""});
        } catch(err) {
          res.status(500).json({error: "failed to store description, " + err});
        }
    }

}
