import NextAuth, { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { loginRequest } from './api';
import { TLoginData } from "./types"

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      id: 'login',
      type: 'credentials',
      credentials: {
        email: { label: 'Email', type: 'text' },
        password: { label: 'Password', type: 'password' },
      },

      async authorize(credentials): Promise<TLoginData> {
        try {
          const data = await loginRequest({
            email: credentials?.email,
            password: credentials?.password,
          });
          return data;
        } catch (error: any) {
          if (error.response.status === 422) {
            throw new Error(error.response.data.message);
          }

          throw new Error(
            typeof error.response.data === 'string'
              ? error.response.data
              : error.response.data?.message
          );
        }
      },
    }),
  ],

  pages: {
    signIn: '/',
    signOut: '/',
  },
  session: {
    maxAge: 2 * 60 * 60,
  },
  callbacks: {
    async signIn({ user }) {
      if (user) return true;
      return false;
    },


    async jwt({token, user}) {
      const data = {...token, ...user}
      return data
    },

    async session({ session, token }) {
      const tok = token as unknown as TLoginData
      session = {
        expires: tok.token.expires,
        user: {
          id: tok.user.id,
          name: tok.user.name,
          email: tok.user.email,
          token: {
            access_token: tok.token.value
          }
        },
      };
      return session;
    },
  },
};

export default NextAuth(authOptions);
