<template lang="md">
<layout markdown="1">

# Hello world
This is markdown.

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
