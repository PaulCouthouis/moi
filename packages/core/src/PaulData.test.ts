import { PaulDataBuilder } from './PaulData'

describe('Get the informations about Paul', () => {
  it('should return the main informations', () => {
    expect(PaulDataBuilder().getMainInformation()).toStrictEqual({
      firstName: 'Paul',
      lastName: 'Couthouis',
      job: 'Développeur Front-End',
      description: 'xxx'
    })
  })
})
