<template>
  <div class="home">
    <v-col class="mb-4">
      <h1 class="display-2 font-weight-bold mb-3">{{$t("drawer.home")}}</h1>

      <v-list>
        <v-list-group
          v-for="item in items"
          :key="item.title"
          v-model="item.active"
          :prepend-icon="item.action"
          no-action
        >
          <template v-slot:activator>
            <v-list-item-content>
              <v-list-item-title v-text="item.title"></v-list-item-title>
            </v-list-item-content>
          </template>

          <v-list-item v-for="subItem in item.items" :key="subItem.title">
            <v-icon>{{subItem.icon}}</v-icon>
            <v-list-item-content>
              <v-list-item-title v-text="subItem.title + ' : '+ subItem.text"></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-group>
      </v-list>
    </v-col>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Home",
  data() {
    return {
      message: "",
      infos: null,
      items: [
        {
          action: "mdi-weather-sunny",
          title: this.$t("Osterman Beach"),
          items: [
            {
              icon: "mdi-calendar ",
              title: "Dernière mise à jour des données",
              text: "01/01/2020"
            },
            {
              icon: "mdi-weather-windy ",
              title: this.$t("wind-direction"),
              text: "9°"
            },
            {
              icon: "mdi-weather-windy ",
              title: this.$t("wind-speed"),
              text: "10 m/s"
            },
            { icon: "mdi-water ", title: this.$t("humidity"), text: "2%" },
            {
              icon: "mdi-temperature-celsius ",
              title: this.$t("air-temperature"),
              text: "20°C"
            },
            {
              icon: "mdi-weather-sunny ",
              title: this.$t("precipitation-type"),
              text: "sun"
            },
            {
              icon: "mdi-thermometer ",
              title: this.$t("water-temperature"),
              text: this.$t("15°C")
            },
            {
              icon: "mdi-waves ",
              title: this.$t("wave-period"),
              text: "0,3 m"
            },
            { icon: "mdi-waves ", title: this.$t("wave-height"), text: "2s" }
          ]
        },
        {
          action: "mdi-weather-partly-cloudy",
          title: this.$t("Montrose-Beach"),
          //active: true,
          items: [
            {
              icon: "mdi-calendar ",
              title: "Dernière mise à jour des données",
              text: "01/01/2020"
            },
            {
              icon: "mdi-weather-windy ",
              title: this.$t("wind-direction"),
              text: "9°"
            },
            {
              icon: "mdi-weather-windy ",
              title: this.$t("wind-speed"),
              text: "10 m/s"
            },
            { icon: "mdi-water ", title: this.$t("humidity"), text: "2%" },
            {
              icon: "mdi-temperature-celsius ",
              title: this.$t("air-temperature"),
              text: "20°C"
            },
            {
              icon: "mdi-weather-sunny ",
              title: this.$t("precipitation-type"),
              text: "sun"
            },
            {
              icon: "mdi-thermometer ",
              title: this.$t("water-temperature"),
              text: this.$t("15°C")
            },
            {
              icon: "mdi-waves ",
              title: this.$t("wave-period"),
              text: "0,3 m"
            },
            { icon: "mdi-waves ", title: this.$t("wave-height"), text: "2s" }
          ]
        },
        {
          action: "mdi-weather-pouring",
          title: this.$t("Ohio-Street-Beach"),
          items: [
            {
              icon: "mdi-calendar ",
              title: "Dernière mise à jour des données",
              text: "01/01/2020"
            },
            {
              icon: "mdi-weather-windy ",
              title: this.$t("wind-direction"),
              text: "9°"
            },
            {
              icon: "mdi-weather-windy ",
              title: this.$t("wind-speed"),
              text: "10 m/s"
            },
            { icon: "mdi-water ", title: this.$t("humidity"), text: "2%" },
            {
              icon: "mdi-temperature-celsius ",
              title: this.$t("air-temperature"),
              text: "20°C"
            },
            {
              icon: "mdi-weather-sunny ",
              title: this.$t("precipitation-type"),
              text: "sun"
            },
            {
              icon: "mdi-thermometer ",
              title: this.$t("water-temperature"),
              text: this.$t("15°C")
            },
            {
              icon: "mdi-waves ",
              title: this.$t("wave-period"),
              text: "0,3 m"
            },
            { icon: "mdi-waves ", title: this.$t("wave-height"), text: "2s" }
          ]
        },
        {
          action: "mdi-weather-snowy-heavy",
          title: this.$t("63rd-Street-Beach"),
          items: [
            {
              icon: "mdi-calendar ",
              title: "Dernière mise à jour des données",
              text: "01/01/2020"
            },
            {
              icon: "mdi-weather-windy ",
              title: this.$t("wind-direction"),
              text: "9°"
            },
            {
              icon: "mdi-weather-windy ",
              title: this.$t("wind-speed"),
              text: "10 m/s"
            },
            { icon: "mdi-water ", title: this.$t("humidity"), text: "2%" },
            {
              icon: "mdi-temperature-celsius ",
              title: this.$t("air-temperature"),
              text: "20°C"
            },
            {
              icon: "mdi-weather-sunny ",
              title: this.$t("precipitation-type"),
              text: "sun"
            },
            {
              icon: "mdi-thermometer ",
              title: this.$t("water-temperature"),
              text: this.$t("15°C")
            },
            {
              icon: "mdi-waves ",
              title: this.$t("wave-period"),
              text: "0,3 m"
            },
            { icon: "mdi-waves ", title: this.$t("wave-height"), text: "2s" }
          ]
        },
        {
          action: "mdi-weather-partly-cloudy",
          title: this.$t("Rainbow-Beach"),
          items: [
            {
              icon: "mdi-calendar ",
              title: "Dernière mise à jour des données",
              text: "01/01/2020"
            },
            {
              icon: "mdi-weather-windy ",
              title: this.$t("wind-direction"),
              text: "9°"
            },
            {
              icon: "mdi-weather-windy ",
              title: this.$t("wind-speed"),
              text: "10 m/s"
            },
            { icon: "mdi-water ", title: this.$t("humidity"), text: "2%" },
            {
              icon: "mdi-temperature-celsius ",
              title: this.$t("air-temperature"),
              text: "20°C"
            },
            {
              icon: "mdi-weather-sunny ",
              title: this.$t("precipitation-type"),
              text: "sun"
            },
            {
              icon: "mdi-thermometer ",
              title: this.$t("water-temperature"),
              text: this.$t("15°C")
            },
            {
              icon: "mdi-waves ",
              title: this.$t("wave-period"),
              text: "0,3 m"
            },
            { icon: "mdi-waves ", title: this.$t("wave-height"), text: "2s" }
          ]
        },
        {
          action: "mdi-weather-sunny",
          title: this.$t("Calumet-Beach"),
          items: [
            {
              icon: "mdi-calendar ",
              title: "Dernière mise à jour des données",
              text: "01/01/2020"
            },
            {
              icon: "mdi-weather-windy ",
              title: this.$t("wind-direction"),
              text: "9°"
            },
            {
              icon: "mdi-weather-windy ",
              title: this.$t("wind-speed"),
              text: "10 m/s"
            },
            { icon: "mdi-water ", title: this.$t("humidity"), text: "2%" },
            {
              icon: "mdi-temperature-celsius ",
              title: this.$t("air-temperature"),
              text: "20°C"
            },
            {
              icon: "mdi-weather-sunny ",
              title: this.$t("precipitation-type"),
              text: "sun"
            },
            {
              icon: "mdi-thermometer ",
              title: this.$t("water-temperature"),
              text: this.$t("15°C")
            },
            {
              icon: "mdi-waves ",
              title: this.$t("wave-period"),
              text: "0,3 m"
            },
            { icon: "mdi-waves ", title: this.$t("wave-height"), text: "2s" }
          ]
        }
      ]
    };
  },
  components: {},
  methods: {
    test() {
      axios.defaults.xsrfCookieName = "csrftoken";
      axios.defaults.xsrfHeaderName = "X-CSRFToken";
      axios.get("http://127.0.0.1:8000/Home").then(response => {
        let result = response.data;
        this.message = result;
      });
    },
    getInfos() {
      axios.defaults.xsrfCookieName = "csrftoken";
      axios.defaults.xsrfHeaderName = "X-CSRFToken";
      axios.get("http://127.0.0.1:8000/publicReportApp/Home").then(response => {
        let result = response.data;
        this.infos = result;

        for (let indexBeach in result) {
          this.items[indexBeach].title = result[indexBeach].beach_name + " RPZ";
          for (let [key, field] of Object.entries(result[indexBeach].data)) {
            for (let subItem in this.items[indexBeach].items) {
              if (
                this.items[indexBeach].items[subItem].title === this.$t(key)
              ) {
                this.items[indexBeach].items[subItem].text = field + " RPZ";
              }
            }
          }
        }
      });
    }
  },
  mounted() {
    this.test();
    this.getInfos();
  }
};
</script>
