class MyClass {
  instanceProperty = 'bork'
  boundFunction = () => this.instanceProperty

  static staticProperty = 'babelIsCool';
  static staticFunction = function fn() {
    return MyClass.staticProperty
  }
}

export default MyClass
