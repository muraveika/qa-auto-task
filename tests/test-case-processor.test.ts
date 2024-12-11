import { TestCase } from '../src/models/test-case.model';
import { InputTestCaseValues } from '../src/models/input-test-case-values.model';
import { processTestCase } from '../src/services/test-case-processor';

import valuesJson from '../data/Values.json';
import testcaseStructureJson from '../data/TestcaseStructureCorrected.json';
import structureWithValuesJson from '../data/StructureWithValues.json';

describe('TestCase Processor', () => {
  it('should update test case values based on input', async () => {
    const testCase: TestCase = testcaseStructureJson;
    const inputTestCaseValues: InputTestCaseValues = valuesJson;
    const expectedTestCase: TestCase = structureWithValuesJson;

    const result = processTestCase(testCase, inputTestCaseValues);

    expect(result).toBe(expectedTestCase);
  });
});
