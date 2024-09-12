import { Link } from "expo-router";
import React from "react";
import { Text, View } from "react-native";
import { useAuth } from "@clerk/clerk-expo";
import { Button } from "@/components/ui/button";
import { router } from "expo-router";

export default function Page() {
  const { signOut } = useAuth();
  const handleSignOut = async () => {
    await signOut();
    router.push("/welcome");
  };
  return (
    <View className="flex flex-1 items-center justify-center">
      <Text>Dashboard Route</Text>
      <Link href={"/"}>Home</Link>
      <Button onPress={handleSignOut}>
        <Text>Sign Out</Text>
      </Button>
    </View>
  );
}
