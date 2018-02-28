<template>
    <body>
    <div class="main-container">
        <md-content class="boxes">
            <md-card md-with-hover class="head-card md-theme-default">
                <md-ripple>
                    <md-card-content>
                        head
                    </md-card-content>
                </md-ripple>
            </md-card>
            <md-card md-with-hover class="chest-card md-theme-default">
                <md-ripple>
                    <md-card-content>
                        chest
                    </md-card-content>
                </md-ripple>
            </md-card>
            <md-card md-with-hover class="gloves-card md-theme-default">
                <md-ripple>
                    <md-card-content>
                        gloves
                    </md-card-content>
                </md-ripple>
            </md-card>

            <md-card md-with-hover class="waist-card md-theme-default">
                <md-ripple>
                    <md-card-content>
                        waist
                    </md-card-content>
                </md-ripple>
            </md-card>
            <md-card md-with-hover class="legs-card md-theme-default">
                <md-ripple>
                    <md-card-content>
                        legs
                    </md-card-content>
                </md-ripple>
            </md-card>
            <div class="character">
                <img class="hunter" src="../../assets/huntersill.png">
            </div>
            <div class="display">

            </div>
        </md-content>
    </div>
    </body>
</template>

<script>
    export default {
        name: "character-sheet"
    }
</script>

<style lang="scss" scoped>


    .md-card{
        width:80px;
        height:80px;
        opacity: .5;
    }
    .hunter{
        max-width:100%;
        height:auto;
        max-height:100%;

    }
    .character{
        width:100vw;
        height:91vh;
        vertical-align: top;
        position: absolute;
        top: 0%;
        left: 22.5%;
    }
    .md-card{
        z-index: 100;
    }
    .head-card{
        left: 31.5%;
        top:1.5%;
        vertical-align: top;

    }
    .chest-card{
        left: 31.5%;
        top:3%;
        vertical-align: top;

    }
    .gloves-card{
        left: 40%;
        top:3%;
        vertical-align: top;

    }
    .waist-card{
        bottom: 10%;
        left: 31.5%;

    }
    .legs-card{
        bottom: 5%;
        left: 31.5%;

    }
</style>