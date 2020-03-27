import { Usuarios } from './usuarios';

describe('Personas', () => {
  it('should create an instance', () => {
    expect(new Usuarios('','','','','','','','')).toBeTruthy();
  });
});
