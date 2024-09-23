// CustomTextInput.js
import React from 'react';
import { TextInput, StyleSheet, View, Text } from 'react-native';

interface Props {
  placeholder?: string;
  value: string;
  onChangeText: (text: string) => void;
  style?: any;
  label?: string;
}

const CustomTextInput = ({
  placeholder = '', 
  value,
  onChangeText,
  style,
  label,
  ...rest
}: Props) => {
  return (
    <View className="flex-1 justify-center items-center bg-blue-500">
      {label && <Text style={styles.label}>{label}</Text>}
      <TextInput
        style={[styles.input, style]}  // Combine default styles with passed styles
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        {...rest}  // Spread the rest of the props (e.g., keyboardType)
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    color: '#333',
    marginBottom: 5,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    fontSize: 16,
    backgroundColor: '#f9f9f9',
  },
});

export default CustomTextInput;