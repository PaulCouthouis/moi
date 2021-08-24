import Home, { getStaticProps } from '../pages'
import renderer from 'react-test-renderer'

describe('Index Page', () => {
  it('should snapshot', async () => {
    const { props } = await getStaticProps()
    expect(renderer.create(
      <Home
        {...props}
      />
    )).toMatchSnapshot()
  })
})
