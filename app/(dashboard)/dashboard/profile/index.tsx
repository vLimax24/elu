import React, { useState } from "react";
import { View, Image } from "react-native";
import { api } from "@/convex/_generated/api";
import { useQuery } from "convex/react";
import NotificationSetup from "@/components/Notifications/NotificationPermissionSwitch";
import { Button } from "@/components/ui/button";
import { Text } from "@/components/ui/text";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";

const index = () => {
  const myUser = useQuery(api.users.getMyUser);
  const [checked, setChecked] = React.useState(false);

  const profileImage = myUser?.profileImage;
  return (
    <View className="flex-1">
      {myUser && (
        <View className="flex-row gap-5">
          {profileImage && (
            <Image
              source={{ uri: profileImage }}
              style={{ width: 50, height: 50 }}
              className="rounded-full"
            />
          )}
          <View>
            <Text className="text-black">{myUser.name}</Text>
            <Text className="text-black">{myUser.email}</Text>
          </View>
        </View>
      )}
      <NotificationSetup />
      <View>
        <Button className="bg-blue-500">
          <Text>Hello World</Text>
        </Button>
      </View>
      <View className="flex-row items-center gap-2">
        <Switch
          checked={checked}
          onCheckedChange={setChecked}
          nativeID="airplane-mode"
          className={`${checked ? "bg-blue-500" : "bg-gray-200"}`}
        />
        <Label
          nativeID="airplane-mode"
          onPress={() => {
            setChecked((prev) => !prev);
          }}
        >
          Airplane Mode
        </Label>
      </View>
    </View>
  );
};

export default index;
