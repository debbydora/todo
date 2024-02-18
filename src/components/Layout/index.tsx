import { ReactNode } from "react"
import SideNav from "../Todo"

type LayoutProps = {
    children: ReactNode
}

const Layout = ({children}:LayoutProps) => {
  return (
      <>
       <SideNav/>   
      {children}
    </>
  )
}

export default Layout;
