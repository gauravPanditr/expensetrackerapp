// SignUp.tsx

import React from 'react';
import { SafeAreaView, Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const SignUp: React.FC = () => {
  const navigation = useNavigation();

  const handleNavigateToLogin = () => {
    navigation.navigate('login' as never);
  };

  return (
    <SafeAreaView>
      <Text>Hello SignUp</Text>
      <Button title="Go to Login" onPress={handleNavigateToLogin} />
    </SafeAreaView>
  );
};

export default SignUp;