# Grid
Inkline's grid system is modelled as a 12 columns layout built using flexbox, with equally divided columns, 
separated by a small gutter. We've made sure to use percentage widths, so that it is usable at any nesting level. 

The grid system is defined using `row` and `column` components, with each one having specific responsive 
modifiers. Here's how it works:

- First, we define a row with a set of columns inside of it.
- Your content elements should be placed directly in a `column`, and only `column` should be placed directly in `row`
- The column width takes a value of 1-12 at each responsive breakpoint (`xs`, `sm`, `md`, `lg`, `xlg`).
- If the sum of `column` widths in a row is more than 12, then the overflowing column will start on a new line.


## Basic Layout
Create basic grid layout using columns.

<row>
    <column md="12">
        <grid-box></grid-box>
    </column>
</row>
<row>
    <column md="1">
        <grid-box></grid-box>
    </column>
    <column md="11">
        <grid-box></grid-box>
    </column>
</row>
<row>
    <column md="2">
        <grid-box></grid-box>
    </column>
    <column md="10">
        <grid-box></grid-box>
    </column>
</row>
<row>
    <column md="3">
        <grid-box></grid-box>
    </column>
    <column md="9">
        <grid-box></grid-box>
    </column>
</row>
<row>
    <column md="4">
        <grid-box></grid-box>
    </column>
    <column md="8">
        <grid-box></grid-box>
    </column>
</row>
<row>
    <column md="5">
        <grid-box></grid-box>
    </column>
    <column md="7">
        <grid-box></grid-box>
    </column>
</row>
<row>
    <column md="6">
        <grid-box></grid-box>
    </column>
    <column md="6">
        <grid-box></grid-box>
    </column>
</row>
<row>
    <column md="7">
        <grid-box></grid-box>
    </column>
    <column md="5">
        <grid-box></grid-box>
    </column>
</row>
<row>
    <column md="8">
        <grid-box></grid-box>
    </column>
    <column md="4">
        <grid-box></grid-box>
    </column>
</row>
<row>
    <column md="9">
        <grid-box></grid-box>
    </column>
    <column md="3">
        <grid-box></grid-box>
    </column>
</row>
<row>
    <column md="10">
        <grid-box></grid-box>
    </column>
    <column md="2">
        <grid-box></grid-box>
    </column>
</row>
<row>
    <column md="11">
        <grid-box></grid-box>
    </column>
    <column md="1">
        <grid-box></grid-box>
    </column>
</row>
<row>
    <column md="12">
        <grid-box></grid-box>
    </column>
</row>

~~~html
<container>
    <row>
        <column md="3"></column>
        <column md="9"></column>
    </row>
</container>
~~~


## Grid Offset
Grid offsets are used to move a column to the right without creating an empty column next to it.

<row>
    <column md="12">
        <grid-box></grid-box>
    </column>
</row>
<row>
    <column md="11" offset-md="1">
        <grid-box></grid-box>
    </column>
</row>
<row>
    <column md="10" offset-md="2">
        <grid-box></grid-box>
    </column>
</row>
<row>
    <column md="9" offset-md="3">
        <grid-box></grid-box>
    </column>
</row>
<row>
    <column md="8" offset-md="4">
        <grid-box></grid-box>
    </column>
</row>
<row>
    <column md="7" offset-md="5">
        <grid-box></grid-box>
    </column>
</row>
<row>
    <column md="6" offset-md="6">
        <grid-box></grid-box>
    </column>
</row>
<row>
    <column md="5" offset-md="7">
        <grid-box></grid-box>
    </column>
</row>
<row>
    <column md="4" offset-md="8">
        <grid-box></grid-box>
    </column>
</row>
<row>
    <column md="3" offset-md="9">
        <grid-box></grid-box>
    </column>
</row>
<row>
    <column md="2" offset-md="10">
        <grid-box></grid-box>
    </column>
</row>
<row>
    <column md="1" offset-md="11">
        <grid-box></grid-box>
    </column>
</row>

~~~html
<container>
    <row>
        <column md="1" offset-md="11"></column>
    </row>
</container>
~~~


## Grid Push / Pull
Code-wise, the columns have a different order.

<row>
    <column md="12"></column>
</row>
<row>
    <column md="1" push-md="11">
        <grid-box></grid-box>
    </column>
    <column md="11" pull-md="1">
        <grid-box></grid-box>
    </column>
</row>
<row>
    <column md="2" push-md="10">
        <grid-box></grid-box>
    </column>
    <column md="10" pull-md="2">
        <grid-box></grid-box>
    </column>
</row>
<row>
    <column md="3" push-md="9">
        <grid-box></grid-box>
    </column>
    <column md="9" pull-md="3">
        <grid-box></grid-box>
    </column>
</row>
<row>
    <column md="4" push-md="8">
        <grid-box></grid-box>
    </column>
    <column md="8" pull-md="4">
        <grid-box></grid-box>
    </column>
</row>
<row>
    <column md="5" push-md="7">
        <grid-box></grid-box>
    </column>
    <column md="7" pull-md="5">
        <grid-box></grid-box>
    </column>
</row>
<row>
    <column md="6" push-md="6">
        <grid-box></grid-box>
    </column>
    <column md="6" pull-md="6">
        <grid-box></grid-box>
    </column>
</row>
<row>
    <column md="7" push-md="5">
        <grid-box></grid-box>
    </column>
    <column md="5" pull-md="7">
        <grid-box></grid-box>
    </column>
</row>
<row>
    <column md="8" push-md="4">
        <grid-box></grid-box>
    </column>
    <column md="4" pull-md="8">
        <grid-box></grid-box>
    </column>
</row>
<row>
    <column md="9" push-md="3">
        <grid-box></grid-box>
    </column>
    <column md="3" pull-md="9">
        <grid-box></grid-box>
    </column>
</row>
<row>
    <column md="10" push-md="2">
        <grid-box></grid-box>
    </column>
    <column md="2" pull-md="10">
        <grid-box></grid-box>
    </column>
</row>
<row>
    <column md="11" push-md="1">
        <grid-box></grid-box>
    </column>
    <column md="1" pull-md="11">
        <grid-box></grid-box>
    </column>
</row>
<row>
    <column md="12">
        <grid-box></grid-box>
    </column>
</row>

~~~html
<container>
    <row>
        <column md="4" push-md="8"></div>
        <column md="8" pull-md="4"></div>
    </row>
</container>
~~~


## Auto Width
The grid will automatically fit any number of auto sizing columns to a row.

<row>
    <column>
        <grid-box></grid-box>
    </column>
</row>
<row>
    <column>
        <grid-box></grid-box>
    </column>
    <column>
        <grid-box></grid-box>
    </column>
</row>
<row>
    <column>
        <grid-box></grid-box>
    </column>
    <column>
        <grid-box></grid-box>
    </column>
    <column>
        <grid-box></grid-box>
    </column>
</row>
<row>
    <column>
        <grid-box></grid-box>
    </column>
    <column>
        <grid-box></grid-box>
    </column>
    <column>
        <grid-box></grid-box>
    </column>
    <column>
        <grid-box></grid-box>
    </column>
</row>
<row>
    <column>
        <grid-box></grid-box>
    </column>
    <column>
        <grid-box></grid-box>
    </column>
    <column>
        <grid-box></grid-box>
    </column>
    <column>
        <grid-box></grid-box>
    </column>
    <column>
        <grid-box></grid-box>
    </column>
</row>
<row>
    <column>
        <grid-box></grid-box>
    </column>
    <column>
        <grid-box></grid-box>
    </column>
    <column>
        <grid-box></grid-box>
    </column>
    <column>
        <grid-box></grid-box>
    </column>
    <column>
        <grid-box></grid-box>
    </column>
    <column>
        <grid-box></grid-box>
    </column>
</row>

~~~html
<container>
    <row>
        <column></column>
        <column></column>
        <column></column>
    </row>
</container>
~~~


## Nested Grid
The grid will automatically fit any number of auto sizing columns to a row.

<row>
    <column md="8">
        <grid-box>
            <row>
                <column md="3">
                    <grid-box></grid-box>
                </column>
                <column md="3">
                    <grid-box></grid-box>
                </column>
                <column md="3">
                    <grid-box></grid-box>
                </column>
                <column md="3">
                    <grid-box></grid-box>
                </column>
            </row>
        </grid-box>
    </column>
    <column md="4">
        <grid-box>
            <row>
                <column md="6">
                    <grid-box></grid-box>
                </column>
                <column md="6">
                    <grid-box></grid-box>
                </column>
            </row>
        </grid-box>
    </column>
</row>

~~~html
<container>
    <row>
        <column md="8">
            <row>
                <column md="3"></column>
                <column md="3"></column>
                <column md="3"></column>
                <column md="3"></column>
            </row>
        </column>
        <column md="4">
            <row>
                <column md="6"></column>
                <column md="6"></column>
            </row>
        </column>
    </row>
</container>
~~~


## Horizontal Alignment
Align elements to the start, center, or end of a row.

#### start-*

<row start-md>
    <column md="4">
        <grid-box></grid-box>
    </column>
</row>

~~~html
<container>
    <row start-md>
        <column md="4"></column>
    </row>
</container>
~~~

#### center-*

<row center-md>
    <column md="4">
        <grid-box></grid-box>
    </column>
</row>

~~~html
<container>
    <row center-md>
        <column md="4"></column>
    </row>
</container>
~~~

#### end-*

<row end-md>
    <column md="4">
        <grid-box></grid-box>
    </column>
</row>

~~~html
<container>
    <row end-md>
        <column md="4"></column>
    </row>
</container>
~~~


## Vertical Alignment
Align elements to the top, bottom, or center of a column.

#### top-*

<row top-md>
    <column md="6">
        <grid-box tall></grid-box>
    </column>
    <column md="6">
        <grid-box></grid-box>
    </column>
</row>

~~~html
<container>
    <row top-md>
        <column md="6"></column>
        <column md="6"></column>
    </row>
</container>
~~~

#### middle-*

<row middle-md>
    <column md="6">
        <grid-box tall></grid-box>
    </column>
    <column md="6">
        <grid-box></grid-box>
    </column>
</row>

~~~html
<container>
    <row middle-md>
        <column md="6"></column>
        <column md="6"></column>
    </row>
</container>
~~~

#### bottom-*

<row bottom-md>
    <column md="6">
        <grid-box tall></grid-box>
    </column>
    <column md="6">
        <grid-box></grid-box>
    </column>
</row>

~~~html
<container>
    <row bottom-md>
        <column md="6"></column>
        <column md="6"></column>
    </row>
</container>
~~~


## Distribution
Distribute the contents of a row or column.

### around-*

<row around-md>
    <column md="3">
        <grid-box></grid-box>
    </column>
    <column md="3">
        <grid-box></grid-box>
    </column>
    <column md="3">
        <grid-box></grid-box>
    </column>
</row>

~~~html
<container>
    <row around-md>
        <column md="3"></column>
        <column md="3"></column>
        <column md="3"></column>
    </row>
</container>
~~~

### between-*

<row between-md>
    <column md="3">
        <grid-box></grid-box>
    </column>
    <column md="3">
        <grid-box></grid-box>
    </column>
    <column md="3">
        <grid-box></grid-box>
    </column>
</row>

~~~html
<container>
    <row between-md>
        <column md="3"></column>
        <column md="3"></column>
        <column md="3"></column>
    </row>
</container>
~~~


## Reordering
Reorder columns using helper classes.

### .-reverse-*

<row reverse-md>
    <column md="3">
        <grid-box>1</grid-box>
    </column>
    <column md="3">
        <grid-box>2</grid-box>
    </column>
    <column md="3">
        <grid-box>3</grid-box>
    </column>
    <column md="3">
        <grid-box>4</grid-box>
    </column>
</row>

~~~html
<container>
    <row reverse-md>
        <column md="3">1</column>
        <column md="3">2</column>
        <column md="3">3</column>
        <column md="3">4</column>
    </row>
</container>
~~~

### first-*

<row>
    <column md="3">
        <grid-box>1</grid-box>
    </column>
    <column md="3">
        <grid-box>2</grid-box>
    </column>
    <column md="3">
        <grid-box>3</grid-box>
    </column>
    <column md="3" first-md>
        <grid-box>4</grid-box>
    </column>
</row>

~~~html
<container>
    <row>
        <column md="3">1</column>
        <column md="3">2</column>
        <column md="3">3</column>
        <column md="3" first-md>4</column>
    </row>
</container>
~~~

### .-last-*

<row>
    <column md="3" last-md>
        <grid-box>1</grid-box>
    </column>
    <column md="3">
        <grid-box>2</grid-box>
    </column>
    <column md="3">
        <grid-box>3</grid-box>
    </column>
    <column md="3">
        <grid-box>4</grid-box>
    </column>
</row>

~~~html
<container>
    <row>
        <column md="3" last-md>1</div>
        <column md="3">2</div>
        <column md="3">3</div>
        <column md="3">4</div>
    </row>
</container>
~~~
