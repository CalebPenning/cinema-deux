import { ReactNode } from 'react'
import Header from '../header/header'

type Props = {
  children?: ReactNode
}

const Layout = ({ children }: Props) => (
  <>
    <Header />
    {children}
  </>
)

export default Layout