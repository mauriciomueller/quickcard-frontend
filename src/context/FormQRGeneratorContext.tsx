import { createContext, useContext, useEffect, useState } from 'react'
import { backendApi } from '../services/backendApi'
import { html2Canvas } from '../services/html2Canvas'

export type FormDataType = {
	username: string
	linkedInUrl: string
	gitHubUrl: string
	deviceId: number
}

type FormQRGeneratorContextType = {
	handleChange: (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void
	formData: FormDataType
	generateQueryCardImage: (
		formData: FormDataType,
		elementRef: React.MutableRefObject<null>,
	) => Promise<void>
	isLoading: boolean
	errorsMessages: ErrorsMessagesType
	successMessage: string
	userQueryCodeImage: string
	setElementRef: React.Dispatch<React.SetStateAction<React.MutableRefObject<null> | null>>
}

type ErrorsMessagesType = {
	username: string
	linkedInUrl: string
	gitHubUrl: string
	alert: string
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
	const [userQueryCodeImage, setUserQueryCodeImage] = useState<string>('')
	const [elementRef, setElementRef] = useState<React.MutableRefObject<null> | null>(null)

	const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
		const { name, value } = event.target
		setFormData((prevState) => ({
			...prevState,
			[name]: value,
		}))
	}

	const generateQueryCardImage = async (formData: FormDataType) => {
		setIsLoading(true)
		try {
			const response = await backendApi.post('/generateQRCodeImage', {
				username: formData.username,
				linkedInUrl: formData.linkedInUrl,
				gitHubUrl: formData.gitHubUrl,
			})

			await setUserQueryCodeImage(response.data)
			setSuccessMessage(response.data.message)
		} catch (error: any) {
			setErrorsMessages(error)
		} finally {
			setIsLoading(false)
		}

		setIsLoading(false)
	}

	useEffect(() => {
		if (userQueryCodeImage && formData.username && elementRef) {
			html2Canvas(formData.username, elementRef)
		}
	}, [userQueryCodeImage])

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
