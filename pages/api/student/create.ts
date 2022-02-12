import type { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../auth/[...nextauth]";

export default async function handle(req: NextApiRequest, res: NextApiResponse) {
    const student = await prisma.student.create({ data: req.body });
    if (!student) res.status(500).json({
        error: "Oops! Something went wrong"
    })

    return res.status(201).json(student)
}