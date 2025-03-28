# typescript-helper

My personal helper commands for TypeScript development.

## Available commands

### `make-class-at`

Example:

```sh
npx make-class-at ./src/Foobar
```

The command above creates a file at `./src/Foobar` with:

```typescript
class Foobar
{
    //
}

namespace Foobar
{
    //
}

export default Foobar;

```

### `make-namespace-at`

Example:

```sh
npx make-namespace-at ./src/Baz
```

The command above creates a file at `./src/Baz` with:

```typescript
namespace Baz
{
    //
}

export default Baz;

```
