<template>
    <div>
        <v-navigation-drawer v-model="drawer" clipped fixed app>
            <myContentDrawer />
        </v-navigation-drawer>
        <v-app-bar dark color="blue" clipped-left app>
            <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
            <v-toolbar-title @click="goHome" class="white--text">{{$t("title-app")}}</v-toolbar-title>
        </v-app-bar>
    </div>
</template>

<script>
    import myContentDrawer from "@/components/Drawer"
    export default {
        name: 'myToolbar',
        components: {myContentDrawer},
        data: function () {
            return {
                drawer: false
            }
        },
        methods: {
            goHome () {
                this.$router.replace('/')
            }
        }
    }
</script>
