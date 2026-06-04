import express, { Request, Response } from "express";
import {returnInfo} from './helperFunctions';
import { auth } from './Auth'
const router = express.Router();
import fs from "fs";
import path from "path";
import crypto from "crypto";
import { getDataDir, dataFile } from '../dataPath';

router.post("/Password", async (req, res) => {
  const { username, password } = req.body;
  const usernameEnv = process.env.USERNAME;
  const backendPass = process.env.PASSWORD;
  if(checkPasswordFile()){
  if (username === usernameEnv && password === backendPass) {
    const token = crypto.randomBytes(32).toString("hex");
    try {
      await fs.promises.writeFile(dataFile('session.json'), JSON.stringify({ token }), { encoding: "utf-8" });
      return res.json({ success: true, token });
    } catch (err) {
      console.error(err);
      return res.status(500).json({ success: false, error: "Failed to store token" });
    }
  }

  res.json({ success: false });
}});


router.post("/addMessages", async (req: Request, res: Response) => {
  const { name, email, message } = req.body;
  if(checkMessageFile()){
  const filePath = dataFile('messages.json');
  try {
    const raw = await fs.promises.readFile(filePath, "utf-8");
    const messages = JSON.parse(raw);
    messages.push({ name, email, message, date: new Date().toISOString() });
    await fs.promises.writeFile(filePath, JSON.stringify(messages, null, 2), "utf-8");
    res.json({ success: true });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, error: "Failed to save message" });
  }
}});
router.get("/returnMessages", auth, async (req: Request, res: Response) => {
  if(checkMessageFile()){
  const filePath = dataFile('messages.json');
  try {
    const raw = await fs.promises.readFile(filePath, "utf-8");
    const messages = JSON.parse(raw);
    res.send(messages);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to read messages" });
  }
}})




router.get("/info", auth, async(req: Request, res: Response) => {
  try {
    const data = await returnInfo();
    res.json({data});
  } catch (err) {
    console.error(err);
  }
})


function checkPasswordFile() {
  const dataFolder = getDataDir(); 
  const passwordFile = dataFile('session.json');

  if (!fs.existsSync(dataFolder)) {
    fs.mkdirSync(dataFolder, { recursive: true });
  }

  if (!fs.existsSync(passwordFile)) {
    fs.writeFileSync(passwordFile, '{}');
    return true;
  }

  return true;
}

function checkMessageFile() {
  const dataFolder = getDataDir();
  const messageFile = dataFile('messages.json');

  if (!fs.existsSync(dataFolder)) {
    fs.mkdirSync(dataFolder, { recursive: true });
  }

  if (!fs.existsSync(messageFile)) {
    fs.writeFileSync(messageFile, '[]');
    return true;
  }

  return true;
}
export default router