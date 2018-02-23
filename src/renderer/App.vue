<template>
    <div id="app" class="app">
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        name: 'msb'
    }
</script>

<style lang="scss">
    /* CSS */
    @import url('//fonts.googleapis.com/css?family=Roboto:400,500,700,400italic|Material+Icons');

    * {
        margin: 0;
        padding: 0;
    }

    html, body {
        height: 100%;
    }

    .app {
        height: 100%;
        overflow: hidden;

    }
</style>

<style lang="scss" scoped>

    .container {
        min-height: 100%;
        padding-top: 64px;
        display: flex;
        flex-direction: column;
        font-family: "Roboto Mono", monospace;
        transition-property: padding-top;
    }

    .container-wrapper {
        &:not(.splash) {
            flex: 1;
            padding-left: 230px !important;
        }
    }

    .main-container {
        flex: 1;
        position: relative;
        z-index: 1;
    }
</style>
