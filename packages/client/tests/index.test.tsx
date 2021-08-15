import Home, { getStaticProps } from '../pages'
import renderer from 'react-test-renderer'

describe('Index Page', () => {
  it('should snapshot', async () => {
    const { mainInformation, contactInformation } = (await getStaticProps()).props
    expect(renderer.create(<Home mainInformation={mainInformation} contactInformation={contactInformation} />)).toMatchSnapshot()
  })
})
