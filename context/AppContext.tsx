import { createContext, ReactNode, useContext, useState } from 'react'

export type appContextType = {
  showAsideMenu: boolean
  toggleAsideMenu: () => void
}

const appContextDefaultValues: appContextType = {
  showAsideMenu: false,
  toggleAsideMenu: () => {},
}

const AppContext = createContext<appContextType>(appContextDefaultValues)

type Props = {
  children: ReactNode
}

export function AppProvider({ children }: Props) {
  const [showAsideMenu, setAsideMenu] = useState(false)
  const toggleAsideMenu = () => setAsideMenu((prevState) => !prevState)

  const value = { showAsideMenu, toggleAsideMenu }
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}

export function useAppContext() {
  return useContext(AppContext)
}
