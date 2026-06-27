import Ionicons from '@react-native-vector-icons/ionicons/static'
import { Tabs } from 'expo-router'

export default function Layout() {
  return (
    <Tabs backBehavior="none">
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? 'rocket' : 'rocket-outline'}
              size={24}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? 'construct' : 'construct-outline'}
              size={24}
              color={color}
            />
          ),
        }}
      />
    </Tabs>
  )
}
