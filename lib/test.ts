function pickBy(target: Record<string, any>, fn: (value: any) => boolean) {
  const keys = Object.keys(target)
  const result = keys.reduce((prev, current) => {
    const value = target[current]
    if (fn(value)) {
      Object.assign(prev, { [current]: value })
    }
    return prev
  }, {})

  // for (let key in target) {
  //   const value = target[key]
  //   if (fn(value)) {
  //     // result[key] = value
  //     Object.assign(result, { [key]: value })
  //   }
  // }

  return result
}

function test() {
  const target = { a: 1, b: '2', c: 3 }

  const isNumber = (value: any) => {
    return typeof value === 'number'
  }

  console.log(pickBy(target, isNumber))
}

test()
