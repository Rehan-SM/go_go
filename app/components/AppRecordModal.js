import React, {useState} from 'react';
import {Modal, Portal, View, Text, Provider} from 'react-native-paper';
import AppButton from './AppButton';
import AppTextInput from './AppTextInput';


function AppRecordModal({...otherProps}) {


    return (
<Provider>
      <Portal>
        <Modal {...otherProps}>
          <Text>Example Modal.  Click outside this area to dismiss.</Text>
        </Modal>
      </Portal>
    </Provider>
    );
}

export default AppRecordModal;