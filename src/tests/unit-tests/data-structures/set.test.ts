describe('Set', () => {
  it('should create a set', () => {
    const set = new Set([1, 2, 2]);
    expect(set).toBeInstanceOf(Set);
    expect(set.size).toBe(2);
    expect(set.has(1)).toBe(true);
    expect(set.has(2)).toBe(true);
  });

  it('Set.add()', () => {
    const set1 = new Set([1]);
    set1.add(1);
    set1.add(2);
    expect(set1.size).toBe(2);
    expect(set1.has(1)).toBe(true);
    expect(set1.has(2)).toBe(true);
  });

  it('Set.delete()', () => {
    const set1 = new Set([1, 2]);
    set1.delete(1);
    expect(set1.size).toBe(1);
    expect(set1.has(1)).toBe(false);
    expect(set1.has(2)).toBe(true);
  });

  it('Set.clear()', () => {
    const set1 = new Set([1, 2]);
    set1.clear();
    expect(set1.size).toBe(0);
    expect(set1.has(1)).toBe(false);
    expect(set1.has(2)).toBe(false);
  });

  it('Set.values()', () => {
    const set1 = new Set([1, 2]);
    const values = set1.values();
    expect(values.next().value).toBe(1);
    expect(values.next().value).toBe(2);
  });

  it('Set.entries()', () => {
    const set1 = new Set([1, 2]);
    const values = set1.entries();
    expect(values.next().value).toEqual([1, 1]);
    expect(values.next().value).toEqual([2, 2]);
  });
});
