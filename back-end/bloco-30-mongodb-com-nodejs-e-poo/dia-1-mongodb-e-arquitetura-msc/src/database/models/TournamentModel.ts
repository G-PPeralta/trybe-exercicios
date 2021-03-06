import { model as createModel } from "mongoose";
import { TournamentSchema, ITournament } from "../schemas/TournamentSchema";

class TournamentModel {
  constructor(private tournamentModel = createModel<ITournament>("tournaments", TournamentSchema)) {}

  public async getTournaments(): Promise<ITournament[]> {
    const tournaments = await this.tournamentModel.find();
    return tournaments;
  }
}

export default TournamentModel;
