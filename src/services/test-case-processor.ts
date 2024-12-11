import { InputTestCaseValues, InputTestCaseValue } from '../models/input-test-case-values.model';
import { TestCase, TestCaseParam } from '../models/test-case.model';

export function processTestCase(
  testCase: TestCase,
  inputTestCaseValues: InputTestCaseValues
): TestCase {
  const inputValuesMap = new Map(inputTestCaseValues.values.map(v => [v.id, v]));

  updateTestCaseValues(testCase.params, inputValuesMap);

  return testCase;
}

function updateTestCaseValues(params: TestCaseParam[], valuesMap: Map<number, InputTestCaseValue>): void {
  for (const param of params) {
    const inputValue = valuesMap.get(param.id);

    if (!inputValue) continue;

    if (!param.values) {
      param.value = inputValue.value;
    } else {
      const matchedValue = param.values.find(v => v.id === inputValue.value);

      if (matchedValue) {
        param.value = matchedValue.title;
      }
    }

    param.values?.forEach(nestedValue => {
      nestedValue.params && updateTestCaseValues(nestedValue.params, valuesMap);
    });
  }
}
