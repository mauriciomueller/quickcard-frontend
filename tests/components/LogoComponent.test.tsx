import React from 'react'
import { render, screen } from '@testing-library/react'
import LogoComponent from '../../src/components/Logo'

describe('LogoComponent', () => {
  it('should render the logo', () => {
    render(<LogoComponent />)
    const logo = screen.queryByTestId('logo')
    const logoSymbol = screen.queryByTestId('logoSymbol')
    const logoText = screen.queryByTestId('logoText')

    expect(logo).toBeInTheDocument()
    expect(logoSymbol).toBeInTheDocument()
    expect(logoSymbol).toHaveAttribute('src', '/img/quick-card-logo.svg')
    expect(logoSymbol).toHaveAttribute('alt', 'QuickCard logo')

    expect(logoText).toBeInTheDocument()
    expect(logoText).toHaveTextContent('QuickCard')
  })
})