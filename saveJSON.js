import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const distDir = path.resolve(__dirname, 'stor');

const saveJSON = (serObj, fileName) => {
    const filePath = path.resolve(distDir, `${fileName}.JSON`);
    fs.writeFile(filePath, serObj, (err) => {
        if (err) throw err;
    });
}

export default saveJSON;