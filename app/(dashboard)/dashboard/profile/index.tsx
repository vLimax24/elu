import React, { useState } from "react";
import { View, Image, Pressable } from "react-native";
import { api } from "@/convex/_generated/api";
import { useQuery } from "convex/react";
import NotificationSetup from "@/components/Notifications/NotificationPermissionSwitch";
import { Button } from "@/components/ui/button";
import { Text } from "@/components/ui/text";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { i18n } from "@/lib/i18n";
import { ChevronRight } from "lucide-react-native";

const index = () => {
  const myUser = useQuery(api.users.getMyUser);
  const [checked, setChecked] = React.useState(false);

  const profileImage = myUser?.profileImage;
  return (
    <View className="flex-1 justify-between mb-10">
      <View>
        <View>
          <Text className="text-[24px] font-bold text-white mb-8">
            {i18n.t("profile.header")}
          </Text>
        </View>
        {myUser && (
          <View className="flex-row items-center gap-10">
            {profileImage && (
              <Image
                source={{ uri: profileImage }}
                style={{ width: 75, height: 75 }}
                className="rounded-full"
              />
            )}
            <View>
              <View className="flex-row items-center justify-start gap-2">
                <Text className="text-white text-[20px] font-bold">
                  {myUser.name}
                </Text>
                <Button
                  className="bg-transparent"
                  style={{ height: 24, width: 24 }}
                >
                  <ChevronRight color={"#3DD68C"} size={20} />
                </Button>
              </View>
              <Text className="text-grayText">{myUser.email}</Text>
            </View>
          </View>
        )}
      </View>
      <View>
        <Pressable
          className="bg-transparent border-2 border-white rounded-xl py-4 items-center justify-center"
          style={{ paddingHorizontal: 20 }}
        >
          <Text className="text-primaryGreen font-bold">
            {i18n.t("profile.signOut")}
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

export default index;
