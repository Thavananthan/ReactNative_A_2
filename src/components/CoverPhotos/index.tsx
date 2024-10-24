import React from 'react';
import { View, Image, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { responsiveScreenHeight, responsiveScreenWidth } from 'react-native-responsive-dimensions';

// Define the types for the props
interface CoverPhotosProps {
  photos: { uri: string }[];
  onPickImage: () => void;
}

const CoverPhotos: React.FC<CoverPhotosProps> = ({ photos, onPickImage }) => {
  return (
    <View style={styles.continer}>
      <Text style={styles.title}>Cover Photos (Upload up to 5 photos)</Text>
      <View style={styles.photosContainer}>
        {photos.slice(0, 3).map((photo, index) => (
          <Image
            key={index}
            source={{ uri: photo.uri }}
            style={styles.photo}
          />
        ))}
        {photos.length < 5 && (
          <TouchableOpacity onPress={onPickImage} style={styles.addButton}>
            <Text style={styles.addButtonText}>+</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

// Define styles for better structure
const styles = StyleSheet.create({
  continer:{
    marginHorizontal: responsiveScreenWidth(3),
    marginVertical: responsiveScreenHeight(2),

  },
  title: {
    fontSize: 16,
    marginBottom: 10,
  },
  photosContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  photo: {
    width: 60,
    height: 60,
    borderRadius: 5,
    backgroundColor: '#e0e0e0',
  },
  addButton: {
    width: 60,
    height: 60,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#e0e0e0',
    justifyContent: 'center',
    alignItems: 'center',
  },
  addButtonText: {
    fontSize: 24,
    color: '#007AFF',
  },
});

export default CoverPhotos;
