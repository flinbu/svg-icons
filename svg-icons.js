'use strict';

function SVGIcons(iconsPath) {
    this.iconsPath = iconsPath;
    if (!this.iconsPath) {
        this.iconsPath = 'icons/';
    } else {
        this.lastChar = this.iconsPath.substr(-1);
        if (this.lastChar !== '/') {
            this.iconsPath = this.iconsPath + '/';
        }
    }
    this.path = iconsPath;
};

SVGIcons.prototype.load = function() {
    var iconsContainer = document.querySelectorAll('[data-icon]'),
        iconsPath = this.iconsPath;
    iconsContainer.forEach(function(el) {
        var loaded = (' ' + el.className + ' ').indexOf(' svg-icon ') > -1;
        if (!loaded) {
            if (typeof SVGRect !== 'undefined') {
                var icon = el.getAttribute('data-icon'),
                    ajax = new XMLHttpRequest();
                ajax.open('GET', iconsPath + icon + '.svg', true);
                ajax.send();
                ajax.onload = function() {
                    el.innerHTML = ajax.responseText;
                };
                el.className = 'svg-icon ' + icon + '-icon' + ((el.className.length > 0) ? ' ' + el.className : '');
                el.removeAttribute('data-icon');
            } else {
                el.setAttribute('data-icon-error', 'SVG is not supported');
            }
        }
    });
};