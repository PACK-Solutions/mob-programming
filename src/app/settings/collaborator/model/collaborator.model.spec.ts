import { Collaborator } from './collaborator.model';

describe('Collaborator', () => {

  it('should create an instance', () => {
    expect(new Collaborator(1, 'John')).toEqual(jasmine.objectContaining({
      id: 1,
      name: 'John'
    }));
  });

});
