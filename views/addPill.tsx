import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { postAlarms } from '@/app/service/pill.service';

type AddPillProps = {
  hide: () => void;
};

export default function AddPill({ hide }: AddPillProps) {
  // Estados para manejar los campos del formulario
  const [hour, setHour] = useState(0);
  const [minute, setMinute] = useState(0);
  const [description, setDescription] = useState('');

  const handleSave = async () => {
    const alarmData = { hour, minute, description };
    try {
      const response = await postAlarms(alarmData); // Enviar los datos de la alarma
      console.log('Alarm added:', response);
      hide(); // Ocultar el formulario o splash screen
    } catch (error) {
      console.error('Error posting alarm:', error);
    }
  };

  return (
    <View >
      <Text>Programar Alarma</Text>

      {/* Campo para hora */}
      <TextInput
        placeholder="Inserte hora"
        value={hour.toString()} // Mostrar la hora como string
        keyboardType="numeric"
        onChangeText={(text) => setHour(parseInt(text) || 0)} // Actualizar la hora
        style={styles.input}
      />

      {/* Campo para minutos */}
      <TextInput
        placeholder="Inserte minutos"
        value={minute.toString()} // Mostrar los minutos como string
        keyboardType="numeric"
        onChangeText={(text) => setMinute(parseInt(text) || 0)} // Actualizar los minutos
        style={styles.input}
      />

      {/* Campo para descripción */}
      <TextInput
        placeholder="Descripción"
        value={description}
        onChangeText={setDescription} // Actualizar la descripción
        style={styles.input}
      />

      <View style={styles.buttonsContainer}>
        {/* Botón de cancelar */}
        <TouchableOpacity onPress={hide} style={styles.cancelButton}>
          <Text style={styles.buttonText}>Cancelar</Text>
        </TouchableOpacity>

        {/* Botón de guardar */}
        <TouchableOpacity onPress={handleSave} style={styles.saveButton}>
          <Text style={styles.buttonText}>Guardar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  form: {
    width: '90%',
    backgroundColor: '#FFF',
    borderRadius: 12,
    padding: 16,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
  },
  input: {
    height: 45,
    borderWidth: 1,
    borderColor: '#DDD',
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 16,
    backgroundColor: '#FFF',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cancelButton: {
    flex: 1,
    height: 45,
    backgroundColor: '#E53C6A',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    marginRight: 8,
  },
  saveButton: {
    flex: 1,
    height: 45,
    backgroundColor: '#E53C6A',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: '600',
  },
});
