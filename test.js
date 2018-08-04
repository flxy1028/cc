var c = [1, 2, 3, 4, 5]

// 这是一个 本地暂存的库存，可以随时提取

c.map(function (a) {
    return a + 2
})
// 再写一个函数

c.reduce(function(a,b){
    return a+b
})