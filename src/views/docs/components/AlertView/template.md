# Alerts
Provide contextual feedback messages for typical user actions using the alert component. {.lead}

## Alert Variants
Alerts are available for any length of text, and can have an optional dismiss button. For choosing the context of the alert,
use the `variant` property.

By default, alerts are set to have `width: 100%`, fully spanning the width of the parent container.

<div class="_margin-bottom-1">
    <i-alert variant="primary">
        <p>A simple primary alert with an <a href="http://inkline.io">example link</a>. It's clickable!</p>
    </i-alert>
</div>
<div class="_margin-bottom-1">
    <i-alert variant="secondary">
        <p>A simple secondary alert with an <a href="http://inkline.io">example link</a>. It's clickable!</p>
    </i-alert>
</div>
<div class="_margin-bottom-1">
    <i-alert variant="success">
        <p>A simple success alert with an <a href="http://inkline.io">example link</a>. It's clickable!</p>
    </i-alert>
</div>
<div class="_margin-bottom-1">
    <i-alert variant="danger">
        <p>A simple danger alert with an <a href="http://inkline.io">example link</a>. It's clickable!</p>
    </i-alert>
</div>
<div class="_margin-bottom-1">
    <i-alert variant="warning">
        <p>A simple warning alert with an <a href="http://inkline.io">example link</a>. It's clickable!</p>
    </i-alert>
</div>
<div class="_margin-bottom-1">
    <i-alert variant="info">
        <p>A simple info alert with an <a href="http://inkline.io">example link</a>. It's clickable!</p>
    </i-alert>
</div>

~~~html
<i-alert variant="primary">
    <p>A simple primary alert with an <a href="http://inkline.io">example link</a>. It's clickable!</p>
</i-alert>

<i-alert variant="secondary">
    <p>A simple secondary alert with an <a href="http://inkline.io">example link</a>. It's clickable!</p>
</i-alert>

<i-alert variant="success">
    <p>A simple success alert with an <a href="http://inkline.io">example link</a>. It's clickable!</p>
</i-alert>

<i-alert variant="danger">
    <p>A simple danger alert with an <a href="http://inkline.io">example link</a>. It's clickable!</p>
</i-alert>

<i-alert variant="warning">
    <p>A simple warning alert with an <a href="http://inkline.io">example link</a>. It's clickable!</p>
</i-alert>

<i-alert variant="info">
    <p>A simple info alert with an <a href="http://inkline.io">example link</a>. It's clickable!</p>
</i-alert>
~~~

## Alert Sizes
You're able to use the `size` modifier to control the text and spacing size of your alerts, using one of the available sizes: `sm`, `md`, and `lg`. The default size is set to `md`.

<div class="_margin-bottom-1">
    <i-alert size="sm">
        Some quick example text to build on the alert title and make up the bulk of the alert's content.
    </i-alert>
</div>
<div class="_margin-bottom-1">
    <i-alert size="md">
        Some quick example text to build on the alert title and make up the bulk of the alert's content.
    </i-alert>
</div>
<div class="_margin-bottom-1">
    <i-alert size="lg">
        Some quick example text to build on the alert title and make up the bulk of the alert's content.
    </i-alert>
</div>

~~~html
<i-alert size="sm">
    Some quick example text to build on the alert title and make up the bulk of the alert's content.
</i-alert>

<i-alert size="md">
    Some quick example text to build on the alert title and make up the bulk of the alert's content.
</i-alert>

<i-alert size="lg">
    Some quick example text to build on the alert title and make up the bulk of the alert's content.
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
    <h4 class="title">Alert Title</h4>
    <div class="subtitle">Alert Subtitle</div>
    <p>
        Some quick example text to build on the alert and make up the bulk of the alert's content.
    </p>
</i-alert>
~~~

## Alert Icon
You can add an icon to the `<i-alert>` component by providing a icon `slot`.

<div class="_margin-bottom-1">
    <i-alert variant="primary">
        <template slot="icon">✓</template>
        <p>Some quick example text to build on the alert title and make up the bulk of the alert's content.</p>
    </i-alert>
</div>

~~~html
<i-alert variant="primary">
    <template slot="icon">✓</template>
    <p>Some quick example text to build on the alert title and make up the bulk of the alert's content.</p>
</i-alert>
~~~

## Dismissible Alert
You can dismiss alerts using a combination of the provided `dismissible` and `show` properties. The `dismissible` property will be used to show the dismiss icon. The `show` property will show or hide the alert, resetting dismissed alerts when needed.

<div class="_margin-bottom-1">
    <i-alert dismissible :show="visible" variant="primary">
        <p>Whoa! Nicely done.</p>
    </i-alert>
</div>

~~~html
<i-alert dismissible :show="visible" variant="primary">
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