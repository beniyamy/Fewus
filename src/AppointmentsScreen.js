import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

export default function AppointmentsScreen() {
  const appointments = [
    { id: '1', date: '2025-08-15', time: '10:00 AM' },
    { id: '2', date: '2025-08-20', time: '02:30 PM' },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Upcoming Appointments</Text>
      <FlatList
        data={appointments}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text>{item.date} at {item.time}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 22, marginBottom: 20 },
  item: { padding: 15, borderBottomWidth: 1, borderBottomColor: '#ccc' }
});
