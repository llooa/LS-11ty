---
title: Data Visualization
hero: images/posts/json.png
thumbnail: images/posts/json_tn.png
summary: 'Javascript has grown from a way to add interactivity on your page, to a language that lets you perform tasks that once belonged to servers. JSON provides for an easy way to create and store data structures within JavaScript. It’s super popular and a great alternative to XML.'
tags: 
  - post
  - chrome
---
## Vector Graphics

Vector graphics are different than bitmaps because instead of storing information for each pixel in an image, mathematical formulas for each element in an image is stored in a programming language that can rebuild the image on any screen at the best resolution available.

A mathematical calculation is often smaller than a bitmap. Take a look at the graphic below and scroll through the code. You can see that it isn't just a series of pixels, but a mathematical definition of the lines, strokes and colors of shapes.

<a class="jsbin-embed" href="http://jsbin.com/hotaqe/2/embed?html,output"></a><script src="http://static.jsbin.com/js/embed.js"></script>

Because they're mathematical definitions instead of pixels, it means that no matter what size or the resolution of the device, the image will always look the same. This image is only 3k...a fraction of what it would take a bitmap of a similar size.

This, of course, is a huge advantage over bitmaps, but vectors are only good for certain types of images. They're not great for representing photographic images or things that can best be expressed solely as bitmaps. However, they are excellent for interactive web graphics and even better for web animations, especially data visualizations.

## Common Web formats and visualization

Online graphics are usually served in just a few formats. The most common bitmap formats are GIF, JPEG and PNG. Because these formats are, for the most part, static (with the exception of GIF), they are not best for representing data for visualizations. In addition to being difficult to animate, individual data points or elements are not accessible through JavaScript.

| Format | Description       |
| ------ | ----------------- |
| GIF    | 256 colors max    | Low quality, but only Bitmap format that supports very basic animation |
| JPEG   | 24-Bit True color | High quality especially on photos, but no animation |
| PNG    | Up to 64-bit      | Smooth transparency, great compression, no animation |

## Vector Graphics Online

For vector graphics on web projects and visualizations, there's three options available. Using HTML/CSS, HTML/Canvas or SVG.

### HTML/CSS Vector Graphics

The first, CSS, is probably the easiest to get started with, but also the most complex and least flexible. CSS has very few primitives (simple shapes) and lets you create rectangles with rounded edges that you can draw with as well as some lines, but that's not nearly enough primitives for complex graphics. Although some people have managed to create fairly complex images with CSS (see figure below) it's not considered a viable option for anything other than simple visualizations.

<p data-height="268" data-theme-id="0" data-slug-hash="faJpv" data-default-tab="result" data-user="jacksaidwhat" class='codepen'>See the Pen <a href='http://codepen.io/jacksaidwhat/pen/faJpv/'>Pure CSS Totoro</a> by Jack Parsons (<a href='http://codepen.io/jacksaidwhat'>@jacksaidwhat</a>) on <a href='http://codepen.io'>CodePen</a>.</p>
<script async src="//assets.codepen.io/assets/embed/ei.js"></script>

### The HTML `<canvas>` Element

Second, there's a way to create graphics through an HTML element called `<canvas>`. Canvas is part of the HTML5 specification, the language that makes up modern web pages. To create a graphic, you create a `<canvas>` tag in your HTML, give it an ID and then use javascript to write with a rich graphics language.

<a class="jsbin-embed" href="http://jsbin.com/zoxoke/2/embed?js,output">JS Bin</a><script src="http://static.jsbin.com/js/embed.js"></script>

The browser will take that data, and convert it to a bitmap that renders within a specified area.

When you generate a canvas element, what gets placed in your HMTL document is a bitmap image. The vector instructions are interpreted, but then quickly converted to a bitmap and that's what you see in the browser. This is the equivalent of placing a PNG graphic, except that you can program that graphic with JavaScript to do things. This is a bit different than what happens in SVG which generates individual shapes that remain a vector in the browser and become part of your HTML document.

The commands for drawing are also more like commands than objects. Here's an example of what it would take to draw a rectangle on the screen.

```javascript
function drawRect() {
  var canvas = document.getElementById('rect')
  var context = canvas.getContext('2d')
  context.fillStyle = 'rgb(233,192,117)'
  context.fillRect(0, 0, 100, 100)
}
```

Using canvas feels more like programming and is very fast. Most of the time this language is too difficult to use for visualizations manually. Some sort of compiler will generate the code for you. This is a very good format in a lot of cases and performs better when you have a lot of elements in your visualization because it will be faster, but it's definitely a bit harder to work with the original elements.
