import { AxiosError } from 'axios'
import { ErrorsMessagesType } from '../context/FormQRGeneratorContext'

export const handleApiErrors = (error: unknown, setErrorsMessages: (errorMessages: ErrorsMessagesType) => void) => {
  if (error instanceof AxiosError && 'response' in error && error.response && error.response.data) {
    setErrorsMessages(error.response.data)
  } else {
    const unknownErrorMessage: ErrorsMessagesType = {
      errors: {},
      message: 'An unknown error occurred.',
      success: false,
    }
    setErrorsMessages(unknownErrorMessage)
  }
}