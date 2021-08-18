import renderer from 'react-test-renderer'
import { ContactInformation } from '../components/ContactInformation'

describe('Contact Information', () => {
  it('should return contact information of Paul Couthouis', () => {
    expect(renderer.create(
      <ContactInformation
        contactInformation={{
          mainPhone: '+818075553894',
          secondPhone: '+33659483619',
          mainCity: 'Kyoto',
          secondCity: 'Paris',
          mail: 'paulcouthouis@gmail.com',
          dateAvailable: '2022-01-03T00:00:00.000Z',
          isAvailable: false
        }}
      />
    )).toMatchSnapshot()
  })
  it('should return contact information of John Doe', () => {
    expect(renderer.create(
      <ContactInformation
        contactInformation={{
          mainPhone: '+8180123456',
          secondPhone: '+3369876543',
          mainCity: 'Los Angeles',
          secondCity: 'Shangai',
          mail: 'xxx@yopmail.com',
          dateAvailable: '2023-07-15T00:00:00.000Z',
          isAvailable: false
        }}
      />
    )).toMatchSnapshot()
  })
})
