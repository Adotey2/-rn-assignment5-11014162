import React, { useContext } from 'react';
import { View, Text, StyleSheet, FlatList, Image, StatusBar, TouchableOpacity, ImageBackground } from 'react-native';
import { ThemeContext } from './ThemeContext';
import LightTheme from './LightTheme';
import DarkTheme from './DarkTheme';
import Icon from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const transactions = [
  { id: '1', name: 'Apple Store', category: 'Entertainment', amount: '- $5.99', icon: 'apple' },
  { id: '2', name: 'Spotify', category: 'Music', amount: '- $12.99', icon: 'spotify' },
  { id: '3', name: 'Money Transfer', category: 'Transaction', amount: '$300', icon: 'bank-transfer' },
  { id: '4', name: 'Grocery', category: 'Grocery', amount: '- $88', icon: 'cart' },
];

const HomeScreen = () => {
  const { isDarkTheme } = useContext(ThemeContext);
  const theme = isDarkTheme ? DarkTheme : LightTheme;

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <StatusBar barStyle={isDarkTheme ? 'light-content' : 'dark-content'} />
      <View style={styles.header}>
        <Image source={require('./assets/profile.png')} style={styles.profileImage} />
        <View>
          <Text style={[styles.welcomeText, { color: theme.text }]}>Welcome back,</Text>
          <Text style={[styles.userName, { color: theme.text }]}>Eric Atsu</Text>
        </View>
        <TouchableOpacity style={styles.searchButton}>
          <Icon name="search" size={20} color={theme.text} />
        </TouchableOpacity>
      </View>
      <ImageBackground
        source={require('./assets/Card.png')}
        style={styles.card}
        imageStyle={{ borderRadius: 10 }}
      />
      <View style={styles.actionIcons}>
        <TouchableOpacity style={styles.actionIconContainer}>
          <MaterialCommunityIcons name="send" size={30} color={theme.text} />
          <Text style={[styles.iconText, { color: theme.text }]}>Send</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionIconContainer}>
          <MaterialCommunityIcons name="download" size={30} color={theme.text} />
          <Text style={[styles.iconText, { color: theme.text }]}>Receive</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionIconContainer}>
          <MaterialCommunityIcons name="wallet" size={30} color={theme.text} />
          <Text style={[styles.iconText, { color: theme.text }]}>Wallet</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionIconContainer}>
          <MaterialCommunityIcons name="chart-line" size={30} color={theme.text} />
          <Text style={[styles.iconText, { color: theme.text }]}>Top Up</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.transactionsHeader}>
        <Text style={[styles.transactionsTitle, { color: theme.text }]}>Transactions</Text>
        <TouchableOpacity>
          <Text style={[styles.seeAll, { color: theme.text }]}>See All</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={transactions}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={[styles.transaction, { backgroundColor: theme.transactionBackground }]}>
            <MaterialCommunityIcons name={item.icon} size={30} color={theme.transactionText} style={styles.transactionIcon} />
            <View>
              <Text style={[styles.transactionName, { color: theme.transactionText }]}>{item.name}</Text>
              <Text style={{ color: theme.transactionText }}>{item.category}</Text>
            </View>
            <Text style={[styles.transactionAmount, { color: theme.transactionText }]}>{item.amount}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  welcomeText: {
    fontSize: 16,
  },
  userName: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  searchButton: {
    marginLeft: 'auto',
  },
  card: {
    width: '50%',
    height: 150,  // Adjusted height to make the card smaller
    padding: 30,
    borderRadius: 10,
    marginBottom: 40,
    marginLeft: 450,
    justifyContent: 'center',
    alignItems: 'center',
  },
  actionIcons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  actionIconContainer: {
    alignItems: 'center',
  },
  iconText: {
    marginTop: 5,
    fontSize: 12,
  },
  transactionsHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  transactionsTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  seeAll: {
    fontSize: 14,
    textDecorationLine: 'underline',
  },
  transaction: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
  transactionIcon: {
    marginRight: 10,
  },
  transactionName: {
    fontSize: 16,
  },
  transactionAmount: {
    fontSize: 16,
  },
});

export default HomeScreen;
