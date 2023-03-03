import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { Card, Button, Title, Paragraph } from "react-native-paper";
import SetModel from "../models/SetModel";

export default SetCard = ({setInstance, setSetInstance}) => {
  return (
    <Card style={Styles.container}>
      <Card.Content>
        <Title>Geeks For Geeks</Title>
      </Card.Content>

      <Card.Content>
        <Paragraph>A Computer Science portal for Geeks</Paragraph>
      </Card.Content>
      <Card.Actions>
        <Button>Add To Favourites</Button>
      </Card.Actions>
    </Card>
  );
};

const Styles = StyleSheet.create({
  container: {
    alignContent: "center",
    margin: 37,
  },
});
