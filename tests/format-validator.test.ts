import { FormatValidator } from '../src/services/format-validator';

import testcaseStructureJson from '../data/TestcaseStructureCorrected.json';
import valuesJson from '../data/Values.json';

describe('Format Validator', () => {
  it('should validate correct test case object', async () => {
    const testCase = testcaseStructureJson;
    const result = FormatValidator.isValidTestCase(testCase);

    expect(result).toBeTruthy();
  });

  it('should validate incorrect test case object', async () => {
    const testCase = valuesJson;
    const result = FormatValidator.isValidTestCase(testCase);

    expect(result).toBeFalsy();
  });

  it('should validate correct input values object', async () => {
    const values = valuesJson;
    const result = FormatValidator.isValidInputTestCaseValues(values);

    expect(result).toBeTruthy();
  });

  it('should validate incorrect input values object', async () => {
    const values = testcaseStructureJson;
    const result = FormatValidator.isValidInputTestCaseValues(values);

    expect(result).toBeFalsy();
  });
});
