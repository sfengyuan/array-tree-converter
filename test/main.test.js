/* eslint-disable */
import { arrayTreeConverter } from '../src/main.js'

test('import', () => {
  let raw = [{
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
  }]
  let result = [{
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
  }]
  expect(arrayTreeConverter(raw)).toEqual(result)
})
