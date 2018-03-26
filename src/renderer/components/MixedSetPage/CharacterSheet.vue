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
        <div class="skillList">
            <md-list>
                <md-list-item>
                    <md-checkbox v-model="notification" value="sound"/>
                    <span class="md-list-item-text">Sound</span>
                </md-list-item>
            </md-list>
        </div>
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
        })
    }
</script>

<style lang="scss" scoped>

    .main-container{
    }
    .md-card-armor {
        width: 80px;
        height: 80px;
        opacity: .5;
        z-index: 100;
    }

    .hunter {
        max-width: 100%;
        height: auto;
        max-height: 100%;

    }

    .character {
        width: 100vw;
        height: 91vh;
        vertical-align: top;
        position: absolute;
        top: 0%;
        left: 22.5%;
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
        left: 40%;
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
</style>