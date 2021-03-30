//window.onload = function () {
//    var basemap1 = L.tileLayer('https://tiles.openstreetmap.org.ua/osm/{z}/{x}/{y}.png', {
//        attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
//    });
//
//    var oblast = new L.GeoJSON.AJAX('ADMIN_UKR/ADMIN_1.geojson', {
//        style: function () {
//            return {
//                color: 'blue'
//            }
//        },
//        onEachFeature: function (feature, layer) {
//            layer.bindPopup(feature.properties.ADMIN_1);
//            layer.on('mouseover', function () {
//                this.setStyle({
//                    color: '#ffff00'
//                });
//            });
//            layer.on('mouseout', function () {
//                this.setStyle({
//                    color: 'blue'
//                });
//            });
//        }
//    });
//    var rayon = new L.GeoJSON.AJAX('ADMIN_UKR/ADMIN_2.geojson', {
//        style: function () {
//            return {
//                color: 'blue'
//            }
//        },
//        onEachFeature: function (feature, layer) {
//            layer.bindPopup(feature.properties.ADMIN_1 + '<br /><br />' + feature.properties.ADMIN_2);
//            layer.on('mouseover', function () {
//                this.setStyle({
//                    color: '#ffff00'
//                });
//            });
//            layer.on('mouseout', function () {
//                this.setStyle({
//                    color: 'blue'
//                });
//            });
//        }
//    });
//    var terhromad = new L.GeoJSON.AJAX('ADMIN_UKR/ADMIN_3.geojson', {
//        style: function () {
//            return {
//                color: 'blue'
//            }
//        },
//        onEachFeature: function (feature, layer) {
//            layer.bindPopup(feature.properties.ADMIN_1 + '<br /><br />' + feature.properties.ADMIN_2 + '<br /><br />' + feature.properties.ADMIN_3 + ' ТГ');
//            layer.on('mouseover', function () {
//                this.setStyle({
//                    color: '#ffff00'
//                });
//            });
//            layer.on('mouseout', function () {
//                this.setStyle({
//                    color: 'blue'
//                });
//            });
//        }
//    });
//
//    $.getJSON("ADMIN_UKR/ADMIN_1.geojson", function (data) {
//
//        var geojson = L.geoJson(data, {
//            onEachFeature: function (feature, layer) {
//                layer.bindPopup(feature.properties.Area_Name);
//            }
//        });
//
//
//        var map = L.map('my-map', {
//            layers: [basemap1, geojson, rayon, oblast, terhromad],
//            default: [basemap1, geojson]
//        }).fitBounds(geojson.getBounds());
//
//        var baseMaps = {
//            "Область": oblast,
//            "Район": rayon,
//            "Територіальна громада": terhromad,
//
//        };
//
//        //        var overlayMaps = [geojson];
//
//        L.control.layers(baseMaps, null).addTo(map);
//        L.control.scale({
//            options: {
//                position: 'bottomleft',
//                maxWidth: 500,
//                metric: true,
//                imperial: false,
//                updateWhenIdle: false
//            }
//        }).addTo(map);
//
//
//
//    });
//};

function enable()
{

    var mainPin = document.querySelector('#checkbox1');
   var downloadButton = document.querySelectorAll('#download-button');


//mainPin.addEventListener('click', function () {
//    console.log(downloadButton);
//  downloadButton.forEach(function(item) {
//       item.removeAttribute("disabled");
//      console.log('disabled');
//  })
//});

if (mainPin.checked === true){
  downloadButton.forEach(function(item) {
   console.log('disabled:false');
       item.disabled = false;
  })
} else if (mainPin.checked === false) { 
    downloadButton.forEach(function(item) {
      item.disabled = true;
        console.log('disabled:true');
  })
}
}


  $("#menu-close").click(function(e) {
    e.preventDefault();
    $("#sidebar-wrapper").toggleClass("active");
  });
  $("#menu-toggle").click(function(e) {
    e.preventDefault();
    $("#sidebar-wrapper").toggleClass("active");
  });


function changeImg(image1) {
    var imghol = document.getElementById("image-holder1");
    imghol.src = image1;
    imghol.style = "width:100%;height:100%";
    imghol.style.visibility = "visible"

    if (image1 === "") {
        imghol.style.visibility = "hidden";
    }
   
};

window.addEventListener("load", function () {
    console.log('query');
    var base_dir = 'https://drive.google.com/file/d/';



    var svgObject = document.getElementById('svg-object').contentDocument;

    var svg = svgObject.getElementById('obl_crimea');
    svg.addEventListener('click', event => {
       changeImg(base_dir + '1Llh7uMOh1DpnwRUh45ejwRQIyrwjNurs/preview')
        $('#exampleModalCenter').modal('show');
         console.log('Крим - це Україна!');
    });

    var svg = svgObject.getElementById('obl_zhytomyr');
    svg.addEventListener('click', event => {
       changeImg(base_dir + '1il2MWpyWh_m38BZcBw3kZPRF44D4V_eB/preview')
        $('#exampleModalCenter').modal('show');
    });

    var svg = svgObject.getElementById('obl_vinnytsia');
    svg.addEventListener('click', event => {
        changeImg(base_dir + '1Mi_mDzHJYIzmNHyl5oaa6jzyAOSjLt8T/preview')
        $('#exampleModalCenter').modal('show');
    });


    var svg = svgObject.getElementById('obl_volyn');
    svg.addEventListener('click', event => {
       changeImg(base_dir + '10p7ukaXDon-hFYmHexhVVj8GrgetREyK/preview')
        $('#exampleModalCenter').modal('show');
    });

    var svg = svgObject.getElementById('obl_dnipro');
    svg.addEventListener('click', event => {
       changeImg(base_dir + '1UJnb0zerIDExnvoavPiCfJvAKANbxlv2/preview')
        $('#exampleModalCenter').modal('show');
    });
    var svg = svgObject.getElementById('obl_donetsk');
    svg.addEventListener('click', event => {
        changeImg(base_dir + '18t19_y2d4VAV_DsOSe7o9PHeuugMLcEw/preview')
        $('#exampleModalCenter').modal('show');
    });
    var svg = svgObject.getElementById('obl_zakarpattia');
    svg.addEventListener('click', event => {
        changeImg(base_dir + '1HrjirpBChFW9WEaDe3F5TpHmd2RSBKII/preview')
        $('#exampleModalCenter').modal('show');
    });
    var svg = svgObject.getElementById('obl_zaporizhzhia');
    svg.addEventListener('click', event => {
        changeImg(base_dir + '17k2A6whS61Pjp7CHEOWwmXO-O2ESvCMI/preview')
        $('#exampleModalCenter').modal('show');
    });
    var svg = svgObject.getElementById('obl_frankivsk');
    svg.addEventListener('click', event => {
      changeImg(base_dir + '1KxP_EF59kMDAhufV_WO0OyjG1wVGDqt7/preview')
        $('#exampleModalCenter').modal('show');
    });
    var svg = svgObject.getElementById('obl_kyiv');
    svg.addEventListener('click', event => {
        changeImg(base_dir + '1173wO4snJKME14j44r-tiB_SQA1HGAIy/preview')
        $('#exampleModalCenter').modal('show');
    });
    var svg = svgObject.getElementById('Kuiv');
    svg.addEventListener('click', event => {
        changeImg(base_dir + '1gEC0ajNrdQrq6jfT1sH1wRiWkyhNZImz/preview')
        $('#exampleModalCenter').modal('show');
    });  
    var svg = svgObject.getElementById('Sevastopol');
    svg.addEventListener('click', event => {
        changeImg(base_dir + '1MlViJXHXd77NVp6nxQGWxZj52ZGGHP_n/preview')
        $('#exampleModalCenter').modal('show');
    });
    var svg = svgObject.getElementById('obl_kirovohrad');
    svg.addEventListener('click', event => {
       changeImg(base_dir + '1BVclprdwE3RvKBwFJBfmcDK2ZWxhR1hc/preview')
        $('#exampleModalCenter').modal('show');
    });
    var svg = svgObject.getElementById('obl_luhansk');
    svg.addEventListener('click', event => {
        changeImg(base_dir + '1jfCcxuFXCtv9pFjbTqquuz4-e1I_z2QP/preview')
        $('#exampleModalCenter').modal('show');
    });
    var svg = svgObject.getElementById('obl_lviv');
    svg.addEventListener('click', event => {
        changeImg(base_dir + '1PREEWuVkCGLEqWYYI6WVP1sqcPKv0f-Y/preview')
        $('#exampleModalCenter').modal('show');
    });
    var svg = svgObject.getElementById('obl_mykolaiv');
    svg.addEventListener('click', event => {
        changeImg(base_dir + '194AjzX0Ko5aBIUnImfkjHpzqtnEibb4u/preview')
        $('#exampleModalCenter').modal('show');
    });
    var svg = svgObject.getElementById('obl_odesa');
    svg.addEventListener('click', event => {
        changeImg(base_dir + '1vxmKCr7fXStC-afp0aUUXHI0NONPMBew/preview')
        $('#exampleModalCenter').modal('show');
    });
    var svg = svgObject.getElementById('obl_poltava');
    svg.addEventListener('click', event => {
       changeImg(base_dir + '1yIhx4EYB2whR8kMkmtSYS7fnpdQX-dX9/preview')
        $('#exampleModalCenter').modal('show');
    });
    var svg = svgObject.getElementById('obl_rivne');
    svg.addEventListener('click', event => {
        changeImg(base_dir + '1bg6pfYeCSnKE3Gique_gKew60n3ZaXh7/preview')
        $('#exampleModalCenter').modal('show');
    });
    var svg = svgObject.getElementById('obl_sumy');
    svg.addEventListener('click', event => {
        changeImg(base_dir + '1-EXcuZWYixriiWkMXsnm4-iOuPjT9IEf/preview')
        $('#exampleModalCenter').modal('show');
    });
    var svg = svgObject.getElementById('obl_ternopil');
    svg.addEventListener('click', event => {
        changeImg(base_dir + '1bGqunlydhGPDQgX6axjhB82QfrcOQs_p/preview')
        $('#exampleModalCenter').modal('show');
    });
    var svg = svgObject.getElementById('obl_kharkiv');
    svg.addEventListener('click', event => {
        changeImg(base_dir + '1LiudCz9kYJ6S9jCmLOxzdZG7GPlc8lAW/preview')
        $('#exampleModalCenter').modal('show');
    });
    var svg = svgObject.getElementById('obl_kherson');
    svg.addEventListener('click', event => {
       changeImg(base_dir + '1ty_Mm8EdyjF1UqTaNEZVm2eobLubKZkJ/preview')
        $('#exampleModalCenter').modal('show');
    });
    var svg = svgObject.getElementById('obl_khmelnytsk');
    svg.addEventListener('click', event => {
       changeImg(base_dir + '1ULsqdcXP5pTMzgIzGiPN41VCJbnIhudr/preview')
        $('#exampleModalCenter').modal('show');
    });

    var svg = svgObject.getElementById('obl_cherkasy');
    svg.addEventListener('click', event => {
        changeImg(base_dir + '1X-l7FRHb_lbl4RY-zXjqde30LTTd5ma4/preview')
        $('#exampleModalCenter').modal('show');
    });
    var svg = svgObject.getElementById('obl_chernihiv');
    svg.addEventListener('click', event => {
       changeImg(base_dir + '1WWCie_kGr0fCgLbi1-zFtLnqEXqbQD-M/preview')
        $('#exampleModalCenter').modal('show');
    });
    var svg = svgObject.getElementById('obl_chernivtsi');
    svg.addEventListener('click', event => {
        changeImg(base_dir + '14RYMZTToO6Bz3YYFa3T-ad62o7W8-N_e/preview')
        $('#exampleModalCenter').modal('show');
    });
});



//  http://{s}.tile.osm.org/{z}/{x}/{y}.png