import type { NextApiRequest, NextApiResponse } from 'next'
import axios from 'axios'

export default async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        if(req.method === 'POST'){
            const {Page} = req.body
            const data = await axios.get(`https://rickandmortyapi.com/api/episode?page=${Page}`)
            res.status(200).json({status: true, data: data.data})
        }else
            res.status(200).json({status: true, data: 'no request'})
    } catch (error:any) {
        console.log(error.message)
        res.status(400).json({status: false, data: error.message})
    }
}