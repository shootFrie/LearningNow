// 策略模式
const compileUtil = {
  // 对直接获取值,如果值是对象v-html="person.name", {{}}
  getValue(expr, vm) { 
    // console.log(expr)
    return expr.split('.').reduce((data, currentVal) => {
      return data[currentVal];
    }, vm.$data);
  },
  ContentVal(expr, vm){
    return expr.replace(/\{\{(.+?)\}\}/g, (...args) => {
      return this.getValue(args[1], vm)
    });
  },
  text(node, expr, vm){ // expr: msg 
    let value;
    if(/\{\{(.+?)\}\}/.test(expr)){ // 中间没有括号拿不到
      value = expr.replace(/\{\{(.+?)\}\}/g, (...args) => {
        new Watcher(vm, args[1], () => { // {{person.name}} - {{person.age}}
          this.updater.textUpdater(args[1], this.ContentVal(expr, vm)); // 后面继续解析
        })
      //   // console.log(args); 
        return this.getValue(args[1], vm)
      });
    } else {
      value = this.getValue(expr, vm);
      new Watcher(vm, expr, (newVal) => { // 添加watcher， 返回新值
        this.updater.textUpdater(node, newVal);
      })
    }
   
    this.updater.textUpdater(node, value)
  },
  html(node, expr, vm){ 
    const value = this.getValue(expr, vm);
    new Watcher(vm, expr, (newVal) => { // 添加watcher， 返回新值
      this.updater.htmlUpdated(node, newVal);
    })
    this.updater.htmlUpdated(node, value);
  },
  bind(node, expr, vm, eventName){
    const value = this.getValue(expr, vm);
    node.setAttribute(attrName, value); // 未考虑完
  },
  model(node, expr, vm){
    const value = this.getValue(expr, vm);
    this.updater.modelUpdater(node, value);
  },
  on(node, expr, vm, eventName){
    // 函数名获取
    let fn = vm.$options.methods && vm.$options.methods[expr];
    node.addEventListener(eventName, fn.bind(vm), false); // 将fn的this绑定为vm
  },
  // 更新的函数
  updater:{
    modelUpdater(node, value) {
      node.textContent = value;
    },
    textUpdater(node, value) {
      node.textContent = value;
    },
    htmlUpdated(node, value){
      node.innerHTML = value;
    }
  }
}
class Compile{
  constructor(el, vm){
    this.el = this.isElementNode(el) ? el : document.querySelector(el);
    // console.log(this.el);
    this.vm = vm;
    // 编译子节点，拿到每个子节点；这时会存在页面性能问题（重绘回流），js中有文档碎片，可以放缓存里
    // 1. 获取文档碎片对象, 放入内存中会减少页面的回流和重绘
    const fragment = this.node2Fragment(this.el);
    // console.log(fragment);

    // 2.编译模板
    this.compile(fragment);

    // 3.追加子元素到根元素
    this.el.appendChild(fragment);

  }
  // 编译模板
  compile (fragment) {
    // 1.获取每个子节点
    const childNodes = fragment.childNodes; // childNodes是类数组
    [...childNodes].forEach(child => {  // 遍历最外层
      // console.log(child); // 节点
      if(this.isElementNode(child)) {
        // 是元素节点；编译元素节点
        // console.log('元素节点', child);
        this.compileElement(child);
        
      } else {
        // 文本节点；编译
        // console.log('文本节点', child);
        this.compileText(child);
      }

      if(child.childNodes && child.childNodes.length){ // 如果还有子节点，递归遍历
        this.compile(child);
      }
    })
  }
  // 编译元素节点
  compileElement(node) {
    const attributes = node.attributes; // 属性Map对象
    [...attributes].forEach(attr => {
      // console.log(attr);
      const {name, value} = attr; // 属性名，属性值
      if(this.isDirective(name)) { // v-html， v-text, v-model， v-on:click
        const [, directive] = name.split("-"); // html, text, model, on:click
        const [dirName, eventName] = directive.split(":"); // v-bind: 
        // 更新数据 数据驱动视图
        compileUtil[dirName](node, value, this.vm, eventName);

        // 删除有指令的标签的属性 
        node.removeAttribute(directive);
      } else if (this.isEventName(name)) { // 处理@click="handleClick"
        let [,eventName] = name.split('@');
        compileUtil['on'](node, value, this.vm, eventName);
      }

    })

  }

  // 编译文本节点
  compileText(node) {
    // {{}}
    const content = node.textContent;
    if(/\{\{.+?\}\}/.test(content)) {
      compileUtil['text'](node, content,this.vm);
    }
  }
  // 创建文档碎片，并将数据写入文档碎片
  node2Fragment(el){
    // 创建文档碎片；JavaScript中，文档碎片独立于DOM树之外，存在于内存中
    const f = document.createDocumentFragment();
    let firstChild; 
    while (firstChild = el.firstChild) { // firstChild赋值el的第一个子节点，赋值成功就执行循环（即el.firstChild有值）
      f.appendChild(firstChild); // 将DOM树中的元素插入到文档碎片中的时候，DOM树中的元素会删除
    }
    return f;
  }
  // 判断@click="handleClick"
  isEventName(attr) {
    return attr.startsWith('@');
  }
  // 判断是否v-开头
  isDirective(attrName){
    return attrName.startsWith("v-");
  }
  // 判断el是否是元素节点对象
  isElementNode(node) {
    return node.nodeType === 1; // 元素节点对象nodeType ===  1
  }
}

class MVue{
  constructor(options){
    this.$el = options.el;
    this.$data = options.data;
    this.$options = options;
    // 判断下,无值报错
    if(this.$el) {
      // 1. 实现一个数据观察者
      new Observer(this.$data);
      // 2. 实现一个指令解析器； 解析el
      new Compile(this.$el, this); // 第一步
    }
  }
}
