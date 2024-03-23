
// components
import HostButton from '../HostButton/HostButton'
import JoinButton from '../JoinButton/JoinButton'

// css
import styles from './Sidebar.module.css'

const SideBar = () => {

  return (
    <>
      <div className={styles.sideBar}>
        <HostButton />
        <JoinButton />
      </div>
    </>
  )
}

export default SideBar