<template>
    <layout>
        <h1>Hello world!</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, alias amet assumenda aut, ducimus earum, eligendi est exercitationem fugiat in inventore ipsam labore mollitia odit repellat sequi ut voluptas voluptatem!</p>
    </layout>
</template>

<script>
import HomeLayout from '@/layouts/HomeLayout';

export default {
    name: 'HomeView',
    components: {
        layout: HomeLayout
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
    font-weight: normal;
}
ul {
    list-style-type: none;
    padding: 0;
}
li {
    display: inline-block;
    margin: 0 10px;
}
a {
    color: #42b983;
}
</style>
