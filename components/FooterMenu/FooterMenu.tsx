import styles from './Footer.module.css'

export default function FooterMenu() {
  return (
    <div>
      <div className="container">
        <div className="d-flex justify-content-center">
          <div className={`col-2 col-offset-1 py-5 ${styles.menuBox}`}>Clock</div>
          <div className={`col-2 py-5 ${styles.menuBox}`}>Alarm</div>
          <div className={`col-2 py-5 ${styles.menuBox}`}>Stopwatch</div>
          <div className={`col-2 col-offset-1 py-5 ${styles.menuBox}`}>Timer</div>
        </div>
      </div>
    </div>
  )
}

