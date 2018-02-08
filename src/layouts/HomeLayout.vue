<template>
    <div id="content">
        <container>
            <row>
                <slot/>
            </row>
        </container>
    </div>
</template>

<script>
import { Container, Row } from 'inkline';

export default {
    name: 'HomeLayout',
    components: { Container, Row }
};
</script>
