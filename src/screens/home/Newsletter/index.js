import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import CostomButton from '../../../components/CostomButton';
import CostomInput from '../../../components/CostomInput';
import {Colors} from '../../../constant/theme';

const Index = () => {
  return (
    <View>
      <Text style={styles.boldText}>All</Text>
      <View style={styles.header}>
        <Text style={styles.boldText}>Newsletter</Text>
        <Text style={styles.cancel}>X</Text>
      </View>
      <View style={styles.inputs}>
        <CostomInput placeholder="Name" />
        <CostomInput placeholder="Country" />
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
    fontSize: 14,
  },
  cancel: {
    color: Colors.light,
    fontWeight: '500',
    fontSize: 16,
  },
  header: {
    marginVertical: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  inputs: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  reminder: {
    color: Colors.light,
    fontSize: 10,
    margin: 5,
    marginTop: 15,
    textAlign: 'center',
  },
});
