import { useCallback } from 'react';
import allIds, { IDS_MAP, TEST_ID_ATTR } from 'shared/lib/test-utils/test-ids';

const useTestIds = (
  name: IDS_MAP,
): {
  testIds: any;
  getTestAttr: (selector: string) => { [TEST_ID_ATTR]: string };
} => {
  const testIds = allIds[name];
  const getTestAttr = useCallback((selector: string) => ({ [TEST_ID_ATTR]: selector }), []);

  if (!testIds) {
    throw new Error(`There is no test ids for ${name}`);
  }

  return { testIds, getTestAttr };
};

export default useTestIds;
