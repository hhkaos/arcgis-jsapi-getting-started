var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
define(["require", "exports", "esri/views/MapView"], function (require, exports, MapView_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    MapView_1 = __importDefault(MapView_1);
    const view = new MapView_1.default({
        map: {
            basemap: "streets-navigation-vector"
        },
        container: "viewDiv",
        center: [-118.244, 34.052],
        zoom: 12
    });
});
//# sourceMappingURL=main.js.map