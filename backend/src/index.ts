import * as dotenv from "dotenv"
import express from "express"
import cors from "cors"
import helmet from "helmet"
import { categoriaRouter } from "./routes/categoria.routes";


dotenv.config();


if(!process.env.PORT)
{
    process.exit(1);
}

const PORT: number = parseInt(process.env.PORT);

const app = express();


app.use(helmet());
app.use(cors());
app.use(express.json());


app.listen(PORT, ()=>{
  console.log(`SERVIDOR INICIADO NA PORTA ${PORT}`);  
});


app.get('/categoria', categoriaRouter);