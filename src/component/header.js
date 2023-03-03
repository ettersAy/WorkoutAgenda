import React from "react";
import { Button } from "react-native";

export default function header() {
  handleDelete = () => {
    // Code to delete item
  };

  return <Button onPress={this.handleDelete} title="Delete" color="#000" />;
}
