import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigation/AppStack';
import { useDispatch } from 'react-redux';
import { setFormData } from '../../redux/slices/formSlice';




export type AdditionalDetailsScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'AdditionalDetailsScreen'
>;

const AdditionalDetailsScreen: React.FC<AdditionalDetailsScreenProps> = ({ route, navigation }) => {
      const { name, description, price, photos } = route.params;  // Access the passed params
      const dispatch = useDispatch();  // Initialize dispatch

  const [benefits, setBenefits] = useState([
    '',
  ]);

  const [additionalDetails, setAdditionalDetails] = useState([
    { attribute: '', value: '' },
    { attribute: '', value: '' },
  ]);

  // Function to add a new benefit
  const addBenefit = () => {
    setBenefits([...benefits, '']);
  };

  // Function to remove a benefit
  const removeBenefit = (index: number) => {
    const updatedBenefits = benefits.filter((_, i) => i !== index);
    setBenefits(updatedBenefits);
  };

  // Function to add a new additional detail
  const addAdditionalDetail = () => {
    setAdditionalDetails([...additionalDetails, { attribute: '', value: '' }]);
  };

  // Function to remove an additional detail
  const removeAdditionalDetail = (index: number) => {
    const updatedDetails = additionalDetails.filter((_, i) => i !== index);
    setAdditionalDetails(updatedDetails);
  };

  const submitData = () => {
    console.log('Name:', name, 'Description:', description, 'Price:', price, 'Photos:', photos);
    console.log('Benefits:', benefits, 'Additional Details:', additionalDetails);
    // Dispatch the form data to the Redux store
    const formData = {
      name: name,
      description: description,
      price: price,
      photos: photos,
      benefits: benefits,
      additionalDetails: additionalDetails,
    };
    dispatch(
      setFormData(formData)
    );
    navigation.navigate('DigitalProducts');
  }

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Icon name="arrow-back" size={24} onPress={() => navigation.goBack()} />
        <Text style={styles.headerText}>Additional details</Text>
      </View>

      <ScrollView>
        {/* Benefits Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Benefits</Text>
          <TouchableOpacity onPress={addBenefit}>
            <Text style={styles.addButtonText}>+ Add</Text>
          </TouchableOpacity>

          {benefits.map((benefit, index) => (
            <View key={index} style={styles.benefitItem}>
              <TextInput
                style={styles.benefitInput}
                placeholder="Enter a benefit"
                value={benefit}
                onChangeText={(text) => {
                  const updatedBenefits = [...benefits];
                  updatedBenefits[index] = text;
                  setBenefits(updatedBenefits);
                }}
              />
              <TouchableOpacity onPress={() => removeBenefit(index)}>
                <Icon name="trash" size={24} color="red" />
              </TouchableOpacity>
            </View>
          ))}
        </View>

        {/* Additional Details Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Additional details</Text>
          <TouchableOpacity onPress={addAdditionalDetail}>
            <Text style={styles.addButtonText}>+ Add</Text>
          </TouchableOpacity>

          {additionalDetails.map((detail, index) => (
            <View key={index} style={styles.additionalDetailItem}>
              <TextInput
                style={styles.detailInput}
                placeholder="Attribute"
                value={detail.attribute}
                onChangeText={(text) => {
                  const updatedDetails = [...additionalDetails];
                  updatedDetails[index].attribute = text;
                  setAdditionalDetails(updatedDetails);
                }}
              />
              <TextInput
                style={styles.detailInput}
                placeholder="Value"
                value={detail.value}
                onChangeText={(text) => {
                  const updatedDetails = [...additionalDetails];
                  updatedDetails[index].value = text;
                  setAdditionalDetails(updatedDetails);
                }}
              />
              <TouchableOpacity onPress={() => removeAdditionalDetail(index)}>
                <Icon name="trash" size={24} color="red" />
              </TouchableOpacity>
            </View>
          ))}
        </View>

        {/* Category Dropdown */}
        <View style={styles.categoryContainer}>
          <TextInput style={styles.categoryInput} placeholder="Category" />
          <Icon name="chevron-down" size={24} />
        </View>

        {/* Next Button */}
        <TouchableOpacity style={styles.nextButton} onPress={() => submitData()}>
          <Text style={styles.nextButtonText}>Next</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  headerText: {
    fontSize: 18,
    marginLeft: 10,
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  addButtonText: {
    color: '#007AFF',
    marginBottom: 10,
  },
  benefitItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  benefitInput: {
    flex: 1,
    borderColor: '#e0e0e0',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    marginRight: 10,
  },
  additionalDetailItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  detailInput: {
    flex: 1,
    borderColor: '#e0e0e0',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    marginRight: 10,
  },
  categoryContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#e0e0e0',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    marginBottom: 20,
  },
  categoryInput: {
    flex: 1,
  },
  nextButton: {
    backgroundColor: '#007AFF',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  nextButtonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default AdditionalDetailsScreen;