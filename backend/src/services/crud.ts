
import { Movement } from "../types/Movement";
import {MovementDTO} from "../types/MovementDTO"
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
    const movements = movementEntities.map((movement) => {return {id:movement.id, concept: movement.concept, amount: movement.amount, label: movement.labels == null ? null : {id: movement.labels.id, name: movement.labels.name, color: movement.labels?.color}, date: (movement.date == null ? new Date() : new Date(movement.date))}})
    return movements;
}

export async function readAllMovementsForPython() : Promise<MovementDTO[] | []> {
    const movementEntities : MovementEntity = await prisma.movements.findMany({
        include: {
            labels: true
        }
    })
    const movements = movementEntities.map((movement) => {return {concept: movement.concept, amount: movement.amount, label: movement.labels === null ? "" : movement.labels.name, date: movement.date}})
    return movements;
}

export async function createMovement(datum : MovementEntityIn) : Promise<string> {
    const movement = datum
    console.log(movement.label?.id)
    if (movement.id !== -1) {
        await prisma.labels.update({
            where: {id: movement.label?.id === undefined ? -1 : movement.label.id},
            data: {
                name: movement.label?.name === undefined ? "" : movement.label.name,
                color: movement.label?.color === undefined ? 0 : movement.label.color
            }
        });
        await prisma.movements.update({
            where: {id : movement.id},
            data: {
                concept: movement.concept,
                amount: movement.amount,
                date: movement.date,
            }
        })
    } else {
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
    }
    return "Added successfully!"
}