<template>
    <div id="app" class="app">
            <md-tabs md-sync-route class="md-transparent md-primary md-sync-route" md-alignment="fixed">
                <md-tab id="home" md-label="Home" to="/components/LandingPage"></md-tab>
                <md-tab id="mixed" md-label="Mixed" to="/components/MixedSetPage">
                    Mixed Page
                </md-tab>
                <md-tab id="tab-posts" md-label="Posts"></md-tab>
                <md-tab id="tab-favorites" md-label="Favorites"></md-tab>
            </md-tabs>
            </div>
            <button type="button" class="minButton md-button md-icon-button md-theme-default">
                <div class="md-ripple">
                    <div class="md-button-content">
                        <i class="md-icon">remove</i>
                    </div>
                    <span>
                    <span class="md-ripple-wave" style="top: -3.42188px; left:6px; width:32px; height: 32px;"></span>
                </span>
                </div>
            </button>
            <button type="button" class="exitButton md-button md-icon-button md-theme-default">
                <div class="md-ripple">
                    <div class="md-button-content">
                        <i class="md-icon">clear</i>
                    </div>
                    <span>
                    <span class="md-ripple-wave" style="top: -3.42188px; left:6px; width:32px; height: 32px;"></span>
                </span>
                </div>
            </button>
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

    div.navbar-header {
        width: 90%;
    }

    .exitButton {
        position: absolute;
        top: 4px;
        right: 0;
        z-index: 1000;
    }

    .minButton {
        position: absolute;
        top: 4px;
        right: 5%;
        z-index: 1000;
    }

    .md-icon-button {
        width: 40px;
        min-width: 40px;
        height: 40px;
        margin: 0 6px
    }

    .md-icon-button.md-dense {
        width: 32px;
        min-width: 32px;
        height: 32px
    }

    .md-icon-button .md-ripple-enter-active {
        transition-duration: 1.2s
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
