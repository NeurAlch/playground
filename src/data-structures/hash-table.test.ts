import { HashTable } from './hash-table';

describe('HashTable', () => {
  it('should create an instance', () => {
    const hashTable = new HashTable<string, number>();
    expect(hashTable).toBeInstanceOf(HashTable);
    expect(hashTable.size()).toBe(0);
    expect(hashTable.keys()).toEqual([]);
    expect(hashTable.values()).toEqual([]);
  });

  it('should set and get values', () => {
    const hashTable = new HashTable<string, number>();
    hashTable.set('one', 1);
    expect(hashTable.size()).toBe(1);
    expect(hashTable.get('one')).toBe(1);
    hashTable.set('two', 2);
    expect(hashTable.size()).toBe(2);
    expect(hashTable.get('two')).toBe(2);
    hashTable.set('one', 10);
    expect(hashTable.size()).toBe(2);
    expect(hashTable.get('one')).toBe(10);
  });

  it('should remove values', () => {
    const hashTable = new HashTable<string, number>();
    hashTable.set('one', 1);
    hashTable.set('two', 2);
    expect(hashTable.size()).toBe(2);
    hashTable.remove('one');
    expect(hashTable.size()).toBe(1);
    expect(hashTable.get('one')).toBeUndefined();
    expect(hashTable.get('two')).toBe(2);
  });

  it('should check if key exists', () => {
    const hashTable = new HashTable<string, number>();
    hashTable.set('one', 1);
    expect(hashTable.has('one')).toBe(true);
    expect(hashTable.has('two')).toBe(false);
  });

  it('should clear the hash table', () => {
    const hashTable = new HashTable<string, number>();
    hashTable.set('one', 1);
    hashTable.set('two', 2);
    expect(hashTable.size()).toBe(2);
    hashTable.clear();
    expect(hashTable.size()).toBe(0);
    expect(hashTable.get('one')).toBeUndefined();
    expect(hashTable.get('two')).toBeUndefined();
  });

  it('should return all keys and values', () => {
    const hashTable = new HashTable<string, number>();
    hashTable.set('one', 1);
    hashTable.set('two', 2);
    hashTable.set('three', 3);
    expect(hashTable.keys().sort()).toEqual(['one', 'three', 'two']);
    expect(hashTable.values().sort()).toEqual([1, 2, 3]);
  });

  it('should increase the size when adding a new key', () => {
    const hashTable = new HashTable<string, number>(1);
    hashTable.set('one', 1);
    hashTable.set('two', 2);
    hashTable.set('three', 3);
    expect(hashTable.size()).toBe(3);
    expect(hashTable.get('one')).toBe(1);
    expect(hashTable.get('two')).toBe(2);
    expect(hashTable.get('three')).toBe(3);
  });

  it('should handle different key types', () => {
    const hashTable = new HashTable<number | string, string>();
    hashTable.set(1, 'one');
    hashTable.set('two', 'two');
    expect(hashTable.get(1)).toBe('one');
    expect(hashTable.get('two')).toBe('two');
    expect(hashTable.size()).toBe(2);
  });
});
