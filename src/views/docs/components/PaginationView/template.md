# Pagination
Pagination provides navigation for large series of related content.{.lead}

## Example
Pagination items are automatically generated based on the total item count `items` and how many items will be displayed on the page, configured using `items-per-page`, with the default value being `20`. The currently selected page is kept synchronised using `v-model`.

<i-pagination v-model="currentPage" :items="300" :items-per-page="20"></i-pagination>

~~~html
<i-pagination v-model="currentPage" :items="300" :items-per-page="20"></i-pagination>
~~~

~~~js
export default {
  data () {
    return {
      currentPage: 1
    };
  }
}
~~~


## Pagination Variants
Inkline includes two predefined pagination styles. You can set the style of a `<i-pagination>` using the `variant` property, which can have a value of `light` or `dark`. By default, pagination uses the `light` variant.

<i-pagination v-model="currentPageLight" variant="light" :items="100" :items-per-page="10"></i-pagination>

<i-pagination v-model="currentPageDark" variant="dark" :items="100" :items-per-page="10"></i-pagination>

~~~html
<i-pagination v-model="currentPage" variant="light" :items="100" :items-per-page="10"></i-pagination>

<i-pagination v-model="currentPage" variant="dark" :items="100" :items-per-page="10"></i-pagination>
~~~

~~~js
export default {
  data () {
    return {
      currentPage: 1
    };
  }
}
~~~

## Pagination Sizes
You're able to use the `size` modifier to control the size of your pagination items, using one of the available sizes: `sm`, `md`, and `lg`. The default size is set to `md`.

<div>
<i-pagination v-model="currentPageSm" size="sm" :items="100" :items-per-page="10"></i-pagination>

<i-pagination v-model="currentPageMd" size="md" :items="100" :items-per-page="10"></i-pagination>

<i-pagination v-model="currentPageLg" size="lg" :items="100" :items-per-page="10"></i-pagination>
</div>

~~~html
<i-pagination v-model="currentPage" size="sm" :items="100" :items-per-page="10"></i-pagination>

<i-pagination v-model="currentPage" size="md" :items="100" :items-per-page="10"></i-pagination>

<i-pagination v-model="currentPage" size="lg" :items="100" :items-per-page="10"></i-pagination>
~~~

~~~js
export default {
  data () {
    return {
      currentPage: 1
    };
  }
}
~~~
