import type { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";

// Define authentication options using NextAuthOptions interface
export const authOptions: NextAuthOptions = {
    // Customize authentication pages
    pages: {
        // signIn: '/auth/signin',
        // signOut: '/auth/signout',
        error: '/auth/error', // Error code passed in query string as ?error=
    },
    // Configure session management
    session: {
        strategy: "jwt", // Use JSON Web Tokens (JWT) for session management
    },
    // added secret key
    secret: process.env.NEXTAUTH_SECRET,
    // Configure authentication providers
    providers: [
        GoogleProvider({
            // Configure Google authentication provider with environment variables
            clientId: process.env.GOOGLE_CLIENT_ID as string,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
        }),
        // GithubProvider({
        //     clientId: process.env.GITHUB_APP_CLIENT_ID as string,
        //     clientSecret: process.env.GITHUB_APP_CLIENT_SECRET as string,
        // }),
        // CredentialsProvider({}), // Include a Credentials provider (username/password)
    ],
};