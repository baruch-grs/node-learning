import fs from "fs";
import { yarg } from "./config/plugins/yargs.plugin";

const { b: base, l: limit, s: showTable } = yarg;

let outputMessage = "";
const headerMessage = `
==========================================================================================
                                      Tabla del ${base}
==========================================================================================\n 
`;

outputMessage = headerMessage + outputMessage;

if (showTable) {
  console.log(outputMessage);
}
