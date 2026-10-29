<template>
    <div class="admin">
        <!--div id="app">
            <div id="nav">
                <router-link v-if="authenticated" to="/login" v-on:click.native="logout()" replace>Logout</router-link>
            </div>
            <router-view @authenticated="setAuthenticated" />
        </div-->
        <v-col class="mb-4">
            <h1 class="display-2 font-weight-bold mb-3">{{$t("water-quality-title")}}</h1>
            <div class="mb-2">
                <v-tooltip bottom>
                    <template v-slot:activator="{ on, attrs }">
                        <select dark v-bind="attrs" v-on="on" v-model="selected">
                            <option v-for="val in vals" :key="val.title" :value="val.title">
                                {{val.title}}
                            </option>
                        </select>
                    </template>
                    <span>title</span>
                </v-tooltip>

                <v-tooltip bottom>
                    <template v-slot:activator="{ on, attrs }">
                        <select dark v-bind="attrs" v-on="on" v-model="selected2">
                            <option v-for="data in datas" :key="data.title" :value="data.title">
                                {{data.title}}
                            </option>
                        </select>
                    </template>
                    <span>data</span>
                </v-tooltip>
            </div>
            <br>
            <div>
                <section class="container">
                    <div class="column">
                        <h3>Downloadable Line Chart</h3>
                        <line-chart :data="chartData" :download="true"></line-chart>
                    </div>
                </section>
            </div>
        </v-col>
    </div>
</template>

<script>
    export default {
        name: "water-quality",
        data(){
            return{
                /*authenticated: false,
                mockAccount: {
                    username: "admin",
                    password: "rootroot"
                },*/
                chartData: [['Jan', 44], ['Feb', 27], ['Mar', 60], ['Apr', 55], ['May', 37], ['Jun', 40], ['Jul', 69], ['Aug', 33], ['Sept', 76], ['Oct', 90], ['Nov', 34], ['Dec', 22]],
                selected: 'Moyenne',
                selected2: this.$t('water-temperature'),
                vals:[
                    {title: 'Moyenne'},
                    {title: this.$t('Osterman-Beach')},
                    {title: this.$t('Montrose-Beach')},
                    {title: this.$t('Ohio-Street-Beach')},
                    {title: this.$t('63rd-Street-Beach')},
                    {title: this.$t('Rainbow-Beach')},
                    {title: this.$t('Calumet-Beach')},
                ],
                datas:[
                    {title: this.$t('water-temperature'), text: 'last data', items:[
                            {
                                title: 'titre data', graph:'ici le graph'
                            }
                        ]},
                    {title: this.$t('turbidity'), text: 'last data', items:[
                            {
                                title: 'titre data', graph:'ici le graph'
                            }
                        ]},
                    {title: this.$t('transducer-depth'),text: 'last data', items:[
                            {
                                title: 'titre data', graph:'ici le graph'
                            }
                        ]},
                    {title: this.$t('wave-height'),text: 'last data', items:[
                            {
                                title: 'titre data', graph:'ici le graph'
                            }
                        ]},
                    {title: this.$t('wave-period'),text: 'last data', items:[
                            {
                                title: 'titre data', graph:'ici le graph'
                            }
                        ]},
                ]
            }
        },
        /*mounted() {
            if(!this.authenticated) {
                this.$router.replace({ name: "login" });
            }
        },
        methods: {
            setAuthenticated(status) {
                this.authenticated = status;
            },
            logout() {
                this.authenticated = false;
            }
        }*/
    }
</script>

<style scoped>

</style>
