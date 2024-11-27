import { StyleSheet, Text, View } from "react-native";
import { getAlarms } from "../service/pill.service";
import { useCallback, useState } from "react";
import { alarm } from "../models/alarms";
import { alarmAdapter } from "../adapters/pill.adapter";
import {  Provider as PaperProvider } from "react-native-paper";
import { useFocusEffect } from '@react-navigation/native';  // Importa el hook
import { ActivityIndicator, MD2Colors } from 'react-native-paper';
import { ScrollView } from "react-native";

export default function TabTwoScreen() {
  const [data, setData] = useState<Array<alarm>>([]);
  const [loading, setLoading] = useState(true);
  
 

  const fetchData = useCallback(async () => {
    setLoading(true);
    try {
      const response = await getAlarms();
      console.log("Response data:", response); // Verifica la respuesta
      setData(alarmAdapter(response));
    } catch (err) {
      console.error("Error fetching alarms:", err);
    } finally {
      setLoading(false);
    }
  }, []);

  // Usamos useFocusEffect para cargar los datos cada vez que la vista se enfoque
  useFocusEffect(
    useCallback(() => {
      fetchData(); // Ejecuta la llamada a la API cada vez que se navega a esta pantalla
    }, [fetchData])
  );

  return (
    <PaperProvider>
      <ScrollView>
        <View style={styles.container}>
          {loading ? (
            <ActivityIndicator animating={true} color={MD2Colors.red800} />
          ) : (
            data.map((alarm) => (
              <View key={alarm.id} style={styles.card}>
                <Text style={styles.time}>
                  Hora: {alarm.hour}:{alarm.minute}
                </Text>
                <Text style={styles.description}>{alarm.description}</Text>
                <Text style={styles.date}>Fecha: {(alarm.alarm_date)}</Text>
              </View>
            ))
          )}
        </View>
      </ScrollView>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    backgroundColor: "#E53C6A", // Corregido: Agregué el "#"
    borderRadius: 10,
    padding: 16,
    marginVertical: 8,
    width: "90%",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 5,
  },
  time: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#FFF", // Corregido: Agregué el "#"
    marginBottom: 4,
  },
  description: {
    fontSize: 16,
    color: "#333",
    marginBottom: 8,
  },
  date: {
    fontSize: 14,
    color: "#555",
  },
});
