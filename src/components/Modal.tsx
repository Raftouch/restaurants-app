import React, { ReactNode } from 'react'
import { useFavouriteRestaurant } from '../context/FavouriteContext'

interface ModalProps {
    children: React.ReactNode
    // onClose: () => void
}

export default function Modal({children}: ModalProps) {

  return (
    <>
    <div className='fixed bg-black/50 top-0 right-0 left-0 bottom-0'/>
    <div className='fixed min-w-[400px] min-h-[200px] p-10 rounded bg-white text-black top-40 left-1/2 -translate-x-1/2'>
       {children}
    </div>
</>
  )
}
