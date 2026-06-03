import dotenv from "dotenv";
import express, { Request, Response } from "express";
import cors from "cors";
import path from "path";
import adminRoute from "./api/admin"



dotenv.config();
const PORT = Number(process.env.PORT) || 9999;
const app = express();
const webURL = process.env.WEB_URL || "http://localhost:9999";



const isProd = process.env.NODE_ENV === 'production';
const FRONTEND_DEV_URL = process.env.FRONTEND_DEV_URL || 'http://localhost:3000';
const FRONTEND_PROD_URL = process.env.FRONTEND_PROD_URL || process.env.WEB_URL || '';
const allowedOrigins = (process.env.ALLOWED_ORIGINS || [FRONTEND_DEV_URL, FRONTEND_PROD_URL].filter(Boolean).join(',')).split(',').filter(Boolean);

app.use(cors({
  origin: (origin, callback) => {
    // allow non-browser clients like curl or server-to-server requests
    if (!origin) return callback(null, true);
    if (allowedOrigins.includes(origin)) return callback(null, true);
    return callback(new Error('CORS not allowed for origin: ' + origin));
  },
  credentials: true,
  methods: ['GET','POST','PUT','DELETE','OPTIONS'],
  allowedHeaders: ['Content-Type','Authorization','x-admin-token']
}));
app.use(express.json());

app.use("/admin", adminRoute);

if (isProd) {
  const buildPath = path.resolve(__dirname, "../../frontend/dist");
  app.use(express.static(buildPath));

  app.get(/.*/, (req: Request, res: Response) => {
    res.sendFile(path.join(buildPath, "index.html"));
  });
}

// app.get("/", (req:Request, res:Response) => {
//   res.send("Hello world");
// })

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server started at http://localhost:${PORT}`);
});

