"use client"

import './Loading.scss'

export default function Loading({ text = 'Loading...', size = 48 }) {
    return (
        <div className="site-loading" role="status" aria-live="polite">
            <span
                className="spinner"
                style={{ width: `${size}px`, height: `${size}px` }}
                aria-hidden
            />
            {text && <span className="loadingText">{text}</span>}
        </div>
    )
}
