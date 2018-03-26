<template>
<character-sheet></character-sheet>
</template>

<script>
    import CharacterSheet from './MixedSetPage/CharacterSheet'
    import MdCardContent from "../../../node_modules/vue-material/src/components/MdCard/MdCardContent/MdCardContent.vue";

    console.log("hello mixed set page")
    export default {
        name: "mixed-set-page",
        components: {
            MdCardContent,
            CharacterSheet,
            'character-sheet': CharacterSheet
        },
        data: () => ({
            menuVisible: true,
            boolean: false,
            selectedSkills: null,
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