# Grid
Inkline's grid system is modelled as a 12 columns layout built using flexbox, with equally divided columns, 
separated by a small gutter. We've made sure to use percentage widths, so that it is usable at any nesting level. { .lead }

The grid system is defined using `row` and `column` components, with each one having specific responsive 
modifiers. Here's how it works:

- First, we define a row with a set of columns inside of it.
- Your content elements should be placed directly in a `column`, and only `column` should be placed directly in `row`
- The column width takes a value of 1-12 at each responsive breakpoint (`xs`, `sm`, `md`, `lg`, `xlg`).
- If the sum of `column` widths in a row is more than 12, then the overflowing column will start on a new line.


## Basic Layout
Create basic grid layout using columns.

<Row>
    <Column xs="12">
        <GridBox></GridBox>
    </Column>
</Row>
<Row>
    <Column xs="1">
        <GridBox></GridBox>
    </Column>
    <Column xs="11">
        <GridBox></GridBox>
    </Column>
</Row>
<Row>
    <Column xs="2">
        <GridBox></GridBox>
    </Column>
    <Column xs="10">
        <GridBox></GridBox>
    </Column>
</Row>
<Row>
    <Column xs="3">
        <GridBox></GridBox>
    </Column>
    <Column xs="9">
        <GridBox></GridBox>
    </Column>
</Row>
<Row>
    <Column xs="4">
        <GridBox></GridBox>
    </Column>
    <Column xs="8">
        <GridBox></GridBox>
    </Column>
</Row>
<Row>
    <Column xs="5">
        <GridBox></GridBox>
    </Column>
    <Column xs="7">
        <GridBox></GridBox>
    </Column>
</Row>
<Row>
    <Column xs="6">
        <GridBox></GridBox>
    </Column>
    <Column xs="6">
        <GridBox></GridBox>
    </Column>
</Row>
<Row>
    <Column xs="7">
        <GridBox></GridBox>
    </Column>
    <Column xs="5">
        <GridBox></GridBox>
    </Column>
</Row>
<Row>
    <Column xs="8">
        <GridBox></GridBox>
    </Column>
    <Column xs="4">
        <GridBox></GridBox>
    </Column>
</Row>
<Row>
    <Column xs="9">
        <GridBox></GridBox>
    </Column>
    <Column xs="3">
        <GridBox></GridBox>
    </Column>
</Row>
<Row>
    <Column xs="10">
        <GridBox></GridBox>
    </Column>
    <Column xs="2">
        <GridBox></GridBox>
    </Column>
</Row>
<Row>
    <Column xs="11">
        <GridBox></GridBox>
    </Column>
    <Column xs="1">
        <GridBox></GridBox>
    </Column>
</Row>
<Row>
    <Column xs="12">
        <GridBox></GridBox>
    </Column>
</Row>

~~~html
<Container>
    <Row>
        <Column xs="12"></Column>
    </Row>    
    <Row>
        <Column xs="1"></Column>
        <Column xs="11"></Column>
    </Row>    
    <Row>
        <Column xs="2"></Column>
        <Column xs="10"></Column>
    </Row>
    <Row>
        <Column xs="3"></Column>
        <Column xs="9"></Column>
    </Row>
    <Row>
        <Column xs="4"></Column>
        <Column xs="8"></Column>
    </Row>
    <Row>
        <Column xs="5"></Column>
        <Column xs="7"></Column>
    </Row>
    <Row>
        <Column xs="6"></Column>
        <Column xs="6"></Column>
    </Row>
    <Row>
        <Column xs="7"></Column>
        <Column xs="5"></Column>
    </Row>
    <Row>
        <Column xs="8"></Column>
        <Column xs="4"></Column>
    </Row>
    <Row>
        <Column xs="9"></Column>
        <Column xs="3"></Column>
    </Row>
    <Row>
        <Column xs="10"></Column>
        <Column xs="2"></Column>
    </Row>
    <Row>
        <Column xs="11"></Column>
        <Column xs="1"></Column>
    </Row>
    <Row>
        <Column xs="12"></Column>
    </Row>
</Container>
~~~


## Grid Offset
Grid offsets are used to move a column to the right without creating an empty column next to it.

<Row>
    <Column xs="12">
        <GridBox></GridBox>
    </Column>
</Row>
<Row>
    <Column xs="11" offset-xs="1">
        <GridBox></GridBox>
    </Column>
</Row>
<Row>
    <Column xs="10" offset-xs="2">
        <GridBox></GridBox>
    </Column>
</Row>
<Row>
    <Column xs="9" offset-xs="3">
        <GridBox></GridBox>
    </Column>
</Row>
<Row>
    <Column xs="8" offset-xs="4">
        <GridBox></GridBox>
    </Column>
</Row>
<Row>
    <Column xs="7" offset-xs="5">
        <GridBox></GridBox>
    </Column>
</Row>
<Row>
    <Column xs="6" offset-xs="6">
        <GridBox></GridBox>
    </Column>
</Row>
<Row>
    <Column xs="5" offset-xs="7">
        <GridBox></GridBox>
    </Column>
</Row>
<Row>
    <Column xs="4" offset-xs="8">
        <GridBox></GridBox>
    </Column>
</Row>
<Row>
    <Column xs="3" offset-xs="9">
        <GridBox></GridBox>
    </Column>
</Row>
<Row>
    <Column xs="2" offset-xs="10">
        <GridBox></GridBox>
    </Column>
</Row>
<Row>
    <Column xs="1" offset-xs="11">
        <GridBox></GridBox>
    </Column>
</Row>

~~~html
<Container>
    <Row>
        <Column xs="1" offset-xs="11"></Column>
    </Row>
    <Row>
        <Column xs="2" offset-xs="10"></Column>
    </Row>
    <Row>
        <Column xs="3" offset-xs="9"></Column>
    </Row>
    <Row>
        <Column xs="4" offset-xs="8"></Column>
    </Row>
    <Row>
        <Column xs="5" offset-xs="7"></Column>
    </Row>
    <Row>
        <Column xs="6" offset-xs="6"></Column>
    </Row>
    <Row>
        <Column xs="7" offset-xs="5"></Column>
    </Row>
    <Row>
        <Column xs="8" offset-xs="4"></Column>
    </Row>
    <Row>
        <Column xs="9" offset-xs="3"></Column>
    </Row>
    <Row>
        <Column xs="10" offset-xs="2"></Column>
    </Row>
    <Row>
        <Column xs="11" offset-xs="1"></Column>
    </Row>
</Container>
~~~


## Grid Push / Pull
Code-wise, the columns have a different order.

<Row>
    <Column xs="12"></Column>
</Row>
<Row>
    <Column xs="1" push-xs="11">
        <GridBox></GridBox>
    </Column>
    <Column xs="11" pull-xs="1">
        <GridBox></GridBox>
    </Column>
</Row>
<Row>
    <Column xs="2" push-xs="10">
        <GridBox></GridBox>
    </Column>
    <Column xs="10" pull-xs="2">
        <GridBox></GridBox>
    </Column>
</Row>
<Row>
    <Column xs="3" push-xs="9">
        <GridBox></GridBox>
    </Column>
    <Column xs="9" pull-xs="3">
        <GridBox></GridBox>
    </Column>
</Row>
<Row>
    <Column xs="4" push-xs="8">
        <GridBox></GridBox>
    </Column>
    <Column xs="8" pull-xs="4">
        <GridBox></GridBox>
    </Column>
</Row>
<Row>
    <Column xs="5" push-xs="7">
        <GridBox></GridBox>
    </Column>
    <Column xs="7" pull-xs="5">
        <GridBox></GridBox>
    </Column>
</Row>
<Row>
    <Column xs="6" push-xs="6">
        <GridBox></GridBox>
    </Column>
    <Column xs="6" pull-xs="6">
        <GridBox></GridBox>
    </Column>
</Row>
<Row>
    <Column xs="7" push-xs="5">
        <GridBox></GridBox>
    </Column>
    <Column xs="5" pull-xs="7">
        <GridBox></GridBox>
    </Column>
</Row>
<Row>
    <Column xs="8" push-xs="4">
        <GridBox></GridBox>
    </Column>
    <Column xs="4" pull-xs="8">
        <GridBox></GridBox>
    </Column>
</Row>
<Row>
    <Column xs="9" push-xs="3">
        <GridBox></GridBox>
    </Column>
    <Column xs="3" pull-xs="9">
        <GridBox></GridBox>
    </Column>
</Row>
<Row>
    <Column xs="10" push-xs="2">
        <GridBox></GridBox>
    </Column>
    <Column xs="2" pull-xs="10">
        <GridBox></GridBox>
    </Column>
</Row>
<Row>
    <Column xs="11" push-xs="1">
        <GridBox></GridBox>
    </Column>
    <Column xs="1" pull-xs="11">
        <GridBox></GridBox>
    </Column>
</Row>
<Row>
    <Column xs="12">
        <GridBox></GridBox>
    </Column>
</Row>

~~~html
<Container>
    <Row>
        <Column xs="1" push-xs="11"></div>
        <Column xs="11" pull-xs="1"></div>
    </Row>
    <Row>
        <Column xs="2" push-xs="10"></div>
        <Column xs="10" pull-xs="2"></div>
    </Row>
    <Row>
        <Column xs="3" push-xs="9"></div>
        <Column xs="9" pull-xs="3"></div>
    </Row>
    <Row>
        <Column xs="4" push-xs="8"></div>
        <Column xs="8" pull-xs="4"></div>
    </Row>
    <Row>
        <Column xs="5" push-xs="7"></div>
        <Column xs="7" pull-xs="5"></div>
    </Row>
    <Row>
        <Column xs="6" push-xs="6"></div>
        <Column xs="6" pull-xs="6"></div>
    </Row>
    <Row>
        <Column xs="7" push-xs="5"></div>
        <Column xs="5" pull-xs="7"></div>
    </Row>
    <Row>
        <Column xs="8" push-xs="8"></div>
        <Column xs="4" pull-xs="4"></div>
    </Row>
    <Row>
        <Column xs="9" push-xs="3"></div>
        <Column xs="3" pull-xs="9"></div>
    </Row>
    <Row>
        <Column xs="10" push-xs="2"></div>
        <Column xs="2" pull-xs="10"></div>
    </Row>
    <Row>
        <Column xs="11" push-xs="1"></div>
        <Column xs="1" pull-xs="11"></div>
    </Row>
</Container>
~~~


## Auto Width
The grid will automatically fit any number of auto sizing columns to a row.

<Row>
    <Column :xs="true">
        <GridBox></GridBox>
    </Column>
</Row>
<Row>
    <Column :xs="true">
        <GridBox></GridBox>
    </Column>
    <Column :xs="true">
        <GridBox></GridBox>
    </Column>
</Row>
<Row>
    <Column :xs="true">
        <GridBox></GridBox>
    </Column>
    <Column :xs="true">
        <GridBox></GridBox>
    </Column>
    <Column :xs="true">
        <GridBox></GridBox>
    </Column>
</Row>
<Row>
    <Column :xs="true">
        <GridBox></GridBox>
    </Column>
    <Column :xs="true">
        <GridBox></GridBox>
    </Column>
    <Column :xs="true">
        <GridBox></GridBox>
    </Column>
    <Column :xs="true">
        <GridBox></GridBox>
    </Column>
</Row>
<Row>
    <Column :xs="true">
        <GridBox></GridBox>
    </Column>
    <Column :xs="true">
        <GridBox></GridBox>
    </Column>
    <Column :xs="true">
        <GridBox></GridBox>
    </Column>
    <Column :xs="true">
        <GridBox></GridBox>
    </Column>
    <Column :xs="true">
        <GridBox></GridBox>
    </Column>
</Row>
<Row>
    <Column :xs="true">
        <GridBox></GridBox>
    </Column>
    <Column :xs="true">
        <GridBox></GridBox>
    </Column>
    <Column :xs="true">
        <GridBox></GridBox>
    </Column>
    <Column :xs="true">
        <GridBox></GridBox>
    </Column>
    <Column :xs="true">
        <GridBox></GridBox>
    </Column>
    <Column :xs="true">
        <GridBox></GridBox>
    </Column>
</Row>

~~~html
<Container>
    <Row>
        <Column :xs="true"></Column>
    </Row>
    <Row>
        <Column :xs="true"></Column>
        <Column :xs="true"></Column>
    </Row>
    <Row>
        <Column :xs="true"></Column>
        <Column :xs="true"></Column>
        <Column :xs="true"></Column>
    </Row>
    <Row>
        <Column :xs="true"></Column>
        <Column :xs="true"></Column>
        <Column :xs="true"></Column>
        <Column :xs="true"></Column>
    </Row>
    <Row>
        <Column :xs="true"></Column>
        <Column :xs="true"></Column>
        <Column :xs="true"></Column>
        <Column :xs="true"></Column>
        <Column :xs="true"></Column>
    </Row>
    <Row>
        <Column :xs="true"></Column>
        <Column :xs="true"></Column>
        <Column :xs="true"></Column>
        <Column :xs="true"></Column>
        <Column :xs="true"></Column>
        <Column :xs="true"></Column>
    </Row>
</Container>
~~~


## Nested Grid
Inkline allows you to nest up to 12 columns inside a row. Row can also be nested inside any column, 
giving you virtually endless layout possibilities. You can place rows only inside a container or a column, 
while you can place columns only inside a row.

<Row>
    <Column xs="8">
        <GridBox>
            <Row>
                <Column xs="3">
                    <GridBox></GridBox>
                </Column>
                <Column xs="3">
                    <GridBox></GridBox>
                </Column>
                <Column xs="3">
                    <GridBox></GridBox>
                </Column>
                <Column xs="3">
                    <GridBox></GridBox>
                </Column>
            </Row>
        </GridBox>
    </Column>
    <Column xs="4">
        <GridBox>
            <Row>
                <Column xs="6">
                    <GridBox></GridBox>
                </Column>
                <Column xs="6">
                    <GridBox></GridBox>
                </Column>
            </Row>
        </GridBox>
    </Column>
</Row>

~~~html
<Container>
    <Row>
        <Column xs="8">
            <Row>
                <Column xs="3"></Column>
                <Column xs="3"></Column>
                <Column xs="3"></Column>
                <Column xs="3"></Column>
            </Row>
        </Column>
        <Column xs="4">
            <Row>
                <Column xs="6"></Column>
                <Column xs="6"></Column>
            </Row>
        </Column>
    </Row>
</Container>
~~~


## Horizontal Alignment
You can align columns horizontally to the start, center, or end of a row.

#### start-*

<Row start-xs>
    <Column xs="4">
        <GridBox></GridBox>
    </Column>
</Row>

~~~html
<Container>
    <Row start-xs>
        <Column xs="4"></Column>
    </Row>
</Container>
~~~

#### center-*

<Row center-xs>
    <Column xs="4">
        <GridBox></GridBox>
    </Column>
</Row>

~~~html
<Container>
    <Row center-xs>
        <Column xs="4"></Column>
    </Row>
</Container>
~~~

#### end-*

<Row end-xs>
    <Column xs="4">
        <GridBox></GridBox>
    </Column>
</Row>

~~~html
<Container>
    <Row end-xs>
        <Column xs="4"></Column>
    </Row>
</Container>
~~~


## Vertical Alignment
You can align columns vertically to the top, middle or bottom of the row.

#### top-*

<Row top-xs>
    <Column xs="6">
        <GridBox tall></GridBox>
    </Column>
    <Column xs="6">
        <GridBox></GridBox>
    </Column>
</Row>

~~~html
<Container>
    <Row top-xs>
        <Column xs="6"></Column>
        <Column xs="6"></Column>
    </Row>
</Container>
~~~

#### middle-*

<Row middle-xs>
    <Column xs="6">
        <GridBox tall></GridBox>
    </Column>
    <Column xs="6">
        <GridBox></GridBox>
    </Column>
</Row>

~~~html
<Container>
    <Row middle-xs>
        <Column xs="6"></Column>
        <Column xs="6"></Column>
    </Row>
</Container>
~~~

#### bottom-*

<Row bottom-xs>
    <Column xs="6">
        <GridBox tall></GridBox>
    </Column>
    <Column xs="6">
        <GridBox></GridBox>
    </Column>
</Row>

~~~html
<Container>
    <Row bottom-xs>
        <Column xs="6"></Column>
        <Column xs="6"></Column>
    </Row>
</Container>
~~~


## Distribution
Distribute the spacing between the columns of a row.

### around-*

<Row around-xs>
    <Column xs="3">
        <GridBox></GridBox>
    </Column>
    <Column xs="3">
        <GridBox></GridBox>
    </Column>
    <Column xs="3">
        <GridBox></GridBox>
    </Column>
</Row>

~~~html
<Container>
    <Row around-xs>
        <Column xs="3"></Column>
        <Column xs="3"></Column>
        <Column xs="3"></Column>
    </Row>
</Container>
~~~

### between-*

<Row between-xs>
    <Column xs="3">
        <GridBox></GridBox>
    </Column>
    <Column xs="3">
        <GridBox></GridBox>
    </Column>
    <Column xs="3">
        <GridBox></GridBox>
    </Column>
</Row>

~~~html
<Container>
    <Row between-xs>
        <Column xs="3"></Column>
        <Column xs="3"></Column>
        <Column xs="3"></Column>
    </Row>
</Container>
~~~


## Reordering
Reorder columns using helper classes.

### reverse-*

<Row reverse-xs>
    <Column xs="3">
        <GridBox>1</GridBox>
    </Column>
    <Column xs="3">
        <GridBox>2</GridBox>
    </Column>
    <Column xs="3">
        <GridBox>3</GridBox>
    </Column>
    <Column xs="3">
        <GridBox>4</GridBox>
    </Column>
</Row>

~~~html
<Container>
    <Row reverse-xs>
        <Column xs="3">1</Column>
        <Column xs="3">2</Column>
        <Column xs="3">3</Column>
        <Column xs="3">4</Column>
    </Row>
</Container>
~~~

### first-*

<Row>
    <Column xs="3">
        <GridBox>1</GridBox>
    </Column>
    <Column xs="3">
        <GridBox>2</GridBox>
    </Column>
    <Column xs="3">
        <GridBox>3</GridBox>
    </Column>
    <Column xs="3" first-xs>
        <GridBox>4</GridBox>
    </Column>
</Row>

~~~html
<Container>
    <Row>
        <Column xs="3">1</Column>
        <Column xs="3">2</Column>
        <Column xs="3">3</Column>
        <Column xs="3" first-xs>4</Column>
    </Row>
</Container>
~~~

### last-*

<Row>
    <Column xs="3" last-xs>
        <GridBox>1</GridBox>
    </Column>
    <Column xs="3">
        <GridBox>2</GridBox>
    </Column>
    <Column xs="3">
        <GridBox>3</GridBox>
    </Column>
    <Column xs="3">
        <GridBox>4</GridBox>
    </Column>
</Row>

~~~html
<Container>
    <Row>
        <Column xs="3" last-xs>1</div>
        <Column xs="3">2</div>
        <Column xs="3">3</div>
        <Column xs="3">4</div>
    </Row>
</Container>
~~~


## Responsive Width
You can specify column counts for each breakpoint. Try to resize your browser window!

<Row>
    <Column xl="3" lg="6" md="6" sm="8" xs="12">
        <GridBox></GridBox>
    </Column>
    <Column xl="3" lg="6" md="6" sm="4" xs="6">
        <GridBox></GridBox>
    </Column>
    <Column xl="6" lg="4" md="6" sm="6" xs="3">
        <GridBox></GridBox>
    </Column>
    <Column xl="12" lg="8" md="6" sm="6" xs="3">
        <GridBox></GridBox>
    </Column>
</Row>

~~~html
<Container>
    <Row>
        <Column xl="3" lg="6" md="6" sm="8" xs="12"></Column>
        <Column xl="3" lg="6" md="6" sm="4" xs="6"></Column>
        <Column xl="6" lg="4" md="6" sm="6" xs="3"></Column>
        <Column xl="12" lg="8" md="6" sm="6" xs="3"></Column>
    </Row>
</Container>
~~~
