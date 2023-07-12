/* eslint-disable security/detect-non-literal-fs-filename */
import fs from 'fs';

export function readAndParseJson(filePath: string) {
  let fileContent;
  try {
    fileContent = fs.readFileSync(filePath);
  } catch (e) {
    if (e.code === 'ENOENT') {
      console.error(`Error: File not found (${filePath}).`);
      return;
    } else {
      throw e;
    }
  }

  try {
    return JSON.parse(fileContent.toString());
  } catch (e) {
    console.error(`Error: Failed to parse JSON file (${filePath}).`);
    return;
  }
}
