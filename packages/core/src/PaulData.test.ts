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

  it('should return the methods informations', async () => {
    expect(await paulData.getMethodsInformation()).toStrictEqual([
      {
        title: 'Test-Driven Development',
        icon: 'keyboard',
        description: 'Le TDD c\'est la meilleur manière de produire du code sans dette, sans bug, avec un design optimisé et une couverture de test complète'
      },
      {
        title: 'Hexagonal Architecture',
        icon: 'diamond',
        description: 'Pour un produit très peu dépendant des choix techniques, l\'Hexagonal Architecture permet d\'isoler le code métier, soit le coeur de votre application. C\'est la garantie de faire évoluer votre produit dans le temps.'
      },
      {
        title: 'Design Fonctionnel',
        icon: 'bubble',
        description: 'Un développeur n\'est pas seulement un codeur. Ensemble, conceptualisons la meilleur application en fonction des réels besoins.'
      },
      {
        title: 'Intégration continue',
        icon: 'sync',
        description: 'Un des grands principes de l\'agilité, livrons notre application au fil du temps par petit bout de fonctionnalité et ainsi lui donner de la valeur rapidement.'
      }
    ])
  })

  it('should return the technical skills', async () => {
    expect(await paulData.getTechnicalSkills()).toStrictEqual([
      {
        title: 'Langages',
        skills: [
          {
            name: 'HTML / (S)CSS',
            value: 95
          },
          {
            name: 'Javascript',
            value: 90
          },
          {
            name: 'Typescript',
            value: 80
          }
        ]
      },
      {
        title: 'Framework JS',
        skills: [
          {
            name: 'Angular',
            value: 90
          },
          {
            name: 'React (+ Next)',
            value: 70
          },
          {
            name: 'Vue',
            value: 50
          },
          {
            name: 'Svelte',
            value: 50
          }
        ]
      },
      {
        title: 'Autres librairies JS',
        skills: [
          {
            name: 'Jest',
            value: 90
          },
          {
            name: 'RxJS',
            value: 75
          },
          {
            name: 'Cucumber',
            value: 75
          },
          {
            name: 'Cypress',
            value: 75
          }
        ]
      }
    ])
  })

  it('should return experience', async () => {
    expect(await paulData.getExperiences()).toStrictEqual([
      {
        title: 'Développeur Front-End',
        startDate: 'Avril 2021',
        endDate: 'Actuel',
        company: 'BaseConnect',
        description: 'Dans un environnement 100% japonais, je suis intégré à l\'équipe front-end et je développe de nouvelles features pour l\'application principale.'
      },
      {
        title: 'Etudiant en japonais',
        startDate: 'Octobre 2019',
        endDate: 'Mars 2021',
        company: 'Osaka International School of Culture and Language',
        description: 'Coupure d\'un an et demi pour apprendre sur la langue et la culture japonaise'
      },
      {
        title: 'Lead Développeur Front-End',
        startDate: 'Novembre 2018',
        endDate: 'Septembre 2019',
        company: 'Effy',
        description: 'Lead Développeur Front dans une équipe de 4 développeurs, nous avons architecturé et développé diverses interfaces en collaboration avec l\'équipe produit.'
      }
    ])
  })
})
