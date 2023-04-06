import React from 'react'
import { View } from 'react-native';
import { Marker } from 'react-native-maps';
import { mapStyle } from './MapScreenStyled';
import MapView from 'react-native-maps';

const MapScreen = ({route}) => {
	const data = route.params
	// console.log('dataLocation', data.location);
  return (
	 <View style={mapStyle.container}>
	
				<MapView key={data.location.latitude} 
				style={{flex: 1}}
				initialRegion={{
					latitude: data.location.latitude,
					longitude: data.location.longitude,
					latitudeDelta: 0.001,
					longitudeDelta: 0.006,
				}}
				>
					<Marker 
					coordinate={{latitude: data.location.latitude, longitude: data.location.longitude}}
					title='Место фото'
					/>
				</MapView>
				
			
	

	 </View>
  )
}

export default MapScreen;