import { useState } from 'react'

// components
import JoinModal from "./JoinModal"

const JoinButton = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openModal = () => setIsModalOpen(true)
  const closeModal =() => setIsModalOpen(false)
  return (
    <>
      <button onClick={openModal}>Join</button>
      <JoinModal isOpen={isModalOpen} onClose={closeModal} />
    </>
  )
}

export default JoinButton