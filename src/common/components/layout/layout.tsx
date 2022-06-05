import { ReactNode } from 'react'
import Header from '../header/header'
import AuthHeader from '../authHeader/authHeader'

type Props = {
  children?: ReactNode
}

const Layout = ({ children }: Props) => (
	<>
		{/* <Header /> */}
		<AuthHeader />
		{children}
	</>
)

export default Layout