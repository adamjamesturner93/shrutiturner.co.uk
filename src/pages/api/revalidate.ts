import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  message: string;
};

// const secret = process.env.SANITY_WEBHOOK_SECRET;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  if (req.method !== 'POST') {
    return res.status(401).json({ message: 'Must be a POST request' });
  }

  try {
    const { body } = req;
    const { _type, slug } = body;

    switch (_type) {
      case 'landingPage':
        await res.revalidate(`/`);
        return res.json({
          message: `Revalidated ${_type}`,
        });
      case 'post':
        const { content } = slug;
        await res.revalidate(`/blog/${content}`);
        return res.json({
          message: `Revalidated ${_type}`,
        });
    }

    return res.json({ message: 'No managed type' });
  } catch (err) {
    return res.status(500).send({ message: 'Error revalidating' });
  }
}
