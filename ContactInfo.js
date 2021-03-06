import React from "react";
import { StyleSheet, View, Text } from "react-native";

// This is a component used in Card.js for Contact Us page used in Drawer Navigation
// In this we are receiving props like style for CSS, country where office is, phone number and email ID of that office
function ContactInfo({ style, country, phone, email, name }) {
  return (
    <View style={style}>
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.country}>{country}</Text>
      <Text style={styles.phone}>Phone: {phone}</Text>
      <Text style={styles.phone}>Email: {email}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  name:{
    fontWeight:'bold',
    fontSize: 20
  },
  country: {
    color: 'white'
  },
  phone: {
    color: "white",
  },
});

export default ContactInfo;
