import fs from "fs";
let outputMessage = "";
const base = 5;
const headerMessage = `
==========================================================================================
Tabla del ${base}
==========================================================================================\n 
`;
for (let i = 1; i <= 10; i++) {
  outputMessage += `${base} x ${i} = ${base * i}\n`;
}

console.log(headerMessage + outputMessage);

const outputPath = "outputs";
fs.mkdirSync(outputPath, { recursive: true });
fs.writeFileSync(
  `${outputPath}/tabla-${base}.txt`,
  headerMessage + outputMessage
);
