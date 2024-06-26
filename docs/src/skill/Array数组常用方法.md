# Array 数组常用方法

## 复杂对象数组去重

### 单个复杂对象数组去重

```js
let arr = [
  { id: 1, name: 'zs' },
  { id: 2, name: 'ls' },
  { id: 1, name: 'zs' }
]
const obj = {}
arr = arr.reduce((pre, item) => {
  if (!obj[item.id]) {
    obj[item.id] = true
    pre.push(item)
  }
  return pre
}, [])
console.log(arr) // {id: 1, name: 'zs'}{id: 2, name: 'ls'}
```

## 两个复杂对象数组内相同的元素删除

```js
// 例如下方两个数组删除相同元素之后 arr1 剩下【赵六】和【孙七】 arr2 剩下【王五】
const arr1 = [
  { pid: '2023', name: '张三' },
  { pid: '2024', name: '李四' },
  { pid: '2026', name: '赵六' },
  { pid: '2027', name: '孙七' }
]
const arr2 = [
  { id: '2024', name: '李四' },
  { id: '2023', name: '张三' },
  { id: '2025', name: '王五' }
]
const arrId = arr2.map(item => item.id)
const someArr = arr1.filter(item => arrId.includes(item.pid))
const someId = someArr.map(item => item.pid)
arr1 = arr1.filter(item => !someId.includes(item.pid))
arr2 = arr2.filter(item => !someId.includes(item.id))
console.log(arr1, arr2) // arr1 [{ pid: '2026', name: '赵六' },{ pid: '2027', name: '孙七' }] arr2 [{ id: '2025', name: '王五' }]
```

## 根据数组的相同项对数组进行重构

```js
const arr = [
  { time: '2022-11-1', name: '张三' },
  { time: '2022-11-1', name: '李四' },
  { time: '2022-11-2', name: '王五' },
  { time: '2022-11-2', name: '赵六' },
  { time: '2022-11-3', name: '孙七' }
]
const timeArr = [...new Set(arr.map(item => item.time))]
let newArr = []
timeArr.forEach(item => {
  newArr.push({ time: item, list: [] })
})
newArr.forEach(it => {
  arr.forEach(item => {
    if (it.time == item.time) {
      it.list.push({ name: item.name })
    }
  })
})
console.log(newArr)
// 重构后的数组
// [
// {time: '2022-11-1', list: [ {naem: '张三'}， {name: '李四'} ]},
// {time: '2022-11-2', list: [ {naem: '王五'}， {name: '赵六'} ]},
// {time: '2022-11-3', list: [ {naem: '孙七'}]}
// ]
```

## 常用方法（不改变原数组）

### concat()

`concat()` 方法用于连接两个或多个字符串或数组。

该方法没有改变原数据，会返回新字符串或数组。

### every()

`every()` 方法用于检测数组所有元素是否都符合指定条件（通过函数提供）。

如果数组中检测到有一个元素不满足，则整个表达式返回 false ，且剩余的元素不会再进行检测。如果所有元素都满足条件，则返回 true。

`数组.every `常用来判断是否全选，只有条件全部满足才返回 true

```js
const arr=[
{id：1，name:'zs',state:true},
{id：2，name:'zs',state:false},
{id：3，name:'zs',state:true},
]
const result = arr.every(item=>item.state) // false
```

### some()

`some()` 方法用于检测数组中的元素是否满足指定条件（函数提供）。

如果有一个元素满足条件，则表达式返回 true , 剩余的元素不会再执行检测。如果没有满足条件的元素，则返回 false

`some()` 不会对空数组进行检测。

`数组.forEach `方法会循环数组，且会进行一个完整的循环，无法被终止，浪费性能

`数组.some `方法在找到数据后就可以使用 `return true` 终止 `some`

```js
const arr = [1,2,3,4]
arr.some((item,index) => {
  if(item === "3"){
    console.log(index);
    retuen true
  }
})
```

### filter()

`filter()` 方法创建一个新的数组，新数组中的元素是通过检查指定数组中符合条件的所有元素。

`filter() `不会对空数组进行检测。

`filter()` 方法可以过滤符合条件的数值，返回一个新数组，可以利用 filter 和 indexOf 进行数组去重操作

```js
var arr = [1, 2, 3, 4, 4, 2, 'a', 'b', 'a']
arr = arr.filter((item, index) => {
  return arr.indexOf(item) === index
}) //arr--[1,2,3,4,'a','b']
```

### map()

`map()` 方法返回一个新数组，数组中的元素为原始数组元素调用函数处理后的值。

`map()` 方法按照原始数组元素顺序依次处理元素。

`map()` 不会对空数组进行检测。

### slice()

`slice()` 方法可从已有的数组中返回选定的元素或提取字符串的某个部分，并以新的字符串返回被提取的部分。

```js
const originalArray = [1, 2, 3, 4, 5]
const newArray = originalArray.slice(1, 4)
console.log(newArray) //输出: [2,3,4]
```

### reduce()

数组.reduce 是一个函数循环累加器

```js
const arr=[
  {id：1，name:'西瓜',state:true,price:10,count:1},
  {id：2，name:'榴莲',state:true,price:20,count:2},
  {id：3，name:'草莓',state:true,price:30,count:3},
]
//累加选中的水果价格
//普通做法
let sum = 0;
arr.filter(item=>item.state).forEach(item=>{
  sum += item.price*item.count
})
//使用 reduce,不用在外面定义 sum，直接在方法内定义
//arr.filter(item=>item.state).reduce((结果，item)=>{}，初始值)
arr.filter(item=>item.state).reduce((sum，item)=>{
  return sum += item.price*item.count
}，0)
```

## 会改变原数组的方法

### shift()

`shift()` 方法用于把数组的第一个元素从其中删除并返回删除的元素。

### pop()

`pop()` 方法用于删除数组的最后一个元素并返回删除的元素

### push()

`push()` 方法可向数组的末尾添加一个或多个元素，并返回新的长度。

### unshift()

`unshift()` 方法可向数组的开头添加一个或更多元素，并返回新的长度。

### reverse()

`reverse()` 方法用于颠倒数组中元素的顺序。

### sort()

`sort()` 方法用于对数组的元素进行排序。

排序顺序可以是字母或数字，并按升序或降序，默认排序顺序为按字母升序。

```js
var myarr1 = ['h', 'e', 'l', 'l', 'o']
myarr1.sort()
console.log(myarr1) //(5) ['e', 'h', 'l', 'l', 'o']
```

```js
var myarr2 = [9, 5, 1, 4, 6]
myarr2.sort()
console.log(myarr2) //(5) [1, 4, 5, 6, 9]
```

使用数字排序，你必须通过一个函数作为参数来调用。

函数指定数字是按照升序还是降序。

### splice()

splice() 方法用于添加或删除数组中的元素。

**删除** 一个参数（要删除第一项的位置），第二个参数（要删除的项数）

```js
let arr = ['aaa', 'bbb', 'ccc', '111', '22', '333']
const newArr = arr.splice(2, 2)
// arr: [aaa,bbb,22,333]; newArr: [ccc,111]
```

**添加** 三个参数，第一个参数（其实位置），第二个参数（截取的元素个数），剩下参数（插入的项）

```js
var arr = ['a', 'b', 'c', 'd']
arr.splice(2, 1, 'w', 'z') //从下标为2的地方截取1个元素，并添加两个元素
console.log(arr) //a,b,w,z,d
```
