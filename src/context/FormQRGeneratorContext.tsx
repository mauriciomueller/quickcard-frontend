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
	generateQuickCardImage: (
		formData: FormDataType,
		elementRef: React.MutableRefObject<null>,
	) => Promise<void>
	isLoading: boolean
	errorsMessages: ErrorsMessagesType
	successMessage: string
	userQuickCodeImage: string
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
	const [userQuickCodeImage, setUserQuickCodeImage] = useState<string>('')
	const [elementRef, setElementRef] = useState<React.MutableRefObject<null> | null>(null)

	const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
		const { name, value } = event.target
		setFormData((prevState) => ({
			...prevState,
			[name]: value,
		}))
	}

	const generateQuickCardImage = async (formData: FormDataType) => {
		setIsLoading(true)
		try {
			const response = await backendApi.post('/generateQRCodeImage', {
				username: formData.username,
				linkedInUrl: formData.linkedInUrl,
				gitHubUrl: formData.gitHubUrl,
			})

			await setUserQuickCodeImage(response.data)
			setSuccessMessage(response.data.message)
		} catch (error: any) {
			setErrorsMessages(error)
		} finally {
			setIsLoading(false)
		}

		setIsLoading(false)
	}

	useEffect(() => {
		if (userQuickCodeImage && formData.username && elementRef) {
			html2Canvas(formData.username, elementRef)
		}
	}, [userQuickCodeImage])

	return (
		<FormQRGeneratorContext.Provider
			value={{
				handleChange,
				formData,
				generateQuickCardImage,
				isLoading,
				errorsMessages,
				successMessage,
				userQuickCodeImage,
				setElementRef,
			}}
		>
			{children}
		</FormQRGeneratorContext.Provider>
	)
}
