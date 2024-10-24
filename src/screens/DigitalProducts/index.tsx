import React from 'react';
import { View, Text, Image, FlatList, StyleSheet, SafeAreaView } from 'react-native';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';  // Import RootState type
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigation/AppStack';
import Header from '../../components/Header';

type DigitalProductsProps = NativeStackScreenProps<RootStackParamList, 'DigitalProducts'>;
interface Product {
    name: string;
    description: string;
    price: number;
    photos: string[];
    benefits: string[];
    additionalDetails: { attribute: string; value: string }[];
  }
const DigitalProducts: React.FC<DigitalProductsProps> = ({ navigation}) => {
    const formEntries = useSelector((state: RootState) => state.from.formEntries);
    const products: Product[] = formEntries.map(entry => ({
        name: entry.name,
        description: entry.description,
        price: entry.price,
        photos: entry.photos,
        benefits: entry.benefits,
        additionalDetails: entry.additionalDetails,
    }));
console.log(products);


const renderProduct = ({ item }: { item: Product }) => (
    <View style={styles.productCard}>
      {/* Image */}
      <Image source={{ uri: item.photos[0] }} style={styles.productImage} />

      {/* Price */}
      <View style={styles.priceTag}>
        <Text style={styles.priceText}>{`$ ${item.price}`}</Text>
      </View>

      {/* Product Title */}
      <Text style={styles.productTitle}>{item.name}</Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <Header title="Digital Product" onPress={() => navigation.goBack()} />
      {/* Product List */}
      <FlatList
        data={products}
        renderItem={renderProduct}
        keyExtractor={(item) => item.name}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
  
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
    header: {
      flexDirection: 'row',
      alignItems: 'center',
      padding: 16,
      backgroundColor: '#fff',
      borderBottomWidth: 1,
      borderBottomColor: '#eee',
    },
    backButton: {
      fontSize: 24,
      marginRight: 16,
    },
    headerTitle: {
      fontSize: 18,
      fontWeight: '600',
    },
    listContent: {
      padding: 16,
    },
    productCard: {
      marginBottom: 20,
      backgroundColor: '#fff',
      borderRadius: 8,
      overflow: 'hidden',
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 4,
      elevation: 3,
    },
    productImage: {
      width: '100%',
      height: 200,
      resizeMode: 'cover',
    },
    priceTag: {
      position: 'absolute',
      right: 16,
      bottom: 16,
      backgroundColor: 'white',
      paddingVertical: 4,
      paddingHorizontal: 8,
      borderRadius: 8,
    },
    priceText: {
      fontSize: 14,
      fontWeight: '600',
      color: '#000',
    },
    productTitle: {
      fontSize: 16,
      fontWeight: '500',
      marginTop: 8,
      marginHorizontal: 16,
      marginBottom: 12,
      color: '#333',
    },
  });
  

export default DigitalProducts;
