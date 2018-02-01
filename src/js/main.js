require('../index.html')
require('../css/package.scss')
require('./lib/flexible-font.js')

var Preloader = require('preloader.js')

/**
 * init
 */
function init(callback) {
  console.log('init ok')
  callback && callback()
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

  init(function () {
    // var video = document.getElementById('video')
    // var context = canvas.getContext('2d')
    // var errocb = function () {  
    //   console.log('sth wrong!')
    // }  

    // if (navigator.getUserMedia) { // 标准的API  
    //   navigator.getUserMedia({ 'video': true }, function (stream) {  
    //     video.src = stream;
    //     video.play()
    //   }, errocb)
    // } else if (navigator.webkitGetUserMedia) { // WebKit 核心的API  
    //   navigator.webkitGetUserMedia({ 'video': true }, function (stream) {  
    //     video.src = window.webkitURL.createObjectURL(stream) 
    //     video.play()
    //   }, errocb)
    // }

    // // 拍照
    // document.getElementById('picture').addEventListener('click', function() {
    //   context.drawImage(video, 0, 0, 640, 480);
    // })
  })
})

preloader.start()
 


