import renderer from 'react-test-renderer'
import { Menu } from '../components/Menu'

import { render, fireEvent } from '@testing-library/react'

describe('Menu', () => {
  it('should return menu for Paul Couthouis', () => {
    expect(renderer.create(<Menu mainLabel='Paul Couthouis' />)).toMatchSnapshot()
  })
  it('should return menu for John Doe', () => {
    expect(renderer.create(<Menu mainLabel='John Doe' />)).toMatchSnapshot()
  })

  it('should navigate', () => {
    const { getByRole, queryByRole } = render(<Menu mainLabel='Paul Couthouis' />)

    expect(queryByRole('link', { name: 'A propos de moi' })).toBeFalsy()
    expect(queryByRole('link', { name: 'Ma méthodologie' })).toBeFalsy()
    expect(queryByRole('link', { name: 'Profil' })).toBeFalsy()
    expect(queryByRole('link', { name: 'Contact' })).toBeFalsy()

    fireEvent.click(getByRole('button'))

    expect(queryByRole('link', { name: 'A propos de moi' })).toBeTruthy()
    expect(queryByRole('link', { name: 'Ma méthodologie' })).toBeTruthy()
    expect(queryByRole('link', { name: 'Profil' })).toBeTruthy()
    expect(queryByRole('link', { name: 'Contact' })).toBeTruthy()

    fireEvent.click(getByRole('link', { name: 'Ma méthodologie' }))

    expect(queryByRole('link', { name: 'A propos de moi' })).toBeFalsy()
    expect(queryByRole('link', { name: 'Ma méthodologie' })).toBeFalsy()
    expect(queryByRole('link', { name: 'Profil' })).toBeFalsy()
    expect(queryByRole('link', { name: 'Contact' })).toBeFalsy()
  })
})
