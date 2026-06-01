import express, { Request, Response } from "express";
import path from "path";
import fs from "fs";
import crypto from "crypto";


export async function auth(req: Request, res: Response, next: () => any) {
  const clientToken = req.headers["x-admin-token"];
  const filePath = path.join(__dirname, "../data/session.json");
  const envToken = process.env.ADMIN_TOKEN;

  const verify = (a?: string, b?: string) => {
    if (!a || !b) return false;
    const ab = Buffer.from(a);
    const bb = Buffer.from(b);
    if (ab.length !== bb.length) return false;
    return crypto.timingSafeEqual(ab, bb);
  };

  if (envToken) {
    if (typeof clientToken === "string" && verify(clientToken, envToken)) return next();
    return res.status(401).json({ error: "Invalid token" });
  }

  try {
    const raw = await fs.promises.readFile(filePath, "utf-8");
    const { token } = JSON.parse(raw);
    if (typeof clientToken === "string" && verify(clientToken, token)) return next();
    return res.status(401).json({ error: "Invalid token" });
  } catch (e) {
    return res.status(401).json({ error: "Not authenticated" });
  }
}