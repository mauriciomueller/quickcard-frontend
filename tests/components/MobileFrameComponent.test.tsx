import React from 'react'
import { render, screen } from '@testing-library/react'
import MobileFrameComponent from '../../src/components/MobileFrame'

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

describe('MobileFrameComponent', () => {
	it('should render correctly', () => {
		render(<MobileFrameComponent />)
		expect(screen.getByTestId('MobileFrameComponent')).toBeInTheDocument()
	})

	it('should display the username on the preview', () => {
		render(<MobileFrameComponent />)
		expect(screen.getByText('John Doe')).toBeInTheDocument()
	})

	it('should display a QR code', () => {
		render(<MobileFrameComponent />)
		const qrCodeIcon = screen.getByTestId('qrCodeIcon')
		expect(qrCodeIcon).toBeInTheDocument()
		expect(qrCodeIcon.tagName.toLowerCase()).toEqual('svg')
	})

	it('should display the info message', () => {
		render(<MobileFrameComponent />)
		expect(screen.getByText('This is only your QuickCard preview.')).toBeInTheDocument()
	})
})
