import renderer from 'react-test-renderer'
import { Menu } from '../components/Menu'

import { render, fireEvent } from '@testing-library/react'

describe('Menu', () => {
  beforeEach(() => {
    Object.defineProperty(window, 'innerWidth', {
      writable: true,
      configurable: true,
      value: 1023
    })

    const loadEvent = document.createEvent('Event')
    loadEvent.initEvent('load', true, true)
    window.dispatchEvent(loadEvent)
  })
  it('should return menu for Paul Couthouis', () => {
    expect(renderer.create(<Menu mainLabel='Paul Couthouis' />)).toMatchSnapshot()
  })

  it('should return menu for John Doe', () => {
    expect(renderer.create(<Menu mainLabel='John Doe' />)).toMatchSnapshot()
  })

  it('should navigate on mobile', () => {
    const { getByRole, queryByRole } = render(<Menu mainLabel='Paul Couthouis' />)

    expect(queryByRole('link', { name: 'A propos de moi' })).not.toBeInTheDocument()
    expect(queryByRole('link', { name: 'Ma méthodologie' })).not.toBeInTheDocument()
    expect(queryByRole('link', { name: 'Profil' })).not.toBeInTheDocument()
    expect(queryByRole('link', { name: 'Contact' })).not.toBeInTheDocument()

    fireEvent.click(getByRole('button'))

    expect(queryByRole('link', { name: 'A propos de moi' })).toBeVisible()
    expect(queryByRole('link', { name: 'Ma méthodologie' })).toBeVisible()
    expect(queryByRole('link', { name: 'Profil' })).toBeVisible()
    expect(queryByRole('link', { name: 'Contact' })).toBeVisible()

    fireEvent.click(getByRole('link', { name: 'Ma méthodologie' }))

    expect(queryByRole('link', { name: 'A propos de moi' })).not.toBeInTheDocument()
    expect(queryByRole('link', { name: 'Ma méthodologie' })).not.toBeInTheDocument()
    expect(queryByRole('link', { name: 'Profil' })).not.toBeInTheDocument()
    expect(queryByRole('link', { name: 'Contact' })).not.toBeInTheDocument()
  })

  it('should always display menu on desktop', () => {
    const { queryByRole } = render(<Menu mainLabel='Paul Couthouis' />)

    Object.defineProperty(window, 'innerWidth', {
      writable: true,
      configurable: true,
      value: 1024
    })

    const resizeEvent = document.createEvent('Event')
    resizeEvent.initEvent('resize', true, true)
    window.dispatchEvent(resizeEvent)

    expect(queryByRole('link', { name: 'A propos de moi' })).toBeVisible()
    expect(queryByRole('link', { name: 'Ma méthodologie' })).toBeVisible()
    expect(queryByRole('link', { name: 'Profil' })).toBeVisible()
    expect(queryByRole('link', { name: 'Contact' })).toBeVisible()
  })
})
