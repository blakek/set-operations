# set-operations

> 🧮 Common set operations (union, difference, isSubset, etc.) for any Iterable

Provides helpers like `isSuperset`, `difference`, etc. for Iterables.

## Install

Using [Yarn]:

```bash
$ yarn add @blakek/set-operations
```

…or using [npm]:

```bash
$ npm i --save @blakek/set-operations
```

## API

```js
import {
  difference,
  filter,
  intersection,
  isSubset,
  isSuperset,
  symmetricDifference,
  union
} from '@blakek/set-operations';

difference();
```

### `difference`

```ts
function difference<T>(groupA: Iterable<T>, groupB: Iterable<T>): Iterable<T>;
```

Returns values in one group not in another:

```js
import { difference } from '@blakek/set-operations';

difference(['a', 'b', 'c'], ['b', 'a']);
// » Set { 'c' }
```

### `filter`

```ts
function filter<T>(group: Set<T>, fn: (value: T) => boolean): Set<T>;
```

Returns a new Set from all elements in a group matching a filtering function:

```js
import { filter } from '@blakek/set-operations';

filter(new Set([1, 2, 3, 4, 5]), x => x < 4);
// » Set { 1, 2, 3 }
```

### `intersection`

```ts
function intersection<T>(groupA: Iterable<T>, groupB: Iterable<T>): Iterable<T>;
```

Returns only values shared between groups:

```js
import { intersection } from '@blakek/set-operations';

intersection([4, 5, 6], [5, 6]);
// » Set { 5, 6 }

intersection('showers', 'flowers');
// » Set { 's', 'o', 'w', 'e', 'r' }
```

### `isSubset`

```ts
function isSubset<T>(groupA: Iterable<T>, groupB: Iterable<T>): boolean;
```

Returns if the first group is a subset of the second:

```js
import { isSubset } from '@blakek/set-operations';

isSubset([4, 5, 6], [5, 6]);
// » false

isSubset([2, 4, 6], [1, 2, 3, 4, 5, 6]);
// » true

isSubset('fame', 'frame');
// » true
```

### `isSuperset`

```ts
function isSuperset<T>(groupA: Iterable<T>, groupB: Iterable<T>): boolean;
```

Returns if the first group is a superset of the second:

```js
import { isSuperset } from '@blakek/set-operations';

isSuperset([4, 5, 6], [5, 6]);
// » true

isSuperset([2, 4, 6], [1, 2, 3, 4, 5, 6]);
// » false

isSuperset('fame', 'frame');
// » false
```

### `symmetricDifference`

```ts
function symmetricDifference<T>(
  groupA: Iterable<T>,
  groupB: Iterable<T>
): Iterable<T>;
```

Returns values in either group not in both:

```js
import { symmetricDifference } from '@blakek/set-operations';

symmetricDifference([2, 4, 6], [1, 2, 3, 4, 5, 6]);
// » Set { 1, 3, 5 }

symmetricDifference('shower', 'flower');
// » Set { 's', 'h', 'f', 'l' }
```

### `union`

```ts
function union<T>(groupA: Iterable<T>, groupB: Iterable<T>): Iterable<T>;
```

Returns all values from each group:

```js
import { union } from '@blakek/set-operations';

union([2, 4, 6], [1, 2, 3, 4, 5, 6]);
// » Set { 2, 4, 6, 1, 3, 5 }

union('fun', 'sun');
// » Set { 'f', 'u', 'n', 's' }
```

## Contributing

[Node.js] and [Yarn] are required to work with this project.

To install all dependencies, run:

```bash
yarn
```

Then, you can start the test server to get started:

```bash
yarn test --watch
```

See below for other scripts.

### Useful Commands

|                     |                                                 |
| ------------------- | ----------------------------------------------- |
| `yarn build`        | Builds the project to `./dist`                  |
| `yarn format`       | Format the source following the Prettier styles |
| `yarn test`         | Run project tests                               |
| `yarn test --watch` | Run project tests, watching for file changes    |

## License

MIT

[node.js]: https://nodejs.org/
[yarn]: https://yarnpkg.com/en/docs/
