describe('Map', () => {
  it('should create a map', () => {
    const map = new Map([
      ['one', 1],
      ['two', 2],
    ]);
    expect(map).toBeInstanceOf(Map);
    expect(map.size).toBe(2);
    expect(map.has('one')).toBe(true);
    expect(map.has('two')).toBe(true);
    expect(map.has('three')).toBe(false);
    expect(map.get('one')).toBe(1);
    expect(map.get('two')).toBe(2);
    expect(map.get('three')).toBeUndefined();
    map.set('one', -1);
    expect(map.get('one')).toBe(-1);
    map.delete('one');
    expect(map.get('one')).toBeUndefined();
  });

  it('Map.keys()', () => {
    const map1 = new Map([
      ['one', 1],
      ['two', 2],
    ]);
    const keys1 = map1.keys();
    expect(keys1.next().value).toBe('one');
    expect(keys1.next().value).toBe('two');
    map1.delete('one');
    const keys2 = map1.keys();
    expect(keys2.next().value).toBe('two');
    expect(keys2.next().value).toBeUndefined();
  });

  it('Map.entries()', () => {
    const map1 = new Map([
      ['one', 1],
      ['two', 2],
    ]);
    const entries1 = map1.entries();
    expect(entries1.next().value).toEqual(['one', 1]);
    expect(entries1.next().value).toEqual(['two', 2]);
  });

  it('Map.values()', () => {
    const map1 = new Map([
      ['one', 1],
      ['two', 2],
    ]);
    const entries1 = map1.values();
    expect(entries1.next().value).toEqual(1);
    expect(entries1.next().value).toEqual(2);
  });
});
