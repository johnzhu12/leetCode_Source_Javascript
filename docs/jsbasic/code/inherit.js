

function inherit(Child, Parent) {
  Child.prototype = Object.create(Parent.prototype)

  Child.prototype.constructor = Child
  if (Object.setPrototypeOf) {
    Object.setPrototypeOf(Child, Parent)
  } else if (Child.__proto__) {
    Child.__proto__ = Parent
  } else {
    for (var k in Parent) {
      if (Parent.hasOwnProperty(k)) {
        Child[k] = Parent[k]
      }
    }
  }


}

function Parent() {
  this.a = '1'
  this.b = '2'
}
Parent.staticP = '3'
Parent.prototype.shareFunction = function() {
  console.log('hello')
}
function Child() {
}


inherit(Child, Parent)
var c = new Child()
console.log('继承后的Child', Child.staticP)

c.shareFunction()