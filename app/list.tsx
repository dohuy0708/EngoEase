import React from 'react';
import { Text, TouchableOpacity, View, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; // Sử dụng icon
import { ImageSourcePropType } from 'react-native';

interface ListProps {
  title: string; // Tiêu đề khoá học
  onPress: () => void; // Hàm khi người dùng nhấn vào khoá học
}

const List: React.FC<ListProps> = ({ title, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      {/* Icon cuốn sách */}
      <Icon name="book" size={24} style={styles.bookIcon} />

      {/* Nội dung khóa học */}
      <View>
        <Text style={styles.title}>{title}</Text>
      </View>
      <Text style={styles.percentage}>25%</Text>
    </TouchableOpacity>
  );
};

// Định nghĩa style cho component
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#49BBBD',
    flexDirection: 'row',
    padding: 20,
    marginHorizontal: 20,
    borderRadius: 20,
    alignItems: 'center',
    marginTop: 10,
    opacity: 0.8,
    marginVertical:10,
  },
  bookIcon: {
    
    marginRight: 15,
    color:'000000'
  },
  title: {
    color: '000000',
    fontFamily: 'Bold',
    fontSize: 16,
    paddingHorizontal: 10,
    width: 240,
  },
  percentage: {
    color: '000000',
    fontFamily: 'Medium',
    fontSize: 13,
    paddingLeft: 10,
    paddingRight: 10,
  },
});

export default List;
