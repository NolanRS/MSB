<template>
   <mixed-set-info>
   </mixed-set-info>
</template>

<script>
    import MixedSetInfo from './MixedSetPage/MixedSetInfo'

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

</style>