# Collapsible
Cards provide you with a flexible and extensible content container with multiple color variants and options.{.lead}

A card is a flexible and extensible content container. It includes options for headers and footers, a wide variety of content, 
contextual background colors, and powerful display options. 

## Example
Cards are customizable content holders built with as little markup and styles as possible. 
They are based on flexbox, offering easy alignment and mixing well with other components. 

By default, cards are set to have `width: 100%`, fully spanning the width of the parent container. 

<i-collapsible>
    <i-collapsible-item>
        <template slot="title">Item 1</template>
        <p>Item 1 content</p>
        <p>Item 1 content</p>
        <p>Item 1 content</p>
        <p>Item 1 content</p>
        <p>Item 1 content</p>
    </i-collapsible-item>
    <i-collapsible-item>
        <template slot="title">Item 2</template>
        Item 2 content
    </i-collapsible-item>
    <i-collapsible-item>
        <template slot="title">Item 3</template>
        Item 3 content
    </i-collapsible-item>
</i-collapsible>

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
