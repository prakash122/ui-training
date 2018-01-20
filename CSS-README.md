# CSS

### Introduction


###Loading styles

Cascading Order (Increasing order or priority)

Specification Method
- Browser default
- External style sheet
- Internal style sheet
- Inline style

Internal Priorities

- element
- .class
- #id

Handling the default behavior ?

[Normalize CSS](http://necolas.github.io/normalize.css/)

[Reset CSS](http://meyerweb.com/eric/tools/css/reset/index.html)
For default styles being reset

READ or mention about
html5rocks, CSS Tricks

### Selectors

### Webfonts
using google fonts

### Colors


### Link psuedo classes

```
a:link {color:#FF0000;}      /* unvisited link */
a:visited {color:#00FF00;}  /* visited link */
a:hover {color:#FF00FF;}  /* mouse over link */
a:active {color:#0000FF;}  /* selected link */

/*remove underlines from links*/
a {text-decoration: none;}
```

### Shadow & Radius

### New Selectors

element, element

div, p {..} /*all div and all p elements*/

ancestor > descendent
div p {..} /*all p elements in the div elements*/

parent > child
div>p {..} /* all p elements who immediate parent is a div */

pre-sibling~target-sibling
div~p {..} /*all p elements preceded by a div element*/

[attribute=value]
a [name="link"] {..} /*all a elements with attribute name="link" */


### Psuedo Selectors

##### :first-child, :last-child, and :nth-child(n)

ul li:first-child {...} /*first li element of all ul elements */
ul li:last-child {...} /*last li element of all ul elements */
ul li:nth-child(3) {...} /*third li element of all ul elements */
ul li:nth-child(odd) {...} /*odd li element of all ul elements */
ul li:nth-child(even) {...} /*even li element of all ul elements */


##### :checked, :disabled, :enabled, :required, and :focus

input:checked {...} /*every checked radio or checkbox input element */
input:disabled {...} /*every disabled input element */
input:enabled {...} /*every enabled input element */
input:required {...} /*every required input element */
input:focus {...} /*the focused input element */

##### ::selection
/* content selected by user */
::selection {color:red; background:yellow;}
::-moz-selection {color:red; background:yellow;}



### Vendor Prefixes
-moz-     /* Firefox and other browsers using Mozilla's browser engine */
-webkit-  /* Safari, Chrome and browsers using the Webkit engine */
-o-       /* Opera */
-ms-      /* Internet Explorer (but not always) */

/*few browser version back */
-webkit-border-radius: 4px;
-moz-border-radius: 4px;
border-radius: 4px; /* W3C property at the last */

[caniuse.com](caniuse.com)

### BoxModal
box-sizing

### Layout
Float
- fixing floating elements


### Background

Overflow

Lets create modal popup

### Image Sprites & Data URI Image format
Image Sprites

Each image load needs an additional HTTP request. Low performancce, high bandwidth usage.
Smaller images should be combined into one (sprites). Requires only one HTTP request.
Use background-position property to set specific image from the sprite.
Use some sprites generator like http://zerosprites.com/
Image in dataURI format

No image file needed. Saves tons of bandwidth.
CSS or HTML file size will increase. CSS can be compressed.
Sometimes it is hard to maintain site with embedded data URIs for everything. Easier to just update an image and replace it.
Use some dataURI converter like webSemantics dataURI Converter

### New Props

##### transform
/*transform: none|transform-functions|initial|inherit;*/

transform: rotate(angle);

transform: scale(value, [value]);
transform: scaleX(value);
transform: scaleY(value);

transform: skewX(value);
transform: skewY(value);

transform:  translate(value [, value]);
transform: translateX(value);
transform: translateY(value);


##### transition

### IE Hacks

<!DOCTYPE html>
<!--[if lt IE 7 ]> <html class="ie6"> <![endif]-->
<!--[if IE 7 ]>    <html class="ie7"> <![endif]-->
<!--[if IE 8 ]>    <html class="ie8"> <![endif]-->
<!--[if IE 9 ]>    <html class="ie9"> <![endif]-->
<!--[if (gt IE 9)|!(IE)]><!--> <html class=""> <!--<![endif]-->
<head>
...

### Media queries
