import fs from 'fs';
import { EOL } from 'os';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const srcDir = path.resolve(__dirname, 'stor');

const readJSON = fileName => {
    const filePath = path.resolve(srcDir, `${fileName}.JSON`);
    let s = '';
    return new Promise((res, rej) => {
        let rStream = fs.createReadStream(filePath);
        rStream.addListener('data', (data) => { s += (data + EOL); });
        rStream.addListener('end', (err) => {
            if (err) throw err;
            res(s);
        })
    })
}

const extractJSON = async fileName => {
    return readJSON(fileName).then(data => data);
}

export default extractJSON;