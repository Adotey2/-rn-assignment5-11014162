Setup and Environment:

React Native: Started with setting up a React Native environment using npx react-native init MyApp.
Dependencies: Installed necessary dependencies including react-native-vector-icons for icons and react-navigation for navigation (if multiple screens are needed).
Theme Context:

Created a ThemeContext to manage and toggle between light and dark themes.
Defined two theme objects, LightTheme and DarkTheme, each containing respective style properties.
HomeScreen Component:

Built the HomeScreen component, which is the main screen of the application.
Used useContext to access the current theme and apply the appropriate styles.
Added a header with a profile image, welcome text, and a search button.
Included an ImageBackground component for a card visual.
Created action icons for features like Send, Receive, Wallet, and Top Up using react-native-vector-icons.
Displayed a list of transactions using a FlatList, each item showing an icon, name, category, and amount.
Styling:

Used StyleSheet to create a style object, dynamically applying styles based on the current theme.
Applied conditional styling for text and backgrounds to support light and dark themes.
Screenshots of the App
As I cannot generate actual screenshots within this environment, I'll describe how you can take and include them:

Running the App:

Run the app on an emulator or a physical device using npx run web.
Taking Screenshots:

Android Emulator: Use the screenshot feature available in the emulator toolbar.
iOS Simulator: Use Command + S to take a screenshot.
Physical Device: Use the device-specific screenshot functionality (e.g., pressing the power and volume down buttons simultaneously on Android).
Including Screenshots:

Save the screenshots on your computer.
Include them in your documentation by referencing the file paths or embedding the images directly.
Here is an example of how you might structure your documentation with placeholders for the screenshots:

Home Screen
Description
The Home Screen provides a summary of the user's profile, quick action buttons, and a list of recent transactions. The UI adapts to light and dark themes based on user preference.

Screenshot
![Home Screen - Light Theme](./assets/screenshot21.png)
![Home Screen - Light Theme2](./assets/screenshot22.png)
![Settings Screen - Light Theme](./assets/screenshot23.png)
![Settings Screen -  Dark Theme](./assets/screenshot24.png)
![Settings Screen - Dark Theme](./assets/screenshot25.png)
