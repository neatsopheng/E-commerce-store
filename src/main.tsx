import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { BrowserRouter, RouterProvider } from 'react-router-dom'
import { MyRouter } from './routes.tsx'


const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false, // Disable refetch on window focus
      staleTime: 5 * 60 * 10000,    // 50 minutes stale time
    },
  },
});
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={MyRouter}/>
      <ReactQueryDevtools />
    </QueryClientProvider>
  </React.StrictMode>,
)
