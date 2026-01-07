import type { Theme } from '@react-navigation/native'
import type { QueryClient } from '@tanstack/react-query'
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from '@react-navigation/native'
import { QueryClientProvider } from '@tanstack/react-query'

import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { SafeAreaProvider } from 'react-native-safe-area-context'

const LIGHT_THEME: Theme = {
  ...DefaultTheme,
}

const DARK_THEME: Theme = {
  ...DarkTheme,
}

export function AppProvider({
  children,
  queryClient,
  isDarkColorScheme,
}: {
  children: React.ReactNode
  queryClient: QueryClient
  isDarkColorScheme: boolean
}) {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider value={isDarkColorScheme ? DARK_THEME : LIGHT_THEME}>
        <GestureHandlerRootView style={{ flex: 1 }}>
          <SafeAreaProvider>{children}</SafeAreaProvider>
        </GestureHandlerRootView>
      </ThemeProvider>
    </QueryClientProvider>
  )
}
