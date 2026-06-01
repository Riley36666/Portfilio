import dotenv from "dotenv";
import express, { Request, Response } from "express";
import cors from "cors";
import path from "path";
import adminRoute from "./api/admin"




dotenv.config();
const PORT = Number(process.env.port) || 9999;
const app = express();




const buildPath = path.resolve(__dirname, "../../frontend/dist");

app.use(cors({ origin: "*" }));
app.use(express.json());

app.use("/admin", adminRoute);
app.use(express.static(buildPath));




app.get(/.*/, (req: Request, res: Response) => {
  res.sendFile(path.join(buildPath, "index.html"));
});

// app.get("/", (req:Request, res:Response) => {
//   res.send("Hello world");
// })

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server started at http://localhost:${PORT}`);
});

