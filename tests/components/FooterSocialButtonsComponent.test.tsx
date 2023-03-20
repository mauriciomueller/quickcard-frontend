import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import { FooterSocialButtonsPropsType } from '../../src/components/FooterSocialButtons/FooterSocialButtonsComponent'
import FooterSocialButtonsComponent from '../../src/components/FooterSocialButtons'

describe('FooterSocialButtonsComponent', () => {
	const props: FooterSocialButtonsPropsType = {
		linkedInUrl: 'https://www.linkedin.com/in/testuser',
		gitHubUrl: 'https://github.com/testuser',
		isLoading: false,
	}

	it('renders LinkedIn and GitHub buttons with correct links', () => {
		const mockOpen = jest.fn()
		window.open = mockOpen

		render(<FooterSocialButtonsComponent {...props} />)

		const gitHubButton = screen.getByTestId('gitHubButton')
		const linkedInButton = screen.getByTestId('linkedInButton')

		expect(gitHubButton).toBeInTheDocument()
		expect(linkedInButton).toBeInTheDocument()

		fireEvent.click(gitHubButton)
		fireEvent.click(linkedInButton)
		expect(mockOpen).toHaveBeenCalledTimes(2)
		expect(mockOpen).toHaveBeenCalledWith(props.gitHubUrl, '_blank')
		expect(mockOpen).toHaveBeenCalledWith(props.linkedInUrl, '_blank')
	})

  it('shows skeletons while loading', () => {
    render(<FooterSocialButtonsComponent {...props} isLoading={true} />)
    const gitHubButtonSkeleton = screen.queryByTestId('gitHubSkeleton')
    const linkedInButtonSkeleton = screen.queryByTestId('linkedInSkeleton')
    
    expect(gitHubButtonSkeleton).toBeInTheDocument()
    expect(linkedInButtonSkeleton).toBeInTheDocument()
  })

})
