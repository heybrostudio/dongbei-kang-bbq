function up(n: number) {
  // if (n === 1 || n == 2) return n

  // return up(n - 2) + up(n - 1)
  // let a = 0
  // let b = 0
  // const
  for (let i = 0; i < n; i++) {
    if (n === 1 || n === 2) {
    }
  }
}

console.log(up(1)) // 1
console.log(up(2)) // 2
console.log(up(3)) // 3
console.log(up(4)) // 5
console.log(up(5)) // 8
console.log(up(45)) // 1
// 1,1,1,1,1
// 1,1,1,2
// 1,1,2,1
// 1,2,1,1
// 2,1,1,1
// 2,2,1
// 1,2,2
// 2,1,2
