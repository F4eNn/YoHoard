import './globals.css'
import { Inter } from 'next/font/google'

import { ProviderMui } from '@/config/ProviderMui'
import { Nav } from '@/components/Nav/Nav'
import { Pannel } from '@/components/Nav/Pannel'
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
	title: 'YoHoard',
	description: 'Generated by create next app',
}
export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang='en'>
			<body className={inter.className}>
				<ProviderMui>
					<Pannel />
					{children}
				</ProviderMui>
			</body>
		</html>
	)
}