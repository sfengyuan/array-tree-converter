# arrayTreeConverter
Converts a flat array of objects to a tree structure.

# Example

Input:

```
[{
    id: 6,
    any: 'titi'
  }, {
    id: 2,
    pid: 5,
    any: 'bar',
  }, {
    id: 1,
    pid: 2,
    any: 'foo'
  }, {
    id: 5,
    any: 'quox'
  }, {
    id: 3,
    pid: 2,
    any: 'baz'
  }
]
```
Output:

```
[{
    id: 6,
    any: 'titi',
    children: []
  }, {
    id: 5,
    any: 'quox',
    children: [{
      id: 2,
      pid: 5,
      any: 'bar',
      children: [{
        id: 1,
        pid: 2,
        any: 'foo',
        children: []
      }, {
        id: 3,
        pid: 2,
        any: 'baz',
        children: []
      }]
    }]
  }
]
```
## Usage

### Install

```
npm install array-tree-converter
//or
<script src="https://unpkg.com/array-tree-converter@1.0.1/dist/web/index.js"></script>

```

```
arrayTreeConverter(input, {
  ID_KEY: 'name',
  PARENT_KEY: 'parent',
  CHILDREN_KEY: 'children'
})

arrayTreeConverter(input)
```

## API

```
arrayTreeConverter(input, {
  ID_KEY: itemIdOfInput, // default: id
  PARENT_KEY: itemParentIdOfInput, // default: pid
  CHILDREN_KEY: itemChildrenIdOfOutput // default: children
})
```

## LICENSE

MIT
