import React from 'react'

export default function RoleCard({ title, desc, cta, hoverInfo }) {
  return (
    <div className="role-card" role="region" aria-label={title} tabIndex={0}>
      <h3>{title}</h3>
      <p>{desc}</p>
      <div className="hover-info" aria-hidden="false">{hoverInfo}</div>
      <div className="card-actions">
        <button className="btn btn-outline" aria-label={`Login as ${title}`}>{cta}</button>
      </div>
    </div>
  )
}
