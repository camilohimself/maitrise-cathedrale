'use client'

import { useState } from 'react'
import { useCookieConsent } from '@/hooks/useCookieConsent'
import styles from './CookieBanner.module.css'

const CookieBanner = () => {
  const { showBanner, acceptAll, acceptEssential } = useCookieConsent()
  const [showInfo, setShowInfo] = useState(false)

  if (!showBanner && !showInfo) return null

  const handleInfoClick = () => setShowInfo(true)
  const handleInfoClose = () => {
    setShowInfo(false)
    acceptAll()
  }

  return (
    <>
      {/* Cookie Banner */}
      {showBanner && (
        <div className={styles.banner}>
          <div className={styles.container}>
            <p className={styles.text}>
              Nous utilisons des cookies pour améliorer votre expérience.{' '}
              <span onClick={handleInfoClick} className={styles.link}>
                En savoir plus
              </span>
            </p>
            <div className={styles.buttons}>
              <button onClick={acceptAll} className={styles.accept}>
                Accepter
              </button>
              <button onClick={acceptEssential} className={styles.refuse}>
                Refuser
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Info Popup */}
      {showInfo && (
        <div className={styles.overlay} onClick={handleInfoClose}>
          <div className={styles.popup} onClick={(e) => e.stopPropagation()}>
            <h2 className={styles.popupTitle}>
              <span>🎼</span> Notre politique de cookies
            </h2>
            <p className={styles.popupSubtitle}>En harmonie avec la LPD suisse</p>

            <div className={styles.cookieTypes}>
              <h3>🍪 Types de cookies utilisés</h3>
              <ul>
                <li><span>♪</span> <strong>Essentiels :</strong> Navigation et sécurité</li>
                <li><span>♪</span> <strong>Analytiques :</strong> Comprendre votre expérience</li>
                <li><span>♪</span> <strong>Fonctionnels :</strong> Préférences</li>
                <li><span>♪</span> <strong>Marketing :</strong> Contenus adaptés</li>
              </ul>
            </div>

            <p className={styles.legal}>
              Conformément à la <strong>LPD</strong>, nous respectons votre vie privée.
            </p>

            <button onClick={handleInfoClose} className={styles.popupButton}>
              J'ai compris
            </button>
          </div>
        </div>
      )}
    </>
  )
}

export default CookieBanner
