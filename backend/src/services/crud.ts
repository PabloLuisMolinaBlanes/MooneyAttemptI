
import { Movement } from "../types/Movement";
import { PrismaClient } from "../generated";

const prisma : PrismaClient = new PrismaClient();

type LabelEntity = { name: string; id: number; color: number | null; }

type MovementEntity = { id: number; concept: string | null; amount: number; labels: LabelEntity | null; date: string | null; }[]

export async function readAllMovements() : Promise<Movement[] | []> {
    const movementEntities : MovementEntity = await prisma.movements.findMany({
        include: {
            labels: true
        }
    })
    const movements = movementEntities.map((movement) => {return {concept: movement.concept, amount: movement.amount, label: movement.labels == null ? null : {name: movement.labels.name, color: movement.labels?.color}, date: (movement.date == null ? new Date() : new Date(movement.date))}})
    return movements;
}
