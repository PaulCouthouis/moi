import renderer from 'react-test-renderer'
import { MainInformation } from '../components/MainInformation/MainInformation'

describe('Main Information', () => {
  it('should return information of Paul Couthouis', () => {
    expect(renderer.create(
      <MainInformation
        mainInformation={{
          firstName: 'Paul',
          lastName: 'Couthouis',
          job: 'Développeur Front-End',
          description: 'Lorem elit nostrud sit aute. Velit Lorem incididunt qui consectetur elit sint. Tempor dolore quis et reprehenderit reprehenderit ex cupidatat aliquip duis pariatur dolore aute sit ut.'
        }}
      />)
    ).toMatchSnapshot()
  })
  it('should return information of John Doe', () => {
    expect(renderer.create(
      <MainInformation
        mainInformation={{
          firstName: 'John',
          lastName: 'Doe',
          job: 'Journalist',
          description: 'Incididunt do sint elit officia labore minim Lorem officia qui excepteur. Aute dolor excepteur quis culpa esse veniam amet est aute. Cillum ut amet veniam cillum occaecat duis consectetur irure elit eu. Excepteur anim exercitation do commodo elit et nulla consequat ipsum voluptate proident consequat ullamco do. Eu exercitation sint qui anim.'
        }}
      />)
    ).toMatchSnapshot()
  })
})
