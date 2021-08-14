import renderer from 'react-test-renderer'
import { MainInformation } from '../components/MainInformation'

import { serialize } from 'next-mdx-remote/serialize'

describe('Main Information', () => {
  it('should return information of Paul Couthouis', async () => {
    expect(renderer.create(
      <MainInformation
        mainInformation={{
          firstName: 'Paul',
          lastName: 'Couthouis',
          job: 'Développeur Front-End',
          description: await serialize('test 1')
        }}
      />)
    ).toMatchSnapshot()
  })
  it('should return information of John Doe', async () => {
    expect(renderer.create(
      <MainInformation
        mainInformation={{
          firstName: 'John',
          lastName: 'Doe',
          job: 'Journalist',
          description: await serialize('test 2')
        }}
      />)
    ).toMatchSnapshot()
  })
})
