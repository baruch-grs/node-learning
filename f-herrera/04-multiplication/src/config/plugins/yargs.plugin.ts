import yargs from "yargs";
import { hideBin } from "yargs/helpers";

export const yarg = yargs(process.argv).parseSync();
