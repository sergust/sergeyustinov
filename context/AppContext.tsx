import { createContext, ReactNode, useContext, useState } from 'react'

export type appContextType = {
  showAsideMenu: boolean
  toggleAsideMenu: () => void
  hideAsideMenu: () => void
}

const appContextDefaultValues: appContextType = {
  showAsideMenu: false,
  toggleAsideMenu: () => {},
  hideAsideMenu: () => {},
}

const AppContext = createContext<appContextType>(appContextDefaultValues)

type Props = {
  children: ReactNode
}

export function AppProvider({ children }: Props) {
  const [showAsideMenu, setAsideMenu] = useState(false)
  const toggleAsideMenu = () => setAsideMenu((prevState) => !prevState)
  const hideAsideMenu = () => setAsideMenu(false)

  const value = { showAsideMenu, toggleAsideMenu, hideAsideMenu }
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}

export function useAppContext() {
  return useContext(AppContext)
}
