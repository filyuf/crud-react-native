import CardNote from "@/components/CardNote";
import { useGetNote, usePostNote, useDeleteNote } from "@/hooks/useNote";
import { router, usePathname } from "expo-router";
import { useState } from "react";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import {
  Text,
  View,
  ScrollView,
  TextInput,
  Button,
} from "react-native";

export default function Index() {
  const [content, setContent] = useState("");
  const { data, error } = useGetNote();
  const { error: errorCreate, mutate: createNote } = usePostNote();
  const { error: errorDelete, mutate: deleteNote } = useDeleteNote();

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
          onChangeText={setContent}
          value={content}
          placeholder="Write a note..."
        />
        <Button title="+" onPress={() => createNote({ content })} />
      </View>

      {data?.map((note, index) => (
        <CardNote
          key={index}
          content={note.content}
          onDelete={() => deleteNote({ id: note.id })}
          onNavigate={() =>
            router.push({
              pathname: "/detail-note",
              params: { id: note.id, content: note.content },
            })
          }
        />
      ))}

    </ScrollView>
  );
}
