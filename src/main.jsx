import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import {theme} from "./theme.jsx";
import {CssBaseline, ThemeProvider} from "@mui/material";

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <ThemeProvider theme={theme}>
          <CssBaseline/>
          <App />
      </ThemeProvider>
  </StrictMode>,
)
