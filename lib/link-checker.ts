"use server"

import fs from "fs"
import path from "path"

// This is a server action that checks if a path exists in the app directory
export async function checkLinkExists(linkPath: string): Promise<boolean> {
  // Remove leading slash and add page.tsx
  const normalizedPath = linkPath.startsWith("/") ? linkPath.substring(1) : linkPath

  // Check different possible file paths
  const possiblePaths = [
    path.join(process.cwd(), "app", normalizedPath, "page.tsx"),
    path.join(process.cwd(), "app", normalizedPath + ".tsx"),
    path.join(process.cwd(), "app", "(main)", normalizedPath, "page.tsx"),
    path.join(process.cwd(), "app", "(main)", normalizedPath + ".tsx"),
  ]

  for (const filePath of possiblePaths) {
    try {
      await fs.promises.access(filePath)
      return true
    } catch {
      // File doesn't exist, continue checking
    }
  }

  return false
}
