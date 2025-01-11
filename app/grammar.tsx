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

export default function Grammar() {
  return (
    <ScrollView>
      <View style={styles.headerContainer}>
        <Image style={styles.image} source={require('../images/Logo.png')} />
        <View style={styles.grammarBox}>
          <Text style={styles.grammarText}>Grammar</Text>
        </View>
      </View>

      <CourseList
        title="Verbs: Past"
        onPress={() => router.push('/grammar_courses')}
      />
      <CourseList
        title="Adverbs"
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
