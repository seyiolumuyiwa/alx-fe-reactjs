import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// ✅ Import React Query tools
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

// ✅ Create a QueryClient instance (only once)
const queryClient = new QueryClient()

// ✅ Wrap your App inside the provider
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </StrictMode>,
)
