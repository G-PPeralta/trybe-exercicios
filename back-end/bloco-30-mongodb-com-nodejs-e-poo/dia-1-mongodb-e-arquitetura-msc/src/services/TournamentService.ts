import TournamentModel from "../database/models/TournamentModel";
import { ITournament } from "../database/schemas/TournamentSchema";

class TournamentService {
  constructor(private tournamentModel = new TournamentModel()) {}

  public async getTournaments(): Promise<ITournament[]> {
    const tournaments = await this.tournamentModel.getTournaments();
    return tournaments;
  }
}

export default TournamentService;
