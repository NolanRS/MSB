<template>
    <body>
    <div class="main-container">
        <md-content class="boxes">
            <md-card md-with-hover class="md-card-armor head-card md-theme-default">
                <md-ripple>
                    <md-card-content>
                        head
                    </md-card-content>
                </md-ripple>
            </md-card>
            <md-card md-with-hover class="md-card-armor chest-card md-theme-default">
                <md-ripple>
                    <md-card-content>
                        chest
                    </md-card-content>
                </md-ripple>
            </md-card>
            <md-card md-with-hover class="md-card-armor gloves-card md-theme-default">
                <md-ripple>
                    <md-card-content>
                        gloves
                    </md-card-content>
                </md-ripple>
            </md-card>

            <md-card md-with-hover class="md-card-armor waist-card md-theme-default">
                <md-ripple>
                    <md-card-content>
                        waist
                    </md-card-content>
                </md-ripple>
            </md-card>
            <md-card md-with-hover class="md-card-armor legs-card md-theme-default">
                <md-ripple>
                    <md-card-content>
                        legs
                    </md-card-content>
                </md-ripple>
            </md-card>
            <div class="character">
                <img class="hunter" src="../../assets/huntersill.png">
            </div>
        </md-content>
        <md-content class="skillList">
                <md-list class="skill-item" v-for="skill in skills">
                    <md-list-item>
                        <span>{{skill.Levels}}</span>
                    </md-list-item>
                </md-list>
        </md-content>
    </div>

    </body>
</template>

<script>
    export default {
        name: "character-sheet",
        data: () => ({
            skills: [
                {"Name": "Fortify", "Levels": 1},
                {"Name": "Attack", "Levels": 7},
            ],
            armor: [
                {"Name": "Kutku", "Skill1": "Attack 3", "Skill2": "Defense 3"}
            ]
        }),
        created() {
        let vm = this;
        _.each(vm.days, (item, key) => {

            vm.$set(vm.available_block_for_bids, key, []);

        });
        }
    };
</script>

<style lang="scss" scoped>
    .body{
        width:100%;
        height: 100%;
    }
    .boxes{
        width: 50%;
        height: inherit;
        max-height: 100%;
        display: inline-block;

    }
    .md-card-armor {
        width: 80px;
        height: 80px;
        opacity: .5;
    }

    .hunter {
        max-width: 100%;
        height: auto;
        max-height: 100%;

    }

    .character {
        width: 100vw;
        height: 91vh;
        position: absolute;
        top: 0%;
        left: 7%;
    }

    .head-card {
        left: 31.5%;
        top: 1.5%;
        vertical-align: top;
        border-radius: 50%;
    }

    .chest-card {
        left: 31.5%;
        top: 3%;
        vertical-align: top;
        border-radius: 50%;

    }

    .gloves-card {
        left: 50%;
        top: 3%;
        vertical-align: top;
        border-radius: 50%;

    }

    .waist-card {
        bottom: 10%;
        left: 31.5%;
        border-radius: 50%;
    }

    .legs-card {
        bottom: 5%;
        left: 31.5%;
        border-radius: 50%;

    }
    .skillList{
        float: right;
        width: 50%;
        top: 0%;
        display: inline-block;
    }
</style>