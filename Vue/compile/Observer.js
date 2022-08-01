class Watcher {
  // 检测新旧值有没有变化，有变化进行视图更新
  /**
   * vm, expr 对标Compile的getVal
   * cb 回调函数对它进行数据更新
   * 
  */
  constructor (vm, expr, cb) {
    this.vm = vm;
    this.expr = expr;
    this.cb = cb;
    // 获取旧值,保存
    this.oldVal = this.getOldVal();
  }

  getOldVal(){
    Dep.target = this; // 将观察者挂载到Dep里面，target暂存this，this指向整个watcher对象，
    const value = compileUtil.getValue(this.expr, this.vm);
    Dep.target = null; //把对象push进dep就销毁
    return value;
  }

  update(){
    const newVal = compileUtil.getValue(this.expr, this.vm);
    if(newVal !== this.oldVal) {
      this.cb(newVal); // 把新值返回出去
    }
  }
}

class Dep {
  // 为了收集watch
  constructor() {
    this.subs = [];
  }

  // 添加
  addSub(watcher) {
    this.subs.push(watcher);
  }

  // 通知观察者更新
  notify(){
    console.log("通知了观察者", this.subs);
    this.subs.forEach(w => w.update());
  }
}

class Observer {
  constructor(data){
    this.observe(data); // 观察data
  }

  observe(data) {
    if(data && typeof data === 'object') {
      Object.keys(data).forEach(key => { // 遍历一层
        this.defineReactive(data, key, data[key]);
      })
    }
  }

  defineReactive(obj, key, value) { 
    this.observe(value); // 递归遍历多层
    const dep = new Dep();  // 每个属性加一个dep容器
    /**
     * Object.defineProperty(obj , prop , descriptor)
     * Object.defineProperties(obj, props )
     * obj: 要定义属性的对象
     * prop: 要定义或修改的属性的名称或 Symbol
     * props: 定义其可枚举属性或修改的属性描述符的对象
     * descriptor  要定义或修改的属性描述符
     * 
     * Object.defineProperties(obj, {
     *  'property1': {
     *      value: true,
     *      writable: true
     *   }
     * })
    */
    Object.defineProperty(obj, key, {
      enumerator:true,
      configurable: true,
      get(){
        // 订阅数据变化时，往Dep中添加观察者  
        Dep.target && dep.addSub(Dep.target);
        return value;
      },
      set: (newVal) => {
        console.log(this); // 用箭头函数这里的this指向obj
        this.observe(newVal); // 监听新的值
        if(newVal !== value) {
          value = newVal;
        }
        dep.notify();
      }
    })
  }
}
