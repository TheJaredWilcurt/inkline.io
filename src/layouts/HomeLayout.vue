<template>
    <div id="content">
        <container>
            <slot/>
        </container>
    </div>
</template>

<script>
import { Container } from 'inkline';

export default {
    name: 'HomeLayout',
    components: { Container }
};
</script>

<style lang="stylus">
.container,
.container.-fluid
    margin-left: auto
    margin-right: auto
    box-sizing: border-box
    width: 100%

/*
    for $breakpoint-name, $gutter-width in $gutter
        +breakpoint-up($breakpoint-name)
            padding-left: ($gutter-width / 2)
            padding-right: ($gutter-width / 2)

.container
    for $breakpoint-name, $container-max-width in $container-width
        +breakpoint-up($breakpoint-name)
            max-width: $container-max-width
*/
</style>
