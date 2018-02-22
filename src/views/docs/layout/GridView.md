<layout>

# Grid
A simple 12 column grid built using flexbox.
{: .lead }

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

~~~
<container>
  <row>
    <column xs="3"></column>
    <column xs="9"></column>
  </row>
</row>
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

~~~
<container>
  <row>
    <column xs="1" offset-xs="11"></column>
  </div>
</row>
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

~~~
<container>
  <row>
    <column xs="4" push-xs="8"></div>
    <column xs="8" pull-xs="4"></div>
  </div>
</row>
~~~


## Auto Width
The grid will automatically fit any number of auto sizing columns to a row.

<row>
  <column :xs="true">
    <grid-box></grid-box>
  </column>
</row>
<row>
  <column xs>
    <grid-box></grid-box>
  </column>
  <column xs>
    <grid-box></grid-box>
  </column>
</row>
<row>
  <column xs>
    <grid-box></grid-box>
  </column>
  <column xs>
    <grid-box></grid-box>
  </column>
  <column xs>
    <grid-box></grid-box>
  </column>
</row>
<row>
  <column xs>
    <grid-box></grid-box>
  </column>
  <column xs>
    <grid-box></grid-box>
  </column>
  <column xs>
    <grid-box></grid-box>
  </column>
  <column xs>
    <grid-box></grid-box>
  </column>
</row>
<row>
  <column xs>
    <grid-box></grid-box>
  </column>
  <column xs>
    <grid-box></grid-box>
  </column>
  <column xs>
    <grid-box></grid-box>
  </column>
  <column xs>
    <grid-box></grid-box>
  </column>
  <column xs>
    <grid-box></grid-box>
  </column>
</row>
<row>
  <column xs>
    <grid-box></grid-box>
  </column>
  <column xs>
    <grid-box></grid-box>
  </column>
  <column xs>
    <grid-box></grid-box>
  </column>
  <column xs>
    <grid-box></grid-box>
  </column>
  <column xs>
    <grid-box></grid-box>
  </column>
  <column xs>
    <grid-box></grid-box>
  </column>
</row>

~~~
<container>
  <row>
    <column xs></column>
    <column xs></column>
    <column xs></column>
  </div>
</row>
~~~


## Nested Grid
The grid will automatically fit any number of auto sizing columns to a row.

<row>
  <column xs="8">
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
  </column>
  <column xs="4">
    <row>
      <column xs="6">
        <grid-box></grid-box>
      </column>
      <column xs="6">
        <grid-box></grid-box>
      </column>
    </row>
  </column>
</row>

~~~
<container>
  <row>
    <column xs="8">
      <column xs="3"></column>
      <column xs="3"></column>
      <column xs="3"></column>
      <column xs="3"></column>
    </column>
    <column xs="4">
      <column xs="6"></column>
      <column xs="6"></column>
    </column>
  </row>
</container>
~~~


## Horizontal Alignment
Align elements to the start, center, or end of a row.

### start-*

<row start="xs">
  <column xs="4">
    <grid-box></grid-box>
  </column>
</row>

~~~
<container>
  <row start="xs">
    <column xs="4"></column>
  </row>
</container>
~~~

### center-*

<row center="xs">
  <column xs="4">
    <grid-box></grid-box>
  </column>
</row>

~~~
<container>
  <row center="xs">
    <column xs="4"></column>
  </row>
</container>
~~~

### end-*

<row end="xs">
  <column xs="4">
    <grid-box></grid-box>
  </column>
</row>

~~~
<container>
  <row end="xs">
    <column xs="4"></column>
  </row>
</container>
~~~


## Vertical Alignment
Align elements to the top, bottom, or center of a column.

### top-*

<row top="xs">
  <column xs="6">
    <grid-box tall></grid-box>
  </column>
  <column xs="6">
    <grid-box></grid-box>
  </column>
</row>

~~~
<container>
  <row top="xs">
    <column xs="6"></column>
    <column xs="6"></column>
  </row>
</container>
~~~

### middle-*

<row middle="xs">
  <column xs="6">
    <grid-box tall></grid-box>
  </column>
  <column xs="6">
    <grid-box></grid-box>
  </column>
</row>

~~~
<container>
  <row middle="xs">
    <column xs="6"></column>
    <column xs="6"></column>
  </row>
</row>
~~~

### bottom-*

<row bottom="xs">
  <column xs="6">
    <grid-box tall></grid-box>
  </column>
  <column xs="6">
    <grid-box></grid-box>
  </column>
</row>

~~~
<container>
  <row bottom="xs">
    <column xs="6"></column>
    <column xs="6"></column>
  </row>
</container>
~~~


## Distribution
Distribute the contents of a row or column.

### around-*

<row around="xs">
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

~~~
<container>
  <row around="xs">
    <column xs="3"></column>
    <column xs="3"></column>
    <column xs="3"></column>
  </row>
</container>
~~~

### between-*

<row between="xs">
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

~~~
<container>
  <row between="xs">
    <column xs="3"></column>
    <column xs="3"></column>
    <column xs="3"></column>
  </row>
</container>
~~~


## Reordering
Reorder columns using helper classes.

### .-reverse-*

<row reverse="xs">
  <column xs="3">
    <div class="box">1</div>
  </column>
  <column xs="3">
    <div class="box">2</div>
  </column>
  <column xs="3">
    <div class="box">3</div>
  </column>
  <column xs="3">
    <div class="box">4</div>
  </column>
</row>

~~~
<container>
  <row reverse="xs">
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
    <div class="box">1</div>
  </column>
  <column xs="3">
    <div class="box">2</div>
  </column>
  <column xs="3">
    <div class="box">3</div>
  </column>
  <column xs="3" first="xs">
    <div class="box">4</div>
  </column>
</row>

~~~
<container>
  <row>
    <column xs="3">1</column>
    <column xs="3">2</column>
    <column xs="3">3</column>
    <column xs="3" first="xs">4</column>
  </row>
</container>
~~~

### .-last-*

<row>
  <column xs="3" last="xs">
    <div class="box">1</div>
  </column>
  <column xs="3">
    <div class="box">2</div>
  </column>
  <column xs="3">
    <div class="box">3</div>
  </column>
  <column xs="3">
    <div class="box">4</div>
  </column>
</row>

~~~
<container>
  <row>
    <column xs="3" last="xs">1</div>
    <column xs="3">2</div>
    <column xs="3">3</div>
    <column xs="3">4</div>
  </row>
</container>
~~~


</layout>
