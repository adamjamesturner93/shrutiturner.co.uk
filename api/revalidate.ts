import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  message: string;
};

const secret = process.env.SANITY_WEBHOOK_SECRET;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  if (req.method !== 'POST') {
    console.error('Must be a POST request');
    return res.status(401).json({ message: 'Must be a POST request' });
  }

  if (!secret) {
    return res.status(500).json({ message: 'Invalid setup' });
  }

  try {
    const { body } = req;
    const { _type } = body;

    switch (_type) {
      case 'landingPage':
        await res.revalidate(`/`);
        return res.json({
          message: 'Revalidated ${_type}',
        });
    }

    return res.json({ message: 'No managed type' });
  } catch (err) {
    return res.status(500).send({ message: 'Error revalidating' });
  }
}
