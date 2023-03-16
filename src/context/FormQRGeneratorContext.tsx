import { createContext, useContext, useState } from 'react'
import { backendApi } from '../services/backendApi'

type FormDataType = {
	username: string
	linkedInUrl: string
	gitHubUrl: string
}

type ErrorsMessagesType = {
	username: string
	linkedInUrl: string
	gitHubUrl: string
}

type FormQRGeneratorContextType = {
	handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void
	formData: FormDataType
	generateQueryCard: () => void
	isLoading: boolean
	errorsMessages: ErrorsMessagesType
	successMessage: string
}

type ChildrenContextType = {
	children: React.ReactNode
}

const FormQRGeneratorContext = createContext<FormQRGeneratorContextType>({} as FormQRGeneratorContextType)

export const useFormQRGeneratorContext = () => useContext(FormQRGeneratorContext)

export const FormQRGeneratorProvider = ({ children }: ChildrenContextType) => {

	const [isLoading, setIsLoading] = useState<boolean>(false)
	const [errorsMessages, setErrorsMessages] = useState<ErrorsMessagesType>({} as ErrorsMessagesType)
	const [successMessage, setSuccessMessage] = useState<string>('')
	const [formData, setFormData] = useState({} as FormDataType);

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
	}

	const generateQueryCard = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault()
		try {
			const response = await backendApi.post('/generateQRCodeImage', {
				username: 'Mauricio Mueller',
				linkedInUrl: 'https://linkedin.com/in/mauriciomueller',
				gitHubUrl: 'https://github.com/mauriciomueller',
			})
			setSuccessMessage(response.data.message)
		} catch (error: any) {
			setErrorsMessages(error)
		}
		setIsLoading(true)
	}

	return (
		<FormQRGeneratorContext.Provider value={{
			handleChange,
			formData,
			generateQueryCard,
			isLoading,
			errorsMessages,
			successMessage
		}}>
			{children}
		</FormQRGeneratorContext.Provider>
	)
}