<template>
    <layout>
        <row>
            <column xs="12">
                <h1>Hello world!</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, alias amet assumenda aut, ducimus earum, eligendi est exercitationem fugiat in inventore ipsam labore mollitia odit repellat sequi ut voluptas voluptatem!</p>
            </column>

            <column xs="12">
                <ol>
                    <li>Layout
                        <ul>
                            <li>Core</li>
                            <li><router-link :to="{ path: 'grid' }">Grid</router-link></li>
                            <li>Print</li>
                        </ul>
                    </li>
                    <li>Content
                        <ul>
                            <li><a href="/content/code">Code</a></li>
                            <li><a href="/content/images">Images</a></li>
                            <li><a href="/content/tables">Tables</a></li>
                            <li><a href="/content/typography">Typography</a></li>
                        </ul>
                    </li>
                    <li>Components
                        <ul>
                            <li>Alerts</li>
                            <li>Badges</li>
                            <li>Breadcrumb</li>
                            <li>Buttons</li>
                            <li>Button Groups</li>
                            <li>Card</li>
                            <li>Carousel</li>
                            <li>Collapse</li>
                            <li>Dropdowns</li>
                            <li>Forms</li>
                            <li>Input Groups</li>
                            <li>Header</li>
                            <li>List Group</li>
                            <li><a href="/components/media">Media Object</a></li>
                            <li>Modal</li>
                            <li>Navs</li>
                            <li>Navbar</li>
                            <li>Pagination</li>
                            <li>Popovers</li>
                            <li>Progress</li>
                            <li>Scrollspy</li>
                            <li>Tooltips</li>
                        </ul>
                    </li>
                </ol>
            </column>
        </row>
    </layout>
</template>

<script>
import HomeLayout from '@/views/layouts/HomeLayout';

export default {
    name: 'HomeView',
    extends: HomeLayout,
    components: {
        Layout: HomeLayout
    }
};
</script>
