var size = 0;
var placement = 'point';
function categories_MunicipalityBoundary_24(feature, value, size, resolution, labelText,
                       labelFont, labelFill, bufferColor, bufferWidth,
                       placement) {
                var valueStr = (value !== null && value !== undefined) ? value.toString() : 'default';
                switch(valueStr) {case 'Bansalan':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(55,223,22,0.6400000000000001)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'City of Digos':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(108,96,232,0.6400000000000001)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Davao City':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(182,66,205,0.6400000000000001)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Makilala':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(193,208,27,0.6400000000000001)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Santa Cruz':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(119,204,169,0.6400000000000001)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;}};

var style_MunicipalityBoundary_24 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    
    var labelText = ""; 
    var value = feature.get("ADM3_EN");
    var labelFont = "10px, sans-serif";
    var labelFill = "#000000";
    var bufferColor = "";
    var bufferWidth = 0;
    var textAlign = "left";
    var offsetX = 0;
    var offsetY = 0;
    var placement = 'point';
    if ("" !== null) {
        labelText = String("");
    }
    
    var style = categories_MunicipalityBoundary_24(feature, value, size, resolution, labelText,
                            labelFont, labelFill, bufferColor,
                            bufferWidth, placement);

    return style;
};
