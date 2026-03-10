"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const generateTest_1 = require("./generateTest");
async function run() {
    console.log("run() starting...");
    const requirementFile = "../requirements/registration.md";
    const result = await (0, generateTest_1.generateTest)(requirementFile);
    console.log(result);
}
run();
