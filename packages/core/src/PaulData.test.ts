import { PaulDataInMemory } from './InMemory'
import { PaulDataBuilder } from './PaulData'

describe('Get the informations about Paul', () => {
  it('should return the main informations', async () => {
    expect(await PaulDataBuilder(PaulDataInMemory()).getMainInformation()).toStrictEqual({
      firstName: 'Paul',
      lastName: 'Couthouis',
      job: 'Développeur Front-End',
      description: 'Anim do consequat exercitation culpa irure non nulla nisi ad excepteur id labore nostrud. Occaecat nisi dolore labore eu consectetur Lorem exercitation culpa cupidatat elit enim. Ex dolore officia elit sit et in laborum incididunt aliqua. Veniam qui ea nostrud officia dolor.'
    })
  })
})
