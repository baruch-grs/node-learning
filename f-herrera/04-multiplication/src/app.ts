import { yarg } from "./config/plugins/yargs.plugin";

(async () => {
  console.log("ejecutado");
  await main();
})();

async function main() {
  console.log(yarg);
}
