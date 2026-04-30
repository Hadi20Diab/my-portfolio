"use client"

export default function TitleBox({ children, className = '' }) {
  return (
    <div className={`titleBox ${className}`}>
      {children}
    </div>
  )
}
