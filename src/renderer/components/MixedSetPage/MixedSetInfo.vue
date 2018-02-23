<template>
    <div class="main-nav-container">
        <transition name="nav" appear>
            <md-content class="main-nav md-scrollbar">
                <md-toolbar class="searchbar" :md-elevation="1">
                    <md-autocomplete v-model="selectedSkills" md-options="skills" md-dense="">
                        <label>Skill Search</label>
                    </md-autocomplete>
                </md-toolbar>
                <md-list class="md-alignment-centered">
                    <md-list-item md-expand>
                        <span class="md-list-item-text">Guard Up</span>

                        <md-list slot="md-expand">
                            <md-checkbox v-model="boolean">Boolean</md-checkbox>
                            <md-checkbox v-model="boolean">Boolean</md-checkbox>
                            <md-checkbox v-model="boolean">Boolean</md-checkbox>
                        </md-list>
                    </md-list-item>

                    <md-list-item md-expand>
                        <span class="md-list-item-text">Slugger</span>

                        <md-list slot="md-expand">
                            <md-checkbox v-model="boolean">Boolean</md-checkbox>
                            <md-list-item class="md-inset">Level 2</md-list-item>
                            <md-list-item class="md-inset">Level 3</md-list-item>
                        </md-list>
                    </md-list-item>
                    <md-list-item md-expand>
                        <span class="md-list-item-text">Master Mounter</span>

                        <md-list slot="md-expand">
                            <md-checkbox v-model="boolean">Boolean</md-checkbox>
                            <md-list-item class="md-inset">Level 2</md-list-item>
                            <md-list-item class="md-inset">Level 3</md-list-item>
                        </md-list>
                    </md-list-item>
                    <md-list-item md-expand>
                        <span class="md-list-item-text">Speed Sharpening</span>

                        <md-list slot="md-expand">
                            <md-checkbox v-model="boolean">Boolean</md-checkbox>
                            <md-list-item class="md-inset">Level 2</md-list-item>
                            <md-list-item class="md-inset">Level 3</md-list-item>
                        </md-list>
                    </md-list-item>
                    <md-list-item md-expand>
                        <span class="md-list-item-text">Handicraft</span>

                        <md-list slot="md-expand">
                            <md-checkbox v-model="boolean">Boolean</md-checkbox>
                            <md-list-item class="md-inset">Level 2</md-list-item>
                            <md-list-item class="md-inset">Level 3</md-list-item>
                        </md-list>
                    </md-list-item>
                    <md-list-item md-expand>
                        <span class="md-list-item-text">Defense Up</span>

                        <md-list slot="md-expand">
                            <md-checkbox v-model="boolean">Boolean</md-checkbox>
                            <md-list-item class="md-inset">Level 2</md-list-item>
                            <md-list-item class="md-inset">Level 3</md-list-item>
                        </md-list>
                    </md-list-item>
                    <md-list-item md-expand>
                        <span class="md-list-item-text">Focus</span>

                        <md-list slot="md-expand">
                            <md-checkbox v-model="boolean">Boolean</md-checkbox>
                            <md-list-item class="md-inset">Level 2</md-list-item>
                            <md-list-item class="md-inset">Level 3</md-list-item>
                        </md-list>
                    </md-list-item>
                    <md-list-item md-expand>
                        <span class="md-list-item-text">Agitator</span>

                        <md-list slot="md-expand">
                            <md-checkbox v-model="boolean">Boolean</md-checkbox>
                            <md-list-item class="md-inset">Level 2</md-list-item>
                            <md-list-item class="md-inset">Level 3</md-list-item>
                        </md-list>
                    </md-list-item>
                    <md-list-item md-expand>
                        <span class="md-list-item-text">Thunder Res Up</span>

                        <md-list slot="md-expand">
                            <md-checkbox v-model="boolean">Boolean</md-checkbox>
                            <md-list-item class="md-inset">Level 2</md-list-item>
                            <md-list-item class="md-inset">Level 3</md-list-item>
                        </md-list>
                    </md-list-item>
                    <md-list-item md-expand>
                        <span class="md-list-item-text">Fire Res Up</span>

                        <md-list slot="md-expand">
                            <md-checkbox v-model="boolean">Boolean</md-checkbox>
                            <md-list-item class="md-inset">Level 2</md-list-item>
                            <md-list-item class="md-inset">Level 3</md-list-item>
                        </md-list>
                    </md-list-item>
                    <md-list-item md-expand>
                        <span class="md-list-item-text">Stamina Surge</span>

                        <md-list md-alignment slot="md-expand">
                            <md-checkbox v-model="boolean">Boolean</md-checkbox>
                            <md-list-item class="md-inset">Level 2</md-list-item>
                            <md-list-item class="md-inset">Level 3</md-list-item>
                        </md-list>
                    </md-list-item>


                    <md-list-item md-expand>
                        <span class="md-list-item-text">Attack Up</span>

                        <md-list slot="md-expand" class="expansionItem">
                            <md-list-item class="md-inset">Level 1</md-list-item>
                            <md-list-item class="md-inset">Level 2</md-list-item>
                            <md-list-item class="md-inset">Level 3</md-list-item>
                            <md-list-item class="md-inset">Level 4</md-list-item>
                            <md-list-item class="md-inset">Level 5</md-list-item>
                            <md-list-item class="md-inset">Level 6</md-list-item>
                            <md-list-item class="md-inset">Level 7</md-list-item>
                        </md-list>
                    </md-list-item>

                    <md-list-item md-expand>
                        <span class="md-list-item-text">Fortify</span>

                        <md-list slot="md-expand">
                            <md-list-item class="md-inset">Level 1</md-list-item>
                            <md-list-item class="md-inset">Level 2</md-list-item>
                            <md-list-item class="md-inset">Level 3</md-list-item>
                        </md-list>
                    </md-list-item>
                </md-list>
            </md-content>
        </transition>

        <md-drawer md-fixed :md-active.sync="isMenuVisible" @md-closed="hideMenu">
            <md-toolbar class="md-transparent" md-elevation="0">
                <md-button class="md-icon-button" @click="toggleMenu" v-if="!menuVisible">
                    <md-icon>menu</md-icon>
                </md-button>
                <span class="md-title">Vue material</span>
            </md-toolbar>

            <div class="main-nav-drawer-content">

            </div>
        </md-drawer>
    </div>
</template>

<script>
    export default {
        name: "mixed-set-info"
    }
</script>

<style scoped>

    .main-nav {
        width: 270px;
        height: 100%;
        padding: 24px 16px 16px;
        align-items: flex-start;
        flex-direction: column;
        overflow: auto;
        position: fixed;
        top: 0px;
        bottom: 0;
        left: 0;
        transition: .3s;
        transition-property: top;
        max-width: 100%;
        display: inline-block;
        vertical-align: top;

    }

    .searchbar{
        max-width: 250px;
    }

</style>