import prisma from "../prisma"
import { Request as req, Response as res } from "express"


export const getPersona = async (_req: req, res: res) => {
    try {
        const persona = await prisma.persona.findMany()
        res.json(persona)

    } catch (error) {
        console.log(error)
    }
}