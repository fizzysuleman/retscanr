import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Button, TouchableOpacity } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import { useNavigation } from '@react-navigation/native';

export default function BarcodeScanner() {
    const navigation = useNavigation();
    const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
      navigation.navigate('ScannedItem')
    setScanned(true);
    alert(`Bar code with type ${type} and data ${data} has been scanned!`);
  };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  
  return (
    <View style={styles.container}>
        <View style={{marginLeft:"auto",marginRight:"auto",margin:20}}>
        <Text style={{fontSize:20}}>Please scan the item you wanto to review</Text>
        </View>
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={{height:450,width:450}}
      />
      {scanned && <Button title={'Tap to Scan Again'} onPress={() => setScanned(false)} />}
      <View style={{marginLeft:2}}>
          <Text style={{alignContent:"center"}}>(P.S: Scan any barcode or QR code to continue just for production purposes)</Text>
      </View>
      <TouchableOpacity onPress={() => {
        navigation.goBack();
      }} style={{ borderRadius:10, backgroundColor:'#f9aa33',width:200,height:50,marginLeft:'auto',marginRight:'auto',marginTop:20}}>
          <Text style={{marginLeft:'auto',marginRight:'auto',marginTop:'auto',marginBottom:'auto',color:'white',fontSize:18}} >Go back!</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
  },
});
