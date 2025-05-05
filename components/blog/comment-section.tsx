"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Separator } from "@/components/ui/separator"

interface CommentSectionProps {
  articleSlug: string
}

interface Comment {
  id: string
  author: {
    name: string
    avatar?: string
  }
  content: string
  date: string
  replies?: Comment[]
}

export function CommentSection({ articleSlug }: CommentSectionProps) {
  const [comment, setComment] = useState("")

  // Mock comments data - in a real app, this would come from an API
  const comments: Comment[] = [
    {
      id: "1",
      author: {
        name: "Alex Johnson",
        avatar: "/placeholder.svg?height=40&width=40",
      },
      content:
        "This article provides excellent insights. I particularly appreciated the section on strategic opportunities during economic uncertainty.",
      date: "2 days ago",
    },
    {
      id: "2",
      author: {
        name: "Sarah Williams",
        avatar: "/placeholder.svg?height=40&width=40",
      },
      content:
        "I've implemented some of these strategies in my business and they've been very effective. Would love to see a follow-up article on implementing these ideas in small businesses specifically.",
      date: "1 week ago",
      replies: [
        {
          id: "2-1",
          author: {
            name: "Michael Chen",
            avatar: "/placeholder.svg?height=40&width=40",
          },
          content:
            "Thanks for your comment, Sarah! I'm planning a follow-up specifically for small businesses. Stay tuned!",
          date: "6 days ago",
        },
      ],
    },
  ]

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real app, this would send the comment to an API
    console.log("Submitting comment:", comment)
    setComment("")
    alert("Comment submitted! (This is a demo)")
  }

  return (
    <div className="space-y-8">
      <h2 className="text-2xl font-bold">Comments ({comments.length})</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <Textarea
          placeholder="Share your thoughts..."
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          className="min-h-[100px]"
        />
        <div className="flex justify-end">
          <Button type="submit" disabled={!comment.trim()}>
            Post Comment
          </Button>
        </div>
      </form>

      <Separator />

      <div className="space-y-6">
        {comments.map((comment) => (
          <div key={comment.id} className="space-y-4">
            <div className="flex gap-4">
              <Avatar>
                <AvatarImage src={comment.author.avatar || "/placeholder.svg"} alt={comment.author.name} />
                <AvatarFallback>{comment.author.name.charAt(0)}</AvatarFallback>
              </Avatar>
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="font-medium">{comment.author.name}</span>
                  <span className="text-xs text-muted-foreground">{comment.date}</span>
                </div>
                <p className="text-sm">{comment.content}</p>
                <Button variant="ghost" size="sm" className="text-xs">
                  Reply
                </Button>
              </div>
            </div>

            {comment.replies && comment.replies.length > 0 && (
              <div className="ml-12 space-y-4 border-l-2 pl-4">
                {comment.replies.map((reply) => (
                  <div key={reply.id} className="flex gap-4">
                    <Avatar className="h-8 w-8">
                      <AvatarImage src={reply.author.avatar || "/placeholder.svg"} alt={reply.author.name} />
                      <AvatarFallback>{reply.author.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="font-medium">{reply.author.name}</span>
                        <span className="text-xs text-muted-foreground">{reply.date}</span>
                      </div>
                      <p className="text-sm">{reply.content}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
