import { ClerkProvider, UserButton } from '@clerk/nextjs';
import type { Metadata } from 'next';
import { Open_Sans } from 'next/font/google';
import './globals.css';

const font = Open_Sans({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'Discord clone',
    description: 'A clone after the Discord app',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <ClerkProvider>
            <html lang="en">
                <body className={font.className}>
                    <UserButton afterSignOutUrl="/" />
                    {children}
                </body>
            </html>
        </ClerkProvider>
    );
}
