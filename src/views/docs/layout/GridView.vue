<template lang="md" src="./GridView.md"></template>

<script>
import HomeLayout from '@/views/layouts/HomeLayout';
import GridBox from '@/components/grid-box/GridBox';

export default {
    name: 'HomeView',
    extends: HomeLayout,
    components: {
        Layout: HomeLayout,
        GridBox
    }
};
</script>
