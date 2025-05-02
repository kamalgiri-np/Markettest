"use client"

import { useState } from "react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { formatDistanceToNow } from "date-fns"

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

interface CommentListProps {
  comments: Comment[]
  onReply: (commentId: string, content: string) => void
  isNested?: boolean
}

export function CommentList({ comments, onReply, isNested = false }: CommentListProps) {
  const [replyingTo, setReplyingTo] = useState<string | null>(null)
  const [replyContent, setReplyContent] = useState<string>("")

  const handleReply = (commentId: string) => {
    setReplyingTo(replyingTo === commentId ? null : commentId)
    setReplyContent("")
  }

  const handleSubmitReply = (commentId: string) => {
    if (replyContent.trim()) {
      onReply(commentId, replyContent)
      setReplyingTo(null)
      setReplyContent("")
    }
  }

  return (
    <div className={`space-y-6 ${isNested ? "ml-12 mt-4" : ""}`}>
      {comments.map((comment) => (
        <div key={comment.id} className="relative">
          <div className="flex items-start gap-4">
            <Avatar className="h-10 w-10">
              <AvatarImage src={comment.author.avatar || "/placeholder.svg"} alt={comment.author.name} />
              <AvatarFallback>{comment.author.name.charAt(0)}</AvatarFallback>
            </Avatar>
            <div className="flex-1 space-y-2">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">{comment.author.name}</p>
                  <p className="text-sm text-gray-500">
                    {formatDistanceToNow(new Date(comment.date), { addSuffix: true })}
                  </p>
                </div>
                <Button variant="ghost" size="sm" onClick={() => handleReply(comment.id)}>
                  Reply
                </Button>
              </div>
              <div className="prose prose-sm max-w-none">
                <p>{comment.content}</p>
              </div>

              {replyingTo === comment.id && (
                <div className="mt-4 space-y-4">
                  <Textarea
                    placeholder="Write your reply..."
                    value={replyContent}
                    onChange={(e) => setReplyContent(e.target.value)}
                    className="min-h-[100px]"
                  />
                  <div className="flex justify-end gap-2">
                    <Button variant="outline" size="sm" onClick={() => setReplyingTo(null)}>
                      Cancel
                    </Button>
                    <Button size="sm" onClick={() => handleSubmitReply(comment.id)}>
                      Submit Reply
                    </Button>
                  </div>
                </div>
              )}
            </div>
          </div>

          {comment.replies && comment.replies.length > 0 && (
            <CommentList comments={comment.replies} onReply={onReply} isNested={true} />
          )}
        </div>
      ))}
    </div>
  )
}
