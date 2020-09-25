import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import CostomButton from '../../../components/CostomButton';
import CostomInput from '../../../components/CostomInput';
import {Colors, FontSizes, Margins} from '../../../constant/theme';

const Index = () => {
  const [userInfo, setUserInfo] = useState({name: '', country: ''});
  return (
    <View>
      <Text style={styles.boldText}>All</Text>
      <View style={styles.header}>
        <Text style={styles.boldText}>Newsletter</Text>
        <Text style={styles.cancel}>X</Text>
      </View>
      <View style={styles.inputs}>
        <CostomInput
          onChangeText={(text) => setUserInfo({...userInfo, name: text})}
          placeholder="Name"
        />
        <CostomInput
          onChangeText={(text) => setUserInfo({...userInfo, country: text})}
          placeholder="Country"
        />
      </View>
      <CostomButton label="Subscribe" />
      <Text style={styles.reminder}>
        By Clicking on subscribe button you agree to accept Privacy Policy
      </Text>
    </View>
  );
};

export default Index;

const styles = StyleSheet.create({
  boldText: {
    fontWeight: '600',
    fontSize: FontSizes.regular,
  },
  cancel: {
    color: Colors.light,
    fontWeight: '500',
    fontSize: FontSizes.bigger,
  },
  header: {
    marginVertical: Margins.marginLeft * 2,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  inputs: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  reminder: {
    color: Colors.light,
    fontSize: FontSizes.small,
    margin: 5,
    marginTop: 15,
    textAlign: 'center',
  },
});
