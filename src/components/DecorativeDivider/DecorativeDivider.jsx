"use client"

import './DecorativeDivider.scss'

export default function DecorativeDivider({ className = '' }) {
  return (
    <div className={`DecorativeDivider ${className}`}>
      <div className="dividerLine" />
      <div className="dividerPattern" />
      <div className="dividerLine" />
    </div>
  )
}
