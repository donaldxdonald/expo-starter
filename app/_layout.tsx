import { QueryClient } from '@tanstack/react-query'
import { SplashScreen, Stack } from 'expo-router'
import { useEffect, useState } from 'react'
import { useColorScheme } from '../hooks/useColorScheme'
import { AppProvider } from '../providers/AppProvider'
import '@/global.css'

void SplashScreen.preventAutoHideAsync()

function useInitializeApp() {
  const { colorScheme, setColorScheme, isDarkColorScheme } = useColorScheme()
  const [isReady, setIsReady] = useState(false)

  useEffect(() => {
    const initializeTheme = async () => {
      setColorScheme(colorScheme)
    }

    void Promise.allSettled([initializeTheme()]).then(() => {
      setIsReady(true)
      void SplashScreen.hideAsync()
    })
  }, [colorScheme, setColorScheme])

  return {
    isReady,
    isDarkColorScheme,
  }
}

function RootNavigator() {
  return (
    <>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      </Stack>
    </>
  )
}

export default function RootLayout() {
  const queryClient = new QueryClient()
  const { isDarkColorScheme } = useInitializeApp()
  return (
    <AppProvider
      queryClient={queryClient}
      isDarkColorScheme={isDarkColorScheme}
    >
      <RootNavigator></RootNavigator>
    </AppProvider>
  )
}
