import * as dotenv from "dotenv"
import express from "express"
import cors from "cors"
import helmet from "helmet"
import { categoriaRouter } from "./routes/categoria.routes";
import * as mongoDB from "mongodb";


//configurando dados estaticos
dotenv.config();
if(!process.env.PORT)
{
  process.exit(1);
}


//conectando com banco e setando endpoints
const client = new mongoDB.MongoClient(`${process.env.DB_CONST_STRING}`)
const PORT: number = parseInt(process.env.PORT);
const app = express();


app.use(helmet());
app.use(cors());
app.use(express.json()); 

app.use('/categoria', categoriaRouter);

app.listen(PORT, ()=>{
  console.log('Servidor iniciado na porta: ' + PORT);
})


export const Client  = client;