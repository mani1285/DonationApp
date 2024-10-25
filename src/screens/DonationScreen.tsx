import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native';
import { ProgressBar, Menu, Divider, Provider } from 'react-native-paper'; // You need to install react-native-paper if not done

const DonationScreen = ({ route, navigation }) => {
  const initialCampaign = route.params?.campaign || {
    id: 1,
    title: 'Food and Shelter for Orphans',
    description: 'Providing food and shelter to children in need.',
    targetAmount: 10000,
    collectedAmount: 2500,
  };

  const [selectedCampaign, setSelectedCampaign] = useState(initialCampaign);
  const [donatedAmount, setDonatedAmount] = useState(0);
  const [visible, setVisible] = useState(false);

  const campaigns = [
    initialCampaign,
    { id: 2, title: 'Medical Aid for Underprivileged', targetAmount: 15000, collectedAmount: 6000 },
    { id: 3, title: 'Educational Supplies', targetAmount: 8000, collectedAmount: 3000 },
  ];

  const handleDonate = (amount) => {
    setDonatedAmount((prevAmount) => prevAmount + amount);
  };

  const remainingAmount = selectedCampaign.targetAmount - selectedCampaign.collectedAmount - donatedAmount;
  const progress = (selectedCampaign.collectedAmount + donatedAmount) / selectedCampaign.targetAmount;

  const handleCampaignSelect = (campaign) => {
    setSelectedCampaign(campaign);
    setDonatedAmount(0); // Reset donated amount when switching campaigns
    setVisible(false);
  };

  return (
    <Provider>
      <View style={styles.container}>
        {/* Campaign Dropdown */}
        <Menu
          visible={visible}
          onDismiss={() => setVisible(false)}
          anchor={
            <TouchableOpacity style={styles.dropdown} onPress={() => setVisible(true)}>
              <Text style={styles.dropdownText}>{selectedCampaign.title}</Text>
            </TouchableOpacity>
          }
        >
          {campaigns.map((campaign) => (
            <Menu.Item
              key={campaign.id}
              onPress={() => handleCampaignSelect(campaign)}
              title={campaign.title}
            />
          ))}
        </Menu>

        {/* Campaign Details */}
        <Text style={styles.title}>{selectedCampaign.title}</Text>
        <Text style={styles.details}>Collected: ${selectedCampaign.collectedAmount + donatedAmount}</Text>
        <Text style={styles.details}>Target: ${selectedCampaign.targetAmount}</Text>
        <Text style={styles.details}>Remaining: ${remainingAmount}</Text>

        {/* Progress bar to show donation progress */}
        <ProgressBar progress={progress} color="#6200EE" style={styles.progressBar} />

        {/* Donation Button */}
        <TouchableOpacity style={styles.donateButton} onPress={() => handleDonate(100)}>
          <Text style={styles.donateButtonText}>Donate $100</Text>
        </TouchableOpacity>

        {/* Go Back Button */}
        <TouchableOpacity style={styles.goBackButton} onPress={() => navigation.goBack()}>
          <Text style={styles.goBackButtonText}>Go Back</Text>
        </TouchableOpacity>
      </View>
    </Provider>
  );
};

// Styles for improved design
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#F1F1F1',
    justifyContent: 'center',
  },
  dropdown: {
    backgroundColor: '#6200EE',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 8,
    marginBottom: 20,
    alignItems: 'center',
  },
  dropdownText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginBottom: 10,
  },
  details: {
    fontSize: 16,
    color: '#666',
    marginBottom: 5,
    textAlign: 'center',
  },
  progressBar: {
    height: 10,
    borderRadius: 5,
    marginVertical: 20,
  },
  donateButton: {
    backgroundColor: '#6200EE',
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginVertical: 10,
  },
  donateButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  goBackButton: {
    backgroundColor: '#333',
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginVertical: 10,
  },
  goBackButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default DonationScreen;
