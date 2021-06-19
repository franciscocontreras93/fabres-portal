        var api_stadia = 'd665daaa-c574-4129-a04a-d443865cb97c'
        var map = L.map('map', {
            zoomControl: true,
            maxZoom: 28,
            minZoom: 1
        }).fitBounds([
            [18.959155873777696, -98.34765556199129],
            [19.090022479410795, -98.07164760998482]
        ]);
        var hash = new L.Hash(map);
        map.attributionControl.setPrefix(
            'Desarrollado por: <a href="https://www.linkedin.com/in/geofrancisco/" title="GeoSIG" "target="_blank">GeoSIG</a> &middot; <a href="https://leafletjs.com" title="A JS library for interactive maps">Leaflet</a> &middot; <a href="#">GEOCARTOS</a> '
        );
        var autolinker = new Autolinker({
            truncate: {
                length: 30,
                location: 'smart'
            }
        });
        L.control.locate({
            locateOptions: {
                maxZoom: 19
            }
        }).addTo(map);
        var bounds_group = new L.featureGroup([]);

        function setBounds() {}

        map.createPane('pane_baseMap');
        map.getPane('pane_baseMap').style.zIndex = 400;

        // BASEMAPS
        var stadiaBaseMap = L.tileLayer(
            'https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png?api_key=d665daaa-c574-4129-a04a-d443865cb97c', {
                pane: 'pane_baseMap',
                opacity: 1.0,
                attribution: 'Basemap ©<a href="https://stadiamaps.com/">Stadia Maps</a> &middot; Data ©<a href=https://www.openstreetmap.org/copyright">OpenStreetMaps</a>',
                minZoom: 1,
                maxZoom: 28,
                minNativeZoom: 0,
                maxNativeZoom: 20
            });
        stadiaBaseMap;
        
         var baseMapsatelital = L.tileLayer(
             'http://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}', {
                 pane: 'pane_baseMap',
                 subdomains: ['mt0', 'mt1', 'mt2', 'mt3'],
                 opacity: 1.0,
                 attribution: 'Basemap ©<a href="https://stadiamaps.com/">Stadia Maps</a> &middot; Data ©<a href=https://www.openstreetmap.org/copyright">OpenStreetMaps</a>',
                 minZoom: 1,
                 maxZoom: 28,
                 minNativeZoom: 0,
                 maxNativeZoom: 20
             });
         baseMapsatelital;
         map.addLayer(baseMapsatelital);
         map.addLayer(stadiaBaseMap);
         // POPUPS
        function pop_bus_stops_1(feature, layer) {
            var popupContent = '<table>\
                    <tr>\
                    <h5 colspan="2">' + (feature.properties['name'] !== null ? autolinker.link(feature.properties[
                'name'].toLocaleString()) : '') + '</h5>\
                    </tr>\
                    <tr>\
                        <th>\
                        Ruta: \
                        </th>\
                        <td colspan="2">' + (feature.properties['ruta'] !== null ? autolinker.link(feature.properties[
                'ruta'].toLocaleString()) : '') + '</td>\
                    </tr>\
                </table>';
            layer.bindPopup(popupContent, {
                maxHeight: 400
            });
        }

        function pop_routes_brt_0(feature, layer) {
            var popupContent = '<table>\
            <tr>\
                <td colspan="2">' + (feature.properties['osm_id'] !== null ?
                autolinker.link(feature.properties['osm_id'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['name'] !== null ?
                autolinker.link(feature.properties['name'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['type'] !== null ?
                autolinker.link(feature.properties['type'].toLocaleString()) : '') + '</td>\
            </tr>\
        </table>';
            layer.bindPopup(popupContent, {
                maxHeight: 400
            });
        }
        // ICONOS
        var iconL1 = L.icon({
            iconUrl: 'images/png/icon-l1.png',
            iconSize: [15, 15],
            popupAnchor: [0,-5],
        })
        iconL2 = L.icon({
            iconUrl: 'images/png/icon-l2.png',
            iconSize: [15, 15]
        })
        iconL3 = L.icon({
            iconUrl: 'images/png/icon-l3.png',
            iconSize: [15, 15]
        })
        // ESTILOS
        function clasified_style_bus_stop(feature) {
            switch (String(feature.properties['ruta'])) {
                case 'L1':
                    return iconL1
                    break;
                case 'L2':
                    return iconL2
                    break;
                case 'L3':
                    return iconL3
                    break;
                default:
                    return {
                        pane: 'pane_bus_stops_1',
                            radius: 3.0,
                            opacity: 1,
                            color: 'rgba(35,35,35,0.0)',
                            dashArray: '',
                            lineCap: 'butt',
                            lineJoin: 'miter',
                            weight: 1,
                            fill: true,
                            fillOpacity: 1,
                            fillColor: 'rgba(58,113,201,1.0)',
                            interactive: true,
                    }
                    break;
            }
        }

        function clasified_style_rutas(feature) {
            switch (String(feature.properties['name'])) {
                case 'Ruta L1 BRT':
                    return {
                        pane: 'pane_ruta_1',
                            opacity: 1,
                            color: 'rgba(238,48,99,1.0)',
                            dashArray: '',
                            lineCap: 'square',
                            lineJoin: 'bevel',
                            weight: 1.0,
                            fillOpacity: 0,
                            interactive: true,
                    }
                    break;
                case 'Ruta L2 BRT':
                    return {
                        pane: 'pane_ruta_2',
                            opacity: 1,
                            color: 'rgba(190,235,39,1.0)',
                            dashArray: '',
                            lineCap: 'square',
                            lineJoin: 'bevel',
                            weight: 1.0,
                            fillOpacity: 0,
                            interactive: true,
                    }
                    break;
                case 'Ruta L3 BRT':
                    return {
                        pane: 'pane_ruta_3',
                            opacity: 1,
                            color: 'rgba(106,238,203,1.0)',
                            dashArray: '',
                            lineCap: 'square',
                            lineJoin: 'bevel',
                            weight: 1.0,
                            fillOpacity: 0,
                            interactive: true,
                    }
                    break;
            }
        }
        // CREATE LAYERPANE
        map.createPane('pane_ruta_1');
        map.getPane('pane_ruta_1').style.zIndex = 400
        map.getPane('pane_ruta_1').style['mix-blend-mode'] = 'normal'
        map.createPane('pane_ruta_2');
        map.getPane('pane_ruta_2').style.zIndex = 400
        map.getPane('pane_ruta_2').style['mix-blend-mode'] = 'normal'
        map.createPane('pane_ruta_3');
        map.getPane('pane_ruta_3').style.zIndex = 400
        map.getPane('pane_ruta_3').style['mix-blend-mode'] = 'normal'
        map.createPane('pane_routes_brt_0');
        map.getPane('pane_routes_brt_0').style.zIndex = 400;
        map.getPane('pane_routes_brt_0').style['mix-blend-mode'] = 'normal';
        map.createPane('pane_estaciones');
        map.getPane('pane_estaciones').style.zIndex = 401;
        map.getPane('pane_estaciones').style['mix-blend-mode'] = 'normal';
        // LAYERS
        var station_l1_layer = new L.geoJson(stations_l1, {
            attribution: '',
            interactive: true,
            dataVar: 'stations_l1',
            layerName: 'Estaciones L1 BRT',
            pane: 'pane_estaciones',
            onEachFeature: pop_bus_stops_1,
            pointToLayer: function (feature, latlng) {
                var context = {
                    feature: feature,
                    variables: {}
                };
                return L.marker(latlng, {
                    icon: clasified_style_bus_stop(feature)
                });
            },
        });
        bounds_group.addLayer(station_l1_layer);
        map.addLayer(station_l1_layer);
        var station_l2_layer = new L.geoJson(stations_l2, {
            attribution: '',
            interactive: true,
            dataVar: 'stations_l2',
            layerName: 'Estaciones L2 BRT',
            pane: 'pane_estaciones',
            onEachFeature: pop_bus_stops_1,
            pointToLayer: function (feature, latlng) {
                var context = {
                    feature: feature,
                    variables: {}
                };
                return L.marker(latlng, {
                    icon: clasified_style_bus_stop(feature)
                });
            },
        });
        bounds_group.addLayer(station_l2_layer);
        map.addLayer(station_l2_layer);
        var station_l3_layer = new L.geoJson(stations_l3, {
            attribution: '',
            interactive: true,
            dataVar: 'stations_l3',
            layerName: 'Estaciones L3 BRT',
            pane: 'pane_estaciones',
            onEachFeature: pop_bus_stops_1,
            pointToLayer: function (feature, latlng) {
                var context = {
                    feature: feature,
                    variables: {}
                };
                return L.marker(latlng, {
                    icon: clasified_style_bus_stop(feature)
                });
            },
        });
        bounds_group.addLayer(station_l3_layer);
        map.addLayer(station_l3_layer);
        var ruta_1_layer = new L.geoJson(ruta_1_brt, {
            attribution: '',
            interactive: false,
            dataVar: 'ruta_1_brt',
            layerName: 'Ruta 1 BRT',
            pane: 'pane_ruta_1',
            style: clasified_style_rutas,
        })
        bounds_group.addLayer(ruta_1_layer);
        map.addLayer(ruta_1_layer);
        var ruta_2_layer = new L.geoJson(ruta_2_brt, {
            attribution: '',
            interactive: false,
            dataVar: 'ruta_2_brt',
            layerName: 'Ruta 2 BRT',
            pane: 'pane_ruta_2',
            style: clasified_style_rutas,
        })
        bounds_group.addLayer(ruta_2_layer);
        map.addLayer(ruta_2_layer);
        var ruta_3_layer = new L.geoJson(ruta_3_brt, {
            attribution: '',
            interactive: false,
            dataVar: 'ruta_3_brt',
            layerName: 'Ruta 3 BRT',
            pane: 'pane_ruta_3',
            style: clasified_style_rutas,
        })
        bounds_group.addLayer(ruta_3_layer);
        map.addLayer(ruta_3_layer);
        // LAYER GROUPS
        var group_base_map = L.layerGroup([stadiaBaseMap]);
        var group_rutes = L.layerGroup([ruta_1_layer, ruta_2_layer, ruta_3_layer])
        var rutas = {

            "<img src='legend/icon-l1.png' /> <span class='my-layer-item'> Estacion Ruta 1</span>": station_l1_layer,
            "<img src='legend/icon-l2.png' /> <span class='my-layer-item'>Estacion Ruta 2</span>": station_l2_layer,
            "<img src='legend/icon-l3.png' /> <span class='my-layer-item'>Estacion Ruta 3</span>": station_l3_layer,

            "<img src='legend/ruta_1.png' /> <span class='my-layer-item'>Ruta 1</span>": ruta_1_layer,
            "<img src='legend/ruta_2.png' /> <span class='my-layer-item'>Ruta 2</span>": ruta_2_layer,
            "<img src='legend/ruta_3.png' /> <span class='my-layer-item'>Ruta 3</span>": ruta_3_layer,
        }
        var baseMaps = {
            "<span class='fw-bold'>Google Satelite&copy</span>": baseMapsatelital,
            "<span class='fw-bold'>Stadia Maps&copy</span>": stadiaBaseMap,
        }



        L.control.layers(baseMaps, rutas).addTo(map)
         var credctrl = L.controlCredits({
             image: "images/png/geosig.png",
             link: "https://www.linkedin.com/in/geofrancisco/",
             text: " "
         }).addTo(map);



        setBounds();