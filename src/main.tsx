import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { ChakraProvider } from '@chakra-ui/react'
import { FormQRGeneratorProvider } from './context/FormQRGeneratorContext'
import { queryClient } from './services/queryClient'
import { QueryClientProvider } from 'react-query'
import './styles.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
			<ChakraProvider>
				<FormQRGeneratorProvider>
					<QueryClientProvider client={queryClient}>
            <App />
          </QueryClientProvider>
				</FormQRGeneratorProvider>
			</ChakraProvider>
	</React.StrictMode>,
)
