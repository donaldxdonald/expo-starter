import { useUniwind, Uniwind } from 'uniwind'

export function useColorScheme() {
  const { theme } = useUniwind()
  const colorScheme = theme === 'dark' ? 'dark' : 'light'

  return {
    colorScheme,
    isDarkColorScheme: colorScheme === 'dark',
    setColorScheme: Uniwind.setTheme,
    toggleColorScheme: () => {
      Uniwind.setTheme(Uniwind.currentTheme === 'dark' ? 'light' : 'dark')
    },
  }
}
