import fs from "fs";
import { SaveFile } from "./save-file.use-case";

describe("SaveFileUseCase", () => {
  const customOptions = {
    fileContent: "Custom contet",
    fileDestination: "custom-outputs",
    fileName: "custom-table-name",
  };
  const customFilePath = `${customOptions.fileDestination}/${customOptions.fileName}.txt`;
  afterEach(() => {
    // clean up
    const outputFolderExists = fs.existsSync("outputs");
    const customOutputFolderExists = fs.existsSync(
      customOptions.fileDestination
    );
    if (outputFolderExists) fs.rmSync("outputs", { recursive: true });
    if (customOutputFolderExists)
      fs.rmSync(customOptions.fileDestination, { recursive: true });
  });
  test("Should save file with default values", () => {
    const saveFile = new SaveFile();
    const options = {
      fileContent: "test Content",
    };
    const filePath = "outputs/table.txt";
    const result = saveFile.execute(options);

    expect(result).toBeTruthy();
    const fileExists = fs.existsSync(filePath);
    const fileContent = fs.readFileSync(filePath, {
      encoding: "utf-8",
    });
    expect(fileExists).toBe(true);
    expect(fileContent).toBe(options.fileContent);
  });

  test("Should have file with custom values", () => {
    const saveFile = new SaveFile();
    const options = {
      fileContent: "Custom contet",
      fileDestination: "custom-outputs",
      fileName: "custom-table-name",
    };
    const filePath = `${options.fileDestination}/${options.fileName}.txt`;
    const result = saveFile.execute(options);
    const fileExists = fs.existsSync(filePath);
    const fileContent = fs.readFileSync(filePath, { encoding: "utf-8" });
    expect(result).toBeTruthy();
    expect(fileExists).toBe(true);
    expect(fileContent).toBe(options.fileContent);
  });
});
