import { PaulDataRepository } from '.'
import { ContactInformationEntity } from './builders/ContactInformation'
import { ExperiencesEntity } from './builders/Experiences'
import { MainInformationEntity } from './builders/MainInformation'
import { MethodInformationEntity } from './builders/MethodsInformation'
import { TechnicalSkillsEntity } from './builders/TechnicalSkills'

export const PaulDataInMemory: () => PaulDataRepository = () => ({
  getMainInformation: async () => await Promise.resolve<MainInformationEntity>({
    firstName: 'Paul',
    lastName: 'Couthouis',
    job: 'Développeur Front-End',
    description:
`Bonjour et bienvenue !

Freelance depuis 2013, je suis un vrai passionné du développement. J'aime le travail bien fait et les applications abouties sans bug, ni dette techniques.

Si vous êtes à la recherche d'un développeur consciencieux, méthodique et toujours à l'écoute du client, n'hésitez pas à parcourir mon profil à travers ce site et pourquoi pas me contacter par e-mail. Bonne visite :)`
  }),

  getContactInformation: async () => await Promise.resolve<ContactInformationEntity>({
    mainPhone: '+81 80 7555 3894',
    secondPhone: '+33659483619',
    mainCity: 'Kyoto',
    secondCity: 'Paris',
    mail: 'paulcouthouis@gmail.com',
    dateAvailable: new Date('2022-01-03T00:00:00.000Z'),
    isAvailable: false
  }),

  getMethodsInformation: async () => await Promise.resolve<MethodInformationEntity[]>([
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
  ]),

  getTechnicalSkills: async () => await Promise.resolve<TechnicalSkillsEntity[]>([
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
  ]),

  getExperiences: async () => await Promise.resolve<ExperiencesEntity[]>([
    {
      title: 'Développeur Front-End',
      startDate: 'Avr. 2021',
      endDate: 'Actuel',
      company: 'BaseConnect',
      description: 'Dans un environnement 100% japonais, je suis intégré à l\'équipe front-end et je développe de nouvelles features pour l\'application principale.'
    },
    {
      title: 'Etudiant en japonais',
      startDate: 'Oct. 2019',
      endDate: 'Mars 2021',
      company: 'Osaka International School of Culture and Language',
      description: 'Coupure d\'un an et demi pour apprendre sur la langue et la culture japonaise'
    },
    {
      title: 'Lead Développeur Front-End',
      startDate: 'Nov. 2018',
      endDate: 'Sep. 2019',
      company: 'Effy',
      description: 'Lead Développeur Front dans une équipe de 4 développeurs, nous avons architecturé et développé diverses interfaces en collaboration avec l\'équipe produit.'
    },
    {
      title: 'Développeur Front-End',
      startDate: 'Sep. 2017',
      endDate: 'Oct. 2018',
      company: 'Renault',
      description: 'Intégré dans une équipe de l\'entreprise, nous avons réalisé une nouvelleapplication au service de l\'ingénierie Alliance (Renault-Nissan-Mitsubishi).'
    },
    {
      title: 'Développeur Front-End',
      startDate: 'Juin 2017',
      endDate: 'Août 2017',
      company: 'Holy-Dis',
      description: 'Application consiste à faire de l\'optimisation d\'emploi du temps des employés en fonction d\'un nombre important de paramètres.'
    },
    {
      title: 'Développeur Front-End',
      startDate: 'Mai 2016',
      endDate: 'Mai 2017',
      company: 'Eurosport',
      description: 'Développement de deux projets internes à l\'entreprise'
    },
    {
      title: 'Développeur Front-End',
      startDate: 'Fév. 2016',
      endDate: 'Avr. 2016',
      company: 'Attractive World',
      description: 'Projet consistant à développer la nouvelle version du site principal qui abandonne sa version mobile pour un site entièrement responsive avec de nouvelles fonctionnalités.'
    },
    {
      title: 'Missions Freelances',
      startDate: 'Fev. 2013',
      endDate: 'Jan. 2016',
      company: 'Divers',
      description: 'Missions exécutés pour les clients suivant : Symphony EYC, P Comme Performance, Air France, Equidia, L\'Occitane, Ecocea, GS Activ'
    },
    {
      title: 'Formation Qualifiante (en alternance)',
      startDate: 'Fev. 2012',
      endDate: 'Jan. 2013',
      company: 'Institu F2I',
      description: 'Développement Et Design Web. J\'étais également emloyé en contrat alternant pour l\'entreprise P Comme Performance'
    },
    {
      title: 'DUT Services Et Réseaux De Communication',
      startDate: 'Nov. 2018',
      endDate: 'Sep. 2019',
      company: 'Université Paris-Est Marne-la-Vallée',
      description: 'Conception Et Développement Web. DUT ponctué par un stage de fin d\'année de 3 mois chez Saft'
    }
  ])
})
