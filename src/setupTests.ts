// react-testing-library renders your components to document.body,
// this adds jest-dom's custom assertions
import '@testing-library/jest-dom';

const mockResponse = vi.fn();
Object.defineProperty(window, 'location', {
  value: {
    reload: mockResponse,
  },
  writable: true,
});
