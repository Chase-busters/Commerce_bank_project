import type { Metadata } from 'next'
import { Fragment } from 'react';
import { auth } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';

export const metadata: Metadata = {
  title: 'ChaseBuster app',
  description: 'Descriptive description',
}

export default async function AppLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const { userId } = await auth()

  const isSignedIn = !!userId


  if (!isSignedIn) {
    redirect('/sign-in')
  }

  return (
    <Fragment>
      {children}
    </Fragment>
  )
}