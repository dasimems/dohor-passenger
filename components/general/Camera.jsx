import { StyleSheet, Modal, Text, TouchableOpacity, View, StatusBar } from 'react-native'
import React, { useCallback, useEffect, useRef, useState }  from 'react'
import { Camera, CameraType } from "expo-camera";
import { useActionContext } from '../../context';
import { blackColor, whiteColor } from '../../assets/colors';
import { CancelIcon2, ChangeCameraIcon } from '../../assets/icons';
import { padding } from '../../data/general';
import { SafeAreaView } from 'react-native-safe-area-context';

const CameraContainer = () => {
    
  const [type, setType] = useState(CameraType.back);
  const {closeCamera, cameraOpened} = useActionContext();
  const [permission, requestPermission] = Camera.useCameraPermissions();
  const camera = useRef(null)

  useEffect(
    () => {
      if (!permission?.granted) {
        requestPermission();
      }

      (async ()=>{

            if(camera.current){

                var ratios = await camera.current.getSupportedRatiosAsync();
            }


      })()


    },
    [permission]
  );

  const  toggleCameraType = useCallback(()=>{
    setType(current => (current === CameraType.back ? CameraType.front : CameraType.back));
  }, [CameraType])

  const takePicture = async () => {
    var res = await camera.current.takePictureAsync();

    console.log(res)
  }
  
  if(!cameraOpened){
    return null
  }

  return (

     <Modal
        animationType="slide"
        transparent={true}
        visible={true}
        statusBarTranslucent={true}
        onRequestClose={()=>{
            closeModal();
        }}
      >

        <StatusBar backgroundColor={whiteColor.default} hidden  />

        <View style={{
            flex: 1
        }}>
        <Camera ref={camera} autoFocus style={{
            flex: 1,
            position: "relative",
        }} type={type} >

            <SafeAreaView style={{
                flex: 1,
                position: "relative",
            }}>

                <View
                    style={{
                        padding: 15,
                        flexDirection: "row",
                        justifyContent: "space-between",
                        alignItems: "center",
                        gap: 20
                    }}
                >

                    <TouchableOpacity onPress={toggleCameraType} >

                        <ChangeCameraIcon color={whiteColor.default} />

                    </TouchableOpacity>

                    <TouchableOpacity onPress={()=>{closeCamera()}}>

                        <CancelIcon2 color={whiteColor.default} />

                    </TouchableOpacity>
                </View>



                <View style={{ position: "absolute", bottom: 0, width: "100%", padding: 20, paddingVertical: 35, alignItems: "center"}}>
                    <TouchableOpacity onPress={takePicture} style={{
                        backgroundColor: whiteColor.default,
                        width: 60,
                        height: 60,
                        borderRadius: 100,
                        overflow: "hidden"
                        
                    }}>

                        <View style={{
                            flex: 1,
                            width: "100%",
                            height: "100%",
                            backgroundColor: blackColor.opacity300,
                            padding: 4
                        }}>

                            <View style={{
                                width: "100%",
                                height: "100%",
                                backgroundColor: whiteColor.default,
                                borderRadius: 900
                            }}>

                            </View>

                        </View>
                        
                    </TouchableOpacity>
                </View>
            </SafeAreaView>



        </Camera>
        </View>

    </Modal>
  )
}

export default CameraContainer

const styles = StyleSheet.create({})