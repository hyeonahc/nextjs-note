// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
// /api/[id]로 접근했을때
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string
}

// req: 사용자가 요청한 정보
// res: 응답한 정보
export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({ id: req.query.id })
}
