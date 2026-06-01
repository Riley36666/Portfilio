// task for a later date to clear the token every 10 minutes


import fs from "fs";
import path from "path";
import cron from "cron";

cron.CronJob("0 0 * * *", () => {
  clearToken();
}, null, true);


export function clearToken() {
  const filePath = path.join(__dirname, "../data/session.json");
  fs.writeFileSync(filePath, '{}');
}