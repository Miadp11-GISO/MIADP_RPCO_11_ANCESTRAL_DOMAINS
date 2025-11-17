ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:4326").setExtent([106.586813, -2.391292, 136.231949, 24.674281]);
var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });

        var lyr_OSMStandard_1 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '&nbsp;&middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });

        var lyr_ESRIShadedRelief_2 = new ol.layer.Tile({
            'title': 'ESRI Shaded Relief',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Shaded_Relief/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_Davaoregion_3 = new ol.format.GeoJSON();
var features_Davaoregion_3 = format_Davaoregion_3.readFeatures(json_Davaoregion_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Davaoregion_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Davaoregion_3.addFeatures(features_Davaoregion_3);
var lyr_Davaoregion_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Davaoregion_3, 
                style: style_Davaoregion_3,
                popuplayertitle: 'Davao region',
                interactive: true,
                title: '<img src="styles/legend/Davaoregion_3.png" /> Davao region'
            });
var format_R11TAR0818255EnBanc_4 = new ol.format.GeoJSON();
var features_R11TAR0818255EnBanc_4 = format_R11TAR0818255EnBanc_4.readFeatures(json_R11TAR0818255EnBanc_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_R11TAR0818255EnBanc_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_R11TAR0818255EnBanc_4.addFeatures(features_R11TAR0818255EnBanc_4);
var lyr_R11TAR0818255EnBanc_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_R11TAR0818255EnBanc_4, 
                style: style_R11TAR0818255EnBanc_4,
                popuplayertitle: 'R11-TAR-0818-255 - En Banc',
                interactive: true,
                title: '<img src="styles/legend/R11TAR0818255EnBanc_4.png" /> R11-TAR-0818-255 - En Banc'
            });
var format_R11TAR0818255_5 = new ol.format.GeoJSON();
var features_R11TAR0818255_5 = format_R11TAR0818255_5.readFeatures(json_R11TAR0818255_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_R11TAR0818255_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_R11TAR0818255_5.addFeatures(features_R11TAR0818255_5);
var lyr_R11TAR0818255_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_R11TAR0818255_5, 
                style: style_R11TAR0818255_5,
                popuplayertitle: 'R11-TAR-0818-255',
                interactive: true,
                title: '<img src="styles/legend/R11TAR0818255_5.png" /> R11-TAR-0818-255'
            });
var format_LandClassification_6 = new ol.format.GeoJSON();
var features_LandClassification_6 = format_LandClassification_6.readFeatures(json_LandClassification_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_LandClassification_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LandClassification_6.addFeatures(features_LandClassification_6);
var lyr_LandClassification_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LandClassification_6, 
                style: style_LandClassification_6,
                popuplayertitle: 'Land Classification',
                interactive: true,
    title: 'Land Classification<br />\
    <img src="styles/legend/LandClassification_6_0.png" /> Alienable and Disposable<br />\
    <img src="styles/legend/LandClassification_6_1.png" /> Forestland<br />' });
var format_TarragonaBrgyBdry_7 = new ol.format.GeoJSON();
var features_TarragonaBrgyBdry_7 = format_TarragonaBrgyBdry_7.readFeatures(json_TarragonaBrgyBdry_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_TarragonaBrgyBdry_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TarragonaBrgyBdry_7.addFeatures(features_TarragonaBrgyBdry_7);
var lyr_TarragonaBrgyBdry_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TarragonaBrgyBdry_7, 
                style: style_TarragonaBrgyBdry_7,
                popuplayertitle: 'Tarragona Brgy Bdry',
                interactive: true,
                title: '<img src="styles/legend/TarragonaBrgyBdry_7.png" /> Tarragona Brgy Bdry'
            });
var format_R11TAR0818255Nofill_8 = new ol.format.GeoJSON();
var features_R11TAR0818255Nofill_8 = format_R11TAR0818255Nofill_8.readFeatures(json_R11TAR0818255Nofill_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_R11TAR0818255Nofill_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_R11TAR0818255Nofill_8.addFeatures(features_R11TAR0818255Nofill_8);
var lyr_R11TAR0818255Nofill_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_R11TAR0818255Nofill_8, 
                style: style_R11TAR0818255Nofill_8,
                popuplayertitle: 'R11-TAR-0818-255 - No fill',
                interactive: false,
                title: '<img src="styles/legend/R11TAR0818255Nofill_8.png" /> R11-TAR-0818-255 - No fill'
            });
var format_R11NEW0116201_9 = new ol.format.GeoJSON();
var features_R11NEW0116201_9 = format_R11NEW0116201_9.readFeatures(json_R11NEW0116201_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_R11NEW0116201_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_R11NEW0116201_9.addFeatures(features_R11NEW0116201_9);
var lyr_R11NEW0116201_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_R11NEW0116201_9, 
                style: style_R11NEW0116201_9,
                popuplayertitle: 'R11-NEW-0116-201',
                interactive: true,
                title: '<img src="styles/legend/R11NEW0116201_9.png" /> R11-NEW-0116-201'
            });
var format_LandClassification_10 = new ol.format.GeoJSON();
var features_LandClassification_10 = format_LandClassification_10.readFeatures(json_LandClassification_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_LandClassification_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LandClassification_10.addFeatures(features_LandClassification_10);
var lyr_LandClassification_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LandClassification_10, 
                style: style_LandClassification_10,
                popuplayertitle: 'Land Classification',
                interactive: true,
    title: 'Land Classification<br />\
    <img src="styles/legend/LandClassification_10_0.png" /> A & D Land<br />\
    <img src="styles/legend/LandClassification_10_1.png" /> Forestland<br />' });
var format_NewCorellaBrgyBndry_11 = new ol.format.GeoJSON();
var features_NewCorellaBrgyBndry_11 = format_NewCorellaBrgyBndry_11.readFeatures(json_NewCorellaBrgyBndry_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_NewCorellaBrgyBndry_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NewCorellaBrgyBndry_11.addFeatures(features_NewCorellaBrgyBndry_11);
var lyr_NewCorellaBrgyBndry_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_NewCorellaBrgyBndry_11, 
                style: style_NewCorellaBrgyBndry_11,
                popuplayertitle: 'New Corella Brgy Bndry',
                interactive: true,
                title: '<img src="styles/legend/NewCorellaBrgyBndry_11.png" /> New Corella Brgy Bndry'
            });
var format_R11NEW0116201NoFill_12 = new ol.format.GeoJSON();
var features_R11NEW0116201NoFill_12 = format_R11NEW0116201NoFill_12.readFeatures(json_R11NEW0116201NoFill_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_R11NEW0116201NoFill_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_R11NEW0116201NoFill_12.addFeatures(features_R11NEW0116201NoFill_12);
var lyr_R11NEW0116201NoFill_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_R11NEW0116201NoFill_12, 
                style: style_R11NEW0116201NoFill_12,
                popuplayertitle: 'R11-NEW-0116-201 - No Fill',
                interactive: false,
                title: '<img src="styles/legend/R11NEW0116201NoFill_12.png" /> R11-NEW-0116-201 - No Fill'
            });
var format_R11PAN0908076_13 = new ol.format.GeoJSON();
var features_R11PAN0908076_13 = format_R11PAN0908076_13.readFeatures(json_R11PAN0908076_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_R11PAN0908076_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_R11PAN0908076_13.addFeatures(features_R11PAN0908076_13);
var lyr_R11PAN0908076_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_R11PAN0908076_13, 
                style: style_R11PAN0908076_13,
                popuplayertitle: 'R11-PAN-0908-076',
                interactive: true,
                title: '<img src="styles/legend/R11PAN0908076_13.png" /> R11-PAN-0908-076'
            });
var format_LandClassification_14 = new ol.format.GeoJSON();
var features_LandClassification_14 = format_LandClassification_14.readFeatures(json_LandClassification_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_LandClassification_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LandClassification_14.addFeatures(features_LandClassification_14);
var lyr_LandClassification_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LandClassification_14, 
                style: style_LandClassification_14,
                popuplayertitle: 'Land Classification',
                interactive: true,
    title: 'Land Classification<br />\
    <img src="styles/legend/LandClassification_14_0.png" /> Alienable and Disposable<br />\
    <img src="styles/legend/LandClassification_14_1.png" /> Forestland boundary<br />' });
var format_Mainithotspringlandscape_15 = new ol.format.GeoJSON();
var features_Mainithotspringlandscape_15 = format_Mainithotspringlandscape_15.readFeatures(json_Mainithotspringlandscape_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Mainithotspringlandscape_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Mainithotspringlandscape_15.addFeatures(features_Mainithotspringlandscape_15);
var lyr_Mainithotspringlandscape_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Mainithotspringlandscape_15, 
                style: style_Mainithotspringlandscape_15,
                popuplayertitle: 'Mainit hotspring landscape',
                interactive: true,
                title: '<img src="styles/legend/Mainithotspringlandscape_15.png" /> Mainit hotspring landscape'
            });
var format_KeyBiodiversityArea_16 = new ol.format.GeoJSON();
var features_KeyBiodiversityArea_16 = format_KeyBiodiversityArea_16.readFeatures(json_KeyBiodiversityArea_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_KeyBiodiversityArea_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KeyBiodiversityArea_16.addFeatures(features_KeyBiodiversityArea_16);
var lyr_KeyBiodiversityArea_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KeyBiodiversityArea_16, 
                style: style_KeyBiodiversityArea_16,
                popuplayertitle: 'Key Biodiversity Area',
                interactive: true,
                title: '<img src="styles/legend/KeyBiodiversityArea_16.png" /> Key Biodiversity Area'
            });
var format_MunicipalityBoundary_17 = new ol.format.GeoJSON();
var features_MunicipalityBoundary_17 = format_MunicipalityBoundary_17.readFeatures(json_MunicipalityBoundary_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_MunicipalityBoundary_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MunicipalityBoundary_17.addFeatures(features_MunicipalityBoundary_17);
var lyr_MunicipalityBoundary_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MunicipalityBoundary_17, 
                style: style_MunicipalityBoundary_17,
                popuplayertitle: 'Municipality Boundary',
                interactive: true,
    title: 'Municipality Boundary<br />\
    <img src="styles/legend/MunicipalityBoundary_17_0.png" /> Mabini<br />\
    <img src="styles/legend/MunicipalityBoundary_17_1.png" /> Maco<br />\
    <img src="styles/legend/MunicipalityBoundary_17_2.png" /> Maragusan<br />\
    <img src="styles/legend/MunicipalityBoundary_17_3.png" /> Mawab<br />\
    <img src="styles/legend/MunicipalityBoundary_17_4.png" /> Nabunturan<br />\
    <img src="styles/legend/MunicipalityBoundary_17_5.png" /> Pantukan<br />' });
var format_R11PAN0908076NoFill_18 = new ol.format.GeoJSON();
var features_R11PAN0908076NoFill_18 = format_R11PAN0908076NoFill_18.readFeatures(json_R11PAN0908076NoFill_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_R11PAN0908076NoFill_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_R11PAN0908076NoFill_18.addFeatures(features_R11PAN0908076NoFill_18);
var lyr_R11PAN0908076NoFill_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_R11PAN0908076NoFill_18, 
                style: style_R11PAN0908076NoFill_18,
                popuplayertitle: 'R11-PAN-0908-076 - No Fill',
                interactive: false,
                title: '<img src="styles/legend/R11PAN0908076NoFill_18.png" /> R11-PAN-0908-076 - No Fill'
            });
var format_R11SCR1005034_19 = new ol.format.GeoJSON();
var features_R11SCR1005034_19 = format_R11SCR1005034_19.readFeatures(json_R11SCR1005034_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_R11SCR1005034_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_R11SCR1005034_19.addFeatures(features_R11SCR1005034_19);
var lyr_R11SCR1005034_19 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_R11SCR1005034_19, 
                style: style_R11SCR1005034_19,
                popuplayertitle: 'R11-SCR-1005-034',
                interactive: true,
                title: '<img src="styles/legend/R11SCR1005034_19.png" /> R11-SCR-1005-034'
            });
var format_LandClassification_20 = new ol.format.GeoJSON();
var features_LandClassification_20 = format_LandClassification_20.readFeatures(json_LandClassification_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_LandClassification_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LandClassification_20.addFeatures(features_LandClassification_20);
var lyr_LandClassification_20 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LandClassification_20, 
                style: style_LandClassification_20,
                popuplayertitle: 'Land Classification',
                interactive: true,
    title: 'Land Classification<br />\
    <img src="styles/legend/LandClassification_20_0.png" /> Forestland<br />' });
var format_KeyBiodiversityArea_21 = new ol.format.GeoJSON();
var features_KeyBiodiversityArea_21 = format_KeyBiodiversityArea_21.readFeatures(json_KeyBiodiversityArea_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_KeyBiodiversityArea_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KeyBiodiversityArea_21.addFeatures(features_KeyBiodiversityArea_21);
var lyr_KeyBiodiversityArea_21 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KeyBiodiversityArea_21, 
                style: style_KeyBiodiversityArea_21,
                popuplayertitle: 'Key Biodiversity Area',
                interactive: true,
                title: '<img src="styles/legend/KeyBiodiversityArea_21.png" /> Key Biodiversity Area'
            });
var format_ProtectedArea_22 = new ol.format.GeoJSON();
var features_ProtectedArea_22 = format_ProtectedArea_22.readFeatures(json_ProtectedArea_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_ProtectedArea_22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ProtectedArea_22.addFeatures(features_ProtectedArea_22);
var lyr_ProtectedArea_22 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ProtectedArea_22, 
                style: style_ProtectedArea_22,
                popuplayertitle: 'Protected Area',
                interactive: true,
                title: '<img src="styles/legend/ProtectedArea_22.png" /> Protected Area'
            });
var format_MANPManagementZones_23 = new ol.format.GeoJSON();
var features_MANPManagementZones_23 = format_MANPManagementZones_23.readFeatures(json_MANPManagementZones_23, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_MANPManagementZones_23 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MANPManagementZones_23.addFeatures(features_MANPManagementZones_23);
var lyr_MANPManagementZones_23 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MANPManagementZones_23, 
                style: style_MANPManagementZones_23,
                popuplayertitle: 'MANP Management Zones',
                interactive: true,
    title: 'MANP Management Zones<br />\
    <img src="styles/legend/MANPManagementZones_23_0.png" /> Buffer Zone<br />\
    <img src="styles/legend/MANPManagementZones_23_1.png" /> Multiple Use Zone<br />\
    <img src="styles/legend/MANPManagementZones_23_2.png" /> Strict Protection Zone<br />' });
var format_MunicipalityBoundary_24 = new ol.format.GeoJSON();
var features_MunicipalityBoundary_24 = format_MunicipalityBoundary_24.readFeatures(json_MunicipalityBoundary_24, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_MunicipalityBoundary_24 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MunicipalityBoundary_24.addFeatures(features_MunicipalityBoundary_24);
var lyr_MunicipalityBoundary_24 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MunicipalityBoundary_24, 
                style: style_MunicipalityBoundary_24,
                popuplayertitle: 'Municipality Boundary',
                interactive: true,
    title: 'Municipality Boundary<br />\
    <img src="styles/legend/MunicipalityBoundary_24_0.png" /> Bansalan<br />\
    <img src="styles/legend/MunicipalityBoundary_24_1.png" /> City of Digos<br />\
    <img src="styles/legend/MunicipalityBoundary_24_2.png" /> Davao City<br />\
    <img src="styles/legend/MunicipalityBoundary_24_3.png" /> Makilala<br />\
    <img src="styles/legend/MunicipalityBoundary_24_4.png" /> Santa Cruz<br />' });
var format_R11SCR1005034NoFill_25 = new ol.format.GeoJSON();
var features_R11SCR1005034NoFill_25 = format_R11SCR1005034NoFill_25.readFeatures(json_R11SCR1005034NoFill_25, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_R11SCR1005034NoFill_25 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_R11SCR1005034NoFill_25.addFeatures(features_R11SCR1005034NoFill_25);
var lyr_R11SCR1005034NoFill_25 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_R11SCR1005034NoFill_25, 
                style: style_R11SCR1005034NoFill_25,
                popuplayertitle: 'R11-SCR-1005-034 - No Fill',
                interactive: false,
                title: '<img src="styles/legend/R11SCR1005034NoFill_25.png" /> R11-SCR-1005-034 - No Fill'
            });
var format_R11TAL0408071_26 = new ol.format.GeoJSON();
var features_R11TAL0408071_26 = format_R11TAL0408071_26.readFeatures(json_R11TAL0408071_26, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_R11TAL0408071_26 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_R11TAL0408071_26.addFeatures(features_R11TAL0408071_26);
var lyr_R11TAL0408071_26 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_R11TAL0408071_26, 
                style: style_R11TAL0408071_26,
                popuplayertitle: 'R11-TAL-0408-071',
                interactive: true,
                title: '<img src="styles/legend/R11TAL0408071_26.png" /> R11-TAL-0408-071'
            });
var format_LandClassification_27 = new ol.format.GeoJSON();
var features_LandClassification_27 = format_LandClassification_27.readFeatures(json_LandClassification_27, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_LandClassification_27 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LandClassification_27.addFeatures(features_LandClassification_27);
var lyr_LandClassification_27 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LandClassification_27, 
                style: style_LandClassification_27,
                popuplayertitle: 'Land Classification',
                interactive: true,
    title: 'Land Classification<br />\
    <img src="styles/legend/LandClassification_27_0.png" /> A & D Land<br />\
    <img src="styles/legend/LandClassification_27_1.png" /> Forestland<br />' });
var format_MunicipalityBoundary_28 = new ol.format.GeoJSON();
var features_MunicipalityBoundary_28 = format_MunicipalityBoundary_28.readFeatures(json_MunicipalityBoundary_28, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_MunicipalityBoundary_28 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MunicipalityBoundary_28.addFeatures(features_MunicipalityBoundary_28);
var lyr_MunicipalityBoundary_28 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MunicipalityBoundary_28, 
                style: style_MunicipalityBoundary_28,
                popuplayertitle: 'Municipality Boundary',
                interactive: true,
    title: 'Municipality Boundary<br />\
    <img src="styles/legend/MunicipalityBoundary_28_0.png" /> KAPALONG<br />\
    <img src="styles/legend/MunicipalityBoundary_28_1.png" /> SAN ISIDRO<br />\
    <img src="styles/legend/MunicipalityBoundary_28_2.png" /> TALAINGOD<br />\
    <img src="styles/legend/MunicipalityBoundary_28_3.png" /> STO. TOMAS<br />' });
var format_AtaManoboBrgyBndry_29 = new ol.format.GeoJSON();
var features_AtaManoboBrgyBndry_29 = format_AtaManoboBrgyBndry_29.readFeatures(json_AtaManoboBrgyBndry_29, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_AtaManoboBrgyBndry_29 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AtaManoboBrgyBndry_29.addFeatures(features_AtaManoboBrgyBndry_29);
var lyr_AtaManoboBrgyBndry_29 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AtaManoboBrgyBndry_29, 
                style: style_AtaManoboBrgyBndry_29,
                popuplayertitle: 'Ata-Manobo Brgy Bndry',
                interactive: true,
                title: '<img src="styles/legend/AtaManoboBrgyBndry_29.png" /> Ata-Manobo Brgy Bndry'
            });
var format_R11TAL0408071NoFill_30 = new ol.format.GeoJSON();
var features_R11TAL0408071NoFill_30 = format_R11TAL0408071NoFill_30.readFeatures(json_R11TAL0408071NoFill_30, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_R11TAL0408071NoFill_30 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_R11TAL0408071NoFill_30.addFeatures(features_R11TAL0408071NoFill_30);
var lyr_R11TAL0408071NoFill_30 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_R11TAL0408071NoFill_30, 
                style: style_R11TAL0408071NoFill_30,
                popuplayertitle: 'R11-TAL-0408-071 - No Fill',
                interactive: false,
                title: '<img src="styles/legend/R11TAL0408071NoFill_30.png" /> R11-TAL-0408-071 - No Fill'
            });
var format_R11MAL0609119_31 = new ol.format.GeoJSON();
var features_R11MAL0609119_31 = format_R11MAL0609119_31.readFeatures(json_R11MAL0609119_31, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_R11MAL0609119_31 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_R11MAL0609119_31.addFeatures(features_R11MAL0609119_31);
var lyr_R11MAL0609119_31 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_R11MAL0609119_31, 
                style: style_R11MAL0609119_31,
                popuplayertitle: 'R11-MAL-0609-119',
                interactive: true,
                title: '<img src="styles/legend/R11MAL0609119_31.png" /> R11-MAL-0609-119'
            });
var format_LandClassification_32 = new ol.format.GeoJSON();
var features_LandClassification_32 = format_LandClassification_32.readFeatures(json_LandClassification_32, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_LandClassification_32 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LandClassification_32.addFeatures(features_LandClassification_32);
var lyr_LandClassification_32 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LandClassification_32, 
                style: style_LandClassification_32,
                popuplayertitle: 'Land Classification',
                interactive: true,
    title: 'Land Classification<br />\
    <img src="styles/legend/LandClassification_32_0.png" /> Alienable and Disposable Land<br />\
    <img src="styles/legend/LandClassification_32_1.png" /> Forestland<br />' });
var format_KeyBiodiversityArea_33 = new ol.format.GeoJSON();
var features_KeyBiodiversityArea_33 = format_KeyBiodiversityArea_33.readFeatures(json_KeyBiodiversityArea_33, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_KeyBiodiversityArea_33 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KeyBiodiversityArea_33.addFeatures(features_KeyBiodiversityArea_33);
var lyr_KeyBiodiversityArea_33 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KeyBiodiversityArea_33, 
                style: style_KeyBiodiversityArea_33,
                popuplayertitle: 'Key Biodiversity Area',
                interactive: true,
                title: '<img src="styles/legend/KeyBiodiversityArea_33.png" /> Key Biodiversity Area'
            });
var format_MalitaBrgyBndry_34 = new ol.format.GeoJSON();
var features_MalitaBrgyBndry_34 = format_MalitaBrgyBndry_34.readFeatures(json_MalitaBrgyBndry_34, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_MalitaBrgyBndry_34 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MalitaBrgyBndry_34.addFeatures(features_MalitaBrgyBndry_34);
var lyr_MalitaBrgyBndry_34 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MalitaBrgyBndry_34, 
                style: style_MalitaBrgyBndry_34,
                popuplayertitle: 'Malita Brgy Bndry',
                interactive: true,
                title: '<img src="styles/legend/MalitaBrgyBndry_34.png" /> Malita Brgy Bndry'
            });
var format_R11MAL0609119NoFill_35 = new ol.format.GeoJSON();
var features_R11MAL0609119NoFill_35 = format_R11MAL0609119NoFill_35.readFeatures(json_R11MAL0609119NoFill_35, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_R11MAL0609119NoFill_35 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_R11MAL0609119NoFill_35.addFeatures(features_R11MAL0609119NoFill_35);
var lyr_R11MAL0609119NoFill_35 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_R11MAL0609119NoFill_35, 
                style: style_R11MAL0609119NoFill_35,
                popuplayertitle: 'R11-MAL-0609-119 - No Fill',
                interactive: false,
                title: '<img src="styles/legend/R11MAL0609119NoFill_35.png" /> R11-MAL-0609-119 - No Fill'
            });
var format_MIADPRPCO11ANCESTRALDOMAINS_36 = new ol.format.GeoJSON();
var features_MIADPRPCO11ANCESTRALDOMAINS_36 = format_MIADPRPCO11ANCESTRALDOMAINS_36.readFeatures(json_MIADPRPCO11ANCESTRALDOMAINS_36, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_MIADPRPCO11ANCESTRALDOMAINS_36 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MIADPRPCO11ANCESTRALDOMAINS_36.addFeatures(features_MIADPRPCO11ANCESTRALDOMAINS_36);
var lyr_MIADPRPCO11ANCESTRALDOMAINS_36 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MIADPRPCO11ANCESTRALDOMAINS_36, 
                style: style_MIADPRPCO11ANCESTRALDOMAINS_36,
                popuplayertitle: 'MIADP RPCO 11 - ANCESTRAL DOMAINS',
                interactive: false,
                title: '<img src="styles/legend/MIADPRPCO11ANCESTRALDOMAINS_36.png" /> MIADP RPCO 11 - ANCESTRAL DOMAINS'
            });
var group_BlaanTagakauloAncestralDomain = new ol.layer.Group({
                                layers: [lyr_R11MAL0609119_31,lyr_LandClassification_32,lyr_KeyBiodiversityArea_33,lyr_MalitaBrgyBndry_34,lyr_R11MAL0609119NoFill_35,],
                                fold: 'close',
                                title: 'Blaan-Tagakaulo Ancestral Domain'});
var group_AtaManoboAncestralDomain = new ol.layer.Group({
                                layers: [lyr_R11TAL0408071_26,lyr_LandClassification_27,lyr_MunicipalityBoundary_28,lyr_AtaManoboBrgyBndry_29,lyr_R11TAL0408071NoFill_30,],
                                fold: 'close',
                                title: 'Ata-Manobo Ancestral Domain'});
var group_BagoboTagabawaAncestralDomain = new ol.layer.Group({
                                layers: [lyr_R11SCR1005034_19,lyr_LandClassification_20,lyr_KeyBiodiversityArea_21,lyr_ProtectedArea_22,lyr_MANPManagementZones_23,lyr_MunicipalityBoundary_24,lyr_R11SCR1005034NoFill_25,],
                                fold: 'close',
                                title: 'Bagobo-Tagabawa Ancestral Domain'});
var group_MansakaAncestralDomain = new ol.layer.Group({
                                layers: [lyr_R11PAN0908076_13,lyr_LandClassification_14,lyr_Mainithotspringlandscape_15,lyr_KeyBiodiversityArea_16,lyr_MunicipalityBoundary_17,lyr_R11PAN0908076NoFill_18,],
                                fold: 'close',
                                title: 'Mansaka Ancestral Domain'});
var group_MangguanganAncestralDomain = new ol.layer.Group({
                                layers: [lyr_R11NEW0116201_9,lyr_LandClassification_10,lyr_NewCorellaBrgyBndry_11,lyr_R11NEW0116201NoFill_12,],
                                fold: 'close',
                                title: 'Mangguangan Ancestral Domain'});
var group_MandayaAncestralDomain = new ol.layer.Group({
                                layers: [lyr_R11TAR0818255EnBanc_4,lyr_R11TAR0818255_5,lyr_LandClassification_6,lyr_TarragonaBrgyBdry_7,lyr_R11TAR0818255Nofill_8,],
                                fold: 'close',
                                title: 'Mandaya Ancestral Domain'});

lyr_GoogleSatellite_0.setVisible(true);lyr_OSMStandard_1.setVisible(true);lyr_ESRIShadedRelief_2.setVisible(true);lyr_Davaoregion_3.setVisible(true);lyr_R11TAR0818255EnBanc_4.setVisible(false);lyr_R11TAR0818255_5.setVisible(true);lyr_LandClassification_6.setVisible(false);lyr_TarragonaBrgyBdry_7.setVisible(false);lyr_R11TAR0818255Nofill_8.setVisible(false);lyr_R11NEW0116201_9.setVisible(true);lyr_LandClassification_10.setVisible(false);lyr_NewCorellaBrgyBndry_11.setVisible(false);lyr_R11NEW0116201NoFill_12.setVisible(false);lyr_R11PAN0908076_13.setVisible(true);lyr_LandClassification_14.setVisible(false);lyr_Mainithotspringlandscape_15.setVisible(false);lyr_KeyBiodiversityArea_16.setVisible(false);lyr_MunicipalityBoundary_17.setVisible(false);lyr_R11PAN0908076NoFill_18.setVisible(false);lyr_R11SCR1005034_19.setVisible(true);lyr_LandClassification_20.setVisible(false);lyr_KeyBiodiversityArea_21.setVisible(false);lyr_ProtectedArea_22.setVisible(false);lyr_MANPManagementZones_23.setVisible(false);lyr_MunicipalityBoundary_24.setVisible(false);lyr_R11SCR1005034NoFill_25.setVisible(false);lyr_R11TAL0408071_26.setVisible(true);lyr_LandClassification_27.setVisible(false);lyr_MunicipalityBoundary_28.setVisible(false);lyr_AtaManoboBrgyBndry_29.setVisible(false);lyr_R11TAL0408071NoFill_30.setVisible(false);lyr_R11MAL0609119_31.setVisible(true);lyr_LandClassification_32.setVisible(false);lyr_KeyBiodiversityArea_33.setVisible(false);lyr_MalitaBrgyBndry_34.setVisible(false);lyr_R11MAL0609119NoFill_35.setVisible(false);lyr_MIADPRPCO11ANCESTRALDOMAINS_36.setVisible(false);
var layersList = [lyr_GoogleSatellite_0,lyr_OSMStandard_1,lyr_ESRIShadedRelief_2,lyr_Davaoregion_3,group_MandayaAncestralDomain,group_MangguanganAncestralDomain,group_MansakaAncestralDomain,group_BagoboTagabawaAncestralDomain,group_AtaManoboAncestralDomain,group_BlaanTagakauloAncestralDomain,lyr_MIADPRPCO11ANCESTRALDOMAINS_36];
lyr_Davaoregion_3.set('fieldAliases', {'Shape_Leng': 'Shape_Leng', 'ADM2_EN': 'Province', 'ADM2_PCODE': 'ADM2_PCODE', 'ADM1_EN': 'Region', 'ADM1_PCODE': 'ADM1_PCODE', 'ADM0_EN': 'ADM0_EN', 'ADM0_PCODE': 'ADM0_PCODE', 'date': 'date', 'validOn': 'validOn', 'validTo': 'validTo', 'Shape_Le_1': 'Shape_Le_1', 'Shape_Area': 'AREA(ha)', });
lyr_R11TAR0818255EnBanc_4.set('fieldAliases', {'ID': 'ID', 'TRIBES': 'TRIBES', 'status': 'Status', 'cadt_no_': 'CADT_No', 'area': 'Area_Ha', 'FID_': 'FID_', 'Entity': 'Entity', 'Layer': 'Layer', 'Color': 'Color', 'Linetype': 'Linetype', 'Elevation': 'Elevation', 'LineWt': 'LineWt', 'RefName': 'RefName', 'Area_1': 'Area_1', });
lyr_R11TAR0818255_5.set('fieldAliases', {'id': 'id', 'TRIBES': 'TRIBES', 'Status': 'Status', 'Cadt_no': 'CADT NO.', 'Area_ha': 'Area(ha)', });
lyr_LandClassification_6.set('fieldAliases', {'CLASSIFICA': 'Land_Class', 'AREA': 'Area_ha', });
lyr_TarragonaBrgyBdry_7.set('fieldAliases', {'ID': 'ID', 'BARANGAYS': 'Barangay', 'CADT_Area': 'CADT_Area(ha)', });
lyr_R11TAR0818255Nofill_8.set('fieldAliases', {'id': 'id', 'TRIBES': 'TRIBES', 'Status': 'Status', 'Cadt_no': 'CADT NO.', 'Area_ha': 'Area_ha', });
lyr_R11NEW0116201_9.set('fieldAliases', {'ID': 'ID', 'TRIBES': 'TRIBES', 'status': 'status', 'cadt_no_': 'CADT NO.', 'area': 'Area(ha)', });
lyr_LandClassification_10.set('fieldAliases', {'ID': 'ID', 'Classifica': 'Land_Class', 'Municipali': 'Muni', 'Area': 'CADT_Area(ha)', });
lyr_NewCorellaBrgyBndry_11.set('fieldAliases', {'ID': 'ID', 'Name': 'Barangay', 'Descriptio': 'Descriptio', 'Area': 'CADT_Area(ha)', });
lyr_R11NEW0116201NoFill_12.set('fieldAliases', {'ID': 'ID', 'TRIBES': 'TRIBES', 'status': 'status', 'cadt_no_': 'CADT NO.', 'area': 'area', });
lyr_R11PAN0908076_13.set('fieldAliases', {'CADT Name': 'CADT Name', 'Area': 'Area(ha)', 'Status': 'Status', 'Survey No.': 'Survey No.', 'ID': 'ID', 'TRIBES': 'TRIBES', 'cadt_no_': 'CADT NO.', 'path': 'path', });
lyr_LandClassification_14.set('fieldAliases', {'Name': 'Land_Class', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'Area': 'Area_ha', });
lyr_Mainithotspringlandscape_15.set('fieldAliases', {'WDPAID': 'WDPAID', 'PANAME': 'PANAME', 'REGION': 'REGION', 'ECOSYSTEM': 'ECOSYSTEM', 'PA_CODE': 'PA_CODE', 'BioGeoZone': 'BioGeoZone', 'PA_CODE2': 'PA_CODE2', 'PROVINCE': 'PROVINCE', 'MUN_CITY': 'MUN_CITY', 'LEGALBASIS': 'LEGALBASIS', 'LEGALSTATU': 'LEGALSTATU', 'CATEGORY': 'CATEGORY', 'AREA_Has': 'AREA_Has', });
lyr_KeyBiodiversityArea_16.set('fieldAliases', {'KBA_NAME': 'KBA_NAME', 'KBA_TYPE': 'KBA_TYPE', 'MUNICIPALI': 'MUNICIPALI', 'PROVINCE': 'PROVINCE', 'T_ID': 'T_ID', 'M_ID': 'M_ID', 'ID': 'ID', 'AREA': 'AREA', 'PERIMETER': 'PERIMETER', 'ACRES': 'ACRES', 'HECTARES': 'HECTARES', 'REGION': 'REGION', 'NAME': 'NAME', });
lyr_MunicipalityBoundary_17.set('fieldAliases', {'Muni': 'Muni', 'Province': 'Province', 'Area_ha': 'CADT_Area(ha)', });
lyr_R11PAN0908076NoFill_18.set('fieldAliases', {'CADT Name': 'CADT Name', 'Area': 'Area', 'Status': 'Status', 'Survey No.': 'Survey No.', 'ID': 'ID', 'TRIBES': 'TRIBES', 'cadt_no_': 'CADT NO.', 'path': 'path', });
lyr_R11SCR1005034_19.set('fieldAliases', {'CADT Name': 'CADT Name', 'Area': 'Area(ha)', 'Status': 'Status', 'Survey No.': 'Survey No.', 'ID': 'ID', 'TRIBES': 'TRIBES', 'cadt_no_': 'CADT NO.', 'path': 'path', });
lyr_LandClassification_20.set('fieldAliases', {'Name': 'Land_Class', });
lyr_KeyBiodiversityArea_21.set('fieldAliases', {'KBA_NAME': 'KBA_NAME', 'KBA_TYPE': 'KBA_TYPE', 'MUNICIPALI': 'MUNICIPALI', 'PROVINCE': 'PROVINCE', 'T_ID': 'T_ID', 'M_ID': 'M_ID', 'ID': 'ID', 'AREA': 'AREA', 'PERIMETER': 'PERIMETER', 'ACRES': 'ACRES', 'HECTARES': 'HECTARES', 'REGION': 'REGION', 'NAME': 'NAME', });
lyr_ProtectedArea_22.set('fieldAliases', {'WDPAID': 'WDPAID', 'PANAME': 'Protected Area', 'REGION': 'REGION', 'ECOSYSTEM': 'ECOSYSTEM', 'PA_CODE': 'PA_CODE', 'BioGeoZone': 'BioGeoZone', 'PA_CODE2': 'PA_CODE2', 'PROVINCE': 'PROVINCE', 'MUN_CITY': 'MUN_CITY', 'LEGALBASIS': 'LEGALBASIS', 'LEGALSTATU': 'LEGALSTATU', 'CATEGORY': 'CATEGORY', 'AREA_Has': 'AREA_ha', });
lyr_MANPManagementZones_23.set('fieldAliases', {'Name': 'Name', 'Area_has': 'Area_has', 'layer': 'layer', 'path': 'path', });
lyr_MunicipalityBoundary_24.set('fieldAliases', {'Shape_Leng': 'Shape_Leng', 'ADM3_EN': 'Muni/City', 'ADM3_PCODE': 'ADM3_PCODE', 'ADM3_REF': 'ADM3_REF', 'ADM3ALT1EN': 'ADM3ALT1EN', 'ADM3ALT2EN': 'ADM3ALT2EN', 'ADM2_EN': 'Province', 'ADM2_PCODE': 'ADM2_PCODE', 'ADM1_EN': 'ADM1_EN', 'ADM1_PCODE': 'ADM1_PCODE', 'ADM0_EN': 'ADM0_EN', 'ADM0_PCODE': 'ADM0_PCODE', 'date': 'date', 'validOn': 'validOn', 'validTo': 'validTo', 'Shape_Le_1': 'Shape_Le_1', 'Shape_Area': 'Shape_Area', 'Area_ha': 'CADT_Area(ha)', });
lyr_R11SCR1005034NoFill_25.set('fieldAliases', {'CADT Name': 'CADT Name', 'Area': 'Area', 'Status': 'Status', 'Survey No.': 'Survey No.', 'ID': 'ID', 'TRIBES': 'TRIBES', 'cadt_no_': 'CADT NO.', 'path': 'path', });
lyr_R11TAL0408071_26.set('fieldAliases', {'CADT Name': 'CADT Name', 'Area': 'Area(ha)', 'Status': 'Status', 'Survey No.': 'Survey No.', 'ID': 'ID', 'TRIBES': 'TRIBES', 'cadt_no_': 'CADT NO.', 'path': 'path', 'layer': 'layer', });
lyr_LandClassification_27.set('fieldAliases', {'ID': 'ID', 'Classifica': 'Land_Class', 'Municipali': 'Municipality', });
lyr_MunicipalityBoundary_28.set('fieldAliases', {'ID': 'ID', 'Municipali': 'Municipality', 'Area_has': 'CADT_Area(ha)', });
lyr_AtaManoboBrgyBndry_29.set('fieldAliases', {'ID': 'ID', 'BARANGAY': 'Barangay', 'Area_has': 'CADT_Area(ha)', 'MUNI': 'Municipality', });
lyr_R11TAL0408071NoFill_30.set('fieldAliases', {'CADT Name': 'CADT Name', 'Area': 'Area', 'Status': 'Status', 'Survey No.': 'Survey No.', 'ID': 'ID', 'TRIBES': 'TRIBES', 'cadt_no_': 'CADT NO.', 'path': 'path', 'layer': 'layer', });
lyr_R11MAL0609119_31.set('fieldAliases', {'CADT Name': 'CADT Name', 'Area': 'Area(ha)', 'Status': 'Status', 'Survey No.': 'Survey No.', 'ID': 'ID', 'TRIBES': 'TRIBES', 'cadt_no_': 'CADT NO.', 'path': 'path', 'layer': 'layer', });
lyr_LandClassification_32.set('fieldAliases', {'Land_Class': 'Land Class', 'Area': 'Area (ha)', });
lyr_KeyBiodiversityArea_33.set('fieldAliases', {'Area': 'Area', 'TRIBES': 'TRIBES', 'KBA': 'KBA', });
lyr_MalitaBrgyBndry_34.set('fieldAliases', {'Id': 'Id', 'MUN': 'MUN', 'BRGY': 'Barangay', 'Brgy_Area': 'Brgy_Area', 'Area_CADT': 'CADT_Area(ha)', });
lyr_R11MAL0609119NoFill_35.set('fieldAliases', {'CADT Name': 'CADT Name', 'Area': 'Area', 'Status': 'Status', 'Survey No.': 'Survey No.', 'ID': 'ID', 'TRIBES': 'TRIBES', 'cadt_no_': 'CADT NO.', 'path': 'path', 'layer': 'layer', });
lyr_MIADPRPCO11ANCESTRALDOMAINS_36.set('fieldAliases', {'CADT Name': 'CADT Name', 'Area': 'Area', 'Status': 'Status', 'Survey No.': 'Survey No.', 'ID': 'ID', 'TRIBES': 'TRIBES', });
lyr_Davaoregion_3.set('fieldImages', {'Shape_Leng': 'TextEdit', 'ADM2_EN': 'TextEdit', 'ADM2_PCODE': 'TextEdit', 'ADM1_EN': 'TextEdit', 'ADM1_PCODE': 'TextEdit', 'ADM0_EN': 'TextEdit', 'ADM0_PCODE': 'TextEdit', 'date': 'DateTime', 'validOn': 'DateTime', 'validTo': 'DateTime', 'Shape_Le_1': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_R11TAR0818255EnBanc_4.set('fieldImages', {'ID': 'TextEdit', 'TRIBES': 'TextEdit', 'status': 'TextEdit', 'cadt_no_': 'TextEdit', 'area': 'TextEdit', 'FID_': 'Range', 'Entity': 'TextEdit', 'Layer': 'TextEdit', 'Color': 'Range', 'Linetype': 'TextEdit', 'Elevation': 'TextEdit', 'LineWt': 'Range', 'RefName': 'TextEdit', 'Area_1': 'TextEdit', });
lyr_R11TAR0818255_5.set('fieldImages', {'id': 'TextEdit', 'TRIBES': 'TextEdit', 'Status': 'TextEdit', 'Cadt_no': 'TextEdit', 'Area_ha': 'TextEdit', });
lyr_LandClassification_6.set('fieldImages', {'CLASSIFICA': 'TextEdit', 'AREA': 'TextEdit', });
lyr_TarragonaBrgyBdry_7.set('fieldImages', {'ID': 'TextEdit', 'BARANGAYS': 'TextEdit', 'CADT_Area': 'TextEdit', });
lyr_R11TAR0818255Nofill_8.set('fieldImages', {'id': 'TextEdit', 'TRIBES': 'TextEdit', 'Status': 'TextEdit', 'Cadt_no': 'TextEdit', 'Area_ha': 'TextEdit', });
lyr_R11NEW0116201_9.set('fieldImages', {'ID': 'TextEdit', 'TRIBES': 'TextEdit', 'status': 'TextEdit', 'cadt_no_': 'TextEdit', 'area': 'TextEdit', });
lyr_LandClassification_10.set('fieldImages', {'ID': 'TextEdit', 'Classifica': 'TextEdit', 'Municipali': 'TextEdit', 'Area': 'TextEdit', });
lyr_NewCorellaBrgyBndry_11.set('fieldImages', {'ID': 'TextEdit', 'Name': 'TextEdit', 'Descriptio': 'TextEdit', 'Area': 'TextEdit', });
lyr_R11NEW0116201NoFill_12.set('fieldImages', {'ID': 'TextEdit', 'TRIBES': 'TextEdit', 'status': 'TextEdit', 'cadt_no_': 'TextEdit', 'area': 'TextEdit', });
lyr_R11PAN0908076_13.set('fieldImages', {'CADT Name': 'TextEdit', 'Area': 'TextEdit', 'Status': 'TextEdit', 'Survey No.': 'TextEdit', 'ID': 'TextEdit', 'TRIBES': 'TextEdit', 'cadt_no_': 'TextEdit', 'path': 'TextEdit', });
lyr_LandClassification_14.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'Area': 'TextEdit', });
lyr_Mainithotspringlandscape_15.set('fieldImages', {'WDPAID': 'TextEdit', 'PANAME': 'TextEdit', 'REGION': 'TextEdit', 'ECOSYSTEM': 'TextEdit', 'PA_CODE': 'TextEdit', 'BioGeoZone': 'TextEdit', 'PA_CODE2': 'TextEdit', 'PROVINCE': 'TextEdit', 'MUN_CITY': 'TextEdit', 'LEGALBASIS': 'TextEdit', 'LEGALSTATU': 'TextEdit', 'CATEGORY': 'TextEdit', 'AREA_Has': 'TextEdit', });
lyr_KeyBiodiversityArea_16.set('fieldImages', {'KBA_NAME': 'TextEdit', 'KBA_TYPE': 'TextEdit', 'MUNICIPALI': 'TextEdit', 'PROVINCE': 'TextEdit', 'T_ID': 'Range', 'M_ID': 'Range', 'ID': 'Range', 'AREA': 'TextEdit', 'PERIMETER': 'TextEdit', 'ACRES': 'TextEdit', 'HECTARES': 'TextEdit', 'REGION': 'TextEdit', 'NAME': 'TextEdit', });
lyr_MunicipalityBoundary_17.set('fieldImages', {'Muni': 'TextEdit', 'Province': 'TextEdit', 'Area_ha': 'TextEdit', });
lyr_R11PAN0908076NoFill_18.set('fieldImages', {'CADT Name': 'TextEdit', 'Area': 'TextEdit', 'Status': 'TextEdit', 'Survey No.': 'TextEdit', 'ID': 'TextEdit', 'TRIBES': 'TextEdit', 'cadt_no_': 'TextEdit', 'path': 'TextEdit', });
lyr_R11SCR1005034_19.set('fieldImages', {'CADT Name': 'TextEdit', 'Area': 'TextEdit', 'Status': 'TextEdit', 'Survey No.': 'TextEdit', 'ID': 'TextEdit', 'TRIBES': 'TextEdit', 'cadt_no_': 'TextEdit', 'path': 'TextEdit', });
lyr_LandClassification_20.set('fieldImages', {'Name': 'TextEdit', });
lyr_KeyBiodiversityArea_21.set('fieldImages', {'KBA_NAME': 'TextEdit', 'KBA_TYPE': 'TextEdit', 'MUNICIPALI': 'TextEdit', 'PROVINCE': 'TextEdit', 'T_ID': 'Range', 'M_ID': 'Range', 'ID': 'Range', 'AREA': 'TextEdit', 'PERIMETER': 'TextEdit', 'ACRES': 'TextEdit', 'HECTARES': 'TextEdit', 'REGION': 'TextEdit', 'NAME': 'TextEdit', });
lyr_ProtectedArea_22.set('fieldImages', {'WDPAID': 'TextEdit', 'PANAME': 'TextEdit', 'REGION': 'TextEdit', 'ECOSYSTEM': 'TextEdit', 'PA_CODE': 'TextEdit', 'BioGeoZone': 'TextEdit', 'PA_CODE2': 'TextEdit', 'PROVINCE': 'TextEdit', 'MUN_CITY': 'TextEdit', 'LEGALBASIS': 'TextEdit', 'LEGALSTATU': 'TextEdit', 'CATEGORY': 'TextEdit', 'AREA_Has': 'TextEdit', });
lyr_MANPManagementZones_23.set('fieldImages', {'Name': 'TextEdit', 'Area_has': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_MunicipalityBoundary_24.set('fieldImages', {'Shape_Leng': 'TextEdit', 'ADM3_EN': 'TextEdit', 'ADM3_PCODE': 'TextEdit', 'ADM3_REF': 'TextEdit', 'ADM3ALT1EN': 'TextEdit', 'ADM3ALT2EN': 'TextEdit', 'ADM2_EN': 'TextEdit', 'ADM2_PCODE': 'TextEdit', 'ADM1_EN': 'TextEdit', 'ADM1_PCODE': 'TextEdit', 'ADM0_EN': 'TextEdit', 'ADM0_PCODE': 'TextEdit', 'date': 'DateTime', 'validOn': 'DateTime', 'validTo': 'DateTime', 'Shape_Le_1': 'TextEdit', 'Shape_Area': 'TextEdit', 'Area_ha': 'TextEdit', });
lyr_R11SCR1005034NoFill_25.set('fieldImages', {'CADT Name': 'TextEdit', 'Area': 'TextEdit', 'Status': 'TextEdit', 'Survey No.': 'TextEdit', 'ID': 'TextEdit', 'TRIBES': 'TextEdit', 'cadt_no_': 'TextEdit', 'path': 'TextEdit', });
lyr_R11TAL0408071_26.set('fieldImages', {'CADT Name': 'TextEdit', 'Area': 'TextEdit', 'Status': 'TextEdit', 'Survey No.': 'TextEdit', 'ID': 'TextEdit', 'TRIBES': 'TextEdit', 'cadt_no_': 'TextEdit', 'path': 'TextEdit', 'layer': 'TextEdit', });
lyr_LandClassification_27.set('fieldImages', {'ID': 'TextEdit', 'Classifica': 'TextEdit', 'Municipali': 'TextEdit', });
lyr_MunicipalityBoundary_28.set('fieldImages', {'ID': 'TextEdit', 'Municipali': 'TextEdit', 'Area_has': 'TextEdit', });
lyr_AtaManoboBrgyBndry_29.set('fieldImages', {'ID': 'TextEdit', 'BARANGAY': 'TextEdit', 'Area_has': 'TextEdit', 'MUNI': 'TextEdit', });
lyr_R11TAL0408071NoFill_30.set('fieldImages', {'CADT Name': 'TextEdit', 'Area': 'TextEdit', 'Status': 'TextEdit', 'Survey No.': 'TextEdit', 'ID': 'TextEdit', 'TRIBES': 'TextEdit', 'cadt_no_': 'TextEdit', 'path': 'TextEdit', 'layer': 'TextEdit', });
lyr_R11MAL0609119_31.set('fieldImages', {'CADT Name': 'TextEdit', 'Area': 'TextEdit', 'Status': 'TextEdit', 'Survey No.': 'TextEdit', 'ID': 'TextEdit', 'TRIBES': 'TextEdit', 'cadt_no_': 'TextEdit', 'path': 'TextEdit', 'layer': 'TextEdit', });
lyr_LandClassification_32.set('fieldImages', {'Land_Class': 'TextEdit', 'Area': 'TextEdit', });
lyr_KeyBiodiversityArea_33.set('fieldImages', {'Area': 'TextEdit', 'TRIBES': 'TextEdit', 'KBA': '', });
lyr_MalitaBrgyBndry_34.set('fieldImages', {'Id': 'TextEdit', 'MUN': 'TextEdit', 'BRGY': 'TextEdit', 'Brgy_Area': 'TextEdit', 'Area_CADT': 'TextEdit', });
lyr_R11MAL0609119NoFill_35.set('fieldImages', {'CADT Name': 'TextEdit', 'Area': 'TextEdit', 'Status': 'TextEdit', 'Survey No.': 'TextEdit', 'ID': 'TextEdit', 'TRIBES': 'TextEdit', 'cadt_no_': 'TextEdit', 'path': 'TextEdit', 'layer': 'TextEdit', });
lyr_MIADPRPCO11ANCESTRALDOMAINS_36.set('fieldImages', {'CADT Name': 'TextEdit', 'Area': 'TextEdit', 'Status': 'TextEdit', 'Survey No.': 'TextEdit', 'ID': 'TextEdit', 'TRIBES': 'TextEdit', });
lyr_Davaoregion_3.set('fieldLabels', {'Shape_Leng': 'hidden field', 'ADM2_EN': 'inline label - visible with data', 'ADM2_PCODE': 'hidden field', 'ADM1_EN': 'inline label - visible with data', 'ADM1_PCODE': 'hidden field', 'ADM0_EN': 'hidden field', 'ADM0_PCODE': 'hidden field', 'date': 'hidden field', 'validOn': 'hidden field', 'validTo': 'hidden field', 'Shape_Le_1': 'hidden field', 'Shape_Area': 'no label', });
lyr_R11TAR0818255EnBanc_4.set('fieldLabels', {'ID': 'hidden field', 'TRIBES': 'inline label - visible with data', 'status': 'inline label - visible with data', 'cadt_no_': 'inline label - visible with data', 'area': 'inline label - visible with data', 'FID_': 'hidden field', 'Entity': 'hidden field', 'Layer': 'hidden field', 'Color': 'hidden field', 'Linetype': 'hidden field', 'Elevation': 'hidden field', 'LineWt': 'hidden field', 'RefName': 'hidden field', 'Area_1': 'hidden field', });
lyr_R11TAR0818255_5.set('fieldLabels', {'id': 'hidden field', 'TRIBES': 'inline label - visible with data', 'Status': 'inline label - visible with data', 'Cadt_no': 'hidden field', 'Area_ha': 'inline label - visible with data', });
lyr_LandClassification_6.set('fieldLabels', {'CLASSIFICA': 'inline label - visible with data', 'AREA': 'inline label - visible with data', });
lyr_TarragonaBrgyBdry_7.set('fieldLabels', {'ID': 'hidden field', 'BARANGAYS': 'inline label - visible with data', 'CADT_Area': 'inline label - visible with data', });
lyr_R11TAR0818255Nofill_8.set('fieldLabels', {'id': 'no label', 'TRIBES': 'header label - always visible', 'Status': 'no label', 'Cadt_no': 'no label', 'Area_ha': 'no label', });
lyr_R11NEW0116201_9.set('fieldLabels', {'ID': 'hidden field', 'TRIBES': 'inline label - visible with data', 'status': 'inline label - visible with data', 'cadt_no_': 'hidden field', 'area': 'inline label - visible with data', });
lyr_LandClassification_10.set('fieldLabels', {'ID': 'hidden field', 'Classifica': 'inline label - visible with data', 'Municipali': 'inline label - visible with data', 'Area': 'inline label - visible with data', });
lyr_NewCorellaBrgyBndry_11.set('fieldLabels', {'ID': 'hidden field', 'Name': 'inline label - visible with data', 'Descriptio': 'hidden field', 'Area': 'inline label - visible with data', });
lyr_R11NEW0116201NoFill_12.set('fieldLabels', {'ID': 'no label', 'TRIBES': 'no label', 'status': 'no label', 'cadt_no_': 'no label', 'area': 'no label', });
lyr_R11PAN0908076_13.set('fieldLabels', {'CADT Name': 'inline label - visible with data', 'Area': 'inline label - visible with data', 'Status': 'inline label - visible with data', 'Survey No.': 'hidden field', 'ID': 'hidden field', 'TRIBES': 'inline label - visible with data', 'cadt_no_': 'hidden field', 'path': 'hidden field', });
lyr_LandClassification_14.set('fieldLabels', {'Name': 'no label', 'descriptio': 'hidden field', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'Area': 'no label', });
lyr_Mainithotspringlandscape_15.set('fieldLabels', {'WDPAID': 'hidden field', 'PANAME': 'inline label - visible with data', 'REGION': 'inline label - visible with data', 'ECOSYSTEM': 'inline label - visible with data', 'PA_CODE': 'hidden field', 'BioGeoZone': 'hidden field', 'PA_CODE2': 'hidden field', 'PROVINCE': 'hidden field', 'MUN_CITY': 'hidden field', 'LEGALBASIS': 'inline label - visible with data', 'LEGALSTATU': 'hidden field', 'CATEGORY': 'inline label - visible with data', 'AREA_Has': 'inline label - visible with data', });
lyr_KeyBiodiversityArea_16.set('fieldLabels', {'KBA_NAME': 'inline label - visible with data', 'KBA_TYPE': 'inline label - visible with data', 'MUNICIPALI': 'inline label - visible with data', 'PROVINCE': 'inline label - visible with data', 'T_ID': 'hidden field', 'M_ID': 'hidden field', 'ID': 'hidden field', 'AREA': 'hidden field', 'PERIMETER': 'hidden field', 'ACRES': 'hidden field', 'HECTARES': 'hidden field', 'REGION': 'hidden field', 'NAME': 'hidden field', });
lyr_MunicipalityBoundary_17.set('fieldLabels', {'Muni': 'inline label - visible with data', 'Province': 'inline label - visible with data', 'Area_ha': 'inline label - visible with data', });
lyr_R11PAN0908076NoFill_18.set('fieldLabels', {'CADT Name': 'no label', 'Area': 'no label', 'Status': 'no label', 'Survey No.': 'no label', 'ID': 'no label', 'TRIBES': 'no label', 'cadt_no_': 'no label', 'path': 'no label', });
lyr_R11SCR1005034_19.set('fieldLabels', {'CADT Name': 'header label - always visible', 'Area': 'inline label - visible with data', 'Status': 'inline label - visible with data', 'Survey No.': 'hidden field', 'ID': 'hidden field', 'TRIBES': 'inline label - visible with data', 'cadt_no_': 'hidden field', 'path': 'hidden field', });
lyr_LandClassification_20.set('fieldLabels', {'Name': 'inline label - visible with data', });
lyr_KeyBiodiversityArea_21.set('fieldLabels', {'KBA_NAME': 'inline label - visible with data', 'KBA_TYPE': 'inline label - visible with data', 'MUNICIPALI': 'hidden field', 'PROVINCE': 'inline label - visible with data', 'T_ID': 'hidden field', 'M_ID': 'hidden field', 'ID': 'hidden field', 'AREA': 'hidden field', 'PERIMETER': 'hidden field', 'ACRES': 'hidden field', 'HECTARES': 'hidden field', 'REGION': 'hidden field', 'NAME': 'hidden field', });
lyr_ProtectedArea_22.set('fieldLabels', {'WDPAID': 'hidden field', 'PANAME': 'inline label - visible with data', 'REGION': 'inline label - visible with data', 'ECOSYSTEM': 'inline label - visible with data', 'PA_CODE': 'hidden field', 'BioGeoZone': 'inline label - visible with data', 'PA_CODE2': 'hidden field', 'PROVINCE': 'hidden field', 'MUN_CITY': 'hidden field', 'LEGALBASIS': 'inline label - visible with data', 'LEGALSTATU': 'hidden field', 'CATEGORY': 'inline label - visible with data', 'AREA_Has': 'inline label - visible with data', });
lyr_MANPManagementZones_23.set('fieldLabels', {'Name': 'inline label - visible with data', 'Area_has': 'inline label - visible with data', 'layer': 'hidden field', 'path': 'hidden field', });
lyr_MunicipalityBoundary_24.set('fieldLabels', {'Shape_Leng': 'hidden field', 'ADM3_EN': 'inline label - visible with data', 'ADM3_PCODE': 'hidden field', 'ADM3_REF': 'hidden field', 'ADM3ALT1EN': 'hidden field', 'ADM3ALT2EN': 'hidden field', 'ADM2_EN': 'inline label - visible with data', 'ADM2_PCODE': 'hidden field', 'ADM1_EN': 'inline label - visible with data', 'ADM1_PCODE': 'hidden field', 'ADM0_EN': 'hidden field', 'ADM0_PCODE': 'hidden field', 'date': 'hidden field', 'validOn': 'hidden field', 'validTo': 'hidden field', 'Shape_Le_1': 'hidden field', 'Shape_Area': 'hidden field', 'Area_ha': 'inline label - visible with data', });
lyr_R11SCR1005034NoFill_25.set('fieldLabels', {'CADT Name': 'no label', 'Area': 'no label', 'Status': 'no label', 'Survey No.': 'no label', 'ID': 'no label', 'TRIBES': 'no label', 'cadt_no_': 'no label', 'path': 'no label', });
lyr_R11TAL0408071_26.set('fieldLabels', {'CADT Name': 'inline label - visible with data', 'Area': 'inline label - visible with data', 'Status': 'inline label - visible with data', 'Survey No.': 'hidden field', 'ID': 'hidden field', 'TRIBES': 'inline label - visible with data', 'cadt_no_': 'hidden field', 'path': 'hidden field', 'layer': 'hidden field', });
lyr_LandClassification_27.set('fieldLabels', {'ID': 'hidden field', 'Classifica': 'inline label - visible with data', 'Municipali': 'inline label - visible with data', });
lyr_MunicipalityBoundary_28.set('fieldLabels', {'ID': 'hidden field', 'Municipali': 'inline label - visible with data', 'Area_has': 'inline label - visible with data', });
lyr_AtaManoboBrgyBndry_29.set('fieldLabels', {'ID': 'hidden field', 'BARANGAY': 'inline label - visible with data', 'Area_has': 'inline label - visible with data', 'MUNI': 'inline label - visible with data', });
lyr_R11TAL0408071NoFill_30.set('fieldLabels', {'CADT Name': 'inline label - always visible', 'Area': 'no label', 'Status': 'no label', 'Survey No.': 'no label', 'ID': 'no label', 'TRIBES': 'no label', 'cadt_no_': 'no label', 'path': 'no label', 'layer': 'no label', });
lyr_R11MAL0609119_31.set('fieldLabels', {'CADT Name': 'inline label - visible with data', 'Area': 'inline label - visible with data', 'Status': 'inline label - visible with data', 'Survey No.': 'hidden field', 'ID': 'hidden field', 'TRIBES': 'inline label - visible with data', 'cadt_no_': 'hidden field', 'path': 'hidden field', 'layer': 'hidden field', });
lyr_LandClassification_32.set('fieldLabels', {'Land_Class': 'inline label - visible with data', 'Area': 'inline label - visible with data', });
lyr_KeyBiodiversityArea_33.set('fieldLabels', {'Area': 'inline label - visible with data', 'TRIBES': 'inline label - visible with data', 'KBA': 'inline label - visible with data', });
lyr_MalitaBrgyBndry_34.set('fieldLabels', {'Id': 'hidden field', 'MUN': 'hidden field', 'BRGY': 'inline label - always visible', 'Brgy_Area': 'inline label - visible with data', 'Area_CADT': 'inline label - visible with data', });
lyr_R11MAL0609119NoFill_35.set('fieldLabels', {'CADT Name': 'no label', 'Area': 'no label', 'Status': 'no label', 'Survey No.': 'no label', 'ID': 'no label', 'TRIBES': 'no label', 'cadt_no_': 'no label', 'path': 'no label', 'layer': 'no label', });
lyr_MIADPRPCO11ANCESTRALDOMAINS_36.set('fieldLabels', {'CADT Name': 'no label', 'Area': 'no label', 'Status': 'no label', 'Survey No.': 'no label', 'ID': 'no label', 'TRIBES': 'no label', });
lyr_MIADPRPCO11ANCESTRALDOMAINS_36.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});