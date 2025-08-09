import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

export default function ScheduleScreen() {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  const handleSchedule = () => {
    alert(`Appointment scheduled on ${date} at ${time}`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Schedule Appointment</Text>
      <TextInput style={styles.input} placeholder="Enter Date" value={date} onChangeText={setDate} />
      <TextInput style={styles.input} placeholder="Enter Time" value={time} onChangeText={setTime} />
      <Button title="Confirm" onPress={handleSchedule} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 22, marginBottom: 20 },
  input: { borderWidth: 1, borderColor: '#ccc', padding: 10, marginBottom: 10, borderRadius: 5 }
});
