import { createContext, useContext, useState } from 'react'
import { backendApi } from '../services/backendApi'
import { html2Canvas } from '../services/html2Canvas'

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
	generateQueryCardImage: () => Promise<void>
	isLoading: boolean
	errorsMessages: ErrorsMessagesType
	successMessage: string
	userQueryCodeImage: string
}

type ChildrenContextType = {
	children: React.ReactNode
}

const FormQRGeneratorContext = createContext<FormQRGeneratorContextType>(
	{} as FormQRGeneratorContextType,
)

export const useFormQRGeneratorContext = () => useContext(FormQRGeneratorContext)

export const FormQRGeneratorProvider = ({ children }: ChildrenContextType) => {
	const [isLoading, setIsLoading] = useState<boolean>(false)
	const [errorsMessages, setErrorsMessages] = useState<ErrorsMessagesType>(
		{} as ErrorsMessagesType,
	)
	const [successMessage, setSuccessMessage] = useState<string>('')
	const [formData, setFormData] = useState({} as FormDataType)
	const [userQueryCodeImage, setUserQueryCodeSVG] = useState<string>('')
	const [elementRef, setElementRef] = useState<React.MutableRefObject<null>|null>(null)

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = event.target
		setFormData((prevState) => ({
			...prevState,
			[name]: value,
		}))
	}

	const generateQueryCardImage = async (
		formData: FormDataType
	) => {
		setIsLoading(true)

		try {
			const response = await backendApi.post('/generateQRCodeImage', {
				username: 'Mauricio Mueller',
				linkedInUrl: 'https://linkedin.com/in/mauriciomueller',
				gitHubUrl: 'https://github.com/mauriciomueller',
			})
			
			setUserQueryCodeSVG(response.data)

			console.log({elementRef})
			
			await html2Canvas(formData.username, elementRef)

			setSuccessMessage(response.data.message)
		} catch (error: any) {
			setErrorsMessages(error)
		} finally {
			setIsLoading(false)
		}

		setIsLoading(false)
	}

	return (
		<FormQRGeneratorContext.Provider
			value={{
				handleChange,
				formData,
				generateQueryCardImage,
				isLoading,
				errorsMessages,
				successMessage,
				userQueryCodeImage,
				setElementRef,
			}}
		>
			{children}
		</FormQRGeneratorContext.Provider>
	)
}
