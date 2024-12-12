import { FileService } from './services/file-service';
import { processTestCase } from './services/test-case-processor';
import { TestCase } from './models/test-case.model';
import { InputTestCaseValues } from './models/input-test-case-values.model';
import { FILE_PATHS } from './constants/paths';
import { ErrorHandler } from './services/error-handler';
import { FormatValidator } from './services/format-validator';

async function main() {
  const args = process.argv.slice(2);

  if (args.length < 2) {
    console.error('Please provide the paths for input files.');

    return;
  }

  const inputTestCaseFilePath = args[0];
  const inputTestCaseValuesFilePath = args[1];
  const outputTestCaseWithValuesFilePath = args[2] ?? FILE_PATHS.OUTPUT_RESULTS;

  try {
    const [testCase, isValidTestCase] =
      FileService.readJSON<TestCase>(inputTestCaseFilePath, FormatValidator.isValidTestCase);
    const [inputTestCaseValues, isValidInputTestCaseValues] =
      FileService.readJSON<InputTestCaseValues>(
        inputTestCaseValuesFilePath,
        FormatValidator.isValidInputTestCaseValues
      );

    if (!isValidTestCase || !isValidInputTestCaseValues) {
      ErrorHandler.handleInvalidInputError();
      console.error('Error occurs. Check output file.');
    } else {
      const result = processTestCase(testCase, inputTestCaseValues);

      FileService.writeJSON<TestCase>(outputTestCaseWithValuesFilePath, result);
      console.log('Processing complete. Check output file.');
    }
  } catch (error) {
    console.error('Runtime error: ' + error);
  }
}

main();
