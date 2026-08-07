import 'bulma/css/bulma.css'
import {useState} from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faAngleDown} from "@fortawesome/free-solid-svg-icons"
import {faAngleUp} from "@fortawesome/free-solid-svg-icons"
import type { FranChallengeHand } from "../constants"

type Props = FranChallengeHand & { defaultCollapsed?: boolean }

export default function PointCard({
  name,
  description,
  points,
  probability,
  canComposite,
  isPokerHand,
  defaultCollapsed = true,
}: Props) {
  const [collapsed, setCollapsed] = useState(defaultCollapsed)
  const handType = `${canComposite ? '複合' : '単独'}役${isPokerHand ? '・ポーカー役' : ''}`

  if (isPokerHand) {
    description += '（他のポーカー役とは複合しない）'
  }

  return (
    <>
      <div style={{marginTop: '2rem', width: '80vw', maxWidth: '600px'}}>
        <div className="card">
          <header className="card-header">
            <p className="card-header-title">{name}</p>
            <button
              className="card-header-icon"
              aria-label="toggle content"
              aria-expanded={!collapsed}
              onClick={() => setCollapsed(prev => !prev)}
            >
              <span className="icon">
                <FontAwesomeIcon icon={collapsed ? faAngleDown : faAngleUp} />
              </span>
            </button>
          </header>
          {!collapsed && description && (
            <div className="card-content">
              <p style={{marginBottom: '1rem'}}>{handType}</p>
              <div className="content">{description}</div>
            </div>
          )}
          {!collapsed && points !== undefined && (
            <footer className="card-footer">
              <p className="card-footer-item">
                {points}点
                {probability && (<>（1/{probability}）</>)}
              </p>
            </footer>
          )}
        </div>
      </div>
    </>
  )
}
