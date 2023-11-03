import { Router } from "express";
import { authRequired } from "../middlewares/validateToken.js";
import { createTeam, getTeams, getTeam, updateTeam, deleteTeam } from "../controllers/team.controller.js";
import { validateSchema } from "../middlewares/validator.middleware.js";
import { createTeamSchema } from "../schemas/team.schema.js";

const router = Router();

router.post('/', authRequired, validateSchema(createTeamSchema), createTeam)
router.get('/', authRequired, getTeams)
router.get('/:id', authRequired, getTeam)
router.put('/:id', authRequired, updateTeam)
router.delete('/:id', authRequired, deleteTeam)

export default router;

// El updateTeam deberia tener tambien una validacion