const arrayTreeConverter = (
  data,
  {
    ID_KEY,
    PARENT_KEY,
    CHILDREN_KEY
  } = {
    ID_KEY: 'id',
    PARENT_KEY: 'pid',
    CHILDREN_KEY: 'children'
  }) => {
  let children = {}
  let tree = []
  data.forEach(item => {
    let id = item[ID_KEY]
    let pid = item[PARENT_KEY] || -1
    children[id] = children[id] || []
    item[CHILDREN_KEY] = children[id]

    if (pid === -1) {
      tree.push(item)
    } else {
      children[pid] = children[pid] || []
      children[pid].push(item)
    }
  })
  return tree
}

export default arrayTreeConverter
