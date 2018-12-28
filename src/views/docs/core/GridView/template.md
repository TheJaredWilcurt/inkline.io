# Grid
Inkline's grid system is modelled as a 12 columns layout built using flexbox, with equally divided columns, 
separated by a small gutter. We've made sure to use percentage widths, so that it is usable at any nesting level. { .lead }

The grid system is defined using `<i-container>`, `<i-row>` and `<i-column>` components, with each one having specific responsive modifiers. Here's how it works:

- First, we define a row with a set of columns inside of it.
- Your content elements should be placed directly in a `<i-column>`, and only `<i-column>` should be placed directly inside an `<i-row>` component
- The column width takes a value of 1-12 at each responsive breakpoint (`xs`, `sm`, `md`, `lg`, `xlg`).
- If the sum of `column` widths in a row is more than 12, then the overflowing column will start on a new line.

## Basic Layout
Create basic grid layout using columns.

<i-row>
    <i-column xs="12">
        <grid-box></grid-box>
    </i-column>
</i-row>
<i-row>
    <i-column xs="1">
        <grid-box></grid-box>
    </i-column>
    <i-column xs="11">
        <grid-box></grid-box>
    </i-column>
</i-row>
<i-row>
    <i-column xs="2">
        <grid-box></grid-box>
    </i-column>
    <i-column xs="10">
        <grid-box></grid-box>
    </i-column>
</i-row>
<i-row>
    <i-column xs="3">
        <grid-box></grid-box>
    </i-column>
    <i-column xs="9">
        <grid-box></grid-box>
    </i-column>
</i-row>
<i-row>
    <i-column xs="4">
        <grid-box></grid-box>
    </i-column>
    <i-column xs="8">
        <grid-box></grid-box>
    </i-column>
</i-row>
<i-row>
    <i-column xs="5">
        <grid-box></grid-box>
    </i-column>
    <i-column xs="7">
        <grid-box></grid-box>
    </i-column>
</i-row>
<i-row>
    <i-column xs="6">
        <grid-box></grid-box>
    </i-column>
    <i-column xs="6">
        <grid-box></grid-box>
    </i-column>
</i-row>
<i-row>
    <i-column xs="7">
        <grid-box></grid-box>
    </i-column>
    <i-column xs="5">
        <grid-box></grid-box>
    </i-column>
</i-row>
<i-row>
    <i-column xs="8">
        <grid-box></grid-box>
    </i-column>
    <i-column xs="4">
        <grid-box></grid-box>
    </i-column>
</i-row>
<i-row>
    <i-column xs="9">
        <grid-box></grid-box>
    </i-column>
    <i-column xs="3">
        <grid-box></grid-box>
    </i-column>
</i-row>
<i-row>
    <i-column xs="10">
        <grid-box></grid-box>
    </i-column>
    <i-column xs="2">
        <grid-box></grid-box>
    </i-column>
</i-row>
<i-row>
    <i-column xs="11">
        <grid-box></grid-box>
    </i-column>
    <i-column xs="1">
        <grid-box></grid-box>
    </i-column>
</i-row>
<i-row>
    <i-column xs="12">
        <grid-box></grid-box>
    </i-column>
</i-row>

~~~html
<i-container>
    <i-row>
        <i-column xs="12"></i-column>
    </i-row>    
    <i-row>
        <i-column xs="1"></i-column>
        <i-column xs="11"></i-column>
    </i-row>    
    <i-row>
        <i-column xs="2"></i-column>
        <i-column xs="10"></i-column>
    </i-row>
    <i-row>
        <i-column xs="3"></i-column>
        <i-column xs="9"></i-column>
    </i-row>
    <i-row>
        <i-column xs="4"></i-column>
        <i-column xs="8"></i-column>
    </i-row>
    <i-row>
        <i-column xs="5"></i-column>
        <i-column xs="7"></i-column>
    </i-row>
    <i-row>
        <i-column xs="6"></i-column>
        <i-column xs="6"></i-column>
    </i-row>
    <i-row>
        <i-column xs="7"></i-column>
        <i-column xs="5"></i-column>
    </i-row>
    <i-row>
        <i-column xs="8"></i-column>
        <i-column xs="4"></i-column>
    </i-row>
    <i-row>
        <i-column xs="9"></i-column>
        <i-column xs="3"></i-column>
    </i-row>
    <i-row>
        <i-column xs="10"></i-column>
        <i-column xs="2"></i-column>
    </i-row>
    <i-row>
        <i-column xs="11"></i-column>
        <i-column xs="1"></i-column>
    </i-row>
    <i-row>
        <i-column xs="12"></i-column>
    </i-row>
</i-container>
~~~


## Grid Offset
Grid offsets are used to move a column to the right without creating an empty column next to it.

<i-row>
    <i-column xs="12">
        <grid-box></grid-box>
    </i-column>
</i-row>
<i-row>
    <i-column xs="11" offset-xs="1">
        <grid-box></grid-box>
    </i-column>
</i-row>
<i-row>
    <i-column xs="10" offset-xs="2">
        <grid-box></grid-box>
    </i-column>
</i-row>
<i-row>
    <i-column xs="9" offset-xs="3">
        <grid-box></grid-box>
    </i-column>
</i-row>
<i-row>
    <i-column xs="8" offset-xs="4">
        <grid-box></grid-box>
    </i-column>
</i-row>
<i-row>
    <i-column xs="7" offset-xs="5">
        <grid-box></grid-box>
    </i-column>
</i-row>
<i-row>
    <i-column xs="6" offset-xs="6">
        <grid-box></grid-box>
    </i-column>
</i-row>
<i-row>
    <i-column xs="5" offset-xs="7">
        <grid-box></grid-box>
    </i-column>
</i-row>
<i-row>
    <i-column xs="4" offset-xs="8">
        <grid-box></grid-box>
    </i-column>
</i-row>
<i-row>
    <i-column xs="3" offset-xs="9">
        <grid-box></grid-box>
    </i-column>
</i-row>
<i-row>
    <i-column xs="2" offset-xs="10">
        <grid-box></grid-box>
    </i-column>
</i-row>
<i-row>
    <i-column xs="1" offset-xs="11">
        <grid-box></grid-box>
    </i-column>
</i-row>

~~~html
<i-container>
    <i-row>
        <i-column xs="1" offset-xs="11"></i-column>
    </i-row>
    <i-row>
        <i-column xs="2" offset-xs="10"></i-column>
    </i-row>
    <i-row>
        <i-column xs="3" offset-xs="9"></i-column>
    </i-row>
    <i-row>
        <i-column xs="4" offset-xs="8"></i-column>
    </i-row>
    <i-row>
        <i-column xs="5" offset-xs="7"></i-column>
    </i-row>
    <i-row>
        <i-column xs="6" offset-xs="6"></i-column>
    </i-row>
    <i-row>
        <i-column xs="7" offset-xs="5"></i-column>
    </i-row>
    <i-row>
        <i-column xs="8" offset-xs="4"></i-column>
    </i-row>
    <i-row>
        <i-column xs="9" offset-xs="3"></i-column>
    </i-row>
    <i-row>
        <i-column xs="10" offset-xs="2"></i-column>
    </i-row>
    <i-row>
        <i-column xs="11" offset-xs="1"></i-column>
    </i-row>
</i-container>
~~~


## Grid Push / Pull
Code-wise, the columns have a different order.

<i-row>
    <i-column xs="12"></i-column>
</i-row>
<i-row>
    <i-column xs="1" push-xs="11">
        <grid-box></grid-box>
    </i-column>
    <i-column xs="11" pull-xs="1">
        <grid-box></grid-box>
    </i-column>
</i-row>
<i-row>
    <i-column xs="2" push-xs="10">
        <grid-box></grid-box>
    </i-column>
    <i-column xs="10" pull-xs="2">
        <grid-box></grid-box>
    </i-column>
</i-row>
<i-row>
    <i-column xs="3" push-xs="9">
        <grid-box></grid-box>
    </i-column>
    <i-column xs="9" pull-xs="3">
        <grid-box></grid-box>
    </i-column>
</i-row>
<i-row>
    <i-column xs="4" push-xs="8">
        <grid-box></grid-box>
    </i-column>
    <i-column xs="8" pull-xs="4">
        <grid-box></grid-box>
    </i-column>
</i-row>
<i-row>
    <i-column xs="5" push-xs="7">
        <grid-box></grid-box>
    </i-column>
    <i-column xs="7" pull-xs="5">
        <grid-box></grid-box>
    </i-column>
</i-row>
<i-row>
    <i-column xs="6" push-xs="6">
        <grid-box></grid-box>
    </i-column>
    <i-column xs="6" pull-xs="6">
        <grid-box></grid-box>
    </i-column>
</i-row>
<i-row>
    <i-column xs="7" push-xs="5">
        <grid-box></grid-box>
    </i-column>
    <i-column xs="5" pull-xs="7">
        <grid-box></grid-box>
    </i-column>
</i-row>
<i-row>
    <i-column xs="8" push-xs="4">
        <grid-box></grid-box>
    </i-column>
    <i-column xs="4" pull-xs="8">
        <grid-box></grid-box>
    </i-column>
</i-row>
<i-row>
    <i-column xs="9" push-xs="3">
        <grid-box></grid-box>
    </i-column>
    <i-column xs="3" pull-xs="9">
        <grid-box></grid-box>
    </i-column>
</i-row>
<i-row>
    <i-column xs="10" push-xs="2">
        <grid-box></grid-box>
    </i-column>
    <i-column xs="2" pull-xs="10">
        <grid-box></grid-box>
    </i-column>
</i-row>
<i-row>
    <i-column xs="11" push-xs="1">
        <grid-box></grid-box>
    </i-column>
    <i-column xs="1" pull-xs="11">
        <grid-box></grid-box>
    </i-column>
</i-row>
<i-row>
    <i-column xs="12">
        <grid-box></grid-box>
    </i-column>
</i-row>

~~~html
<i-container>
    <i-row>
        <i-column xs="1" push-xs="11"></div>
        <i-column xs="11" pull-xs="1"></div>
    </i-row>
    <i-row>
        <i-column xs="2" push-xs="10"></div>
        <i-column xs="10" pull-xs="2"></div>
    </i-row>
    <i-row>
        <i-column xs="3" push-xs="9"></div>
        <i-column xs="9" pull-xs="3"></div>
    </i-row>
    <i-row>
        <i-column xs="4" push-xs="8"></div>
        <i-column xs="8" pull-xs="4"></div>
    </i-row>
    <i-row>
        <i-column xs="5" push-xs="7"></div>
        <i-column xs="7" pull-xs="5"></div>
    </i-row>
    <i-row>
        <i-column xs="6" push-xs="6"></div>
        <i-column xs="6" pull-xs="6"></div>
    </i-row>
    <i-row>
        <i-column xs="7" push-xs="5"></div>
        <i-column xs="5" pull-xs="7"></div>
    </i-row>
    <i-row>
        <i-column xs="8" push-xs="8"></div>
        <i-column xs="4" pull-xs="4"></div>
    </i-row>
    <i-row>
        <i-column xs="9" push-xs="3"></div>
        <i-column xs="3" pull-xs="9"></div>
    </i-row>
    <i-row>
        <i-column xs="10" push-xs="2"></div>
        <i-column xs="2" pull-xs="10"></div>
    </i-row>
    <i-row>
        <i-column xs="11" push-xs="1"></div>
        <i-column xs="1" pull-xs="11"></div>
    </i-row>
</i-container>
~~~


## Auto Width
The grid will automatically fit any number of auto sizing columns to a row.

<i-row>
    <i-column :xs="true">
        <grid-box></grid-box>
    </i-column>
</i-row>
<i-row>
    <i-column :xs="true">
        <grid-box></grid-box>
    </i-column>
    <i-column :xs="true">
        <grid-box></grid-box>
    </i-column>
</i-row>
<i-row>
    <i-column :xs="true">
        <grid-box></grid-box>
    </i-column>
    <i-column :xs="true">
        <grid-box></grid-box>
    </i-column>
    <i-column :xs="true">
        <grid-box></grid-box>
    </i-column>
</i-row>
<i-row>
    <i-column :xs="true">
        <grid-box></grid-box>
    </i-column>
    <i-column :xs="true">
        <grid-box></grid-box>
    </i-column>
    <i-column :xs="true">
        <grid-box></grid-box>
    </i-column>
    <i-column :xs="true">
        <grid-box></grid-box>
    </i-column>
</i-row>
<i-row>
    <i-column :xs="true">
        <grid-box></grid-box>
    </i-column>
    <i-column :xs="true">
        <grid-box></grid-box>
    </i-column>
    <i-column :xs="true">
        <grid-box></grid-box>
    </i-column>
    <i-column :xs="true">
        <grid-box></grid-box>
    </i-column>
    <i-column :xs="true">
        <grid-box></grid-box>
    </i-column>
</i-row>
<i-row>
    <i-column :xs="true">
        <grid-box></grid-box>
    </i-column>
    <i-column :xs="true">
        <grid-box></grid-box>
    </i-column>
    <i-column :xs="true">
        <grid-box></grid-box>
    </i-column>
    <i-column :xs="true">
        <grid-box></grid-box>
    </i-column>
    <i-column :xs="true">
        <grid-box></grid-box>
    </i-column>
    <i-column :xs="true">
        <grid-box></grid-box>
    </i-column>
</i-row>

~~~html
<i-container>
    <i-row>
        <i-column :xs="true"></i-column>
    </i-row>
    <i-row>
        <i-column :xs="true"></i-column>
        <i-column :xs="true"></i-column>
    </i-row>
    <i-row>
        <i-column :xs="true"></i-column>
        <i-column :xs="true"></i-column>
        <i-column :xs="true"></i-column>
    </i-row>
    <i-row>
        <i-column :xs="true"></i-column>
        <i-column :xs="true"></i-column>
        <i-column :xs="true"></i-column>
        <i-column :xs="true"></i-column>
    </i-row>
    <i-row>
        <i-column :xs="true"></i-column>
        <i-column :xs="true"></i-column>
        <i-column :xs="true"></i-column>
        <i-column :xs="true"></i-column>
        <i-column :xs="true"></i-column>
    </i-row>
    <i-row>
        <i-column :xs="true"></i-column>
        <i-column :xs="true"></i-column>
        <i-column :xs="true"></i-column>
        <i-column :xs="true"></i-column>
        <i-column :xs="true"></i-column>
        <i-column :xs="true"></i-column>
    </i-row>
</i-container>
~~~


## Nested Grid
Inkline allows you to nest up to 12 columns inside a row. Row can also be nested inside any column, 
giving you virtually endless layout possibilities. You can place rows only inside a container or a column, 
while you can place columns only inside a row.

<i-row>
    <i-column xs="8">
        <grid-box>
            <i-row>
                <i-column xs="3">
                    <grid-box></grid-box>
                </i-column>
                <i-column xs="3">
                    <grid-box></grid-box>
                </i-column>
                <i-column xs="3">
                    <grid-box></grid-box>
                </i-column>
                <i-column xs="3">
                    <grid-box></grid-box>
                </i-column>
            </i-row>
        </grid-box>
    </i-column>
    <i-column xs="4">
        <grid-box>
            <i-row>
                <i-column xs="6">
                    <grid-box></grid-box>
                </i-column>
                <i-column xs="6">
                    <grid-box></grid-box>
                </i-column>
            </i-row>
        </grid-box>
    </i-column>
</i-row>

~~~html
<i-container>
    <i-row>
        <i-column xs="8">
            <i-row>
                <i-column xs="3"></i-column>
                <i-column xs="3"></i-column>
                <i-column xs="3"></i-column>
                <i-column xs="3"></i-column>
            </i-row>
        </i-column>
        <i-column xs="4">
            <i-row>
                <i-column xs="6"></i-column>
                <i-column xs="6"></i-column>
            </i-row>
        </i-column>
    </i-row>
</i-container>
~~~


## Horizontal Alignment
You can align columns horizontally to the start, center, or end of a row.

#### start-*

<i-row start-xs>
    <i-column xs="4">
        <grid-box></grid-box>
    </i-column>
</i-row>

~~~html
<i-container>
    <i-row start-xs>
        <i-column xs="4"></i-column>
    </i-row>
</i-container>
~~~

#### center-*

<i-row center-xs>
    <i-column xs="4">
        <grid-box></grid-box>
    </i-column>
</i-row>

~~~html
<i-container>
    <i-row center-xs>
        <i-column xs="4"></i-column>
    </i-row>
</i-container>
~~~

#### end-*

<i-row end-xs>
    <i-column xs="4">
        <grid-box></grid-box>
    </i-column>
</i-row>

~~~html
<i-container>
    <i-row end-xs>
        <i-column xs="4"></i-column>
    </i-row>
</i-container>
~~~


## Vertical Alignment
You can align columns vertically to the top, middle or bottom of the row.

#### top-*

<i-row top-xs>
    <i-column xs="6">
        <grid-box tall></grid-box>
    </i-column>
    <i-column xs="6">
        <grid-box></grid-box>
    </i-column>
</i-row>

~~~html
<i-container>
    <i-row top-xs>
        <i-column xs="6"></i-column>
        <i-column xs="6"></i-column>
    </i-row>
</i-container>
~~~

#### middle-*

<i-row middle-xs>
    <i-column xs="6">
        <grid-box tall></grid-box>
    </i-column>
    <i-column xs="6">
        <grid-box></grid-box>
    </i-column>
</i-row>

~~~html
<i-container>
    <i-row middle-xs>
        <i-column xs="6"></i-column>
        <i-column xs="6"></i-column>
    </i-row>
</i-container>
~~~

#### bottom-*

<i-row bottom-xs>
    <i-column xs="6">
        <grid-box tall></grid-box>
    </i-column>
    <i-column xs="6">
        <grid-box></grid-box>
    </i-column>
</i-row>

~~~html
<i-container>
    <i-row bottom-xs>
        <i-column xs="6"></i-column>
        <i-column xs="6"></i-column>
    </i-row>
</i-container>
~~~


## Distribution
Distribute the spacing between the columns of a row.

### around-*

<i-row around-xs>
    <i-column xs="3">
        <grid-box></grid-box>
    </i-column>
    <i-column xs="3">
        <grid-box></grid-box>
    </i-column>
    <i-column xs="3">
        <grid-box></grid-box>
    </i-column>
</i-row>

~~~html
<i-container>
    <i-row around-xs>
        <i-column xs="3"></i-column>
        <i-column xs="3"></i-column>
        <i-column xs="3"></i-column>
    </i-row>
</i-container>
~~~

### between-*

<i-row between-xs>
    <i-column xs="3">
        <grid-box></grid-box>
    </i-column>
    <i-column xs="3">
        <grid-box></grid-box>
    </i-column>
    <i-column xs="3">
        <grid-box></grid-box>
    </i-column>
</i-row>

~~~html
<i-container>
    <i-row between-xs>
        <i-column xs="3"></i-column>
        <i-column xs="3"></i-column>
        <i-column xs="3"></i-column>
    </i-row>
</i-container>
~~~


## Reordering
Reorder columns using helper classes.

### reverse-*

<i-row reverse-xs>
    <i-column xs="3">
        <grid-box>1</grid-box>
    </i-column>
    <i-column xs="3">
        <grid-box>2</grid-box>
    </i-column>
    <i-column xs="3">
        <grid-box>3</grid-box>
    </i-column>
    <i-column xs="3">
        <grid-box>4</grid-box>
    </i-column>
</i-row>

~~~html
<i-container>
    <i-row reverse-xs>
        <i-column xs="3">1</i-column>
        <i-column xs="3">2</i-column>
        <i-column xs="3">3</i-column>
        <i-column xs="3">4</i-column>
    </i-row>
</i-container>
~~~

### first-*

<i-row>
    <i-column xs="3">
        <grid-box>1</grid-box>
    </i-column>
    <i-column xs="3">
        <grid-box>2</grid-box>
    </i-column>
    <i-column xs="3">
        <grid-box>3</grid-box>
    </i-column>
    <i-column xs="3" first-xs>
        <grid-box>4</grid-box>
    </i-column>
</i-row>

~~~html
<i-container>
    <i-row>
        <i-column xs="3">1</i-column>
        <i-column xs="3">2</i-column>
        <i-column xs="3">3</i-column>
        <i-column xs="3" first-xs>4</i-column>
    </i-row>
</i-container>
~~~

### last-*

<i-row>
    <i-column xs="3" last-xs>
        <grid-box>1</grid-box>
    </i-column>
    <i-column xs="3">
        <grid-box>2</grid-box>
    </i-column>
    <i-column xs="3">
        <grid-box>3</grid-box>
    </i-column>
    <i-column xs="3">
        <grid-box>4</grid-box>
    </i-column>
</i-row>

~~~html
<i-container>
    <i-row>
        <i-column xs="3" last-xs>1</div>
        <i-column xs="3">2</div>
        <i-column xs="3">3</div>
        <i-column xs="3">4</div>
    </i-row>
</i-container>
~~~


## Responsive Width
You can specify column counts for each breakpoint. Try to resize your browser window!

<i-row>
    <i-column xl="3" lg="6" md="6" sm="8" xs="12">
        <grid-box></grid-box>
    </i-column>
    <i-column xl="3" lg="6" md="6" sm="4" xs="6">
        <grid-box></grid-box>
    </i-column>
    <i-column xl="6" lg="4" md="6" sm="6" xs="3">
        <grid-box></grid-box>
    </i-column>
    <i-column xl="12" lg="8" md="6" sm="6" xs="3">
        <grid-box></grid-box>
    </i-column>
</i-row>

~~~html
<i-container>
    <i-row>
        <i-column xl="3" lg="6" md="6" sm="8" xs="12"></i-column>
        <i-column xl="3" lg="6" md="6" sm="4" xs="6"></i-column>
        <i-column xl="6" lg="4" md="6" sm="6" xs="3"></i-column>
        <i-column xl="12" lg="8" md="6" sm="6" xs="3"></i-column>
    </i-row>
</i-container>
~~~

## Fluid Container
You can make the `<i-container>` component fill the whole width of the parent element using the `fluid` property. 
<i-row>
    <i-column :xs="true">
        <grid-box></grid-box>
    </i-column>
    <i-column :xs="true">
        <grid-box></grid-box>
    </i-column>
    <i-column :xs="true">
        <grid-box></grid-box>
    </i-column>
</i-row>

~~~html
<i-container fluid>
    <i-row>
        <i-column :xs="true"></i-column>
        <i-column :xs="true"></i-column>
        <i-column :xs="true"></i-column>
    </i-row>
</i-container>
~~~
