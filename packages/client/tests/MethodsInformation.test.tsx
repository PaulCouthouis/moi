import renderer from 'react-test-renderer'
import { MethodsInformation } from '../components/MethodsInformation'

describe('Methods Information', () => {
  it('should return methods information of Paul Couthouis', () => {
    expect(renderer.create(
      <MethodsInformation
        methodsInformation={[
          {
            title: 'Test-Driven Development',
            icon: 'keyboard',
            description: 'Le TDD c\'est la meilleur manière de produire du code sans dette, sans bug, avec un design optimisé, une couverture de test complète'
          },
          {
            title: 'Hexagonal Architecture',
            icon: 'diamond',
            description: 'Pour un produit très peu dépendant des choix techniques, l\'Hexagonal Architecture permet d\'isoler le code métier, soit le coeur de votre application. C\'est la garantie de faire évoluer votre produit dans le temps.'
          },
          {
            title: 'Design Fonctionnel',
            icon: 'bulle',
            description: 'Un développeur n\'est pas seulement un codeur. Ensemble, conceptualisons la meilleur application en fonction des besoins réels du client'
          },
          {
            title: 'Intégration continue',
            icon: 'endless',
            description: 'Un des grands principes de l\'agilité, livrons notre application par petit bout de fonctionnalité et ainsi lui donner de la valeur.'
          }
        ]}
      />
    )).toMatchSnapshot()
  })
  it('should return methods information of John Doe', () => {
    expect(renderer.create(
      <MethodsInformation
        methodsInformation={[
          {
            title: 'Title 1',
            icon: 'A',
            description: 'description 1'
          },
          {
            title: 'Title 2',
            icon: 'W',
            description: 'description 2'
          }
        ]}
      />
    )).toMatchSnapshot()
  })
})
