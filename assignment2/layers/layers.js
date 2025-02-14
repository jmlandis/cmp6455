var wms_layers = [];


        var lyr_CartoLight_0 = new ol.layer.Tile({
            'title': 'Carto Light',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://a.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.pn'
            })
        });
var format_SaltLakeCountyBoundary_1 = new ol.format.GeoJSON();
var features_SaltLakeCountyBoundary_1 = format_SaltLakeCountyBoundary_1.readFeatures(json_SaltLakeCountyBoundary_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SaltLakeCountyBoundary_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SaltLakeCountyBoundary_1.addFeatures(features_SaltLakeCountyBoundary_1);
var lyr_SaltLakeCountyBoundary_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SaltLakeCountyBoundary_1, 
                style: style_SaltLakeCountyBoundary_1,
                popuplayertitle: 'Salt Lake County Boundary',
                interactive: false,
                title: '<img src="styles/legend/SaltLakeCountyBoundary_1.png" /> Salt Lake County Boundary'
            });
var format_2015_2 = new ol.format.GeoJSON();
var features_2015_2 = format_2015_2.readFeatures(json_2015_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2015_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2015_2.addFeatures(features_2015_2);
var lyr_2015_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_2015_2, 
                style: style_2015_2,
                popuplayertitle: '2015',
                interactive: true,
                title: '<img src="styles/legend/2015_2.png" /> 2015'
            });
var format_2016_3 = new ol.format.GeoJSON();
var features_2016_3 = format_2016_3.readFeatures(json_2016_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2016_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2016_3.addFeatures(features_2016_3);
var lyr_2016_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_2016_3, 
                style: style_2016_3,
                popuplayertitle: '2016',
                interactive: true,
                title: '<img src="styles/legend/2016_3.png" /> 2016'
            });
var format_2017_4 = new ol.format.GeoJSON();
var features_2017_4 = format_2017_4.readFeatures(json_2017_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2017_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2017_4.addFeatures(features_2017_4);
var lyr_2017_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_2017_4, 
                style: style_2017_4,
                popuplayertitle: '2017',
                interactive: true,
                title: '<img src="styles/legend/2017_4.png" /> 2017'
            });
var format_2018_5 = new ol.format.GeoJSON();
var features_2018_5 = format_2018_5.readFeatures(json_2018_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2018_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2018_5.addFeatures(features_2018_5);
var lyr_2018_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_2018_5, 
                style: style_2018_5,
                popuplayertitle: '2018',
                interactive: true,
                title: '<img src="styles/legend/2018_5.png" /> 2018'
            });
var format_2019_6 = new ol.format.GeoJSON();
var features_2019_6 = format_2019_6.readFeatures(json_2019_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2019_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2019_6.addFeatures(features_2019_6);
var lyr_2019_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_2019_6, 
                style: style_2019_6,
                popuplayertitle: '2019',
                interactive: true,
                title: '<img src="styles/legend/2019_6.png" /> 2019'
            });

lyr_CartoLight_0.setVisible(true);lyr_SaltLakeCountyBoundary_1.setVisible(true);lyr_2015_2.setVisible(true);lyr_2016_3.setVisible(true);lyr_2017_4.setVisible(true);lyr_2018_5.setVisible(true);lyr_2019_6.setVisible(true);
var layersList = [lyr_CartoLight_0,lyr_SaltLakeCountyBoundary_1,lyr_2015_2,lyr_2016_3,lyr_2017_4,lyr_2018_5,lyr_2019_6];
lyr_SaltLakeCountyBoundary_1.set('fieldAliases', {'COUNTYNBR': 'COUNTYNBR', 'ENTITYNBR': 'ENTITYNBR', 'ENTITYYR': 'ENTITYYR', 'NAME': 'NAME', 'FIPS': 'FIPS', 'STATEPLANE': 'STATEPLANE', 'POP_LASTCE': 'POP_LASTCE', 'POP_CURRES': 'POP_CURRES', 'GlobalID': 'GlobalID', 'FIPS_STR': 'FIPS_STR', 'COLOR4': 'COLOR4', });
lyr_2015_2.set('fieldAliases', {'pk': 'pk', 'objectid': 'objectid', 'YEAR': 'YEAR', });
lyr_2016_3.set('fieldAliases', {'pk': 'pk', 'objectid': 'objectid', 'YEAR': 'YEAR', });
lyr_2017_4.set('fieldAliases', {'pk': 'pk', 'objectid': 'objectid', 'YEAR': 'YEAR', });
lyr_2018_5.set('fieldAliases', {'pk': 'pk', 'objectid': 'objectid', 'YEAR': 'YEAR', });
lyr_2019_6.set('fieldAliases', {'pk': 'pk', 'objectid': 'objectid', 'YEAR': 'YEAR', });
lyr_SaltLakeCountyBoundary_1.set('fieldImages', {'COUNTYNBR': 'TextEdit', 'ENTITYNBR': 'TextEdit', 'ENTITYYR': 'TextEdit', 'NAME': 'TextEdit', 'FIPS': 'TextEdit', 'STATEPLANE': 'TextEdit', 'POP_LASTCE': 'TextEdit', 'POP_CURRES': 'TextEdit', 'GlobalID': 'TextEdit', 'FIPS_STR': 'TextEdit', 'COLOR4': 'Range', });
lyr_2015_2.set('fieldImages', {'pk': 'TextEdit', 'objectid': 'TextEdit', 'YEAR': 'TextEdit', });
lyr_2016_3.set('fieldImages', {'pk': '', 'objectid': '', 'YEAR': '', });
lyr_2017_4.set('fieldImages', {'pk': 'TextEdit', 'objectid': 'TextEdit', 'YEAR': 'TextEdit', });
lyr_2018_5.set('fieldImages', {'pk': 'TextEdit', 'objectid': 'TextEdit', 'YEAR': 'TextEdit', });
lyr_2019_6.set('fieldImages', {'pk': 'TextEdit', 'objectid': 'TextEdit', 'YEAR': 'TextEdit', });
lyr_SaltLakeCountyBoundary_1.set('fieldLabels', {'COUNTYNBR': 'no label', 'ENTITYNBR': 'no label', 'ENTITYYR': 'no label', 'NAME': 'no label', 'FIPS': 'no label', 'STATEPLANE': 'no label', 'POP_LASTCE': 'no label', 'POP_CURRES': 'no label', 'GlobalID': 'no label', 'FIPS_STR': 'no label', 'COLOR4': 'no label', });
lyr_2015_2.set('fieldLabels', {'pk': 'hidden field', 'objectid': 'inline label - visible with data', 'YEAR': 'hidden field', });
lyr_2016_3.set('fieldLabels', {'pk': 'hidden field', 'objectid': 'inline label - visible with data', 'YEAR': 'hidden field', });
lyr_2017_4.set('fieldLabels', {'pk': 'hidden field', 'objectid': 'inline label - visible with data', 'YEAR': 'hidden field', });
lyr_2018_5.set('fieldLabels', {'pk': 'hidden field', 'objectid': 'inline label - visible with data', 'YEAR': 'hidden field', });
lyr_2019_6.set('fieldLabels', {'pk': 'hidden field', 'objectid': 'inline label - visible with data', 'YEAR': 'hidden field', });
lyr_2019_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});