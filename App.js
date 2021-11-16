import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';


import MapView, { Callout, Circle, Marker } from 'react-native-maps';
const mapStyle = [
  {
      "featureType": "all",
      "elementType": "labels.text.fill",
      "stylers": [
          {
              "color": "#7c93a3"
          },
          {
              "lightness": "-10"
          }
      ]
  },
  {
      "featureType": "administrative.country",
      "elementType": "geometry",
      "stylers": [
          {
              "visibility": "on"
          }
      ]
  },
  {
      "featureType": "administrative.country",
      "elementType": "geometry.stroke",
      "stylers": [
          {
              "color": "#a0a4a5"
          }
      ]
  },
  {
      "featureType": "administrative.province",
      "elementType": "geometry.stroke",
      "stylers": [
          {
              "color": "#62838e"
          }
      ]
  },
  {
      "featureType": "landscape",
      "elementType": "geometry.fill",
      "stylers": [
          {
              "color": "#dde3e3"
          }
      ]
  },
  {
      "featureType": "landscape.man_made",
      "elementType": "geometry.stroke",
      "stylers": [
          {
              "color": "#3f4a51"
          },
          {
              "weight": "0.30"
          }
      ]
  },
  {
      "featureType": "poi",
      "elementType": "all",
      "stylers": [
          {
              "visibility": "simplified"
          }
      ]
  },
  {
      "featureType": "poi.attraction",
      "elementType": "all",
      "stylers": [
          {
              "visibility": "on"
          }
      ]
  },
  {
      "featureType": "poi.business",
      "elementType": "all",
      "stylers": [
          {
              "visibility": "off"
          }
      ]
  },
  {
      "featureType": "poi.government",
      "elementType": "all",
      "stylers": [
          {
              "visibility": "off"
          }
      ]
  },
  {
      "featureType": "poi.park",
      "elementType": "all",
      "stylers": [
          {
              "visibility": "on"
          }
      ]
  },
  {
      "featureType": "poi.place_of_worship",
      "elementType": "all",
      "stylers": [
          {
              "visibility": "off"
          }
      ]
  },
  {
      "featureType": "poi.school",
      "elementType": "all",
      "stylers": [
          {
              "visibility": "off"
          }
      ]
  },
  {
      "featureType": "poi.sports_complex",
      "elementType": "all",
      "stylers": [
          {
              "visibility": "off"
          }
      ]
  },
  {
      "featureType": "road",
      "elementType": "all",
      "stylers": [
          {
              "saturation": "-100"
          },
          {
              "visibility": "on"
          }
      ]
  },
  {
      "featureType": "road",
      "elementType": "geometry.stroke",
      "stylers": [
          {
              "visibility": "on"
          }
      ]
  },
  {
      "featureType": "road.highway",
      "elementType": "geometry.fill",
      "stylers": [
          {
              "color": "#bbcacf"
          }
      ]
  },
  {
      "featureType": "road.highway",
      "elementType": "geometry.stroke",
      "stylers": [
          {
              "lightness": "0"
          },
          {
              "color": "#bbcacf"
          },
          {
              "weight": "0.50"
          }
      ]
  },
  {
      "featureType": "road.highway",
      "elementType": "labels",
      "stylers": [
          {
              "visibility": "on"
          }
      ]
  },
  {
      "featureType": "road.highway",
      "elementType": "labels.text",
      "stylers": [
          {
              "visibility": "on"
          }
      ]
  },
  {
      "featureType": "road.highway.controlled_access",
      "elementType": "geometry.fill",
      "stylers": [
          {
              "color": "#ffffff"
          }
      ]
  },
  {
      "featureType": "road.highway.controlled_access",
      "elementType": "geometry.stroke",
      "stylers": [
          {
              "color": "#a9b4b8"
          }
      ]
  },
  {
      "featureType": "road.arterial",
      "elementType": "labels.icon",
      "stylers": [
          {
              "invert_lightness": true
          },
          {
              "saturation": "-7"
          },
          {
              "lightness": "3"
          },
          {
              "gamma": "1.80"
          },
          {
              "weight": "0.01"
          }
      ]
  },
  {
      "featureType": "transit",
      "elementType": "all",
      "stylers": [
          {
              "visibility": "off"
          }
      ]
  },
  {
      "featureType": "water",
      "elementType": "geometry.fill",
      "stylers": [
          {
              "color": "#a3c7df"
          }
      ]
  }
]

const App = () => {

    return (
        <SafeAreaView>
            <StatusBar barStyle='light-content' />
            <MapView
                style={{width: '100%', height: '100%'}}
                initialRegion={{
                    latitude: -3.7328240381726414,
                    longitude: -38.50937301813101,
                    latitudeDelta: 0.0002,
                    longitudeDelta: 0.0421,
                }}
                customMapStyle={mapStyle}
            >
                <Marker 
                coordinate={{  
                    latitude: -3.7328240381726414, 
                    longitude: -38.50937301813101
                }}
                >
                <Callout>
                    <Text>Empresa</Text>
                </Callout>
                </Marker>
                <Circle
                    center={{
                        latitude: -3.7328240381726414, 
                        longitude: -38.50937301813101
                    }}
                    radius={500}
                   fillColor="rgba(102, 0, 255,0.2)"
                />
            </MapView>

        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
