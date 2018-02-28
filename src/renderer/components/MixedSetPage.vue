<template>
    <div class="main-container">
        <md-content>
            <img class="hunter center" src="../assets/huntersill.png">
        </md-content>
    </div>

</template>

<script>
    import MixedSetInfo from './MixedSetPage/MixedSetInfo'

    console.log("hello mixed set page")
    export default {
        name: "mixed-set-page",
        components: {
            MixedSetInfo,
            'mixed-set-info': MixedSetInfo
        },
        data: () => ({
            menuVisible: true,
            boolean: false,
            selectedSkills: null,
            skills: [
                "Fortify",
                "Attack"
            ],
        }),
        methods: {
            toggleMenu() {
                this.menuVisible = !this.menuVisible
            },
            getClass: ({id}) => ({
                'md-primary': id === 2,
                'md-accent': id === 3
            }),
            onSelect(item) {
                this.selected = item
            }
        }
    }

</script>

<style lang="scss" scoped>

    .main-container {
        width:100vw;
        height:91vh;
    }

    .md-content {
        height:100%;
    }
    img{
        max-width:100%;
        height:auto;
        max-height:100%;
    }
</style>