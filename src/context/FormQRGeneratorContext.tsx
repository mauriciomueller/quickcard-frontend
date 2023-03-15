import { createContext, useContext, useState } from 'react'

type FormDataType = {
	username: string
	linkedIn: string
	gitHub: string
}

type ErrorsMessagesType = {
	username: string
	linkedIn: string
	gitHub: string
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
	const [formData, setFormData] = useState({
    username: '',
    linkedIn: '',
		gitHub: '',
  });

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
	}

	const generateQueryCard = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault()
		console.log('test')
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