<template>
    <layout>
        <row>
            <column xs="12">
                <h1>Hello world!</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, alias amet assumenda aut, ducimus earum, eligendi est exercitationem fugiat in inventore ipsam labore mollitia odit repellat sequi ut voluptas voluptatem!</p>
            </column>
        </row>
    </layout>
</template>

<script>
import View from '@/common/View';
import HomeLayout from '@/views/layouts/HomeLayout';

export default {
    name: 'HomeView',
    extends: View,
    components: {
        Layout: HomeLayout
    }
};
</script>
