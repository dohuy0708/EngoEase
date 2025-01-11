import React from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import CourseList from './list';
import { router } from 'expo-router';
import Icon from 'react-native-vector-icons/Ionicons'; 

export default function GrammarCourse() {
  return (
    <ScrollView>
      <View style={styles.headerContainer}>
      <TouchableOpacity style={styles.backButton} onPress={() => router.push('/tab')}>
          <Icon name="arrow-back" size={24} color="#fff" />
        </TouchableOpacity>
        <Image style={styles.image} source={require('../images/Logo.png')} />
        <View style={styles.grammarBox}>
          <Text style={styles.grammarText}>Verbs: Past</Text>
        </View>
      </View>

      <CourseList
        title="Tobe"
        onPress={() => router.push('/grammar_lesson_content')}
      />
      <CourseList
        title="V2"
        onPress={() => router.push('/list')}
      />
      <CourseList
        title="Verbs: Present"
        onPress={() => router.push('/list')}
      />
       <CourseList
        title="Adjectives"
        onPress={() => router.push('/list')}
      />
       <CourseList
        title="Verbs: Future"
        onPress={() => router.push('/list')}
      />
       <CourseList
        title="Verbs: Conditional"
        onPress={() => router.push('/list')}
      />
       <CourseList
        title="Passive Voice"
        onPress={() => router.push('/list')}
      />
      
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    width: '100%',
    height: '100%',
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
  image: {
    width: 100,
    height: 100,
  },
  headerContainer: {
    width: '100%',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  grammarBox: {
    marginTop: 10,
    backgroundColor: '#49BBBD',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 3,
  },
  grammarText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000000',
  },
});
