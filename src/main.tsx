import './index.css'

import { ViteReactSSG } from 'vite-react-ssg'
import {routes} from './App.tsx'

export const createRoot = ViteReactSSG(
    // react-router-dom data routes
    { routes }
)