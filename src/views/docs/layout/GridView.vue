<template lang="md">
    <layout>

    # Hello world!
    This is markdown inside of HTML.

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
