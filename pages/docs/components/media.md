# Media
Media objects provide you with a flexible component that can be easily nested and repeated, such as blog comments and tweets.{.lead}

### Example
Media objects are useful for repetitive components that have a media element positioned alongside them, such as an user image or blog post image.

<i-code-preview title="Media Example" link="https://github.com/inkline/inkline/tree/master/src/components/Media">

<i-media>
    <template v-slot:image><img src="/images/placeholder-100x100.jpg" alt="Media Image" /></template>
    <h3>Media Titlte</h3>
    <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
    </p>
</i-media>

<template v-slot:html>

~~~html
<i-media>
    <template v-slot:image><img src=".." alt="Media Image" /></template>
    <h3>Media Title</h3>
    <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
        sed do eiusmod tempor incididunt ut labore et...
    </p>
</i-media>
~~~

</template>
</i-code-preview>

### Nesting
Media components can be nested inside one another to create a parent-child relationship between related components.

<i-code-preview title="Media Nesting" link="https://github.com/inkline/inkline/tree/master/src/components/Media">

<i-media>
    <template v-slot:image><img src="/images/placeholder-100x100.jpg" alt="Media Image" /></template>
    <h3>Media Titlte</h3>
    <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
    </p>
    <i-media>
        <template v-slot:image><img src="/images/placeholder-100x100.jpg" height="60" width="60" alt="Media Image" /></template>
        <h3>Nested Media Titlte</h3>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
    </i-media>
</i-media>

<template v-slot:html>

~~~html
<i-media>
    <template v-slot:image><img src=".." alt="Media Image" /></template>
    <h3>Media Titlte</h3>
    <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
    </p>
    
    <i-media>
        <template v-slot:image><img src=".." alt="Media Image" /></template>
        <h3>Nested Media Titlte</h3>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
    </i-media>
</i-media>
~~~

</template>
</i-code-preview>

### Alignment
The media element in a media component can be aligned with flexbox helper classes to the top (default), middle, or end of the `.body` content.

<i-code-preview title="Media Alignment Start" link="https://github.com/inkline/inkline/tree/master/src/components/Media">

<i-media>
    <template v-slot:image><img class="_align-self-start"   height="80" width="80" src="/images/placeholder-100x100.jpg" alt="Media Image" /></template>
    <h3>Media Titlte</h3>
    <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
    </p>
</i-media>

<template v-slot:html>

~~~html
<i-media>
    <template v-slot:image><img class="_align-self-start"   src=".." alt="Media Image" /></template>
    <h3>Media Titlte</h3>
    <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
    </p>
</i-media>
~~~

</template>
</i-code-preview>

<i-code-preview title="Media Alignment Center" link="https://github.com/inkline/inkline/tree/master/src/components/Media">

<i-media>
    <template v-slot:image><img class="_align-self-center"   height="80" width="80" src="/images/placeholder-100x100.jpg" alt="Media Image" /></template>
    <h3>Media Titlte</h3>
    <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
    </p>
</i-media>

<template v-slot:html>

~~~html
<i-media>
    <template v-slot:image><img class="_align-self-center"   src=".." alt="Media Image" /></template>
    <h3>Media Titlte</h3>
    <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
    </p>
</i-media>
~~~

</template>
</i-code-preview>

<i-code-preview title="Media Alignment End" link="https://github.com/inkline/inkline/tree/master/src/components/Media">

<i-media>
    <template v-slot:image><img class="_align-self-end"   height="80" width="80" src="/images/placeholder-100x100.jpg" alt="Media Image" /></template>
    <h3>Media Titlte</h3>
    <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
    </p>
</i-media>

<template v-slot:html>

~~~html
<i-media>
    <template v-slot:image><img class="_align-self-end"   src=".." alt="Media Image" /></template>
    <h3>Media Titlte</h3>
    <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
    </p>
</i-media>
~~~

</template>
</i-code-preview>


### API

<i-api-preview title="Media API" default-active="slots" markup="i-media" expanded link="https://github.com/inkline/inkline/tree/master/src/components/Media">
    <template v-slot:slots>
        <table class="table -bordered _margin-bottom-0">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Description</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>default</td>
                    <td>Slot for media default content.</td>
                </tr>
            </tbody>
        </table>
    </template>
</i-api-preview>
