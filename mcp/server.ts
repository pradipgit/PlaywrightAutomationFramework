import { generateTest } from "./generateTest";

async function run() {
 console.log("run() starting...");
 const requirementFile = "../requirements/registration.md";

 const result = await generateTest(requirementFile);

 console.log(result);
}

run();