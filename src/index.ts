

import express, { Request, Response } from "express";
import cors from "cors";
import compression from "compression";


const app = express();
const PORT = process.env.PORT || 4590;

app.use(cors());
app.use(express.json());
app.use(compression());

app.get("/", async (Req: Request, Res: Response) => {
        try {

            Res.status(200).json(
                {
                    email: "Josepholuolofinte@gmail.com",
                    current_datetime: new Date().toISOString(),
                    github_url: "https://github.com/JosephOluOlofinte/HNG-simple-api",
                });
        } catch (err) {

            Res.status(500).json({
                error: `Data not found`
            })
        }
});

app.listen(PORT);

export default app;
