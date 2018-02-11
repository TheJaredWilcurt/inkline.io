<template>
    <div id="content">
        <container>
            <slot />
        </container>
    </div>
</template>

<script>
import { Container } from 'inkline';

export default {
    name: 'HomeLayout',
    components: {
        Container
    }
};
</script>
