<template>
    <div id="content">
        <container>
            <slot />
        </container>
    </div>
</template>

<script>
import { Container, Column, Row } from 'inkline';

export default {
    name: 'HomeLayout',
    components: {
        Container,
        Column,
        Row
    }
};
</script>
