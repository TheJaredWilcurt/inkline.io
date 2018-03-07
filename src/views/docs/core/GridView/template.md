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
    <column xs="12">
        <grid-box></grid-box>
    </column>
</row>
<row>
    <column xs="1">
        <grid-box></grid-box>
    </column>
    <column xs="11">
        <grid-box></grid-box>
    </column>
</row>
<row>
    <column xs="2">
        <grid-box></grid-box>
    </column>
    <column xs="10">
        <grid-box></grid-box>
    </column>
</row>
<row>
    <column xs="3">
        <grid-box></grid-box>
    </column>
    <column xs="9">
        <grid-box></grid-box>
    </column>
</row>
<row>
    <column xs="4">
        <grid-box></grid-box>
    </column>
    <column xs="8">
        <grid-box></grid-box>
    </column>
</row>
<row>
    <column xs="5">
        <grid-box></grid-box>
    </column>
    <column xs="7">
        <grid-box></grid-box>
    </column>
</row>
<row>
    <column xs="6">
        <grid-box></grid-box>
    </column>
    <column xs="6">
        <grid-box></grid-box>
    </column>
</row>
<row>
    <column xs="7">
        <grid-box></grid-box>
    </column>
    <column xs="5">
        <grid-box></grid-box>
    </column>
</row>
<row>
    <column xs="8">
        <grid-box></grid-box>
    </column>
    <column xs="4">
        <grid-box></grid-box>
    </column>
</row>
<row>
    <column xs="9">
        <grid-box></grid-box>
    </column>
    <column xs="3">
        <grid-box></grid-box>
    </column>
</row>
<row>
    <column xs="10">
        <grid-box></grid-box>
    </column>
    <column xs="2">
        <grid-box></grid-box>
    </column>
</row>
<row>
    <column xs="11">
        <grid-box></grid-box>
    </column>
    <column xs="1">
        <grid-box></grid-box>
    </column>
</row>
<row>
    <column xs="12">
        <grid-box></grid-box>
    </column>
</row>

~~~html
<container>
    <row>
        <column xs="12"></column>
    </row>    
    <row>
        <column xs="1"></column>
        <column xs="11"></column>
    </row>    
    <row>
        <column xs="2"></column>
        <column xs="10"></column>
    </row>
    <row>
        <column xs="3"></column>
        <column xs="9"></column>
    </row>
    <row>
        <column xs="4"></column>
        <column xs="8"></column>
    </row>
    <row>
        <column xs="5"></column>
        <column xs="7"></column>
    </row>
    <row>
        <column xs="6"></column>
        <column xs="6"></column>
    </row>
    <row>
        <column xs="7"></column>
        <column xs="5"></column>
    </row>
    <row>
        <column xs="8"></column>
        <column xs="4"></column>
    </row>
    <row>
        <column xs="9"></column>
        <column xs="3"></column>
    </row>
    <row>
        <column xs="10"></column>
        <column xs="2"></column>
    </row>
    <row>
        <column xs="11"></column>
        <column xs="1"></column>
    </row>
    <row>
        <column xs="12"></column>
    </row>
</container>
~~~


## Grid Offset
Grid offsets are used to move a column to the right without creating an empty column next to it.

<row>
    <column xs="12">
        <grid-box></grid-box>
    </column>
</row>
<row>
    <column xs="11" offset-xs="1">
        <grid-box></grid-box>
    </column>
</row>
<row>
    <column xs="10" offset-xs="2">
        <grid-box></grid-box>
    </column>
</row>
<row>
    <column xs="9" offset-xs="3">
        <grid-box></grid-box>
    </column>
</row>
<row>
    <column xs="8" offset-xs="4">
        <grid-box></grid-box>
    </column>
</row>
<row>
    <column xs="7" offset-xs="5">
        <grid-box></grid-box>
    </column>
</row>
<row>
    <column xs="6" offset-xs="6">
        <grid-box></grid-box>
    </column>
</row>
<row>
    <column xs="5" offset-xs="7">
        <grid-box></grid-box>
    </column>
</row>
<row>
    <column xs="4" offset-xs="8">
        <grid-box></grid-box>
    </column>
</row>
<row>
    <column xs="3" offset-xs="9">
        <grid-box></grid-box>
    </column>
</row>
<row>
    <column xs="2" offset-xs="10">
        <grid-box></grid-box>
    </column>
</row>
<row>
    <column xs="1" offset-xs="11">
        <grid-box></grid-box>
    </column>
</row>

~~~html
<container>
    <row>
        <column xs="1" offset-xs="11"></column>
    </row>
    <row>
        <column xs="2" offset-xs="10"></column>
    </row>
    <row>
        <column xs="3" offset-xs="9"></column>
    </row>
    <row>
        <column xs="4" offset-xs="8"></column>
    </row>
    <row>
        <column xs="5" offset-xs="7"></column>
    </row>
    <row>
        <column xs="6" offset-xs="6"></column>
    </row>
    <row>
        <column xs="7" offset-xs="5"></column>
    </row>
    <row>
        <column xs="8" offset-xs="4"></column>
    </row>
    <row>
        <column xs="9" offset-xs="3"></column>
    </row>
    <row>
        <column xs="10" offset-xs="2"></column>
    </row>
    <row>
        <column xs="11" offset-xs="1"></column>
    </row>
</container>
~~~


## Grid Push / Pull
Code-wise, the columns have a different order.

<row>
    <column xs="12"></column>
</row>
<row>
    <column xs="1" push-xs="11">
        <grid-box></grid-box>
    </column>
    <column xs="11" pull-xs="1">
        <grid-box></grid-box>
    </column>
</row>
<row>
    <column xs="2" push-xs="10">
        <grid-box></grid-box>
    </column>
    <column xs="10" pull-xs="2">
        <grid-box></grid-box>
    </column>
</row>
<row>
    <column xs="3" push-xs="9">
        <grid-box></grid-box>
    </column>
    <column xs="9" pull-xs="3">
        <grid-box></grid-box>
    </column>
</row>
<row>
    <column xs="4" push-xs="8">
        <grid-box></grid-box>
    </column>
    <column xs="8" pull-xs="4">
        <grid-box></grid-box>
    </column>
</row>
<row>
    <column xs="5" push-xs="7">
        <grid-box></grid-box>
    </column>
    <column xs="7" pull-xs="5">
        <grid-box></grid-box>
    </column>
</row>
<row>
    <column xs="6" push-xs="6">
        <grid-box></grid-box>
    </column>
    <column xs="6" pull-xs="6">
        <grid-box></grid-box>
    </column>
</row>
<row>
    <column xs="7" push-xs="5">
        <grid-box></grid-box>
    </column>
    <column xs="5" pull-xs="7">
        <grid-box></grid-box>
    </column>
</row>
<row>
    <column xs="8" push-xs="4">
        <grid-box></grid-box>
    </column>
    <column xs="4" pull-xs="8">
        <grid-box></grid-box>
    </column>
</row>
<row>
    <column xs="9" push-xs="3">
        <grid-box></grid-box>
    </column>
    <column xs="3" pull-xs="9">
        <grid-box></grid-box>
    </column>
</row>
<row>
    <column xs="10" push-xs="2">
        <grid-box></grid-box>
    </column>
    <column xs="2" pull-xs="10">
        <grid-box></grid-box>
    </column>
</row>
<row>
    <column xs="11" push-xs="1">
        <grid-box></grid-box>
    </column>
    <column xs="1" pull-xs="11">
        <grid-box></grid-box>
    </column>
</row>
<row>
    <column xs="12">
        <grid-box></grid-box>
    </column>
</row>

~~~html
<container>
    <row>
        <column xs="1" push-xs="11"></div>
        <column xs="11" pull-xs="1"></div>
    </row>
    <row>
        <column xs="2" push-xs="10"></div>
        <column xs="10" pull-xs="2"></div>
    </row>
    <row>
        <column xs="3" push-xs="9"></div>
        <column xs="9" pull-xs="3"></div>
    </row>
    <row>
        <column xs="4" push-xs="8"></div>
        <column xs="8" pull-xs="4"></div>
    </row>
    <row>
        <column xs="5" push-xs="7"></div>
        <column xs="7" pull-xs="5"></div>
    </row>
    <row>
        <column xs="6" push-xs="6"></div>
        <column xs="6" pull-xs="6"></div>
    </row>
    <row>
        <column xs="7" push-xs="5"></div>
        <column xs="5" pull-xs="7"></div>
    </row>
    <row>
        <column xs="8" push-xs="8"></div>
        <column xs="4" pull-xs="4"></div>
    </row>
    <row>
        <column xs="9" push-xs="3"></div>
        <column xs="3" pull-xs="9"></div>
    </row>
    <row>
        <column xs="10" push-xs="2"></div>
        <column xs="2" pull-xs="10"></div>
    </row>
    <row>
        <column xs="11" push-xs="1"></div>
        <column xs="1" pull-xs="11"></div>
    </row>
</container>
~~~


## Auto Width
The grid will automatically fit any number of auto sizing columns to a row.

<row>
    <column :xs="true">
        <grid-box></grid-box>
    </column>
</row>
<row>
    <column :xs="true">
        <grid-box></grid-box>
    </column>
    <column :xs="true">
        <grid-box></grid-box>
    </column>
</row>
<row>
    <column :xs="true">
        <grid-box></grid-box>
    </column>
    <column :xs="true">
        <grid-box></grid-box>
    </column>
    <column :xs="true">
        <grid-box></grid-box>
    </column>
</row>
<row>
    <column :xs="true">
        <grid-box></grid-box>
    </column>
    <column :xs="true">
        <grid-box></grid-box>
    </column>
    <column :xs="true">
        <grid-box></grid-box>
    </column>
    <column :xs="true">
        <grid-box></grid-box>
    </column>
</row>
<row>
    <column :xs="true">
        <grid-box></grid-box>
    </column>
    <column :xs="true">
        <grid-box></grid-box>
    </column>
    <column :xs="true">
        <grid-box></grid-box>
    </column>
    <column :xs="true">
        <grid-box></grid-box>
    </column>
    <column :xs="true">
        <grid-box></grid-box>
    </column>
</row>
<row>
    <column :xs="true">
        <grid-box></grid-box>
    </column>
    <column :xs="true">
        <grid-box></grid-box>
    </column>
    <column :xs="true">
        <grid-box></grid-box>
    </column>
    <column :xs="true">
        <grid-box></grid-box>
    </column>
    <column :xs="true">
        <grid-box></grid-box>
    </column>
    <column :xs="true">
        <grid-box></grid-box>
    </column>
</row>

~~~html
<container>
    <row>
        <column :xs="true"></column>
    </row>
    <row>
        <column :xs="true"></column>
        <column :xs="true"></column>
    </row>
    <row>
        <column :xs="true"></column>
        <column :xs="true"></column>
        <column :xs="true"></column>
    </row>
    <row>
        <column :xs="true"></column>
        <column :xs="true"></column>
        <column :xs="true"></column>
        <column :xs="true"></column>
    </row>
    <row>
        <column :xs="true"></column>
        <column :xs="true"></column>
        <column :xs="true"></column>
        <column :xs="true"></column>
        <column :xs="true"></column>
    </row>
    <row>
        <column :xs="true"></column>
        <column :xs="true"></column>
        <column :xs="true"></column>
        <column :xs="true"></column>
        <column :xs="true"></column>
        <column :xs="true"></column>
    </row>
</container>
~~~


## Nested Grid
Inkline allows you to nest up to 12 columns inside a row. Row can also be nested inside any column, 
giving you virtually endless layout possibilities. You can place rows only inside a container or a column, 
while you can place columns only inside a row.

<row>
    <column xs="8">
        <grid-box>
            <row>
                <column xs="3">
                    <grid-box></grid-box>
                </column>
                <column xs="3">
                    <grid-box></grid-box>
                </column>
                <column xs="3">
                    <grid-box></grid-box>
                </column>
                <column xs="3">
                    <grid-box></grid-box>
                </column>
            </row>
        </grid-box>
    </column>
    <column xs="4">
        <grid-box>
            <row>
                <column xs="6">
                    <grid-box></grid-box>
                </column>
                <column xs="6">
                    <grid-box></grid-box>
                </column>
            </row>
        </grid-box>
    </column>
</row>

~~~html
<container>
    <row>
        <column xs="8">
            <row>
                <column xs="3"></column>
                <column xs="3"></column>
                <column xs="3"></column>
                <column xs="3"></column>
            </row>
        </column>
        <column xs="4">
            <row>
                <column xs="6"></column>
                <column xs="6"></column>
            </row>
        </column>
    </row>
</container>
~~~


## Horizontal Alignment
You can align columns horizontally to the start, center, or end of a row.

#### start-*

<row start-xs>
    <column xs="4">
        <grid-box></grid-box>
    </column>
</row>

~~~html
<container>
    <row start-xs>
        <column xs="4"></column>
    </row>
</container>
~~~

#### center-*

<row center-xs>
    <column xs="4">
        <grid-box></grid-box>
    </column>
</row>

~~~html
<container>
    <row center-xs>
        <column xs="4"></column>
    </row>
</container>
~~~

#### end-*

<row end-xs>
    <column xs="4">
        <grid-box></grid-box>
    </column>
</row>

~~~html
<container>
    <row end-xs>
        <column xs="4"></column>
    </row>
</container>
~~~


## Vertical Alignment
You can align columns vertically to the top, middle or bottom of the row.

#### top-*

<row top-xs>
    <column xs="6">
        <grid-box tall></grid-box>
    </column>
    <column xs="6">
        <grid-box></grid-box>
    </column>
</row>

~~~html
<container>
    <row top-xs>
        <column xs="6"></column>
        <column xs="6"></column>
    </row>
</container>
~~~

#### middle-*

<row middle-xs>
    <column xs="6">
        <grid-box tall></grid-box>
    </column>
    <column xs="6">
        <grid-box></grid-box>
    </column>
</row>

~~~html
<container>
    <row middle-xs>
        <column xs="6"></column>
        <column xs="6"></column>
    </row>
</container>
~~~

#### bottom-*

<row bottom-xs>
    <column xs="6">
        <grid-box tall></grid-box>
    </column>
    <column xs="6">
        <grid-box></grid-box>
    </column>
</row>

~~~html
<container>
    <row bottom-xs>
        <column xs="6"></column>
        <column xs="6"></column>
    </row>
</container>
~~~


## Distribution
Distribute the spacing between the columns of a row.

### around-*

<row around-xs>
    <column xs="3">
        <grid-box></grid-box>
    </column>
    <column xs="3">
        <grid-box></grid-box>
    </column>
    <column xs="3">
        <grid-box></grid-box>
    </column>
</row>

~~~html
<container>
    <row around-xs>
        <column xs="3"></column>
        <column xs="3"></column>
        <column xs="3"></column>
    </row>
</container>
~~~

### between-*

<row between-xs>
    <column xs="3">
        <grid-box></grid-box>
    </column>
    <column xs="3">
        <grid-box></grid-box>
    </column>
    <column xs="3">
        <grid-box></grid-box>
    </column>
</row>

~~~html
<container>
    <row between-xs>
        <column xs="3"></column>
        <column xs="3"></column>
        <column xs="3"></column>
    </row>
</container>
~~~


## Reordering
Reorder columns using helper classes.

### reverse-*

<row reverse-xs>
    <column xs="3">
        <grid-box>1</grid-box>
    </column>
    <column xs="3">
        <grid-box>2</grid-box>
    </column>
    <column xs="3">
        <grid-box>3</grid-box>
    </column>
    <column xs="3">
        <grid-box>4</grid-box>
    </column>
</row>

~~~html
<container>
    <row reverse-xs>
        <column xs="3">1</column>
        <column xs="3">2</column>
        <column xs="3">3</column>
        <column xs="3">4</column>
    </row>
</container>
~~~

### first-*

<row>
    <column xs="3">
        <grid-box>1</grid-box>
    </column>
    <column xs="3">
        <grid-box>2</grid-box>
    </column>
    <column xs="3">
        <grid-box>3</grid-box>
    </column>
    <column xs="3" first-xs>
        <grid-box>4</grid-box>
    </column>
</row>

~~~html
<container>
    <row>
        <column xs="3">1</column>
        <column xs="3">2</column>
        <column xs="3">3</column>
        <column xs="3" first-xs>4</column>
    </row>
</container>
~~~

### last-*

<row>
    <column xs="3" last-xs>
        <grid-box>1</grid-box>
    </column>
    <column xs="3">
        <grid-box>2</grid-box>
    </column>
    <column xs="3">
        <grid-box>3</grid-box>
    </column>
    <column xs="3">
        <grid-box>4</grid-box>
    </column>
</row>

~~~html
<container>
    <row>
        <column xs="3" last-xs>1</div>
        <column xs="3">2</div>
        <column xs="3">3</div>
        <column xs="3">4</div>
    </row>
</container>
~~~


## Responsive Width
You can specify column counts for each breakpoint. Try to resize your browser window!

<row>
    <column xl="3" lg="6" md="6" sm="8" xs="12">
        <grid-box></grid-box>
    </column>
    <column xl="3" lg="6" md="6" sm="4" xs="6">
        <grid-box></grid-box>
    </column>
    <column xl="6" lg="4" md="6" sm="6" xs="3">
        <grid-box></grid-box>
    </column>
    <column xl="12" lg="8" md="6" sm="6" xs="3">
        <grid-box></grid-box>
    </column>
</row>

~~~html
<container>
    <row>
        <column xl="3" lg="6" md="6" sm="8" xs="12"></column>
        <column xl="3" lg="6" md="6" sm="4" xs="6"></column>
        <column xl="6" lg="4" md="6" sm="6" xs="3"></column>
        <column xl="12" lg="8" md="6" sm="6" xs="3"></column>
    </row>
</container>
~~~
