import { Header } from '@/components/Header'
import React, { FC } from 'react'

export default function DefaultLayout({children}:any) {
  return (
    <div>
        <Header />
        <main>{children}</main>
    </div>
  )
}
