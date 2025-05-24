import NextAuth from 'next-auth';
import { authConfig } from './auth.config';

// Set NEXTAUTH_URL dynamically if not already set (especially for Vercel Preview deploys)
if (!process.env.NEXTAUTH_URL && process.env.VERCEL_URL) {
    process.env.NEXTAUTH_URL = `https://${process.env.VERCEL_URL}`;
}

export default NextAuth(authConfig).auth;

export const config = {
    matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
};
