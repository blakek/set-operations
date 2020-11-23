import test from 'ava';
import {
  difference,
  filter,
  intersection,
  isSubset,
  isSuperset,
  symmetricDifference,
  union
} from './index';

test('differece returns values in one group not in another', t => {
  t.deepEqual(difference([1, 2, 3], [3, 2, 1]), new Set());
  t.deepEqual(difference([1], [1, 2, 3]), new Set());
  t.deepEqual(difference([1, 2, 3, 4], [3, 2, 1]), new Set([4]));
});

test('symmetric differece returns values in either group not in both', t => {
  t.deepEqual(symmetricDifference([1, 2, 3], [3, 2, 1]), new Set());
  t.deepEqual(symmetricDifference([1], [1, 2, 3]), new Set([2, 3]));
  t.deepEqual(symmetricDifference([1, 2, 3], [1]), new Set([2, 3]));
  t.deepEqual(symmetricDifference([1, 2, 3, 4], [3, 2, 1]), new Set([4]));
});

test('intersection returns only values shared between groups', t => {
  t.deepEqual(intersection(['github', 'gitlab'], ['bitbucket']), new Set());
  t.deepEqual(
    intersection(['github', 'gitlab'], ['bitbucket', 'github']),
    new Set(['github'])
  );
});

test('union returns all values from each group', t => {
  t.deepEqual(
    union(['github', 'gitlab'], ['bitbucket']),
    new Set(['github', 'gitlab', 'bitbucket'])
  );
});

test('shows if one value is a subset of another', t => {
  t.false(isSubset([1, 2, 3, 4], [1, 2, 3]));
  t.true(isSubset([1, 2, 3], [1, 2, 3]));
  t.true(isSubset(['c', 'b', 'a'], ['a', 'b', 'c', 'd']));
  t.true(isSubset(new Set(['c', 'b', 'a']), ['a', 'b', 'c', 'd']));
  t.true(isSubset(['c', 'b', 'a'], new Set(['a', 'b', 'c', 'd'])));
});

test('shows if one value is a superset of another', t => {
  t.false(isSuperset([1, 2, 3], [1, 2, 3, 4]));
  t.true(isSuperset([1, 2, 3], [1, 2, 3]));
  t.true(isSuperset(['a', 'b', 'c', 'd'], ['c', 'b', 'a']));
  t.true(isSuperset(['a', 'b', 'c', 'd'], new Set(['c', 'b', 'a'])));
  t.true(isSuperset(new Set(['a', 'b', 'c', 'd']), ['c', 'b', 'a']));
});

test('filter returns a new set from all elements in a group matching a filtering function', t => {
  t.deepEqual(
    filter(new Set([1, 2, 3, 4, 5]), x => x < 4),
    new Set([1, 2, 3])
  );
});
