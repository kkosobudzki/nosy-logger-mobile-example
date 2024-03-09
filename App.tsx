import React, { useState } from "react";
import {
  Button,
  SafeAreaView,
  StatusBar,
  Text,
  TextInput,
  View,
} from "react-native";
import logger from "@nosytools/logger-mobile";

logger.init(
  "2lRuZT3YCrauY7rFiZMLXx8bGr36wYKd1BoHKGHk8zc+OsntaIjAhd8tFjZ3qX/bHzQKqrsxiYlTdoyOP4Arrg=="
);

function App(): React.JSX.Element {
  const [message, setMessage] = useState("");

  const disabled = message.length < 3;

  return (
    <SafeAreaView>
      <StatusBar barStyle={"light-content"} />
      <View>
        <Text>Nosy Logger Example</Text>

        <TextInput
          placeholder="Your message to log"
          onChangeText={setMessage}
        />

        <View>
          <Button
            title="debug"
            disabled={disabled}
            onPress={() => logger.debug(message)}
          />
          <Button
            title="info"
            disabled={disabled}
            onPress={() => logger.info(message)}
          />
          <Button
            title="warning"
            disabled={disabled}
            onPress={() => logger.warning(message)}
          />
          <Button
            title="error"
            disabled={disabled}
            onPress={() => logger.error(message)}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

export default App;
