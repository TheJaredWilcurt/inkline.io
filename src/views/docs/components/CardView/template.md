# Cards
Cards provide you with a flexible and extensible content container with multiple color variants and options.{.lead}

A card is a flexible and extensible content container. It includes options for headers and footers, a wide variety of content, 
contextual background colors, and powerful display options. 

## Example
Cards are customizable content holders built with as little markup and styles as possible. 
They are based on flexbox, offering easy alignment and mixing well with other components. 

By default, cards are set to have `width: 100%`, fully spanning the width of the parent container. 

<i-row class="_margin-bottom-1">
    <i-column md="4">
        <i-card>
            <img slot="image" src="http://placehold.it/400x200" alt="Card Image" />
            <h4 class="title">Card Title</h4>
            <p class="subtitle">Card Subtitle</p>
            <p>
                Some quick example text to build on the card title and make up the bulk of the card's content.
            </p>
            <a class="link" href="http://inkline.io">Example Link</a>
        </i-card>
    </i-column>
</i-row>

~~~html
<i-card>
    <img slot="image" src="image.jpg" alt="Card Image" />
    <h4 class="title">Card Title</h4>
    <p class="subtitle">Card Subtitle</p>
    <p>
        Some quick example text to build on the card title and make up the bulk of the card's content.
    </p>
    <a class="link" href="http://inkline.io">Example Link</a>
</i-card>
~~~

## Card Body
The building block of a card is the card body. All the content placed in the default component slot will be placed inside the body.

<i-row class="_margin-bottom-1">
    <i-column md="4">
        <i-card>
            Some quick example text to build on the card title and make up the bulk of the card's content.
        </i-card>
    </i-column>
</i-row>

~~~html
<i-card>
    Some quick example text to build on the card title and make up the bulk of the card's content.
</i-card>
~~~

## Card Header and Footer
Optionally, you can provide a header or a footer for your cards.

<i-row class="_margin-bottom-1">
    <i-column md="4">
        <i-card>
            <template slot="header">Card Header</template>
            Some quick example text to build on the card title and make up the bulk of the card's content.
            <template slot="footer">Card Footer</template>
        </i-card>
    </i-column>
</i-row>

~~~html
<i-card>
    Some quick example text to build on the card title and make up the bulk of the card's content.
</i-card>
~~~

## Card Images
You can provide an image at the top of the card, using the `image` slot.

<i-row class="_margin-bottom-1">
    <i-column md="4">
        <i-card>
            <img slot="image" src="http://placehold.it/400x200" alt="Card Image" />
            Some quick example text to build on the card title and make up the bulk of the card's content.
        </i-card>
    </i-column>
</i-row>

~~~html
<i-card>
    <img slot="image" src="image.jpg" alt="Card Image" />
    Some quick example text to build on the card title and make up the bulk of the card's content.
</i-card>
~~~

## Card Background Image
You can provide an image at the top of the card, using the `image` slot.

<i-row class="_margin-bottom-1">
    <i-column md="4">
        <i-card>
            <img slot="image" src="http://placehold.it/400x200" alt="Card Image" />
            Some quick example text to build on the card title and make up the bulk of the card's content.
        </i-card>
    </i-column>
</i-row>

~~~html
<i-card>
    <img slot="image" src="image.jpg" alt="Card Image" />
    Some quick example text to build on the card title and make up the bulk of the card's content.
</i-card>
~~~

## Card Sizes
You're able to use the `size` modifier to control the text and spacing size of your cards, using one of the available sizes: `sm`, `md`, and `lg`. 
The default size is set to `md`.

<i-row class="_margin-bottom-1">
    <i-column md="4">
        <i-card size="sm">
            Some quick example text to build on the card title and make up the bulk of the card's content.
        </i-card>
    </i-column>
    <i-column md="4">
        <i-card size="md">
            Some quick example text to build on the card title and make up the bulk of the card's content.
        </i-card>
    </i-column>
    <i-column md="4">
        <i-card size="lg">
            Some quick example text to build on the card title and make up the bulk of the card's content.
        </i-card>
    </i-column>
</i-row>

~~~html
<i-card size="sm">
    Some quick example text to build on the card title and make up the bulk of the card's content.
</i-card>

<i-card size="md">
    Some quick example text to build on the card title and make up the bulk of the card's content.
</i-card>

<i-card size="lg">
    Some quick example text to build on the card title and make up the bulk of the card's content.
</i-card>
~~~

## Card Themes
Inkline includes several predefined card styles that you can use within your application.

<i-row class="_margin-bottom-1">
    <i-column md="4">
        <i-card>
            <template slot="header">Default Card</template>
            Some quick example text to build on the card title and make up the bulk of the card's content.
        </i-card>
    </i-column>
    <i-column md="4">
        <i-card theme="light">
            <template slot="header">Light Card</template>
            Some quick example text to build on the card title and make up the bulk of the card's content.
        </i-card>
    </i-column>
    <i-column md="4">
        <i-card theme="dark">
            <template slot="header">Dark Card</template>
            Some quick example text to build on the card title and make up the bulk of the card's content.
        </i-card>
    </i-column>
</i-row>

<i-row class="_margin-bottom-1">
    <i-column md="4">
        <i-card theme="primary">
            <template slot="header">Primary Card</template>
            Some quick example text to build on the card title and make up the bulk of the card's content.
        </i-card>
    </i-column>
    <i-column md="4">
        <i-card theme="secondary">
            <template slot="header">Secondary Card</template>
            Some quick example text to build on the card title and make up the bulk of the card's content.
        </i-card>
    </i-column>
    <i-column md="4">
        <i-card theme="success">
            <template slot="header">Success Card</template>
            Some quick example text to build on the card title and make up the bulk of the card's content.
        </i-card>
    </i-column>
</i-row>

<i-row class="_margin-bottom-1">
    <i-column md="4">
        <i-card theme="danger">
            <template slot="header">Danger Card</template>
            Some quick example text to build on the card title and make up the bulk of the card's content.
        </i-card>
    </i-column>
    <i-column md="4">
        <i-card theme="warning">
            <template slot="header">Warning Card</template>
            Some quick example text to build on the card title and make up the bulk of the card's content.
        </i-card>
    </i-column>
    <i-column md="4">
        <i-card theme="info">
            <template slot="header">Info Card</template>
            Some quick example text to build on the card title and make up the bulk of the card's content.
        </i-card>
    </i-column>
</i-row>

~~~html
<i-card>
    <template slot="header">Default Card</template>
    Some quick example text to build on the card title and make up the bulk of the card's content.
</i-card>

<i-card theme="light">
    <template slot="header">Light Card</template>
    Some quick example text to build on the card title and make up the bulk of the card's content.
</i-card>

<i-card theme="dark">
    <template slot="header">Dark Card</template>
    Some quick example text to build on the card title and make up the bulk of the card's content.
</i-card>

<i-card theme="primary">
    <template slot="header">Primary Card</template>
    Some quick example text to build on the card title and make up the bulk of the card's content.
</i-card>

<i-card theme="secondary">
    <template slot="header">Secondary Card</template>
    Some quick example text to build on the card title and make up the bulk of the card's content.
</i-card>

<i-card theme="success">
    <template slot="header">Success Card</template>
    Some quick example text to build on the card title and make up the bulk of the card's content.
</i-card>

<i-card theme="danger">
    <template slot="header">Danger Card</template>
    Some quick example text to build on the card title and make up the bulk of the card's content.
</i-card>

<i-card theme="warning">
    <template slot="header">Warning Card</template>
    Some quick example text to build on the card title and make up the bulk of the card's content.
</i-card>

<i-card theme="info">
    <template slot="header">Info Card</template>
    Some quick example text to build on the card title and make up the bulk of the card's content.
</i-card>
~~~
