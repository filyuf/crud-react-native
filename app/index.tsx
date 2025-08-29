import CardNote from "@/components/CardNote";
import { useState } from "react";
import {
  Text,
  View,
  ScrollView,
  TextInput,
  Button,
} from "react-native";

export default function Index() {
  const [content, setContent] = useState("")
  return (
    <ScrollView style={{ paddingTop: 10, paddingHorizontal: 20 }}>
      <Text style={{ marginTop: 10, fontSize: 20, fontWeight: "bold" }}>
        Notes
      </Text>

      <View style={{ flexDirection: "row", gap: 10 }}>
        <TextInput
          style={{
            flex: 1,
            borderColor: "black",
            borderWidth: 1,
            borderRadius: 8,
            padding: 10,
          }}
          onChangeText={(text) => setContent(text)}
          placeholder="Write a note..."
        />
        <Button title="+" onPress={() => console.log(content)} />
      </View>
      <CardNote
        content="note hari ini"
        onDelete={() => console.log("delete!")}
        onNavigate={() => console.log("navigate!")}
      ></CardNote>
    </ScrollView>
  );
}
