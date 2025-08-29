import { View, Text, TouchableOpacity, Button } from 'react-native';
import React from 'react';

const CardNote = ({
    content,
    onNavigate,
    onDelete,
}: {
    content: string;
    onNavigate: () => void;
    onDelete: () => void;
}) => {
    return (
        <TouchableOpacity
            style={{
                borderColor: "black",
                borderWidth: 1,
                borderRadius: 8,
                paddingHorizontal: 20,
                paddingVertical: 10,
                marginTop: 15,
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
            }}
            onPress={onNavigate}
        >
            <Text>{content}</Text>
            <Button title="Delete" onPress={onDelete} />
        </TouchableOpacity>
    );
};

export default CardNote;
