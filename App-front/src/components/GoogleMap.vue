<template>
    <div class="localisation-sensors">
        <v-col class="mb-4">
            <h1 class="display-2 font-weight-bold mb-3">{{$t("localisationSensors")}}</h1>
        </v-col>
        <gmap-map
                ref="gmap"
                :center="center"
                :zoom="10"
                style="width:100%;  height: 50vh;"
        >

            <gmap-marker
                    :key="index"
                    v-for="(m, index) in markers"
                    :position="m.position"
                    @click="toggleInfoWindow(m,index)">
            </gmap-marker>

            <gmap-info-window
                    :options="infoOptions"
                    :position="infoWindowPos"
                    :opened="infoWinOpen"
                    @closeclick="infoWinOpen=false"
            >
                <div v-html="infoContent"></div>
            </gmap-info-window>

        </gmap-map>
        <div>
            <v-data-table
                    :headers="headers"
                    :items="dataSensors"
                    :items-per-page="5"
                    class="elevation-1"
            ></v-data-table>
        </div>
    </div>
</template>
<script>
    import * as google from "core-js/internals/array-iteration";

    export default {
        name: "localisationSensors\"",
        data() {
            return {
                dataSensors: [
                    {id: "1", sensorName: "Osterman Beach", sensorType : "Water Quality", latitude:"41.987675", longitude:"-87.651008",location: "41.987675 ; -87.651008", battery: "90%"},
                    {id: "2", sensorName: "Oak-Street-Weather-Station", sensorType : "Weather Station", latitude:"41.976464", longitude:"-87.647525",location: "41.976464 ; -87.647525", battery: "70%"}
                ],

                headers: [
                    {
                        text: 'Id',
                        align: 'start',
                        sortable: false,
                        value: 'id',
                    },
                    { text: 'Sensor Name', value: 'sensorName' },
                    { text: 'Sensor Type', value: 'sensorType' },
                    { text: 'Latitude', value: 'latitude' },
                    { text: 'Longitude', value: 'longitude' },
                    { text: 'Location', value: 'location' },
                    { text: 'Battery', value: 'battery'}
                ],
                //a default center for the map
                center: { lat: 41.881832, lng: -87.623177 },
                map: null,
                infoContent: '',
                infoWindowPos: {
                    lat: 0,
                    lng: 0
                },
                infoWinOpen: false,
                currentMidx: null,
                //optional: offset infowindow so it visually sits nicely on top of our marker
                infoOptions: {
                    pixelOffset: {
                        width: 0,
                        height: -35
                    }
                },
                markers: [
                    {
                        name: "test1",
                        description: "description 1",
                        date_build: "",
                        position: {lat: 41.987675, lng: -87.651008},
                    },
                    {
                        name: "test2",
                        description: "description 2",
                        date_build: "",
                        position: {lat: 41.976464, lng: -87.647525},
                    },
                ],
            };
        },
        mounted() {
            //set bounds of the map
            this.$refs.gmap.$mapPromise.then((map) => {
                const bounds = new google.map.LatLngBounds()
                for (let m of this.markers) {
                    bounds.extend(m.position)
                }
                map.fitBounds(bounds);
            });
        },
        methods: {
            toggleInfoWindow: function (marker, idx) {
                this.infoWindowPos = marker.position;
                this.infoContent = this.getInfoWindowContent(marker);


                //check if its the same marker that was selected if yes toggle
                if (this.currentMidx === idx) {
                    this.infoWinOpen = !this.infoWinOpen;
                }
                //if different marker set infowindow to open and reset current marker index
                else {
                    this.infoWinOpen = true;
                    this.currentMidx = idx;
                }
            },

            getInfoWindowContent: function (marker) {
                return (`<div class="card">
  <div class="card-image">
    <figure class="image is-4by3">
      <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image">
    </figure>
  </div>
  <div class="card-content">
    <div class="media">
      <div class="media-content">
        <p class="title is-4">${marker.name}</p>
      </div>
    </div>

    <div class="content">
      ${marker.description}
      <br>
      <time datetime="2016-1-1">${marker.date_build}</time>
    </div>
  </div>
</div>`);
            },
        }
    };
</script>
