import React from 'react'
import { render, screen } from '@testing-library/react'
import MainBannerComponent from '../../src/components/MainBanner'

describe('MainBannerComponent', () => {
  it('', () => {
    render(<MainBannerComponent />)
    const CircularSpinnerComponent = screen.getByTestId('CircularSpinnerComponent')
    const MobileFrameComponent = screen.getByTestId('MobileFrameComponent')

    expect(CircularSpinnerComponent).toBeInTheDocument()
    expect(MobileFrameComponent).toBeInTheDocument()
  })
})