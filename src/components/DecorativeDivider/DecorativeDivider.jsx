"use client"

export default function DecorativeDivider({ className = '' }) {
  return (
    <div className={`DecorativeDivider ${className}`}>
      <div className="dividerLine" />
      <div className="dividerPattern" />
      <div className="dividerLine" />
    </div>
  )
}
