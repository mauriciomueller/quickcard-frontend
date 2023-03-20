import React from 'react'
import { render, screen } from '@testing-library/react'
import CircularSpinnerComponent from '../../src/components/CircularSpinner'

describe('CircularSpinnerComponent', () => {
  it('renders a circular spinners', () => {
    render(<CircularSpinnerComponent />)
    const circularSpinnerLarge = screen.queryByTestId('circularSpinnerLarge')
		const circularSpinnerSmall = screen.queryByTestId('circularSpinnerSmall')

		expect(circularSpinnerLarge).toBeInTheDocument()
		expect(circularSpinnerSmall).toBeInTheDocument()
  })
})