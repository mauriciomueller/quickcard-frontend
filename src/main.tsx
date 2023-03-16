import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { ChakraProvider } from '@chakra-ui/react'
import { FormQRGeneratorProvider } from './context/FormQRGeneratorContext'
import { queryClient } from './services/queryClient'
import { QueryClientProvider } from 'react-query'
import { BrowserRouter } from 'react-router-dom'
import './styles.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<BrowserRouter>
			<ChakraProvider>
				<FormQRGeneratorProvider>
					<QueryClientProvider client={queryClient}>
            <App />
          </QueryClientProvider>
				</FormQRGeneratorProvider>
			</ChakraProvider>
		</BrowserRouter>
	</React.StrictMode>,
)
