"use client"

import type React from "react"

import { useState } from "react"
import { Send } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"

interface CommentFormProps {
  onSubmit: (content: string) => void
  placeholder?: string
  buttonText?: string
  initialValue?: string
  isReply?: boolean
  onCancel?: () => void
}

export function CommentForm({
  onSubmit,
  placeholder = "Write a comment...",
  buttonText = "Post Comment",
  initialValue = "",
  isReply = false,
  onCancel,
}: CommentFormProps) {
  const [content, setContent] = useState(initialValue)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!content.trim()) return

    setIsSubmitting(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 500))

    onSubmit(content)
    setContent("")
    setIsSubmitting(false)

    if (onCancel && isReply) {
      onCancel()
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <Textarea
        placeholder={placeholder}
        value={content}
        onChange={(e) => setContent(e.target.value)}
        className="min-h-[100px]"
        required
      />
      <div className="flex justify-end gap-2">
        {isReply && onCancel && (
          <Button type="button" variant="outline" onClick={onCancel}>
            Cancel
          </Button>
        )}
        <Button type="submit" disabled={isSubmitting || !content.trim()}>
          {isSubmitting ? "Posting..." : buttonText}
          <Send className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </form>
  )
}
