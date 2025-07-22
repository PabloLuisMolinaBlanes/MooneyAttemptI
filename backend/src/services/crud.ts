
import { Movement } from "../types/Movement";
import { PrismaClient } from "../generated";

const prisma : PrismaClient = new PrismaClient();

type LabelEntity = { name: string; id: number; color: number | null; }

type MovementEntity = { id: number; concept: string | null; amount: number; labels: LabelEntity | null; date: string | null; }[]

type MovementEntityIn = { id: number; concept: string | null; amount: number; label: LabelEntity | null; date: string | null; }


export async function readAllMovements() : Promise<Movement[] | []> {
    const movementEntities : MovementEntity = await prisma.movements.findMany({
        include: {
            labels: true
        }
    })
    const movements = movementEntities.map((movement) => {return {id:movement.id, concept: movement.concept, amount: movement.amount, label: movement.labels == null ? null : {name: movement.labels.name, color: movement.labels?.color}, date: (movement.date == null ? new Date() : new Date(movement.date))}})
    return movements;
}

export async function createMovement(datum : MovementEntityIn) : Promise<string> {
    const movement = datum
    await prisma.movements.create({
        data: {
            concept: movement.concept,
            amount: movement.amount,
            date: movement.date,
            labels: {
                create: {
                    name: movement.label?.name === undefined ? "" : movement.label.name,
                    color: movement.label?.color === undefined ? 0 : movement.label.color
                }
            }
        }
    })
    return "Added successfully!"
}