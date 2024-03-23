// css
import styles from './JoinModal.module.css'

const JoinModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null

  return (
    <>
      <div className={styles.modal}>
        <p>join game</p>
        <input 
          type="text"
          placeholder='room number'
        />
        <button onClick={onClose}>Close</button>
      </div>
    </>
  )

}

export default JoinModal