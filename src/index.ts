function createSet<T>(value: Iterable<T>): Set<T> {
  if (value instanceof Set) {
    return value;
  }

  return new Set([...value]);
}

export function difference<T>(
  groupA: Iterable<T>,
  groupB: Iterable<T>
): Iterable<T> {
  const setA = createSet(groupA);
  const setB = createSet(groupB);
  return filter(setA, value => !setB.has(value));
}

export function filter<T>(group: Set<T>, fn: (value: T) => boolean): Set<T> {
  const result = new Set<T>();
  const set = createSet(group);

  for (const value of set) {
    if (fn(value)) {
      result.add(value);
    }
  }

  return result;
}

export function intersection<T>(
  groupA: Iterable<T>,
  groupB: Iterable<T>
): Iterable<T> {
  const setA = createSet(groupA);
  const setB = createSet(groupB);
  return filter(setA, value => setB.has(value));
}

export function isSubset<T>(groupA: Iterable<T>, groupB: Iterable<T>): boolean {
  const subset = createSet(groupA);
  const superset = createSet(groupB);

  if (subset.size > superset.size) {
    return false;
  }

  for (const value of subset) {
    if (!superset.has(value)) {
      return false;
    }
  }

  return true;
}

export function isSuperset<T>(
  groupA: Iterable<T>,
  groupB: Iterable<T>
): boolean {
  return isSubset(groupB, groupA);
}

export function symmetricDifference<T>(
  groupA: Iterable<T>,
  groupB: Iterable<T>
): Iterable<T> {
  const setA = createSet(groupA);
  const setB = createSet(groupB);
  return union(difference(setA, setB), difference(setB, setA));
}

export function union<T>(
  groupA: Iterable<T>,
  groupB: Iterable<T>
): Iterable<T> {
  const setA = createSet(groupA);
  const setB = createSet(groupB);
  return new Set([...setA, ...setB]);
}
