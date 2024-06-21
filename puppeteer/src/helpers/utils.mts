import input from "@inquirer/input";
import select, { Separator } from "@inquirer/select";
import chalk from "chalk";
import { spawn } from "child_process";
import { constants } from "fs";
import { access, opendir, readFile, stat } from "fs/promises";
import { dirname, join } from "path";
import { Browser, ElementHandle, Page, launch } from "puppeteer";
import { fileURLToPath } from "url";
import { Candidate } from "../schemas/Candidate";
import { DocumentsType, Gender } from "../schemas/types";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const log = console.log;

export const checkPathExists = async (path: string) => {
  try {
    await access(path, constants.F_OK);
    return true;
  } catch (err) {
    console.error(`${path} does not exist.`);
    return false;
  }
};

export const getInfos = async (folderPath: string) => {
  if (!(await checkPathExists(folderPath))) {
    throw new Error("candidate folder not found");
  }
  try {
    const filePath = join(folderPath, "infos.json");
    let infos = await readFile(filePath, { encoding: "utf8" });
    return JSON.parse(infos);
  } catch (err) {
    throw new Error("unable to read infos.json file");
  }
};

export const getCanditatesDirectories = async (baseDir: string) => {
  try {
    const directories: string[] = [];
    const dir = await opendir(join(baseDir, "../candidates"));
    for await (const dirent of dir) {
      const stats = await stat(join(baseDir, "../candidates", dirent.name));
      if (stats.isDirectory()) directories.push(dirent.name);
    }
    return directories.sort((a, b) => {
      return -a.localeCompare(b);
    });
  } catch (err) {
    throw new Error("Enable to open candidates directory");
  }
};

export const getdocumentType = (doc: DocumentsType) => {
  if (doc === "CNI") return "cni";
  else if (doc === "PASSPORT") return "passeport";
  return "unknown";
};

export const getGender = (sex: Gender) => {
  if (sex === "M") return "masculin";
  if (sex === "F") return "feminin";
  return "non binaire";
};

export const fillData = async (
  page: Page,
  infos: Candidate,
  folderPath: string
) => {
  console.log(infos.documentNumber);
  await page.type("#email", infos.email, { delay: 20 });
  await page.type("#name", infos.name, { delay: 20 });
  await page.type("#firstname", infos.firstName, { delay: 20 });
  await page.type("#password", infos.password ?? "20042001", { delay: 20 });
  await page.type('input[name="utilisateur[phoneNumber]"', infos.phone),
    { delay: 20 };
  await page.type(
    'input[name="utilisateur[numeroDocument]"',
    infos.documentNumber,
    { delay: 20 }
  );
  // await page.select('select[name="utilisateur[birthPlace]"]', infos.birthPlace);
  await page.select('select[name="utilisateur[sexe]"]', getGender(infos.sex));
  // await page.select(
  //   'select[name="utilisateur[nationalite]"]',
  //   infos.nationality
  // );
  await page.select(
    'select[name="motifQualification"]',
    infos.registrationCause
  );
  // await page.select(
  //   'select[name="utilisateur[langueUsuelle]"]',
  //   infos.language
  // );
  await page.select(
    'select[name="utilisateur[document]"]',
    getdocumentType(infos.documentType)
  );
  // await page.click('#authorisationCandidat');

  await page.evaluate((infos) => {
    console.log("evaluate date");
    const dateInput = document.getElementById("birthdate");
    if (dateInput) {
      (dateInput as HTMLInputElement).value = new Date(
        infos.birthDate
      ).toLocaleDateString("fr-CA", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
      });
      (dateInput as HTMLInputElement).dispatchEvent(new Event("input")); // Trigger input event
      (dateInput as HTMLInputElement).dispatchEvent(new Event("change")); // Trigger change event
    } else {
      log(chalk.red("no birthdate"));
    }
  }, infos);

  if (await checkPathExists(join(folderPath, "photo4x4.jpg"))) {
    const photo_4x4 = (await page.waitForSelector(
      'input[name="kyc[avatar]"]'
    )) as ElementHandle<HTMLInputElement>;
    if (photo_4x4) {
      await photo_4x4.uploadFile(join(folderPath, "photo4x4.jpg"));
    }
  }
  if (await checkPathExists(join(folderPath, "frontFace.jpg"))) {
    const frontSidePhoto = (await page.waitForSelector(
      'input[name="kyc[frontSidePhoto]"]'
    )) as ElementHandle<HTMLInputElement>;
    if (frontSidePhoto) {
      await frontSidePhoto.uploadFile(join(folderPath, "frontFace.jpg"));
    }
  }
  if (await checkPathExists(join(folderPath, "backFace.jpg"))) {
    const backSidePhoto = (await page.waitForSelector(
      'input[name="kyc[backSidePhoto]"]'
    )) as ElementHandle<HTMLInputElement>;
    if (backSidePhoto) {
      await backSidePhoto.uploadFile(join(folderPath, "backFace.jpg"));
    }
  }
};

export const automateTask = async (
  page: Page,
  url: string,
  folderPath: string,
  test: boolean = false
) => {
  await page.goto(url);
  await page.waitForNetworkIdle();

  // Set screen size
  await page.setViewport({ width: 0, height: 0 });

  // page.on("request", (request) => {
  //   console.log(
  //     chalk.green(
  //       "Request:",
  //       request.url(),
  //       "method:",
  //       request.method(),
  //       "postData:",
  //       request.postData()
  //     )
  //   );
  // });

  await Promise.all([
    page.waitForNavigation(), // The promise resolves after navigation has finished
    page.click('button[type="submit"]'), // Clicking the link will indirectly cause a navigation
  ]);

  const infos = await getInfos(folderPath);
  await fillData(page, infos, folderPath);
  // if (!test) {
  //   await page.waitForSelector("#rc-anchor-container", { timeout: 12000 });
  //   await page.click("#rc-anchor-container");
  //   await page.waitForSelector('recaptcha-checkbox[aria-checked="true"]', {
  //     timeout: 12000,
  //   });

  //   await Promise.all([
  //     page.waitForNavigation(), // The promise resolves after navigation has finished
  //     page.click('button[type="submit"]'), // Clicking the link will indirectly cause a navigation
  //   ]);
  // }
};

export const canRegister = async (url: string) => {
  const brow: Browser = await launch({
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
  const [page] = await brow.pages();
  page.on("close", () => {
    log(chalk.red("Browser closed by the user"));
    process.exit(0);
  });

  await page.setUserAgent(
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36"
  );

  await page.setExtraHTTPHeaders({
    "Accept-Language": "en-US,en;q=0.9",
    "Accept-Encoding": "gzip, deflate, br",
    Connection: "keep-alive",
  });

  await page.setViewport({
    width: Math.floor(Math.random() * (1920 - 800 + 1)) + 800,
    height: Math.floor(Math.random() * (1080 - 600 + 1)) + 600,
  });

  while (true) {
    try {
      await page.goto(url, { timeout: 15000 });
      await page.waitForSelector('button[type="submit"]', { timeout: 20000 });

      const isDisabled = await page.evaluate(() => {
        const button = document.querySelector('button[type="submit"]')!;
        return button ? (button as HTMLButtonElement).disabled : true;
      });

      if (isDisabled) {
        log(
          chalk.blue(
            "submit button is disabled " +
              new Date().toLocaleDateString("en-GB", {
                day: "2-digit",
                month: "2-digit",
                year: "numeric",
                hour: "2-digit",
                minute: "2-digit",
                second: "2-digit",
              })
          )
        );
        await new Promise<void>((resolve) => {
          setTimeout(() => {
            resolve();
          }, Math.floor(Math.random() * 2000) + 1000);
        });
      } else {
        break;
      }
    } catch (error) {
      if ((error as Error).toString().includes("ERR_NAME_NOT_RESOLVED")) {
        log(chalk.red("Internet Error"));
      } else if (
        (error as Error).toString().includes("TimeoutError: Navigation timeout")
      ) {
        log(
          chalk.blue(
            "slow internet speed " +
              new Date().toLocaleDateString("en-GB", {
                day: "2-digit",
                month: "2-digit",
                year: "numeric",
                hour: "2-digit",
                minute: "2-digit",
                second: "2-digit",
              })
          )
        );
      } else if ((error as Error).toString().includes("Waiting for selector")) {
        log(
          chalk.blue(
            "submit button not found " +
              new Date().toLocaleDateString("en-GB", {
                day: "2-digit",
                month: "2-digit",
                year: "numeric",
                hour: "2-digit",
                minute: "2-digit",
                second: "2-digit",
              })
          )
        );
      } else if ((error as Error).toString().includes("ERR_NETWORK_CHANGED")) {
        log(chalk.red("ERR_NETWORK_CHANGED"));
      } else if (
        (error as Error).toString().includes("net::ERR_CONNECTION_REFUSED")
      ) {
        log(chalk.red("page not available"));
      } else {
        console.error(error);
      }
      await new Promise<void>((resolve) => {
        setTimeout(() => {
          resolve();
        }, Math.floor(Math.random() * 2000) + 1000);
      });
    }
  }
  sendNotification();
  return true;
};

export const sendNotification = () => {
  const soundFile = join(__dirname, "../../shippuden.mp3");

  // Path to the VLC executable
  const vlcPath = join(__dirname, "../../vlc", "vlc.exe");
  // Start VLC with the sound file
  const vlcProcess = spawn(vlcPath, ["--fullscreen", soundFile], {
    detached: true,
    stdio: "ignore",
  });

  // Unreference the child process to let the parent exit independently
  vlcProcess.unref();

  console.log("VLC started in the background");
  // Handle VLC process events
  vlcProcess.on("error", (err) => {
    console.error(`Failed to start VLC: ${err.message}`);
  });

  vlcProcess.on("close", (code) => {
    console.log(`VLC process exited with code ${code}`);
  });
};

export const promptUser = async (message: string) => {
  const getDescription = (center: String) =>
    `register candidate(s) for ${center.toUpperCase()} examination center`;

  let answer = await select({
    message: message,
    choices: [
      {
        name: "IFC DOUALA",
        value: process.env["IFC_DLA"],
        description: getDescription("DOUALA"),
      },
      {
        name: "IFC YAOUNDE",
        value: process.env["IFC_YDE"],
        description: getDescription("YAOUNDE"),
      },
      {
        name: "TEST PAGE",
        value: "TEST PAGE",
        description: "IFC REGISTRATION CLONE PAGE",
      },
      {
        name: "IFC BUEA",
        value: "BUEA",
        disabled: "(Not yet available)",
      },
      {
        name: "IFC MAROUA",
        value: "MAROUA",
        disabled: "(Not yet available)",
      },
      new Separator(),
    ],
    default: "IFC YAOUNDE",
  });

  if (answer == "TEST PAGE") {
    answer = await input({
      message: "Test page url: ",
      default: "http://localhost:5173/",
    });
    log(chalk.blue(answer));
  }
  return answer!;
};
