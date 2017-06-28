# svg-icons
SVG Icons class to get svg icons in html

## Usage
Call svg-icons.js (.min included) in your html
```
<script src="path/to/js/svg-icons.js"></script>
```

Call initiate SVG Icons in your js file
```
var svgIcon = new SVGIcons();
svgIcons.load();
```

By default, the icons path is set to the root directory (./icons), but you can set you own path. You can recall the method when new elements are added to DOOM.
```
var svgIcons = new SVGIcons('path/to/icons');
svgIcons.load();
```
#### On HTML
Now, you need to set the icon for an element, just use the data-icon attribute in the HTML element. Just submit the filename of the SVG file without extension
```
<span data-icon="{{filename}}"></span>

// Example for print.svg file
<span data-icon="print"></span>
```

SVG code will be placed inside this tag and the class 'svg-icon' and '{{filename}}-icon' (print-icon in the example). The result looks like
```
<span data-icon="print" class="svg-icon print-icon">
  <svg>
    ...
</span>
```

The icons used to dev are from [Byte Size Icons](https://github.com/danklammer/bytesize-icons) from @danklammer
