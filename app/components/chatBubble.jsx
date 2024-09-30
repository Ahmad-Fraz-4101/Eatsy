import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "react-native-vector-icons";

const ChatBubble = ({ role, text, onSpeech }) => {
    return (
        <View
            style={[
                styles.chatItem,
                role === "user" ? styles.userChatItem : styles.modelChatItem,
            ]}
        >
            <Text style={styles.chatText}>{text}</Text>
            {role === "model" && (
                <TouchableOpacity 
                    onPress={onSpeech} 
                    style={styles.speakerIcon}
                    accessibilityLabel="Read message aloud"
                >
                    <Ionicons name="volume-high-outline" size={24} color="#fff" />
                </TouchableOpacity>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    chatItem: {
        marginBottom: 10,
        padding: 10,
        borderRadius: 10,
        maxWidth: "70%",
        position: "relative",
        // Added shadow for better visibility on iOS
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        // Added elevation for better visibility on Android
        elevation: 2,
    },
    userChatItem: {
        alignSelf: "flex-end",
        backgroundColor: "#007aff",
    },
    modelChatItem: {
        alignSelf: "flex-start",
        backgroundColor: '#F3DEBA',
    },
    chatText: {
        fontSize: 16,
        color: "#fff",
    },
    speakerIcon: {
        position: "absolute",
        bottom: 5,
        right: 5,
        padding: 5,
    },
});

export default ChatBubble;
