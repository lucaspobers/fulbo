import { z } from 'zod';

export const createTeamSchema = z.object({
    clubName: z.string({
        required_error: 'Club name is required'
    }).min(3, 'Club name must be at least 3 characters long').max(20, 'Club name must be at most 20 characters long'),
    colour: z.object({
        firstColour: z.string().optional(),
        secondColour: z.string().optional()
    }),
    date: z.string().datetime().optional(),
});