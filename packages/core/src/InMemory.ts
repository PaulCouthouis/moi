import { PaulDataRepository } from '.'

export const PaulDataInMemory: () => PaulDataRepository = () => ({
  getMainInformation: async () => await Promise.resolve({
    firstName: 'Paul',
    lastName: 'Couthouis',
    job: 'Développeur Front-End',
    description:
`Bonjour et bienvenue !

Freelance depuis 2013, je suis un vrai passionné du développement. J'aime le travail bien fait et les applications abouties sans bug, ni dette techniques.

Si vous êtes à la recherche d'un développeur consciencieux, méthodique et toujours à l'écoute du client, n'hésitez pas à parcourir mon profil à travers ce site et pourquoi pas me contacter par e-mail. Bonne visite :)`
  })
})
