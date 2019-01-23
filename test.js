var c = [1, 2, 3, 4, 5]

// 这是一个 本地暂存的库存，可以随时提取

c.map(function (a) {
    return a + 2
})
// 再写一个函数

c.reduce(function(a,b){
    return a+b
})

// 再来写点什么 来验证 git checkout . 的功能有什么用   
// 验证结果： git checkout .（回退所有 git checkout --<file> 回退指定文件）  回退所有工作区的修改

// 验证 git reset HEAD . 的功能效果
// 验证结果： git reset HEAD . 将本地git add 的内容 回退到的工作区  


// 做 cherry-pick 有什么用

// git cherry-pick <target-commit-id>命令是只将target-commit-id这一个提交提取到当前分支上

console.log(111)
console.log(222)
