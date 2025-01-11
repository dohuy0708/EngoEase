import React from 'react';
import { View, Text, StyleSheet, Image, FlatList, TouchableOpacity, Dimensions } from 'react-native';
import { router, useRouter } from 'expo-router';
import Icon from 'react-native-vector-icons/Ionicons'; 


export default function LevelCourseContent () {

  const lessons = [
    {
      id: '1',
      title: 'Hello!',
      description: 'Learn greetings for meeting',
      image: require('../images/2.jpg'),
      completed: true,
    },
    {
      id: '2',
      title: 'Introduce your self',
      description: 'Say your name',
      image: require('../images/2.jpg'),
      completed: false,
    },
    {
      id: '3',
      title: 'Asking how somebody is',
      description: "Learn how to ask about other people's feeling.",
      image: require('../images/2.jpg'),
      completed: false,
    },
    {
      id: '4',
      title: 'Checkpoint',
      description: 'Test your skills to access the next chapter',
      image: require('../images/2.jpg'),
      completed: false,
    },
  ];

  const renderLesson = ({ item }: any) => {
    return (
      
      <TouchableOpacity
        style={[styles.lessonItem, item.completed ? styles.completed : null]}
        onPress={() => router.push('/level_question')}
      >
        <Image source={item.image} style={styles.lessonImage} />
        <View style={styles.lessonContent}>
          <Text style={styles.lessonTitle}>{item.title}</Text>
          <Text style={styles.lessonDescription}>{item.description}</Text>
        </View>
        {item.completed && <Text style={styles.checkmark}>✔️</Text>}
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={() => router.push('/level_courses')}>
                <Icon name="arrow-back" size={24} color="#fff" />
              </TouchableOpacity>
      <Text style={styles.chapterTitle}>Chương 1: Giới thiệu</Text>
      <FlatList
        data={lessons}
        renderItem={renderLesson}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.lessonList}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingTop: 60,
  },
  backButton: {
    position: 'absolute',
    left: 20,
    top: 20,
    zIndex: 10,
    backgroundColor: '#49BBBD',
    borderRadius: 20,
    padding: 8,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 3,
  },
  chapterTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#345c74',
    marginBottom: 20,
  },
  progressBar: {
    height: 10,
    backgroundColor: '#e0e0e0',
    borderRadius: 5,
    overflow: 'hidden',
    marginBottom: 20,
  },
  progress: {
    height: '100%',
    backgroundColor: '#49BBBD',
  },
  lessonList: {
    paddingBottom: 20,
  },
  lessonItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f8f9fa',
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#e0e0e0',
  },
  completed: {
    backgroundColor: '#e6f7f6',
    borderColor: '#49BBBD',
  },
  lessonImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 15,
  },
  lessonContent: {
    flex: 1,
  },
  lessonTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#345c74',
  },
  lessonDescription: {
    fontSize: 14,
    color: '#7a869a',
    marginTop: 5,
  },
  checkmark: {
    fontSize: 18,
    color: '#49BBBD',
    fontWeight: 'bold',
  },
});


