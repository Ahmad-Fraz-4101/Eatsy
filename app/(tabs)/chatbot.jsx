import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, FlatList, ActivityIndicator, StyleSheet, SafeAreaView } from "react-native";
import axios from "axios";
import ChatBubble from "../components/chatBubble";
import { speak, isSpeakingAsync, stop } from "expo-speech";

const Chatbot = () => {
    const [chat, setChat] = useState([]);
    const [userInput, setUserInput] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [isSpeaking, setIsSpeaking] = useState(false);

    const API_KEY = "AIzaSyAos1_Cf8CM7wSgh0kezYrP8ORPrHe111c"; 

    
    const keywords = ['order', 'ingredients', 'food', 'recipe'];

    const extractKeywords = (text) => {
        return keywords.filter(keyword => text.toLowerCase().includes(keyword));
    };

    const handleUserInput = async () => {

        const userMessage = userInput.trim();

        if (!userMessage) return;

        const foundKeywords = extractKeywords(userMessage);

        let responseMessage = "I'm your food bot. I can only assist you with recipe and Food Recomendation?";
        if (foundKeywords.length > 0) 
        {
            const updateChat = [
                ...chat,
                {
                    role: "user",
                    parts: [{ text: userMessage }],
                },
            ];

            setLoading(true);
            setError("");

            try {
                const response = await axios.post(`https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${API_KEY}`, {
                    contents: updateChat,
                });

                console.log("Gemini Pro Response:", response.data);
                const modelResponse = response.data?.candidates?.[0]?.content?.parts?.[0]?.text || "";

                if (modelResponse) 
                {
                    responseMessage = modelResponse;
                }
            } 
            catch (error) {
                console.error("Error calling Gemini Pro API:", error);
                setError("Sorry, there was an error. Please try again.");
            } 
            finally {
                setLoading(false);
            }
        }

        const updatedChat = [
            ...chat,
            {
                role: "user",
                parts: [{ text: userMessage }],
            },
            {
                role: "model",
                parts: [{ text: responseMessage }],
            },
        ];

        setChat(updatedChat);
        setUserInput("");
    };

    const handleSpeech = async (text) => {
        if (isSpeaking) {
            stop();
            setIsSpeaking(false);
        } else {
            if (!(await isSpeakingAsync())) {
                speak(text);
                setIsSpeaking(true);
            }
        }
    };

    const renderChatItem = ({ item }) => (
        <ChatBubble
            role={item.role}
            text={item.parts[0].text}
            onSpeech={() => handleSpeech(item.parts[0].text)}
        />
    );

    return (
       <SafeAreaView style={{flex:1}}>
        <View style={styles.container}>
            <Text style={styles.title}>EatsyBot</Text>
            <FlatList
                data={chat}
                renderItem={renderChatItem}
                keyExtractor={(item, index) => index.toString()}
                contentContainerStyle={styles.chatContainer}
            />
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="Ask me about food related queries..."
                    placeholderTextColor="#aaa"
                    value={userInput}
                    onChangeText={setUserInput}
                />
                <TouchableOpacity
                    style={styles.button}
                    onPress={handleUserInput}
                >
                    <Text style={styles.buttonText}>Send</Text>
                </TouchableOpacity>
            </View>
            {loading && <ActivityIndicator style={styles.loading} size="large" color="#007aff" />}
            {error && <Text style={styles.error}>{error}</Text>}
        </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: "#482121",
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        color: "#F3DEBA",
        marginTop:40,
        marginBottom: 20,
        textAlign: 'center',
    },
    chatContainer: {
        flexGrow: 1,
        justifyContent: "flex-end",
    },
    inputContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: 10,
    },
    input: {
        flex: 1,
        height: 50,
        marginRight: 10,
        padding: 8,
        borderColor: "#ccc",
        borderWidth: 1,
        borderRadius: 5,
        backgroundColor: "#fff",
    },
    button: {
        padding: 10,
        backgroundColor: "#F3DEBA",
        borderRadius: 5,
    },
    buttonText: {
        color: "#482121",
        textAlign: "center",
        fontWeight: "bold",
    },
    loading: {
        marginTop: 10,
    },
    error: {
        color: "red",
        marginTop: 10,
        textAlign: 'center',
    },
});

export default Chatbot;
