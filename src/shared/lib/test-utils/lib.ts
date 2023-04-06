import { atob } from 'buffer';
import { fireEvent } from '@testing-library/dom';
import uniqueId from 'lodash/uniqueId';

export function mockFileData(files: File[]) {
  return {
    dataTransfer: {
      files,
      items: files.map((file) => ({
        kind: 'file',
        type: file.type,
        getAsFile: () => file,
      })),
      types: ['Files'],
    },
  };
}

async function generateTestBlob(content: string = uniqueId()): Promise<Blob> {
  const url = `data:video/mp4;base64,${atob(content)}`;
  const response = await fetch(url);
  return response.blob();
}

export const createFile = async (name = 'mock.mp4', type = 'video/mp4'): Promise<File> => {
  const fileBlob = await generateTestBlob();

  const file = new File([fileBlob], name, { type });

  Object.defineProperty(file, 'duration', {
    get() {
      return 15;
    },
  });

  return file;
};

export function dispatchDropEvent(node: Element | Node | Document | Window, data = {}) {
  const event = new Event('drop', { bubbles: true });
  Object.assign(event, data);
  fireEvent(node, event);
}
