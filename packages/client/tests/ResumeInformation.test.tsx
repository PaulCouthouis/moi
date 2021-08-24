import renderer from 'react-test-renderer'
import { ResumeInformation } from '../components/ResumeInformation'

describe('Resume Information', () => {
  it('should return resume information of Paul Couthouis', () => {
    expect(renderer.create(
      <ResumeInformation technicalSkills={[
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
      />
    )).toMatchSnapshot()
  })
  it('should return resume information of John Doe', () => {
    expect(renderer.create(
      <ResumeInformation technicalSkills={[
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
      />
    )).toMatchSnapshot()
  })
})
