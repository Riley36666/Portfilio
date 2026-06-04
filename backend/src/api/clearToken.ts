import fs from "fs";
import { CronJob } from "cron";
import { dataFile, getDataDir } from "../dataPath";

const job = new CronJob("* */10 * * * *", () => {
  clearToken();
});

job.start();

export function clearToken() {
  fs.mkdirSync(getDataDir(), { recursive: true });
  fs.writeFileSync(dataFile("session.json"), "{}");
}
