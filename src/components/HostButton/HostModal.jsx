// css
import styles from './HostModal.module.css'

const HostModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null

  return (
    <>
      <div className={styles.modal}>
        <p>host game</p>
        <p><span>84032</span></p>
        <button onClick={onClose}>Close</button>
      </div>
    </>
  )

}

export default HostModal