import { backendApi } from '../services/backendApi'
import { FormDataType } from '../context/FormQRGeneratorContext'

export const generateQuickCardImageApi = async (formData: FormDataType) => {
  const response = await backendApi.post('/generate-qr-code-image', {
    username: formData.username,
    linkedInUrl: formData.linkedInUrl,
    gitHubUrl: formData.gitHubUrl,
  })

  return response.data
}