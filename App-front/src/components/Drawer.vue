<template>
    <div>
        <v-toolbar class="blue" />
        <v-list dense>
            <template v-for="(item, i) in items">
                <v-divider dark v-if="item.divider" :key="i"></v-divider>
                <v-list-item ripple :to="item.action" :key="i" v-else>
                    <v-list-item-action>
                        <v-icon>{{ item.icon }}</v-icon>
                    </v-list-item-action>
                    <v-list-item-content>
                        <v-list-item-title class="body-2">{{ item.text }}</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </template>
        </v-list>
    </div>
</template>

<script>
    export default {
        name: 'drawer',
        data: function () {
            return {
                items: [
                    { icon: 'mdi-home', text: this.$t('drawer.home'), action: '/' },
                    { icon: 'mdi-help', text: this.$t('drawer.about'), action: '/about' },
                    { icon: 'mdi-water', text: this.$t('water-quality-title'), action: '/water-quality'},
                    { icon: 'mdi-weather-sunny', text: this.$t('weather-stations-title'), action: '/weather-stations'},
                    { icon: 'mdi-map', text: this.$t('localisationSensors'), action: '/localisationSensors'},
                ]
            }
        }
    }
</script>
