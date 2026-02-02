"use client"

import './BottomDivider.scss'

export default function BottomDivider({ className = '' }) {
  return (
    <div className={`bottomDivider ${className}`}>
      <div className="dividerLine" />
      <div className="dividerPattern" />
      <div className="dividerLine" />
    </div>
  )
}
