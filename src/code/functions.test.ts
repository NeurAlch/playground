describe('functions', () => {
  it('return values should be consistent', () => {
    // bad, different types returned, same name format
    const getUsers = () => [{ name: 'John' }, { name: 'Mario' }];
    expect(getUsers()[0].name).toBe('John');
    const getEnvironments = () => ({ configs: [{ environment: 'development' }, { environment: 'production' }] });
    expect(getEnvironments().configs[0].environment).toBe('development');
  });
});
