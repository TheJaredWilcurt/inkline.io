<template lang="md">
# Hello world
This is markdown.
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
