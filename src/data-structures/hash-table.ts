export interface IHashTable<TKey, TValue> {
  clear(): void;
  size(): number;
  keys(): TKey[];
  values(): TValue[];
  has(key: TKey): boolean;
  remove(key: TKey): void;
  set(key: TKey, value: TValue): void;
  get(key: TKey): TValue | undefined;
}

export class HashTable<TKey, TValue> implements IHashTable<TKey, TValue> {
  protected _size: number;
  protected _buckets: Array<Array<[TKey, TValue]>>;

  constructor(bucketSize = 16) {
    this._size = 0;
    this._buckets = new Array(bucketSize).fill(null).map(() => []);
  }

  protected hash(key: TKey): number {
    const stringKey = String(key);

    let total = 0;
    for (let i = 0; i < stringKey.length; i++) {
      total += stringKey.charCodeAt(i);
    }

    return total % this._buckets.length;
  }

  set(key: TKey, value: TValue): void {
    const index = this.hash(key);
    const bucket = this._buckets[index];
    const item = bucket.find(([k]) => k === key);

    if (item) {
      item[1] = value;
    } else {
      bucket.push([key, value]);
      this._size++;
    }
  }

  get(key: TKey): TValue | undefined {
    const index = this.hash(key);
    const item = this._buckets[index].find(([k]) => k === key);
    return item ? item[1] : undefined;
  }

  remove(key: TKey): void {
    const index = this.hash(key);
    const bucket = this._buckets[index];
    const itemIndex = bucket.findIndex(([k]) => k === key);

    if (itemIndex !== -1) {
      bucket.splice(itemIndex, 1);
      this._size--;
    }
  }

  has(key: TKey): boolean {
    const index = this.hash(key);
    return this._buckets[index].some(([k]) => k === key);
  }

  clear(): void {
    this._buckets = this._buckets.map(() => []);
    this._size = 0;
  }

  size(): number {
    return this._size;
  }

  keys(): TKey[] {
    return this._buckets.flatMap((bucket) => bucket.map(([k]) => k));
  }

  values(): TValue[] {
    return this._buckets.flatMap((bucket) => bucket.map(([, v]) => v));
  }
}
