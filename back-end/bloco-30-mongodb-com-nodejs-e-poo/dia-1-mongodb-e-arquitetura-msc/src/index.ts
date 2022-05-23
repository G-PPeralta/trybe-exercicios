import App from "./app";
import * as dotenv from "dotenv";

const app = new App().express;
dotenv.config();

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Ouvindo na porta ${PORT}`);
});
