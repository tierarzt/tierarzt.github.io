'use strict';

document.addEventListener('DOMContentLoaded', function() {
    // Functions
    function getAll(selector) {
        return Array.prototype.slice.call(document.querySelectorAll(selector), 0);
    }

    // Toggles
    var $burgers = getAll('.navbar-burger');

    if ($burgers.length > 0) {
    $burgers.forEach(function($el) {
        $el.addEventListener('click', function() {
        var target = $el.dataset.target;
        var $target = document.getElementById(target);
        $el.classList.toggle('is-active');
        $target.classList.toggle('is-active');
        });
      });
    }

    var $navbarItems = getAll('a.navbar-item');
    $navbarItems.forEach(function($el){
        $el.addEventListener('click', function(){
            document.getElementById('navMenuIndex').classList.toggle('is-active');
            var $burgers = getAll('.navbar-burger');
            $burgers.forEach(function($burger) {
                 $burger.classList.toggle('is-active');
            });
        });
    });
});