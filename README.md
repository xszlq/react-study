### 未使用组件：

- corner
- cxSelect
- html5shiv（在项目中，做了一个简单的处理，将article等html5元素，create了一下，但在IE9以上似乎没这个必要）
- jquery-serlalize-object
- jquery-validation
- less.js
- onepage-scroll
- respond
- roundabout
- roundabout-shapes
- select2
- twbs-pagination


### 已删除组件

- corner
- cxSelect
- html5shiv
- jquery-serlalize-object
- less.js
- onepage-scroll
- respond
- roundabout
- roundabout-shapes
- select2
- twbs-pagination


### 项目组件，npm中没有，可能是自己写的

- BootSideMenu
- dragNav
- imgareaselect（图片剪裁）
- inputNumber
- jquery-pagination (npm中有一个[paginationjs](https://www.npmjs.com/package/paginationjs)，比较了一下传参是不同的，所以用不了)
- jquery-simple-combobox
- numberAdjust
- qcloud
- select2-bootstrap-theme（select2-bootstrap.css有被引用，但是select2.js找不到，猜想是冗余引用）
- sidepanel
- SpellLib
- subjectSwitching
- webim
- fontawensome
- jquery-ui


### 遗留不需要使用的组件

- json2.js（已删除）

### 可能有问题的npm组件

- jquery-ui，需要手动grunt编译
- fontawensome，在npm包里面，它对应的是node-fontawesome，有问题，所以没有使用。另外有一个cd-font-awesome，并不是官方的
- icheck，主要是blue.png，要引用skins下面的minimal目录下的blue.png

### 重复组件

- form 和 jquery-form 的js文件是一样，区别在于版本上的

### 未压缩的组件

- jquery.form.js
- jquery.placehoder.js
- jquery.hotkeys.js

### 替代组件

- underscore用lodash来代替