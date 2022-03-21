import { Header } from '@/components/Header'
import React from 'react'

export default function DefaultLayout({children}) {
  return (
    <div>
        <Header />
        <main>{children}</main>
    </div>
  )
}
