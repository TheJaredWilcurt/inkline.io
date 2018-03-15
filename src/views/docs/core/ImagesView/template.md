# Images
Documentation and examples for images, such as responsiveness (so they never become larger than their parent elements) 
and add lightweight styles using modifier classes.

## Responsive Images
Images in Inkline are made responsive using the `.-responsive` modifier. To achieve that, we apply `max-width: 100%;` 
and `height: auto;` to the image so that it scales with the parent element, without overflowing the image's native width.

<img src="https://placehold.it/1200x400" width="1200" height="400" class="img -fluid" alt="Responsive image">

~~~html
<img src="..." width="1200" height="400" class="img -responsive" alt="Responsive image">
~~~

#### SVG images and IE 10
In Internet Explorer 10, SVG images with `.img.-responsive` are disproportionately sized. 
To fix this, we add `width: 100% \9;` where necessary. This fix improperly sizes other image formats, so we don’t 
apply it automatically unless the extension ends with `.svg`.

## Fluid Images
Images in Inkline can be made fluid using the `.-fluid` modifier. To achieve that, we apply `width: 100%;` 
and `height: auto;` to the image so that it scales with the parent element.

<img src="https://placehold.it/1200x400" width="1200" height="400" class="img -fluid" alt="Fluid image">

~~~html
<img src="..." width="1200" height="400" class="img -fluid" alt="Fluid image">
~~~

## Image Thumbnails
In addition to our border-radius utilities, you can use .img-thumbnail to give an image a rounded 1px border appearance.

<img src="https://placehold.it/1200x400" width="1200" height="400" class="img -fluid" alt="Fluid image">

~~~html
<img src="..." width="1200" height="400" class="img -fluid" alt="Fluid image">
~~~
