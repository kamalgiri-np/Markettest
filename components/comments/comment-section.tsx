"use client"

import { useState } from "react"
import { MessageSquare } from "lucide-react"

import { CommentForm } from "@/components/comments/comment-form"
import { CommentList } from "@/components/comments/comment-list"
import { useToast } from "@/hooks/use-toast"

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

// Mock comments data
const mockComments: Comment[] = [
  {
    id: "1",
    author: {
      name: "Alex Johnson",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    content:
      "This article provides excellent insights into economic uncertainty. I particularly appreciated the section on scenario planning.",
    date: "2023-05-15T10:30:00Z",
    replies: [
      {
        id: "1-1",
        author: {
          name: "Sarah Williams",
          avatar: "/placeholder.svg?height=40&width=40",
        },
        content:
          "I agree! The scenario planning approach has been invaluable for our organization during recent market fluctuations.",
        date: "2023-05-15T11:45:00Z",
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
      "As someone working in financial services, I found the section on building financial resilience particularly relevant. Would love to see a follow-up article diving deeper into stress-testing financial models.",
    date: "2023-05-14T15:20:00Z",
  },
]

interface CommentSectionProps {
  postId: string
  postSlug: string
}

export function CommentSection({ postId, postSlug }: CommentSectionProps) {
  const [comments, setComments] = useState<Comment[]>(mockComments)
  const { toast } = useToast()

  const handleAddComment = (content: string) => {
    const newComment: Comment = {
      id: `comment-${Date.now()}`,
      author: {
        name: "Current User", // In a real app, this would come from authentication
        avatar: "/placeholder.svg?height=40&width=40",
      },
      content,
      date: new Date().toISOString(),
    }

    setComments([...comments, newComment])
    toast({
      title: "Comment added",
      description: "Your comment has been posted successfully.",
    })
  }

  const handleAddReply = (commentId: string, content: string) => {
    const newReply: Comment = {
      id: `reply-${Date.now()}`,
      author: {
        name: "Current User", // In a real app, this would come from authentication
        avatar: "/placeholder.svg?height=40&width=40",
      },
      content,
      date: new Date().toISOString(),
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
    toast({
      title: "Reply added",
      description: "Your reply has been posted successfully.",
    })
  }

  return (
    <div className="space-y-8">
      <div className="flex items-center gap-2">
        <MessageSquare className="h-5 w-5" />
        <h2 className="text-2xl font-bold">Comments ({comments.length})</h2>
      </div>

      <CommentForm onSubmit={handleAddComment} />

      {comments.length > 0 ? (
        <CommentList comments={comments} onReply={handleAddReply} />
      ) : (
        <p className="text-center text-muted-foreground py-8">Be the first to comment on this article!</p>
      )}
    </div>
  )
}
