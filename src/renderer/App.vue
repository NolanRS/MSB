<template>
    <div id="app" class="app">
        <div class="navbar-header">
            <md-tabs class="md-transparent md-primary md-sync-route" md-alignment="fixed">
                <md-tab id="home" md-label="Search" to="/home"></md-tab>
                <md-tab id="mixed" md-label="Mixed" to="/mixed"></md-tab>
                <md-tab id="tab-posts" md-label="Auto" to="/auto"></md-tab>
            </md-tabs>

            <button type="button" id="minimize" class="minButton md-button md-icon-button md-theme-default">
                <div class="md-ripple">
                    <div class="md-button-content">
                        <i class="md-icon">remove</i>
                    </div>
                    <span>
                    <span class="md-ripple-wave" style="top: -3.42188px; left:6px; width:32px; height: 32px;"></span>
                </span>
                </div>
            </button>
            <button type="button" id="exit" class="exitButton md-button md-icon-button md-theme-default">
                <div class="md-ripple">
                    <div class="md-button-content">
                        <i class="md-icon">clear</i>
                    </div>
                    <span>
                    <span class="md-ripple-wave" style="top: -3.42188px; left:6px; width:32px; height: 32px;"></span>
                </span>
                </div>
            </button>
        </div>
        <router-view></router-view>
    </div>
</template>

<script>

    export default {
        name: 'msb',
        methods: {

        },
    }
</script>

<style lang="scss">
    /* CSS */
    @import url('//fonts.googleapis.com/css?family=Roboto:400,500,700,400italic|Material+Icons');

    html, body {
        height: 100%;
        -ms-overflow-style: scrollbar;
        -webkit-app-region:drag;
    }

    .app {
        height: 100%;
        overflow: hidden;
    }
    .main-container {
        width:100vw;
        height:91vh;
        -webkit-app-region:no-drag;
    }

    .md-content {
        width:100vw;
        height:91vh;
    }

    div.navbar-header {
        width: 90%;
    }

    .exitButton {
        position: absolute;
        top: 4px;
        right: 0;
    }

    .minButton {
        position: absolute;
        top: 4px;
        right: 5%;
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

</style>
