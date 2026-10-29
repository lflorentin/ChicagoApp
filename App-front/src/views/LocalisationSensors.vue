<template>
    <div class="localisation-sensors">
        <v-col class="mb-4">
            <h1 class="display-2 font-weight-bold mb-3">{{$t("localisationSensors")}}</h1>
        </v-col>
    </div>
</template>

<script>
    import GoogleMap from "../components/GoogleMap";

    export default {
        name: "localisationSensors",
        components: {
            GoogleMap
        }
    };
</script>
