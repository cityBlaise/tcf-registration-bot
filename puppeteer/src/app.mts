import puppeteer, { Browser } from "puppeteer";
import {
  getCanditatesDirectories,
  promptUser,
  canRegister,
  automateTask,
} from "./helpers/utils.mjs";
import { join, dirname } from "path";
import chalk from "chalk";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const log = console.log;
const start = async () => {
  const url = await promptUser("IFC url ?");
  
  try {
    await canRegister(url);
    const browser: Browser = await puppeteer.launch({
      headless: false,
      executablePath: join(
        "C:",
        "Program Files (x86)",
        "Microsoft",
        "Edge",
        "Application",
        "msedge.exe"
      ),
    });
    const canditatesDirectories = await getCanditatesDirectories(__dirname);
    const tasks = canditatesDirectories.map(
      async (folder: string, index: number) => {
        let page;
        if (index === 0) {
          [page] = await browser.pages();
        } else {
          page = await browser.newPage();
        }
        page.on("close", async () => {
          const pages = await browser.pages();
          if (pages.length === 0) {
            await browser.close();
            log(chalk.red("Browser closed by the user"));
            process.exit(0);
          }
        });
        await automateTask(
          page,
          url,
          join(__dirname, "../candidates", folder),
          url.toLocaleLowerCase().includes("localhost")
        );
      }
    );
    await Promise.all(tasks); 
  } catch (error) {
    if (
      (error as TypeError)
        .toString()
        .includes(
          "Protocol error (Page.navigate): Session closed. Most likely the page has been closed"
        )
    ) {
      log(chalk.red("closed by the user"));
      throw error;
    } else {
      log(chalk.blue((error as TypeError).message));
      throw error;
    }
    // await browser.close();
  } finally {
    // Close the browser after all tasks are done
    // await browser.close();
    // process.exit(1);
  }

  // Do not close the browser to keep tabs open
};

const run = async () => {
  await start();
};

run();
