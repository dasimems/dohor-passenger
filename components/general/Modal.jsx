import { View, Modal as NativeModal, TouchableOpacity, KeyboardAvoidingView } from 'react-native'
import React from 'react'
import { blackColor, whiteColor } from '../../assets/colors';
import { useActionContext } from '../../context';

const Modal = () => {

    const { modalOpened, modalContent, modalHeight, closeModal } = useActionContext();

  return (
    <NativeModal
        animationType="slide"
        transparent={true}
        visible={modalOpened}
        statusBarTranslucent={true}
        onRequestClose={()=>{
            closeModal();
        }}
      >

        <KeyboardAvoidingView
            behavior="position"
            enabled
        >

            <View
                style={{
                    width: "100%",
                    height: "100%",
                    justifyContent: "flex-end",
                    backgroundColor: blackColor.opacity200
                }}
            >
                <TouchableOpacity style={{
                    flex: 1,
                    width: "100%"
                }}
                    onPress={()=>{
                        closeModal();
                    }}
                >

                </TouchableOpacity>

                <View 
                    style={{
                        backgroundColor: whiteColor.default,
                        height: modalHeight,
                        borderTopLeftRadius: 40,
                        borderTopRightRadius: 40,
                        paddingVertical: 20,
                        paddingHorizontal: 15,
                    }}
                >

                    {modalContent}

                </View>

            </View>
        </KeyboardAvoidingView>

        

      </NativeModal>
  )
}

export default Modal