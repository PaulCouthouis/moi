import Home from '../pages'
import renderer from 'react-test-renderer'

describe('Index Page', () => {
  it('should snapshot', () => {
    expect(renderer.create(<Home />)).toMatchSnapshot()
  })
})
