import React, {useState} from 'react';
import {
  View,
  Text,
  ScrollView,
} from 'react-native';
import * as ImagePicker from 'react-native-image-picker';
import Header from '../../components/Header';
import AppTextInput from '../../components/AppTextInput';
import styles from './styles';
import DescriptionInput from '../../components/DescriptionInput';
import CoverPhotos from '../../components/CoverPhotos';
import PrimaryButton from '../../components/PrimaryButton';
import { RootStackParamList } from '../../navigation/AppStack';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

type HomeScreenProps = NativeStackScreenProps<RootStackParamList, 'Home'>;

const AboutScreen:React.FC<HomeScreenProps> = ({ navigation }) =>  {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState<string>('0.00');
  const [photos, setPhotos] = useState<ImagePicker.Asset[]>([]);


  // Function to handle image picker
  const pickImage = () => {
    ImagePicker.launchImageLibrary({ mediaType: 'photo' })
      .then((response: ImagePicker.ImagePickerResponse) => {
        if (!response.didCancel && response.assets) {
          setPhotos([...photos, ...response.assets]);
        }
      })
      .catch((error: any) => {
        console.log('Error picking image: ', error); // Handle the error here
      });
  };

  const nextPressed = () => {
    navigation.navigate('AdditionalDetailsScreen', {
      name,
      description,
      price: parseFloat(price),
      photos: photos.map(photo => photo.uri || ''),
    });
   }
  return (
    <View style={styles.container}>
      {/* Header */}
      <Header title="About" />
      <ScrollView >

      {/* Name Input */}
      <AppTextInput
        placeholder="Name"
        value={name}
        keyboardType="default"
        onChangeText={(text: { toString: () => React.SetStateAction<string>; }) => setName(text.toString())}
      />

      <DescriptionInput
        placeholder="Description"
        value={description}
        onChangeText={text => setDescription(text)}
        maxLength={200}
      />

        {/* Cover Photos */}
        <CoverPhotos photos={photos.map(photo => ({ uri: photo.uri || '' }))} onPickImage={pickImage} />

      {/* Price Input */}
      <Text style={styles.title}>Price</Text>
      <AppTextInput
        placeholder="$0.00"
        name="price"
        value={price}
        onChangeText={(text: React.SetStateAction<string>) => setPrice(text)}
        keyboardType="numeric"
      />

      {/* Next Button */}
     <PrimaryButton title="Next" onPress={() => nextPressed()} />
    </ScrollView>
    </View>
  );
}

export default AboutScreen;