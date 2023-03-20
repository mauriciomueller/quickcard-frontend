import React from 'react'
import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import FormQRGeneratorComponent from '../../src/components/FormQRGenerator'

jest.mock('../../src/context/FormQRGeneratorContext', () => ({
	useFormQRGeneratorContext: () => ({
		handleChange: jest.fn(),
		formData: {
      username: 'John Doe',
      linkedInUrl: 'https://linkedin.com/in/johndoe/',
      gitHubUrl: 'https://github.com/johndoe/',
    },
		generateQuickCardImage: jest.fn(),
		isLoading: false,
		errorsMessages: {},
		successMessage: null,
		userQuickCodeImage:
			'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mOMUQAADwkDm9XaLKwAAAABJRU5ErkJggg==',
		setElementRef: jest.fn(),
	}),
}))

describe('FormQRGeneratorComponent', () => {
	it('should render all input fields and generate the quick card image', async () => {
		render(<FormQRGeneratorComponent />)

		// Find all input fields and fill them with valid values.
		const nameInput = screen.getByTestId('usernameInput')
		expect(nameInput).toBeInTheDocument()
		fireEvent.change(nameInput, { target: { value: 'John Doe' } })

		const linkedInUrlInput = screen.getByTestId('linkedInUrlInput')
		expect(linkedInUrlInput).toBeInTheDocument()
		fireEvent.change(linkedInUrlInput, {
			target: { value: 'https://linkedin.com/in/johndoe/' },
		})

		const gitHubUrlInput = screen.getByTestId('gitHubUrlInput')
		expect(gitHubUrlInput).toBeInTheDocument()
		fireEvent.change(gitHubUrlInput, { target: { value: 'https://github.com/johndoe/' } })

		const selectDeviceInput = screen.getByTestId('deviceIdSelect')
		expect(selectDeviceInput).toBeInTheDocument()
		fireEvent.change(selectDeviceInput, { target: { value: 'iphoneX' } })

		// Submit the form.
		const submitButton = screen.getByTestId('generateQuickCardSubmitButton')
		fireEvent.click(submitButton)

		await waitFor(() => {
			expect(screen.getByAltText('QR code')).toBeInTheDocument()
		})

    const quickCardImageHtml = screen.getByTestId('quickCardImageHtml')
    expect(quickCardImageHtml).toBeInTheDocument()

		const quickCardImageHtmlLogo = screen.getByTestId('quickCardImageHtmlLogo')
    expect(quickCardImageHtmlLogo).toBeInTheDocument()

    const quickCardImageHtmlLogoSymbol = screen.getByTestId('quickCardImageHtmlLogoSymbol')
    expect(quickCardImageHtmlLogoSymbol).toBeInTheDocument()

    const quickCardImageHtmlLogoText = screen.getByTestId('quickCardImageHtmlLogoText')
    expect(quickCardImageHtmlLogoText).toBeInTheDocument()

    const quickCardImageHtmlUsername = screen.getByTestId('quickCardImageHtmlUsername')
    expect(quickCardImageHtmlUsername).toBeInTheDocument()
    expect(quickCardImageHtmlUsername).toHaveTextContent('John Doe')

    const quickCardImageHtmlQRCode = screen.getByTestId('quickCardImageHtmlQRCode')
    expect(quickCardImageHtmlQRCode).toBeInTheDocument()
    const qrCodeImage = quickCardImageHtmlQRCode.querySelector('img')
    expect(qrCodeImage).toHaveAttribute('src', 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mOMUQAADwkDm9XaLKwAAAABJRU5ErkJggg==')
	})
})
