import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import MainPage from './pages/MainPage/MainPage.tsx'
import StatisticsMenu from './pages/StatisticsMenu/components/StatisticsMenu.tsx'
import ModelsMainMenu from './pages/ModelsMenu/ModelsMenu.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient()

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainPage />
  },
  {
    path: '/statistics',
    element: <StatisticsMenu />
  },
  {
    path: '/models/main',
    element: <ModelsMainMenu />
  }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </StrictMode>,
)
