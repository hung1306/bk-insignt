import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, FlatList, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Comment = ({ navigation }) => {
    const [comments, setComments] = useState([
        { id: '1', name: 'Nguyen Phuoc Hung', avatar: 'https://i.pinimg.com/1200x/e8/00/ce/e800ce2b943e1f60f6c4f505826e05d9.jpg', time: '12/28/2023, 1:11:21 PM', text: 'Great place!' },
        { id: '2', name: 'Nguyen Tuan Anh', avatar: 'https://dashboard.dienthoaivui.com.vn/uploads/wp-content/uploads/2023/01/avatar-tet12.jpg', time: '12/28/2023, 1:15:21 PM', text: 'Awesome place!' },
    ]);

    const [commentText, setCommentText] = useState(''); // Add this line

    const handleAddComment = () => {
        if (commentText.trim() === '') {
            return;
        }

        // Get current date and time
        const currentTime = new Date().toLocaleString();

        // Add new comment to the array
        const newComment = {
            id: (comments.length + 1).toString(), 
            name: 'Nhan Nghia',
            avatar: 'https://st.quantrimang.com/photos/image/2023/01/13/avatar-cute-2023-5.jpg',
            time: currentTime,
            text: commentText,
        };

        setComments([...comments, newComment]);
        setCommentText(''); // Clear the comment input
    };

    return (
        <View style={styles.container}>
            {/* Existing code for place details */}

            {/* Comment section */}
            <View style={styles.commentContainer}>
                <Text style={styles.commentHeader}>Bình luận:</Text>
                {/* Comment input */}
                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.input}
                        placeholder="Thêm bình luận ..."
                        onChangeText={(text) => setCommentText(text)}
                        value={commentText}
                    />
                    <TouchableOpacity onPress={handleAddComment} >
                        <Icon name="send" size={25} color="blue" />
                    </TouchableOpacity>
                </View>
                {/* List of comments */}
                <FlatList
                    data={comments}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => (
                        <View style={styles.commentItem}>
                            <Image source={{ uri: item.avatar }} style={styles.commentAvatar} />
                            <View style={styles.commentContent}>
                                <Text style={styles.commentName}>{item.name}</Text>
                                <Text style={styles.commentText}>{item.text}</Text>
                                <Text style={styles.commentTime}>{item.time}</Text>
                            </View>
                        </View>
                    )}
                />

                
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    // Existing styles

    commentContainer: {
        marginTop: 16,
    },
    commentHeader: {
        fontSize: 20,
        fontWeight: 'bold',
        marginLeft: 15,
    },
    commentItem: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        marginLeft: 15,
        marginBottom: 15,
        marginRight: 15,
        padding: 5,
        borderRadius: 15,
    },
    commentAvatar: {
        width: 40,
        height: 40,
        borderRadius: 20,
        marginRight: 12,
    },
    commentContent: {
        flex: 1,
    

    },
    commentName: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 4,
    },
    commentText: {
        fontSize: 16,
        marginBottom: 4,
    },
    commentTime: {
        fontSize: 12,
        color: 'gray',
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        margin: 5,
    },
    input: {
        flex: 1,
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 15,
        paddingHorizontal: 8,
        marginRight: 8,
        backgroundColor: '#fff',
        margin: 10,
        padding: 5,
    },
});

export default Comment;
