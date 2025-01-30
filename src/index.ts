

import express, { Request, Response } from "express";
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 4590;

app.use(cors());
app.use(express.json());

app.get("/", (Req: Request, Res: Response) => {

    Res.status(200).json(
        {
            email: "Josepholuolofinte@gmail.com",
            current_datetime: new Date().toISOString(),
            github_url: "https://github.com/JosephOluOlofinte/HNG-simple-api",
        }
    );
});

app.listen(PORT, () => {
    console.log(`Server is listening on http://localhost:${PORT}`);
});

