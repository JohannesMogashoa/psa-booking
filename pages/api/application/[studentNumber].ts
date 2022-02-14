import type { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../auth/[...nextauth]";

export default async function handle(req: NextApiRequest, res: NextApiResponse) {
    const applicationForm = await prisma.applicationForm.findUnique({ where: { studentNumber: req.query.studentNumber as string } })
    if (!applicationForm) res.status(500).json({
        error: "Oops! Something went wrong"
    })

    return res.status(200).json(applicationForm)
}