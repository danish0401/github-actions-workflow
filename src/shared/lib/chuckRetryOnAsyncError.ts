import isNil from 'lodash/isNil';
import { ComponentType } from 'react';

const KEY = 'app_reloaded';
const isStorageAvailable = typeof localStorage != null;

export default async function retryChunkLoad<T extends ComponentType<any>>(
  fn: () => Promise<{ default: T }>,
  retriesLeft = 3,
  interval = 210,
): Promise<any> {
  const isReloadedBefore = isStorageAvailable && !isNil(localStorage.getItem(KEY));

  try {
    const val = await fn();

    if (val?.default && isStorageAvailable && isReloadedBefore) {
      localStorage.removeItem(KEY);
    }

    return val;
  } catch (error) {
    if (retriesLeft) {
      await new Promise((resolve) => setTimeout(resolve, interval));
      return await retryChunkLoad(fn, retriesLeft - 1, interval * 2);
    } else {
      if (isStorageAvailable && !isReloadedBefore) {
        // place for analytics
        localStorage.setItem(KEY, 'true');
        window.location.reload();
      } else {
        // place for error logging
        console.error('page reload error', error);
      }
    }
    throw new Error('Cant fetch chunk, rejecting promise via error');
  }
}
