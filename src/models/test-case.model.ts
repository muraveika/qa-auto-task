export interface TestCase {
  params: TestCaseParam[];
}

export interface TestCaseParam {
  id: number;
  title: string;
  value: number | string;
  values?: TestCaseValue[];
}

export interface TestCaseValue {
  id: number;
  title: string;
  params?: TestCaseParam[];
}
