module.exports=
{
    "extends": [
      "tslint-eslint-rules"
    ],
    "rulesDirectory": [],
    "rules": {
      "adjacent-overload-signatures": false,  //  Enforces function overloads to be consecutive.
      "ban-comma-operator": true, //禁止逗号运算符。
      "ban-type": [true, ["object","User {} instead."],["string"]], //禁止类型
      "no-any": false,//不需使用any类型
      "no-empty-interface":true, //禁止空接口 {}
      "no-internal-module": true, //不允许内部模块
      "no-magic-numbers": false, //不允许在变量赋值之外使用常量数值。当没有指定允许值列表时，默认允许-1,0和1
      "no-namespace": [ true,"allpw-declarations"], //不允许使用内部modules和命名空间
      "no-non-null-assertion": true , //不允许使用!后缀操作符的非空断言。
      "no-parameter-reassignment": true, //不允许重新分配参数
      "no-reference": true, // 禁止使用/// <reference path=> 导入 ，使用import代替
      "no-unnecessary-type-assertion": false, //如果类型断言没有改变表达式的类型就发出警告
      "no-var-requires": false, //不允许使用var module = require("module"),用 import foo = require('foo')导入
      "prefer-for-of":true,  //建议使用for(..of)
      "promise-function-async": false, //要求异步函数返回promise
      "typedef": [
          true, 
          {
          "call-signature": "nospace",
          "index-signature": "nospace",
          "parameter": "nospace",
          "property-declaration": "nospace",
          "variable-declaration": "nospace"
        }
      ], //需要定义的类型存在
      "typedef-whitespace": true, //类型声明的冒号之前是否需要空格
      "unified-signatures": true, //重载可以被统一联合成一个
          //function 专用
      "await-promise": false,  //警告不是一个promise的await
      "ban": [
        true,
        "eval",
        {"name": "$", "message": "please don't"},
        ["describe", "only"],
        {"name": ["it", "only"], "message": "don't focus tests"},
        {
          "name": ["chai", "assert", "equal"],
          "message": "Use 'strictEqual' instead."
        },
        {"name": ["*", "forEach"], "message": "Use a regular for loop instead."}
          ],
      "curly": true, //for if do while 要有括号
      "forin":true, //用for in 必须用if进行过滤
      "import-blacklist":true, //允许使用import require导入具体的模块
      "label-postion": true, //允许在do/for/while/swith中使用label
      "no-arg":true, //不允许使用 argument.callee
      "no-bitwise":true, //不允许使用按位运算符
      "no-conditional-assignmen": true, //不允许在do-while/for/if/while判断语句中使用赋值语句
      "no-console": false, //不能使用console
      "no-construct": true, //不允许使用 String/Number/Boolean的构造函数
      "no-debugger": true, //不允许使用debugger
      "no-duplicate-super": true, //构造函数两次用super会发出警告
      "no-empty":true, //不允许空的块
      "no-eval": true, //不允许使用eval
      "no-floating-promises": false, //必须正确处理promise的返回函数
      "no-for-in-array": false, //不允许使用for in 遍历数组
      "no-implicit-dependencies": false, //不允许在项目的package.json中导入未列为依赖项的模块
      "no-inferred-empty-object-type": false, //不允许在函数和构造函数中使用{}的类型推断
      "no-invalid-template-strings":  true, //警告在非模板字符中使用${
      "no-invalid-this": true, //不允许在非class中使用 this关键字
      "no-misused-new": true, //禁止定义构造函数或new class
      "no-null-keyword": false, //不允许使用null关键字
      "no-object-literal-type-assertion": false, //禁止object出现在类型断言表达式中
      "no-return-await": true, //不允许return await
      "arrow-parens":  false //箭头函数定义的参数需要括号
    },
    "ecmaFeatures": {
        "objectLiteralShorthandProperties": true // 对象字面量属性名简写
    }
  }