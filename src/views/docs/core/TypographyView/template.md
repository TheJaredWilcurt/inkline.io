# Typography
The typography of an application is one of the most important design elements. Inkline uses the Montserrat font. Each font size, style and weight also has a corresponding helper class to style other elements the same.


## Headings
All HTML headings, `<h1>` through `<h6>`, are available.

<div class="headings-list">
    <h1>h1. Inkline heading</h1>
    <h2>h2. Inkline heading</h2>
    <h3>h3. Inkline heading</h3>
    <h4>h4. Inkline heading</h4>
    <h5>h5. Inkline heading</h5>
    <h6>h6. Inkline heading</h6>
</div>

~~~html
<h1>h1. Inkline heading</h1>
<h2>h2. Inkline heading</h2>
<h3>h3. Inkline heading</h3>
<h4>h4. Inkline heading</h4>
<h5>h5. Inkline heading</h5>
<h6>h6. Inkline heading</h6>
~~~

You can use helper classes to achieve heading styles. Classes `.h1` through `.h6` are available, for when you 
want to match the font styling of a heading but cannot use the associated HTML element.

<div class="headings-list">
    <div><span class="h1">h1. Inkline heading</span></div>
    <div><span class="h2">h2. Inkline heading</span></div>
    <div><span class="h3">h3. Inkline heading</span></div>
    <div><span class="h4">h4. Inkline heading</span></div>
    <div><span class="h5">h5. Inkline heading</span></div>
    <div><span class="h6">h6. Inkline heading</span></div>
</div>

~~~html
<span class="h1">h1. Inkline heading</span>
<span class="h2">h2. Inkline heading</span>
<span class="h3">h3. Inkline heading</span>
<span class="h4">h4. Inkline heading</span>
<span class="h5">h5. Inkline heading</span>
<span class="h6">h6. Inkline heading</span>
~~~


## Display
If you need something larger than headings, you can use displays, `.d1` through `.d6` are available.

<div class="headings-list">
    <div><span class="d1">d1. Inkline display</span></div>
    <div><span class="d2">d2. Inkline display</span></div>
    <div><span class="d3">d3. Inkline display</span></div>
    <div><span class="d4">d4. Inkline display</span></div>
    <div><span class="d5">d5. Inkline display</span></div>
    <div><span class="d6">d6. Inkline display</span></div>
</div>

~~~html
<span class="d1">d1. Inkline display</span>
<span class="d2">d2. Inkline display</span>
<span class="d3">d3. Inkline display</span>
<span class="d4">d4. Inkline display</span>
<span class="d5">d5. Inkline display</span>
<span class="d6">d6. Inkline display</span>
~~~


## Lead
Make a paragraph stand out by adding `.lead`.

<p class="lead">
    Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Duis mollis, est non commodo luctus.
</p>

~~~html
<p class="lead">
    Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Duis mollis, est non commodo luctus.
</p>
~~~


## Inline text elements
Inkline provides basic styling for all common HTML5 inline text elements.

<p>You can use the mark tag to <mark>highlight</mark> text.</p>
<p><del>This line of text is meant to be treated as deleted text.</del></p>
<p><s>This line of text is meant to be treated as no longer accurate.</s></p>
<p><ins>This line of text is meant to be treated as an addition to the document.</ins></p>
<p><u>This line of text will render as underlined</u></p>
<p><small>This line of text is meant to be treated as fine print.</small></p>
<p><strong>This line rendered as bold text.</strong></p>
<p><em>This line rendered as italicized text.</em></p>

~~~html 
<p>You can use the mark tag to <mark>highlight</mark> text.</p>
<p><del>This line of text is meant to be treated as deleted text.</del></p>
<p><s>This line of text is meant to be treated as no longer accurate.</s></p>
<p><ins>This line of text is meant to be treated as an addition to the document.</ins></p>
<p><u>This line of text will render as underlined</u></p>
<p><small>This line of text is meant to be treated as fine print.</small></p>
<p><strong>This line rendered as bold text.</strong></p>
<p><em>This line rendered as italicized text.</em></p>
~~~

To avoid any unwanted semantic implications that the tags would bring, `.mark` and `.small` classes are also 
available to apply the same styles as `<mark>` and `<small>`.

While not shown above, you can also use `<b>` and `<i>` in HTML5. `<b>` is meant to highlight words or phrases 
without adding additional semantics, while `<i>` is mostly for voice, technical terms, etc.

## Text utilities
You can change text alignment, transform, style, weight, and color with text utilities and [color utilities](/docs/colors).

#### Text Alignment
You can easily realign text to components with text alignment classes.

<p class="_text-justify">
    Ambitioni dedisse scripsisse iudicaretur. Cras mattis iudicium purus sit amet fermentum. Donec sed odio operae, eu vulputate felis rhoncus. Praeterea iter est quasdam res quas ex communi. At nos hinc posthac, sitientis piros Afros. Petierunt uti sibi concilium totius Galliae in diem certam indicere. Cras mattis iudicium purus sit amet fermentum.
</p>

~~~html
<p class="_text-justify">
    Ambitioni dedisse scripsisse iudicaretur. Cras mattis iudicium purus sit amet fermentum. Donec sed odio operae, eu vulputate felis rhoncus. Praeterea iter est quasdam res quas ex communi. At nos hinc posthac, sitientis piros Afros. Petierunt uti sibi concilium totius Galliae in diem certam indicere. Cras mattis iudicium purus sit amet fermentum.
</p>
~~~

<p class="_text-left">
    This text is left aligned.
</p>
<p class="_text-center">
    This text is centered.
</p>
<p class="_text-right">
    This text is right aligned.
</p>

~~~html
<p class="_text-left">This text is left aligned.</p>
<p class="_text-center">This text is centered.</p>
<p class="_text-right">This text is right aligned.</p>
~~~


#### Text Wrapping
You can easily realign text to components with text alignment classes.

<div class="_text-nowrap _background-light" style="width: 8rem;">
    This text should overflow the parent.
</div>

~~~html
<div class="_text-nowrap" style="width: 8rem;">
    This text should overflow the parent.
</div>
~~~

#### Responsive utilities

You can align, wrap or truncate text responsively for any given `xs`, `sm`, `md`, `lg`, or `xl` breakpoint by adding the breakpoint suffix:

<p class="_text-center-xs">This text is centered on extra-small screens.</p>
<p class="_text-center-sm">This text is centered on small screens.</p>
<p class="_text-center-md">This text is centered on medium screens.</p>
<p class="_text-center-lg">This text is centered on large screens.</p>
<p class="_text-center-xl">This text is centered on extra-large screens.</p>

~~~html
<p class="_text-center-xs">This text is centered on extra-small screens.</p>
<p class="_text-center-sm">This text is centered on small screens.</p>
<p class="_text-center-md">This text is centered on medium screens.</p>
<p class="_text-center-lg">This text is centered on large screens.</p>
<p class="_text-center-xl">This text is centered on extra-large screens.</p>
~~~

