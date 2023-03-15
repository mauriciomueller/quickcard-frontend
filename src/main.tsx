import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { FormQRGeneratorProvider } from './context/FormQRGeneratorContext'
import './styles.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider>
      <FormQRGeneratorProvider>
        <App />
      </FormQRGeneratorProvider>
    </ChakraProvider>
  </React.StrictMode>,
)
