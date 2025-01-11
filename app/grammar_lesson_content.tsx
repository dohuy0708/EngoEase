import React from 'react';
import { View, StyleSheet, Image, StatusBar, Dimensions, Text, TouchableOpacity } from 'react-native';
import { router, useRouter } from 'expo-router';
const { width, height } = Dimensions.get("window");

const GrammarLessonContent: React.FC = () => {

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#f58084" />
      <Text style={styles.title}>Verbs Past:</Text>
      <Image source={require('../images/verbpast.png')} style={styles.image}></Image>
      <TouchableOpacity
        style={styles.praticeButton}
        onPress={() => router.push('/grammar_question')}
      >
        <Text style={styles.practiceText}>Practice</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flex: 1
  },
  title:{
    fontSize: 40,
    fontFamily: "Medium",
    textAlign: "center",
    color: "#49BBBD",
    marginVertical:20
  },
  image:{
    marginLeft: 10,
    marginRight: 10,
    height:400,
    width:400,
    resizeMode: 'contain'
  },
  praticeButton: {
    flexDirection: "row",
    paddingVertical: 15,
    backgroundColor: "#49BBBD",
    marginHorizontal: 40,
    alignItems: "center",
    borderRadius: 10,
    justifyContent: "center",
    marginTop: 20,
  },
  practiceText: {
    color: "000000",
    fontFamily: "Bold",
    fontSize: 15,
    marginRight: 50,
  },
});

export default GrammarLessonContent;
