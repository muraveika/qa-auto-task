import fs from 'fs';
import path from 'path';

export class FileService {
  static readJSON<T>(filePath: string, validationCallback?: (data: T) => boolean): [T, boolean] {
    let result = null;
    let isValid = true;

    const data = fs.readFileSync(filePath, 'utf-8');

    try {
      result = JSON.parse(data);

      if (validationCallback && !validationCallback(result as T)) {
        isValid = false;
      }
    } catch (e) {
      isValid = false;
    }

    return [result, isValid];
  }

  static writeJSON<T>(filePath: string, data: T): void {
    var dirname = path.dirname(filePath);

    if (!fs.existsSync(dirname)) {
      fs.mkdirSync(dirname);
    }

    fs.writeFileSync(filePath, JSON.stringify(data), 'utf-8');
  }
}
