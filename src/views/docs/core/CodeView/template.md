# Code
Here you can find examples for displaying inline and multi-line blocks of code with Inkline.

## Inline Code
Wrap inline snippets of code with `<code>`. Be sure to escape HTML angle brackets.

For example, <code>&lt;section&gt;</code> should be wrapped as inline.

~~~html
For example, <code>&lt;section&gt;</code> should be wrapped as inline.
~~~

## Code Block
We use `<pre>` for multiple lines of code. Once again, be sure to escape any angle brackets in the code for proper 
rendering. You may optionally add the `.-scrollable` modifier, which will set a max-height and provide a y-axis scrollbar.

<pre>
    <code>
        &lt;p&gt;Sample text here...&lt;/p&gt;
        &lt;p&gt;And another line of sample text here...&lt;/p&gt;
    </code>
</pre>

~~~html
<pre>
    <code>
        &lt;p&gt;Sample text here...&lt;/p&gt;
        &lt;p&gt;And another line of sample text here...&lt;/p&gt;
    </code>
</pre>
~~~

## Variables
For indicating variables use the HTML5 `<var>` tag.

<var>y</var> = <var>m</var><var>x</var> + <var>b</var>

~~~html
<var>y</var> = <var>m</var><var>x</var> + <var>b</var>
~~~

## User Input
You can use the `<kbd>` to indicate input that is typically entered via keyboard.

To switch directories, type <kbd>cd</kbd> followed by the name of the directory.<br>
To edit settings, press <kbd><kbd>ctrl</kbd> + <kbd>,</kbd></kbd>

~~~html
To switch directories, type <kbd>cd</kbd> followed by the name of the directory.<br>
To edit settings, press <kbd><kbd>ctrl</kbd> + <kbd>,</kbd></kbd>
~~~

## Sample Output
You can use the `<samp>` for indicating sample output from a program.

<samp>This text is meant to be treated as sample output from a computer program.</samp>

~~~html
<samp>This text is meant to be treated as sample output from a computer program.</samp>
~~~
