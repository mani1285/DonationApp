import React from 'react';
import { View, Text, Button, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';

const HomeScreen = ({ navigation }) => {
  const campaigns = [
    { id: 1, title: 'Campaign 1', description: 'Food and Shelter for Orphans', targetAmount: 10000, collectedAmount: 2500 },
    { id: 2, title: 'Campaign 2', description: 'Medical Aid for Underprivileged', targetAmount: 15000, collectedAmount: 6000 },
    { id: 3, title: 'Campaign 3', description: 'Educational Supplies for Children', targetAmount: 12000, collectedAmount: 4000 },
    { id: 4, title: 'Campaign 4', description: 'Clean Water for Rural Areas', targetAmount: 20000, collectedAmount: 8000 },
  ];

  const navigateToDonation = (campaign) => {
    navigation.navigate('DonationScreen', { campaign });
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.pageTitle}>Campaigns for a Cause</Text>
      {campaigns.map((campaign) => (
        <View key={campaign.id} style={styles.campaignCard}>
          <Text style={styles.campaignTitle}>{campaign.title}</Text>
          <Text style={styles.campaignDescription}>{campaign.description}</Text>
          <TouchableOpacity style={styles.donateButton} onPress={() => navigateToDonation(campaign)}>
            <Text style={styles.donateButtonText}>Donate Now</Text>
          </TouchableOpacity>
        </View>
      ))}
      <TouchableOpacity style={styles.goBackButton} onPress={() => navigation.goBack()}>
        <Text style={styles.goBackButtonText}>Go Back</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    backgroundColor: '#e8f4f8',
  },
  pageTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginBottom: 15,
  },
  campaignCard: {
    marginBottom: 15,
    padding: 20,
    backgroundColor: '#ffffff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  campaignTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#00796B',
  },
  campaignDescription: {
    fontSize: 16,
    color: '#555',
    marginBottom: 15,
  },
  donateButton: {
    backgroundColor: '#00796B',
    paddingVertical: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  donateButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  goBackButton: {
    marginTop: -1,
    backgroundColor: '#333',
    paddingVertical: 12,
    borderRadius: 5,
    alignItems: 'center',
  },
  goBackButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default HomeScreen;
