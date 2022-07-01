// import { isValidRequest } from '@sanity/webhook';
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

  return res
    .status(200)
    .json({ message: `secret: ${secret}, req: ${JSON.stringify(req)}}` });

  // if (!isValidRequest(req, secret)) {
  //   return res.status(401).json({ message: 'Invalid signature' });
  // }

  // try {
  //   const { body } = req;
  //   return res.json(body);

  // switch (type) {
  //   case 'post':
  //     await res.unstable_revalidate(`/news/${slug}`);
  //     return res.json({
  //       message: `Revalidated "${type}" with slug "${slug}"`,
  //     });
  // }

  // return res.json({ message: 'No managed type' });
  // } catch (err) {
  //   return res.status(500).send({ message: 'Error revalidating' });
  // }
}
