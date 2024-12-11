import { FileService } from './file-service';
import { FILE_PATHS } from '../constants/paths';

import invalidInputErrorOutputJson from '../../data/error.json';

export class ErrorHandler {
  static handleInvalidInputError() {
    FileService.writeJSON(FILE_PATHS.OUTPUT_ERROR, invalidInputErrorOutputJson);
  }
};
