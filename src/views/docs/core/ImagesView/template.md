# Images
Documentation and examples for images, using lightweight styles and modifier classes. { .lead }

## Responsive Images
Images in Inkline are made responsive using the `.-responsive` modifier. To achieve that, we apply `max-width: 100%;` 
and `height: auto;` to the image so that it scales with the parent element, without surpassing the image's native width.

<img src="https://placehold.it/1000x400" width="1000" height="400" class="image -responsive" alt="Responsive image">

~~~html
<img src="..." width="1000" height="400" class="image -responsive" alt="Responsive image">
~~~

#### SVG Images and IE 10
In Internet Explorer 10, SVG images with `.img.-responsive` are disproportionately sized. 
To fix this, we add `width: 100% \9;` where necessary. This fix improperly sizes other image formats, so we don’t 
apply it automatically unless the extension ends with `.svg`.

## Fluid Images
Images in Inkline can be made fluid using the `.-fluid` modifier. To achieve that, we apply `width: 100%;` 
and `height: auto;` to the image so that it scales with the parent element.

<img src="https://placehold.it/1200x400" width="1200" height="400" class="image -fluid" alt="Fluid image">

~~~html
<img src="..." width="1200" height="400" class="image -fluid" alt="Fluid image">
~~~

## Image Thumbnails
You can use the `.-thumbnail` modifier to give an image a rounded 1px border appearance.

<img src="https://placehold.it/200x200" class="image -thumbnail" alt="Thumbnail">

~~~html
<img src="..." class="image -thumbnail" alt="Thumbnail">
~~~

## Polaroid
Besides thumbnails, you can opt for a retro look having a larger bottom border using the `.-polaroid` modifier.

<img src="https://placehold.it/200x200" class="image -polaroid" alt="Polaroid">

~~~html
<img src="..." class="image -polaroid" alt="Polaroid">
~~~

## Image Alignment
Align images with the helper classes or text alignment classes. Block-level images can be centered using the `._margin-x-auto` 
margin utility class.

<div class="_clearfix">
    <img src="https://placehold.it/200x200" class="image _float-left" alt="Left floating image">
    <img src="https://placehold.it/200x200" class="image _float-right" alt="Right floating image">
</div>

~~~html
<img src="..." class="image _float-left" alt="Left floating image">
<img src="..." class="image _float-right" alt="Right floating image">
~~~

<div class="_text-center">
    <img src="https://placehold.it/200x200" alt="Centered image">
</div>

~~~html
<div class="_text-center">
    <img src="https://placehold.it/200x200" alt="Centered image">
</div>
~~~

<img src="https://placehold.it/200x200" class="_display-block _margin-x-auto" alt="Centered image">

~~~html
<img src="https://placehold.it/200x200" class="_display-block _margin-x-auto" alt="Centered image">
~~~

## Picture
If you are using the `<picture>` element to specify multiple `<source>` elements for a specific `<img>`, make sure to add 
the `.img` classes to the `<img>` and not to the `<picture>` tag.

~~~html
​<picture>
    <source srcset="..." type="image/svg+xml">
    <img src="..." class="img -fluid -thumbnail" alt="...">
</picture>
~~~
