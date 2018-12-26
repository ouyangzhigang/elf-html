require('../index.html')
require('../css/package.scss')

var Preloader = require('preloader.js')

/**
 * init
 */
function init() {
  console.log('init ok')
}

/**
 * preloader && start
 */
var preloader = new Preloader({
  resources: [],
  concurrency: 4,
  perMinTime: 1000 // 加载每个资源所需的最小时间，一般用来测试 loading
})
preloader.addProgressListener(function (loaded, length) {
  console.log('loaded', loaded, length, loaded / length)
})
preloader.addCompletionListener(function () {
  $('#o2_loading').remove()
  $('#o2_main').removeClass('hide')

  init()
})
preloader.start();

function Parent () {
  this.a = 1;
  this.b = [1, this.a];
  this.c = {demo: 5};
  this.show = function () {
    console.log(this.a + ' ' + this.c.demo + ':' + this.b);
  }
}
 
function Child () {
  this.a = 2;
  this.change = function () {
    this.b.push(this.a);
    this.a = this.b.length;
    this.c.demo = this.a++
  }
}

Child.prototype = new Parent();
var parent = new Parent();
var child = new Child();

child.a = 11;
parent.show();
child.show();

child.change();

parent.show();
child.show();
