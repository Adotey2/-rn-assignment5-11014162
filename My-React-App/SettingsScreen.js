import React, { useContext } from 'react';
import { View, Text, StyleSheet, Switch, StatusBar } from 'react-native';
import { ThemeContext } from './ThemeContext';
import LightTheme from './LightTheme';
import DarkTheme from './DarkTheme';

const SettingsScreen = () => {
  const { isDarkTheme, toggleTheme } = useContext(ThemeContext);
  const theme = isDarkTheme ? DarkTheme : LightTheme;

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <StatusBar barStyle={isDarkTheme ? 'light-content' : 'dark-content'} />
      <Text style={[styles.heading, { color: theme.text }]}>Settings</Text>
      <View style={styles.setting}>
        <Text style={[styles.settingText, { color: theme.text }]}>Language</Text>
      </View>
      <View style={styles.setting}>
        <Text style={[styles.settingText, { color: theme.text }]}>My Profile</Text>
      </View>
      <View style={styles.setting}>
        <Text style={[styles.settingText, { color: theme.text }]}>Contact Us</Text>
      </View>
      <View style={styles.setting}>
        <Text style={[styles.settingText, { color: theme.text }]}>Change Password</Text>
      </View>
      <View style={styles.setting}>
        <Text style={[styles.settingText, { color: theme.text }]}>Privacy Policy</Text>
      </View>
      <View style={styles.themeSwitch}>
        <Text style={[styles.settingText, { color: theme.text }]}>Theme</Text>
        <Switch
          onValueChange={toggleTheme}
          value={isDarkTheme}
          trackColor={{ false: '#767577', true: '#81b0ff' }}
          thumbColor={isDarkTheme ? '#f4f3f4' : '#f4f3f4'}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  heading: {
    fontSize: 24,
    marginBottom: 20,
  },
  setting: {
    marginBottom: 20,
  },
  settingText: {
    fontSize: 16,
  },
  themeSwitch: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
  },
});

export default SettingsScreen;
