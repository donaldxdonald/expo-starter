import { NativeTabs } from 'expo-router/unstable-native-tabs'

export default function TabLayout() {
  return (
    <NativeTabs>
      <NativeTabs.Trigger
        name="index"
        options={{
          title: 'Home',
          icon: {
            sf: 'house',
          },
          selectedIcon: {
            sf: 'house.fill',
          },
        }}
      />
      <NativeTabs.Trigger
        name="profile"
        options={{
          title: 'Profile',
          icon: {
            sf: 'person',
          },
          selectedIcon: {
            sf: 'person.fill',
          },
        }}
      />
    </NativeTabs>
  )
}
