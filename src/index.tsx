import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import validateEnvironment from 'shared/lib/validateEnvironment';
import App from './app';

validateEnvironment({
  API_URL: import.meta.env.VITE_AH_API_URL || '',
});

const container = document.getElementById('root');

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const root = createRoot(container!);

root.render(
  <StrictMode>
    <App />
  </StrictMode>,
);
