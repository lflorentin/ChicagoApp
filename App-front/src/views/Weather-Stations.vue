<template>
    <div class="weather-stations">
        <v-col class="mb-4">
            <h1 class="display-2 font-weight-bold mb-3">{{$t("weather-stations-title")}}</h1>
            <div class="mb-2">
                <v-tooltip bottom>
                    <template v-slot:activator="{on, attrs}">
                        <select dark v-bind="attrs" v-on="on" v-model="selected">
                            <option v-for="val in vals" :key="val.title" :value="val.title">
                                {{val.title}}
                            </option>
                        </select>
                    </template>
                    <span>title</span>
                </v-tooltip>
                <v-tooltip bottom>
                    <template v-slot:activator="{on, attrs}">
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
        name: "weather-stations",
        data(){
            return{
                chartData: [['Jan', 44], ['Feb', 27], ['Mar', 60], ['Apr', 55], ['May', 37], ['Jun', 40], ['Jul', 69], ['Aug', 33], ['Sept', 76], ['Oct', 90], ['Nov', 34], ['Dec', 22]],
                selected: 'Moyenne',
                selected2: this.$t('air-temperature'),
                vals:[
                    {title: 'Moyenne'},
                    {title: this.$t('Foster-Weather-Station')},
                    {title: this.$t('Oak-Street-Weather-Station')},
                    {title: this.$t('63rd-Street-Station')},
                ],
                //13
                datas:[
                    {title: this.$t('air-temperature'), text: 'last data', items:[
                            {
                                title: 'titre data', graph:'ici le graph'
                            }
                        ]},
                    {title: this.$t('wet-bulb-temperature'), text: 'last data', items:[
                            {
                                title: 'titre data', graph:'ici le graph'
                            }
                        ]},
                    {title: this.$t('humidity'),text: 'last data', items:[
                            {
                                title: 'titre data', graph:'ici le graph'
                            }
                        ]},
                    {title: this.$t('rain-intensity'),text: 'last data', items:[
                            {
                                title: 'titre data', graph:'ici le graph'
                            }
                        ]},
                    {title: this.$t('interval-rain'),text: 'last data since 00h00', items:[
                            {
                                title: 'titre data', graph:'ici le graph'
                            }
                        ]},
                    {title: this.$t('total-rain'), text: 'last data', items:[
                            {
                                title: 'titre data', graph:'ici le graph'
                            }
                        ]},
                    {title: this.$t('precipitation-type'), text: 'last data', items:[
                            {
                                title: 'titre data', graph:'ici le graph'
                            }
                        ]},
                    {title: this.$t('wind-direction'), text: 'last data', items:[
                            {
                                title: 'titre data', graph:'ici le graph'
                            }
                        ]},
                    {title: this.$t('wind-speed'), text: 'last data', items:[
                            {
                                title: 'titre data', graph:'ici le graph'
                            }
                        ]},
                    {title: this.$t('maximum-wind-speed'), text: 'last data', items:[
                            {
                                title: 'titre data', graph:'ici le graph'
                            }
                        ]},
                    {title: this.$t('barometric-pressure'), text: 'last data', items:[
                            {
                                title: 'titre data', graph:'ici le graph'
                            }
                        ]},
                    {title: this.$t('solar-radiation'), text: 'last data', items:[
                            {
                                title: 'titre data', graph:'ici le graph'
                            }
                        ]},
                    {title: this.$t('heading'), text: 'last data', items:[
                            {
                                title: 'titre data', graph:'ici le graph'
                            }
                        ]},
                ]
            }
        }
    }
</script>

<style scoped>

</style>
