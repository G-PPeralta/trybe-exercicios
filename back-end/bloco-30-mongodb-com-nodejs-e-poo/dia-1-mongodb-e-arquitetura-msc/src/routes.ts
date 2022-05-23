import { Router } from "express";

import TournamentController from "./controllers/TournamentController";

const router = Router();

router.get("/tournaments", new TournamentController().getTournaments);

export default router;
