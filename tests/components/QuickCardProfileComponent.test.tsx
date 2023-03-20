import React from 'react'
import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import QuickCardProfileComponent from '../../src/components/QuickCardProfile'
import { useParams } from 'react-router-dom';

jest.mock('react-router-dom', () => {
  const originalModule = jest.requireActual('react-router-dom');
  return {
    ...originalModule,
    useParams: jest.fn(),
  };
});

/* eslint-disable camelcase */
jest.mock('react-query', () => ({
  useQuery: jest.fn().mockReturnValue(({ 
    data: {
      message: 'User quick card successfully retrieved.',
      success: true,
      result: {
        username: 'John Doe',
        linkedin_url: 'https://linkedin.com',
        github_url: 'https://github.com',
      },
    }, 
    isLoading: false,
    error:{} 
  }))
}));
/* eslint-enable camelcase */

describe('QuickCardProfileComponent', () => {
  beforeEach(() => {
    (useParams as jest.Mock).mockReturnValue({ slug: 'john-doe' });
  });

	it('should render all input fields and generate the quick card image', async () => {
		render(<QuickCardProfileComponent />)

    const profileUsername = await screen.findByTestId('profileUsername')
    expect(profileUsername).toBeInTheDocument()
    expect(profileUsername).toHaveTextContent('John Doe')
	})
})
