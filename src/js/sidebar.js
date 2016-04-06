/*eslint indent: ["error", 4]*/

var $ = require('jquery')
var t
var testWindowWidth = function () {
    function callback (evt) {
        evt.preventDefault()
        var target = $(this).next('ul')
        if (target.hasClass('open')) {
            target.slideUp().removeClass('open')
        } else {
            target.slideDown().addClass('open')
        }
    }
    if ($(window).width() < 1025) {
        $('li.has-submenu > ul').removeClass('open')
        $('li.has-submenu a').on('click', callback)
    } else {
        $('li.has-submenu > ul').attr('style', '').removeClass('open')
        $('li.has-submenu a').off('click', callback)
    }
}

testWindowWidth()
$(window).on('resize', function () {
    clearTimeout(t)
    t = window.setTimeout(function () {
        testWindowWidth()
    }, 300)
})
