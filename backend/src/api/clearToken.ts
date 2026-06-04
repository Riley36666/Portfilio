import fs from "fs";
import path from "path";
import { CronJob } from "cron";

const job = new CronJob("* */10 * * * *", () => {
  clearToken();
});

job.start();

export function clearToken() {
  const filePath = path.join(__dirname, "../data/session.json");
  fs.writeFileSync(filePath, "{}");
}