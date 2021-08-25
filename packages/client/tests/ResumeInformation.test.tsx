import renderer from 'react-test-renderer'
import { ResumeInformation } from '../components/ResumeInformation'

describe('Resume Information', () => {
  it('should return resume information of Paul Couthouis', () => {
    expect(renderer.create(
      <ResumeInformation
        technicalSkills={[
          {
            title: 'Langage de programmations',
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
              },
              {
                name: 'PHP',
                value: 50
              },
              {
                name: 'Java',
                value: 20
              },
              {
                name: 'C#',
                value: 20
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
          }]}
        experiences={[{
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
        }]}
      />
    )).toMatchSnapshot()
  })
  it('should return resume information of John Doe', () => {
    expect(renderer.create(
      <ResumeInformation
        technicalSkills={[
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
          },
          {
            title: 'Versionning, Intégration continue',
            skills: [
              {
                name: 'Git',
                value: 95
              },
              {
                name: 'Circle CI',
                value: 70
              },
              {
                name: 'Github Action',
                value: 50
              },
              {
                name: 'Jenkins',
                value: 20
              }
            ]
          }
        ]}
        experiences={[
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
        ]}
      />
    )).toMatchSnapshot()
  })
})
