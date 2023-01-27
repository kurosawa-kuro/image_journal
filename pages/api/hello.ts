// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { connect } from '../../database/connection';

type Data = {
  data: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data[]>
) {
  const data = { id: 0, file_name: 1 }
  const conn = await connect();
  const [result] = await conn.query('SELECT * FROM `test`', [data]);
  await conn.end()

  res.status(200).json(result as Data[])
}
