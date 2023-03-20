import React from 'react'
import { render, screen } from '@testing-library/react'
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
    error: true 
  }))
}));
/* eslint-enable camelcase */

describe('QuickCardProfileErrorComponent', () => {
  beforeEach(() => {
    (useParams as jest.Mock).mockReturnValue({ slug: 'john-doe' });
  });

	it('should render quick card error component', async () => {
		render(<QuickCardProfileComponent />)

    const quickCardErrorText = await screen.findByTestId('QuickCardErrorText')
    expect(quickCardErrorText).toBeInTheDocument()
    expect(quickCardErrorText).toHaveTextContent('Oh no! Something went wrong while loading this user QuickCard profile. Please try again later.')
	})
})
