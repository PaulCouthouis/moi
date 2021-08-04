import { render } from '@testing-library/react'
import Home from '../pages'

describe('Index Page', () => {
  it('should display hello world', () => {
    const { queryByText } = render(<Home />)
    expect(queryByText('Salut Paul !')).toBeTruthy()
  })
})
