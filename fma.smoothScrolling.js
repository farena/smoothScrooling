/*
This function will enable smooth scrooling for navbar anchors.
@author = Federico Arena.
@input options-> url = array() // relative urls enabled. Default = '/'.
@input options-> urlMaxLenght = (int) // full url lenght without the relative part. Default = 20.
@input options-> offset = (int) // offset pixels from the target. Default = 60.
@input options-> selector = jQuery('selector') // Must be the navbar anchors. Required
 */
var smoothScrolling = function(opt) {
    if (!opt.url) opt.url = '/';
    if (!opt.urlMaxLenght) opt.urlMaxLenght = 20;
    if (!opt.offset) opt.offset = 60;
    if (opt.selector) {
        opt.url.forEach(function (a) {
            if (window.location.pathname == a) {
                opt.selector.click(function (e) {
                    console.log($(this).attr('href').length);
                    if ($(this).attr('href').length < 20) {
                        e.preventDefault();
                        $('html,body').animate({scrollTop: $($(this).attr('href')).offset().top - opt.offset},'slow');
                    }
                });
            }

        })
    } else {
        console.log('## fma.smoothScrolling ## selector is not defined!')
    }
};