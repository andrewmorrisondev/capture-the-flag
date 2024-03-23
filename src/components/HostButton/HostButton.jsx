import { useState } from 'react'

// components
import HostModal from "./HostModal"

const HostButton = () => {

  const [isModalOpen, setIsModalOpen] = useState(false)

  const openModal = () => setIsModalOpen(true)
  const closeModal =() => setIsModalOpen(false)
  return (
    <>
      <button onClick={openModal}>Host</button>
      <HostModal isOpen={isModalOpen} onClose={closeModal} />
    </>
  )
}

export default HostButton