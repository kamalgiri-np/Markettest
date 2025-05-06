"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Link from "next/link"
import { checkLinkExists } from "@/lib/link-checker"
import { cn } from "@/lib/utils"

interface SmartLinkProps {
  href: string
  children: React.ReactNode
  className?: string
  fallbackHref?: string
  onClick?: () => void
}

export function SmartLink({ href, children, className, fallbackHref = "/", onClick }: SmartLinkProps) {
  const [linkExists, setLinkExists] = useState(true)
  const [checkedLink, setCheckedLink] = useState(false)

  useEffect(() => {
    const checkLink = async () => {
      // Only check internal links that aren't anchors
      if (href.startsWith("/") && !href.startsWith("/#")) {
        const exists = await checkLinkExists(href)
        setLinkExists(exists)
      }
      setCheckedLink(true)
    }

    checkLink()
  }, [href])

  if (!checkedLink) {
    // Return a placeholder while checking
    return <span className={className}>{children}</span>
  }

  // If link doesn't exist, use fallback
  const finalHref = linkExists ? href : fallbackHref

  return (
    <Link
      href={finalHref}
      className={cn(className, !linkExists && "cursor-not-allowed opacity-70")}
      onClick={(e) => {
        if (!linkExists) {
          e.preventDefault()
          console.warn(`Link to ${href} does not exist, redirecting to ${fallbackHref}`)
        }
        onClick?.()
      }}
    >
      {children}
    </Link>
  )
}
