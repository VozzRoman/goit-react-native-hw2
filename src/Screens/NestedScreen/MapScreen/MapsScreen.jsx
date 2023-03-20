import React from 'react'
import { View, Text } from 'react-native';
import { Marker } from 'react-native-maps';
import { mapStyle } from './MapScreenStyled';
import MapView from 'react-native-maps';

const MapScreen = ({route}) => {
	const data = route.params
	console.log(route.params);
	console.log(data.isLocation);
  return (
	 <View style={mapStyle.container}>
	
				<MapView key={data.isLocation.coords.latitude} 
				style={{flex: 1}}
				initialRegion={{
					latitude: data.isLocation.coords.latitude,
					longitude: data.isLocation.coords.longitude,
					latitudeDelta: 0.001,
					longitudeDelta: 0.006,
				}}
				>
					<Marker 
					coordinate={{latitude: data.isLocation.coords.latitude, longitude: data.isLocation.coords.longitude}}
					title='Место фото'
					/>
				</MapView>
				
			
	

	 </View>
  )
}

export default MapScreen;