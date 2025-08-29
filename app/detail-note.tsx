import { View, Text, TouchableOpacity, TextInput } from 'react-native'
import React, { useState } from 'react'
import { useLocalSearchParams, useRouter } from 'expo-router'
import { Ionicons } from "@expo/vector-icons";
import { Button } from 'react-native';
import { useEditNote } from '@/hooks/useNote';

const DetailNote = () => {
  const params = useLocalSearchParams()
  const router = useRouter()
  const { error, mutate: editNote } = useEditNote()
  const [content, setContent] = useState(params.content)

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <TouchableOpacity 
        onPress={() => router.replace("/")} 
        style={{ marginBottom: 20 }}
      >
        <Ionicons name="arrow-back" size={24} color="black" />
      </TouchableOpacity>

      <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 20 }}>
        Detail Note
      </Text>

      <TextInput
        style={{
          borderColor: "black",
          borderWidth: 1,
          borderRadius: 8,
          padding: 10,
          width: "100%",
          marginBottom: 20,
        }}
        value={content as string}
        onChangeText={setContent}
        multiline
      />
     
      <Button 
        title="Update" 
        onPress={() => editNote({
            id: parseInt(params.id as string),
            content: content as string,
        })} 
      />
    </View>
  )
}

export default DetailNote
