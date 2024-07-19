import React from 'react'

export function Header() {
  return (
    <div className="fixed left-0 top-0 flex w-full items-center justify-between rounded-b-md bg-neutral-800 bg-opacity-70 px-4 py-4 md:px-12">
      <a href="/" className="text-base text-white md:text-base">
        JobMatch
      </a>
    </div>
  )
}
