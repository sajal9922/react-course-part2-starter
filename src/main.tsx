import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

const queryClient = new QueryClient();
//   {
//   defaultOptions: {
//     queries: {
//       retry: 3, // Retry failed requests 3 times
//       cacheTime: 1000 * 60 * 5, // Cache for 5 minutes
//       staleTime: 10 * 1000, // Stale after 10 seconds, default is 0s
//     },
//   },
// }

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
      <ReactQueryDevtools />
    </QueryClientProvider>
  </React.StrictMode>
);
