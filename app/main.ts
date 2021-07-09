
import MapView from "esri/views/MapView";

const view = new MapView({
  map: {
    basemap: "streets-navigation-vector"
  },
  container: "viewDiv",
  center: [-118.244, 34.052],
  zoom: 12
});


