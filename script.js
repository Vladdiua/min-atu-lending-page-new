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
       changeImg(base_dir + '1VxqeU57yzTXhPbKEuF18WtuQA0nxWAZ4/preview')
        $('#exampleModalCenter').modal('show');
         console.log('Крим наш!');
    });

    var svg = svgObject.getElementById('obl_zhytomyr');
    svg.addEventListener('click', event => {
       changeImg(base_dir + '1WfbLkhr3cttOvVT_5GZ5srXvos0Ufk4s/preview')
        $('#exampleModalCenter').modal('show');
    });

    var svg = svgObject.getElementById('obl_vinnytsia');
    svg.addEventListener('click', event => {
        changeImg(base_dir + '109WlzErw0wJTAncupL3d1oqW2vIxqw_f/preview')
        $('#exampleModalCenter').modal('show');
    });


    var svg = svgObject.getElementById('obl_volyn');
    svg.addEventListener('click', event => {
       changeImg(base_dir + '1f6FtrFCFr704Xsm1vFOkbE5dzm4C29TK/preview')
        $('#exampleModalCenter').modal('show');
    });

    var svg = svgObject.getElementById('obl_dnipro');
    svg.addEventListener('click', event => {
       changeImg(base_dir + '15wDIi2pF3UgYCacbbAjexH6asDlkSBzs/preview')
        $('#exampleModalCenter').modal('show');
    });
    var svg = svgObject.getElementById('obl_donetsk');
    svg.addEventListener('click', event => {
        changeImg(base_dir + '13DyP68sL6GQoKDimCk9oKyAx4Ec-UALX/preview')
        $('#exampleModalCenter').modal('show');
    });
    var svg = svgObject.getElementById('obl_zakarpattia');
    svg.addEventListener('click', event => {
        changeImg(base_dir + '1U5ctCU_nnS4KgipOf_rV8i9zL_8jMBn8/preview')
        $('#exampleModalCenter').modal('show');
    });
    var svg = svgObject.getElementById('obl_zaporizhzhia');
    svg.addEventListener('click', event => {
        changeImg(base_dir + '1Jx1L60TBJaIu_57M-AbYlHw5BKf-atYO/preview')
        $('#exampleModalCenter').modal('show');
    });
    var svg = svgObject.getElementById('obl_frankivsk');
    svg.addEventListener('click', event => {
      changeImg(base_dir + '11ntR9OopxrMlZRnjogWucT91uSxPoHUc/preview')
        $('#exampleModalCenter').modal('show');
    });
    var svg = svgObject.getElementById('obl_kyiv');
    svg.addEventListener('click', event => {
        changeImg(base_dir + '1Lf1ntx_JuSFC6QL_Rtvvnm5_bj6Hnns0/preview')
        $('#exampleModalCenter').modal('show');
    });
    var svg = svgObject.getElementById('Kuiv');
    svg.addEventListener('click', event => {
        changeImg(base_dir + '1Vd5a4hx4ZRQgtj2hS8gdBiEAdWFi0leI/preview')
        $('#exampleModalCenter').modal('show');
    });  
    var svg = svgObject.getElementById('Sevastopol');
    svg.addEventListener('click', event => {
        changeImg(base_dir + '1Erkx1jJTEhjjmoTmFLwN6-o52T2K3_9Y/preview')
        $('#exampleModalCenter').modal('show');
    });
    var svg = svgObject.getElementById('obl_kirovohrad');
    svg.addEventListener('click', event => {
       changeImg(base_dir + '1odKjXqgFkurDTLgCpqutsIdvJfnzl-NZ/preview')
        $('#exampleModalCenter').modal('show');
    });
    var svg = svgObject.getElementById('obl_luhansk');
    svg.addEventListener('click', event => {
        changeImg(base_dir + '163lTjUaJOMRoSwW3J1OZ98FYU_7ObSnY/preview')
        $('#exampleModalCenter').modal('show');
    });
    var svg = svgObject.getElementById('obl_lviv');
    svg.addEventListener('click', event => {
        changeImg(base_dir + '1fToxvDVDbrCJRKrvFPI-VOuAKBh1v08E/preview')
        $('#exampleModalCenter').modal('show');
    });
    var svg = svgObject.getElementById('obl_mykolaiv');
    svg.addEventListener('click', event => {
        changeImg(base_dir + '1IjwV9jlAb_Ko6NkU0QKYiTG9gy35CP5a/preview')
        $('#exampleModalCenter').modal('show');
    });
    var svg = svgObject.getElementById('obl_odesa');
    svg.addEventListener('click', event => {
        changeImg(base_dir + '1wI5354cmhMXc0LnfezXiTEo3Mmth-A3u/preview')
        $('#exampleModalCenter').modal('show');
    });
    var svg = svgObject.getElementById('obl_poltava');
    svg.addEventListener('click', event => {
       changeImg(base_dir + '1oRXf0lZ_YcZeE0M9KlsHm6N_ATulr_2K/preview')
        $('#exampleModalCenter').modal('show');
    });
    var svg = svgObject.getElementById('obl_rivne');
    svg.addEventListener('click', event => {
        changeImg(base_dir + '1EyBcTvXgL4e-m6bsa2EJRgbNhIkxIw96/preview')
        $('#exampleModalCenter').modal('show');
    });
    var svg = svgObject.getElementById('obl_sumy');
    svg.addEventListener('click', event => {
        changeImg(base_dir + '1xanHgsYUoMMdlMWN96KuCrPnX2HoD72n/preview')
        $('#exampleModalCenter').modal('show');
    });
    var svg = svgObject.getElementById('obl_ternopil');
    svg.addEventListener('click', event => {
        changeImg(base_dir + '1JpUHu7QGIqu3nbRKZFwOSL7PFv-4b_5p/preview')
        $('#exampleModalCenter').modal('show');
    });
    var svg = svgObject.getElementById('obl_kharkiv');
    svg.addEventListener('click', event => {
        changeImg(base_dir + '1HaNgEq8n25YVWNFRhGNRvVLaYLL5V37n/preview')
        $('#exampleModalCenter').modal('show');
    });
    var svg = svgObject.getElementById('obl_kherson');
    svg.addEventListener('click', event => {
       changeImg(base_dir + 'aK1QIMz3pQDib08v_fwHWThJX/preview')
        $('#exampleModalCenter').modal('show');
    });
    var svg = svgObject.getElementById('obl_khmelnytsk');
    svg.addEventListener('click', event => {
       changeImg(base_dir + '1j5jdHWcwdClWguwOysbvhgOtEabRgays/preview')
        $('#exampleModalCenter').modal('show');
    });

    var svg = svgObject.getElementById('obl_cherkasy');
    svg.addEventListener('click', event => {
        changeImg(base_dir + '1vbukXy3B5RoZOprFQFyttjovSE250rA4/preview')
        $('#exampleModalCenter').modal('show');
    });
    var svg = svgObject.getElementById('obl_chernihiv');
    svg.addEventListener('click', event => {
       changeImg(base_dir + '1VV4n4DfqTT3CxfdA6uHGexWAb17DPPO0/preview')
        $('#exampleModalCenter').modal('show');
    });
    var svg = svgObject.getElementById('obl_chernivtsi');
    svg.addEventListener('click', event => {
        changeImg(base_dir + '1-tV-bo8jdxi6kgr98m8Zfct0KyAUGvX2/preview')
        $('#exampleModalCenter').modal('show');
    });
});



//  http://{s}.tile.osm.org/{z}/{x}/{y}.png