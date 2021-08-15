import { PaulDataInMemory } from './InMemory'
import { PaulDataBuilder } from './PaulData'

describe('Get the informations about Paul', () => {
  const paulData = PaulDataBuilder(PaulDataInMemory())
  it('should return the main informations', async () => {
    expect(await paulData.getMainInformation()).toStrictEqual({
      firstName: 'Paul',
      lastName: 'Couthouis',
      job: 'Développeur Front-End',
      description:
`Bonjour et bienvenue !

Freelance depuis 2013, je suis un vrai passionné du développement. J'aime le travail bien fait et les applications abouties sans bug, ni dette techniques.

Si vous êtes à la recherche d'un développeur consciencieux, méthodique et toujours à l'écoute du client, n'hésitez pas à parcourir mon profil à travers ce site et pourquoi pas me contacter par e-mail. Bonne visite :)`
    })
  })

  it('should return the contact informations', async () => {
    expect(await paulData.getContactInformation()).toStrictEqual({
      mainPhone: '+81 80 7555 3894',
      secondPhone: '+33659483619',
      mainCity: 'Kyoto',
      secondCity: 'Paris',
      mail: 'paulcouthouis@gmail.com',
      dateAvailable: new Date('2022-01-03T00:00:00.000Z'),
      isAvailable: false
    })
  })
})
