import React from "react";
import { StyleSheet, View, Text } from "react-native";
import ContactInfo from "./ContactInfo";

// This function will create a contact us page used in drawer navigation
// In this we are passing props in ContactInfo like style for CSS, country where office is, phone number and email ID of that office
function Contact() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Contact Us</Text>
      <ContactInfo
        style={styles.contactInfo}
        name="Anshu"
        country="India"
        phone="+91 1234567890"
        email="anshu@email.com"
      />
      <ContactInfo
        style={styles.contactInfo}
        name="Malavika"
        country="USA"
        phone="+1 1234567890"
        email="malavika@example.com"
      />
      <ContactInfo
        style={styles.contactInfo}
        name="Ali Hasnat"
        country="USA"
        phone="+1 1234567890"
        email="alihasnat@email.com"
      />
      
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    textAlign: "center",
    paddingTop: 20,
    fontWeight: 'bold'
  },
  container: {
    backgroundColor: "#0ba4f4",
  },
  contactInfo: {
    padding: 20,
    margin: 10,
  },
});

export default Contact;
