import React, { useRef} from 'react';
import { View, Modal, StyleSheet, KeyboardAvoidingView, TouchableWithoutFeedback } from 'react-native';

const CustomModal = ({ modalVisible, setModalVisible, children }) => {
  const contentRef = useRef(null);
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        setModalVisible(!modalVisible);
      }}
    >
      <TouchableWithoutFeedback onPress={() => {setModalVisible(false) }}>
        <View style={styles.centeredView}>
          <KeyboardAvoidingView behavior="padding" style={styles.keyboardAvoidingView}>
            <View style={styles.modalView} ref={contentRef}>
              {children}
            </View>
          </KeyboardAvoidingView>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  keyboardAvoidingView: {
    width: '100%',
  },
  modalView: {
    backgroundColor: 'white',
    borderTopRightRadius: 18,
    borderTopLeftRadius: 18,
    paddingVertical: 10,
    paddingHorizontal: 5
  },
});

export default CustomModal;
