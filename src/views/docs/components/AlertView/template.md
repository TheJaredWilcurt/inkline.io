# Alerts
Provide contextual feedback messages for typical user actions using the alert component. {.lead}

A card is a flexible and extensible content container. It includes options for headers and footers, a wide variety of content,
contextual background colors, and powerful display options.

## Alert Themes
Alerts are available for any length of text, and can have an optional dismiss button. For choosing the context of the alert,
use the `theme` property.

By default, alerts are set to have `width: 100%`, fully spanning the width of the parent container.

<div class="_margin-bottom-1">
    <i-alert theme="primary">
        <p>A simple primary alert with an <a href="http://inkline.io">example link</a>. It's clickable!</p>
    </i-alert>
</div>
<div class="_margin-bottom-1">
    <i-alert theme="secondary">
        <p>A simple secondary alert with an <a href="http://inkline.io">example link</a>. It's clickable!</p>
    </i-alert>
</div>
<div class="_margin-bottom-1">
    <i-alert theme="success">
        <p>A simple success alert with an <a href="http://inkline.io">example link</a>. It's clickable!</p>
    </i-alert>
</div>
<div class="_margin-bottom-1">
    <i-alert theme="danger">
        <p>A simple danger alert with an <a href="http://inkline.io">example link</a>. It's clickable!</p>
    </i-alert>
</div>
<div class="_margin-bottom-1">
    <i-alert theme="warning">
        <p>A simple warning alert with an <a href="http://inkline.io">example link</a>. It's clickable!</p>
    </i-alert>
</div>
<div class="_margin-bottom-1">
    <i-alert theme="info">
        <p>A simple info alert with an <a href="http://inkline.io">example link</a>. It's clickable!</p>
    </i-alert>
</div>
<div class="_margin-bottom-1">
    <i-alert theme="light">
        <p>A simple light alert with an <a href="http://inkline.io">example link</a>. It's clickable!</p>
    </i-alert>
</div>
<div class="_margin-bottom-1">
    <i-alert theme="dark">
        <p>A simple dark alert with an <a href="http://inkline.io">example link</a>. It's clickable!</p>
    </i-alert>
</div>

~~~html
<i-alert theme="primary">
    <p>A simple primary alert with an <a href="http://inkline.io">example link</a>. It's clickable!</p>
</i-alert>

<i-alert theme="secondary">
    <p>A simple secondary alert with an <a href="http://inkline.io">example link</a>. It's clickable!</p>
</i-alert>

<i-alert theme="success">
    <p>A simple success alert with an <a href="http://inkline.io">example link</a>. It's clickable!</p>
</i-alert>

<i-alert theme="danger">
    <p>A simple danger alert with an <a href="http://inkline.io">example link</a>. It's clickable!</p>
</i-alert>

<i-alert theme="warning">
    <p>A simple warning alert with an <a href="http://inkline.io">example link</a>. It's clickable!</p>
</i-alert>

<i-alert theme="info">
    <p>A simple info alert with an <a href="http://inkline.io">example link</a>. It's clickable!</p>
</i-alert>

<i-alert theme="light">
    <p>A simple light alert with an <a href="http://inkline.io">example link</a>. It's clickable!</p>
</i-alert>

<i-alert theme="dark">
    <p>A simple dark alert with an <a href="http://inkline.io">example link</a>. It's clickable!</p>
</i-alert>
~~~

## Faded Alert Themes
If you want to achieve a faded background color, you can use the `faded` property.

<div class="_margin-bottom-1">
    <i-alert theme="primary" faded>
        <p>A simple primary alert with an <a href="http://inkline.io">example link</a>. It's clickable!</p>
    </i-alert>
</div>
<div class="_margin-bottom-1">
    <i-alert theme="secondary" faded>
        <p>A simple secondary alert with an <a href="http://inkline.io">example link</a>. It's clickable!</p>
    </i-alert>
</div>
<div class="_margin-bottom-1">
    <i-alert theme="success" faded>
        <p>A simple success alert with an <a href="http://inkline.io">example link</a>. It's clickable!</p>
    </i-alert>
</div>
<div class="_margin-bottom-1">
    <i-alert theme="danger" faded>
        <p>A simple danger alert with an <a href="http://inkline.io">example link</a>. It's clickable!</p>
    </i-alert>
</div>
<div class="_margin-bottom-1">
    <i-alert theme="warning" faded>
        <p>A simple warning alert with an <a href="http://inkline.io">example link</a>. It's clickable!</p>
    </i-alert>
</div>
<div class="_margin-bottom-1">
    <i-alert theme="info" faded>
        <p>A simple info alert with an <a href="http://inkline.io">example link</a>. It's clickable!</p>
    </i-alert>
</div>
<div class="_margin-bottom-1">
    <i-alert theme="light" faded>
        <p>A simple light alert with an <a href="http://inkline.io">example link</a>. It's clickable!</p>
    </i-alert>
</div>
<div class="_margin-bottom-1">
    <i-alert theme="dark" faded>
        <p>A simple dark alert with an <a href="http://inkline.io">example link</a>. It's clickable!</p>
    </i-alert>
</div>

~~~html
<i-alert theme="primary" faded>
    <p>A simple primary alert with an <a href="http://inkline.io">example link</a>. It's clickable!</p>
</i-alert>

<i-alert theme="secondary" faded>
    <p>A simple secondary alert with an <a href="http://inkline.io">example link</a>. It's clickable!</p>
</i-alert>

<i-alert theme="success" faded>
    <p>A simple success alert with an <a href="http://inkline.io">example link</a>. It's clickable!</p>
</i-alert>

<i-alert theme="danger" faded>
    <p>A simple danger alert with an <a href="http://inkline.io">example link</a>. It's clickable!</p>
</i-alert>

<i-alert theme="warning" faded>
    <p>A simple warning alert with an <a href="http://inkline.io">example link</a>. It's clickable!</p>
</i-alert>

<i-alert theme="info" faded>
    <p>A simple info alert with an <a href="http://inkline.io">example link</a>. It's clickable!</p>
</i-alert>

<i-alert theme="light" faded>
    <p>A simple light alert with an <a href="http://inkline.io">example link</a>. It's clickable!</p>
</i-alert>

<i-alert theme="dark" faded>
    <p>A simple dark alert with an <a href="http://inkline.io">example link</a>. It's clickable!</p>
</i-alert>
~~~


## Alert Sizes
You're able to use the `size` modifier to control the text and spacing size of your alerts, using one of the available sizes: `sm`, `md`, and `lg`.
The default size is set to `md`.

<div class="_margin-bottom-1">
    <i-alert size="sm">
        Some quick example text to build on the card title and make up the bulk of the card's content.
    </i-alert>
</div>
<div class="_margin-bottom-1">
    <i-alert size="md">
        Some quick example text to build on the card title and make up the bulk of the card's content.
    </i-alert>
</div>
<div class="_margin-bottom-1">
    <i-alert size="lg">
        Some quick example text to build on the card title and make up the bulk of the card's content.
    </i-alert>
</div>

~~~html
<i-alert size="sm">
    Some quick example text to build on the card title and make up the bulk of the card's content.
</i-alert>

<i-alert size="md">
    Some quick example text to build on the card title and make up the bulk of the card's content.
</i-alert>

<i-alert size="lg">
    Some quick example text to build on the card title and make up the bulk of the card's content.
</i-alert>
~~~

## Alert Elements
You can provide a title and subtitle for your alerts using the `.title` and `.subtitle` classes.

<div class="_margin-bottom-1">
    <i-alert>
        <h4 class="title">Alert Title</h4>
        <div class="subtitle">Alert Subtitle</div>
        <p>
            Some quick example text to build on the alert and make up the bulk of the alert's content.
        </p>
    </i-alert>
</div>

~~~html
<i-alert size="sm">
    Some quick example text to build on the card title and make up the bulk of the card's content.
</i-alert>

<i-alert size="md">
    Some quick example text to build on the card title and make up the bulk of the card's content.
</i-alert>

<i-alert size="lg">
    Some quick example text to build on the card title and make up the bulk of the card's content.
</i-alert>
~~~

## Alert Icon
You can add an icon to the `<i-alert>` component by providing a icon `slot`.

<div class="_margin-bottom-1">
    <i-alert theme="primary">
        <template slot="icon">✓</template>
        <p>Whoa! Nicely done.</p>
    </i-alert>
</div>

~~~html
<i-alert dismissible :show="visible" theme="success">
    <p>Whoa! Nicely done.</p>
</i-alert>
~~~

~~~js
export default {
  data () {
    return {
      visible: true
    };
  }
}
~~~

## Dismissible Alert
You can dismiss alerts using a combination of the provided `dismissible` and `show` properties.

<div class="_margin-bottom-1">
    <i-alert dismissible :show="visible" theme="success">
        <p>Whoa! Nicely done.</p>
    </i-alert>
</div>

~~~html
<i-alert dismissible :show="visible" theme="success">
    <p>Whoa! Nicely done.</p>
</i-alert>
~~~

~~~js
export default {
  data () {
    return {
      visible: true
    };
  }
}
~~~