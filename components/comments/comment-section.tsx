"use client"

import { useState } from "react"
import { MessageSquare } from "lucide-react"

import { CommentForm } from "@/components/comments/comment-form"
import { CommentList } from "@/components/comments/comment-list"

interface Comment {
  id: string
  author: {
    name: string
    avatar: string
  }
  content: string
  date: string
  replies?: Comment[]
}

interface CommentSectionProps {
  postId: string
  postSlug: string
}

export function CommentSection({ postId, postSlug }: CommentSectionProps) {
  // In a real app, this would be fetched from an API
  const [comments, setComments] = useState<Comment[]>([
    {
      id: "1",
      author: {
        name: "Alex Johnson",
        avatar: "/placeholder.svg?height=40&width=40",
      },
      content:
        "This article provides excellent insights on remote leadership. I've implemented several of these strategies with my team and seen significant improvements in communication and productivity.",
      date: "2 days ago",
      replies: [
        {
          id: "1-1",
          author: {
            name: "Sarah Johnson",
            avatar: "/placeholder.svg?height=40&width=40",
          },
          content:
            "Thank you for your feedback, Alex! I'm glad to hear these strategies have been helpful for your team.",
          date: "1 day ago",
        },
      ],
    },
    {
      id: "2",
      author: {
        name: "Michael Chen",
        avatar: "/placeholder.svg?height=40&width=40",
      },
      content:
        "I particularly appreciated the section on creating intentional social connections. This is often overlooked but so crucial for remote team cohesion.",
      date: "3 days ago",
    },
  ])

  const addComment = (content: string) => {
    const newComment: Comment = {
      id: `comment-${Date.now()}`,
      author: {
        name: "You", // In a real app, this would be the logged-in user
        avatar: "/placeholder.svg?height=40&width=40",
      },
      content,
      date: "Just now",
    }

    setComments([newComment, ...comments])
  }

  const addReply = (commentId: string, content: string) => {
    const newReply: Comment = {
      id: `reply-${Date.now()}`,
      author: {
        name: "You", // In a real app, this would be the logged-in user
        avatar: "/placeholder.svg?height=40&width=40",
      },
      content,
      date: "Just now",
    }

    const updatedComments = comments.map((comment) => {
      if (comment.id === commentId) {
        return {
          ...comment,
          replies: [...(comment.replies || []), newReply],
        }
      }
      return comment
    })

    setComments(updatedComments)
  }

  return (
    <div>
      <div className="flex items-center gap-2 mb-6">
        <MessageSquare className="h-5 w-5" />
        <h2 className="text-xl font-bold">Comments ({comments.length})</h2>
      </div>

      <CommentForm onSubmit={addComment} placeholder="Share your thoughts..." />

      <div className="mt-8">
        <CommentList comments={comments} onReply={addReply} />
      </div>
    </div>
  )
}
