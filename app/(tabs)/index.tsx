import { Modal, Portal, Button, PaperProvider, Text } from 'react-native-paper';
import React from 'react';
import { StyleSheet, Image, View } from 'react-native';
import AddPill from '@/views/addPill';

export default function HomeScreen() {
  const [visible, setVisible] = React.useState(false);
  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  const containerStyle = { backgroundColor: 'white', padding: 20 };




  return (
    <PaperProvider>
      <Portal>
        <Modal visible={visible} onDismiss={hideModal} contentContainerStyle={containerStyle}>
          <AddPill hide={hideModal} />
        </Modal>
      </Portal>

      <Button style={styles.addButton} onPress={showModal}>
        +
      </Button>

      {/* Contenedor principal */}
      <View style={styles.mainContainer}>
        {/* Texto de Bienvenido */}
        <Text style={styles.welcomeText}>Bienvenido</Text>

        {/* Contenedor para la imagen, posicionada al final */}
        <View style={styles.footerContainer}>
          <Image source={require('@/assets/images/gradient.jpg')} style={styles.image} />
        </View>
      </View>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  addButton: {
    padding: 2,
    borderRadius: 30,
    backgroundColor: '#E53C6A',
    marginTop: 30,
    fontSize: 16,
    width: 30,
    alignSelf: 'flex-end',
    marginRight: 6,
  },
  mainContainer: {
    flex: 1,
    justifyContent: 'space-between', // Espacio entre los elementos
    padding: 20,
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: '600',
    textAlign: 'center',
    marginTop: 40,
    color: '#333', // Color del texto
  },
  footerContainer: {
    marginTop: 'auto', // Esto asegura que la imagen quede pegada al fondo
    alignItems: 'center', // Centra la imagen horizontalmente
    marginBottom: 20, // Espacio desde el borde inferior
  },
  image: {
    width: '100%',  // Hace que la imagen cubra todo el ancho
    height: 200,    // Ajusta la altura de la imagen
    borderRadius: 10,  // Bordes redondeados
    resizeMode: 'cover', // Hace que la imagen cubra el área
  },
});
