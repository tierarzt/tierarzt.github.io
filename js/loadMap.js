L.mapbox.accessToken =
'pk.eyJ1Ijoiam9obm5pZXdhbGtlciIsImEiOiI4djV5QTV3In0.XGtyJgm1LegwHPcgw_7wOw';
var map = L.mapbox.map('map', 'mapbox.streets').setView([50.958, 13.862],
9);
map.scrollWheelZoom.disable();
var marker = L.marker([50.958117, 13.862341]).addTo(map);
marker.bindPopup("<b>Tierarzt Julia Nestler</b><br />Burgstraße 36<br />01809 Dohna").openPopup();