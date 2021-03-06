import { Request, Response } from "express";
import TournamentService from "../services/TournamentService";

class TournamentController {
  constructor(private tournamentService = new TournamentService()) {}

  public getTournaments = async (_req: Request, res: Response): Promise<Response> => {
    try {
      const tournaments = await this.tournamentService.getTournaments();
      return res.status(200).json(tournaments);
    } catch (err: unknown) {
      console.log(err);
      return res.status(500).json({ message: "Internal server error" });
    }
  }
}

export default TournamentController;
