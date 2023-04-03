import React, { ReactNode } from 'react'
import { useFavouriteRestaurant } from '../context/FavouriteContext'

interface ModalProps {
    // children: React.ReactNode
    onClose: () => void
    onDelete: () => void
}

export default function Modal({onClose, onDelete}: ModalProps) {

  return (
    <>
    <div className='fixed bg-black/50 top-0 right-0 left-0 bottom-0' onClick={onClose}/>
    <div className='fixed min-w-[400px] min-h-[200px] p-10 rounded bg-white text-black top-40 left-1/2 -translate-x-1/2'>
       {/* {children} */}
       {/* <h1 className='text-center mb-10'>Are you sure ?</h1>
          <div className='flex justify-center gap-20'>
              <button className='border rounded px-4 py-2 bg-green-500' onClick={() => removeItem(restaurant.id)}>Yes</button>
              <button className='border rounded px-4 py-2 bg-red-500' onClick={() => setModal(false)}>No</button>
          </div> */}
          <h1 className='text-center mb-10'>Are you sure ?</h1>
          <div className='flex justify-center gap-20'>
              <button className='border rounded px-4 py-2 bg-green-500' onClick={onDelete}>Yes</button>
              <button className='border rounded px-4 py-2 bg-red-500' onClick={onClose}>No</button>
          </div>
    </div>
</>
  )
}
