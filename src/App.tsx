import type { RouteRecord } from 'vite-react-ssg'
import React from 'react'
import Layout from './Layout'
import './App.css'

export const routes: RouteRecord[] = [
    {
        path: '/',
        element: <Layout />,
        entry: 'src/Layout.jsx',
        children: [
            {
                path: 'work',
                Component: React.lazy(() => import('./pages/work')),
            },
            {
                path: 'about',
                Component: React.lazy(() => import('./pages/about')),
            },
            {
                index: true,
                Component: React.lazy(() => import('./pages/index')),
            },
        ],
    },
]
