import { InputTestCaseValue, InputTestCaseValues } from '../models/input-test-case-values.model';
import { TestCase, TestCaseParam, TestCaseValue } from '../models/test-case.model';

export class FormatValidator {
  static isValidTestCase(obj: any): obj is TestCase {
    return (
      obj &&
      Array.isArray(obj.params) &&
      obj.params.every(FormatValidator.isValidTestCaseParam)
    );
  }

  static isValidTestCaseParam(obj: any): obj is TestCaseParam {
    return (
      typeof obj.id === 'number' &&
      typeof obj.title === 'string' &&
      (typeof obj.value === 'number' || typeof obj.value === 'string') &&
      (!obj.values || Array.isArray(obj.values) && obj.values.every(FormatValidator.isValidTestCaseValue))
    );
  }

  static isValidTestCaseValue(obj: any): obj is TestCaseValue {
    return (
      typeof obj.id === 'number' &&
      typeof obj.title === 'string' &&
      (!obj.params || Array.isArray(obj.params) && obj.params.every(FormatValidator.isValidTestCaseParam))
    );
  }

  static isValidInputTestCaseValues(obj: any): obj is InputTestCaseValues {
    return (
      obj &&
      Array.isArray(obj.values) &&
      obj.values.every(FormatValidator.isValidInputTestCaseValue)
    );
  }

  static isValidInputTestCaseValue(obj: any): obj is InputTestCaseValue {
    return (
      typeof obj.id === 'number' &&
      (typeof obj.value === 'number' || typeof obj.value === 'string')
    );
  }
}
