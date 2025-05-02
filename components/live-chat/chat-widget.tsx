"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { MessageCircle, X, Send, MinusCircle } from "lucide-react"

export function LiveChatWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [isMinimized, setIsMinimized] = useState(false)
  const [messages, setMessages] = useState<{ text: string; isUser: boolean }[]>([
    { text: "👋 Hi there! How can I help you today?", isUser: false },
  ])
  const [inputValue, setInputValue] = useState("")

  const toggleChat = () => {
    if (!isOpen) {
      setIsOpen(true)
      setIsMinimized(false)
    } else {
      setIsOpen(false)
    }
  }

  const minimizeChat = () => {
    setIsMinimized(!isMinimized)
  }

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault()
    if (!inputValue.trim()) return

    // Add user message
    setMessages([...messages, { text: inputValue, isUser: true }])
    setInputValue("")

    // Simulate response after a short delay
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          text: "Thanks for your message! Our team will get back to you soon.",
          isUser: false,
        },
      ])
    }, 1000)
  }

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {isOpen && (
        <Card className={`mb-4 w-80 shadow-lg transition-all duration-300 ${isMinimized ? "h-14" : "h-96"}`}>
          <div className="flex items-center justify-between bg-primary p-3 text-white">
            <div className="flex items-center gap-2">
              <MessageCircle size={18} />
              <span className="font-medium">Live Chat Support</span>
            </div>
            <div className="flex gap-2">
              <button onClick={minimizeChat} className="text-white hover:text-gray-200">
                {isMinimized ? <MessageCircle size={18} /> : <MinusCircle size={18} />}
              </button>
              <button onClick={toggleChat} className="text-white hover:text-gray-200">
                <X size={18} />
              </button>
            </div>
          </div>

          {!isMinimized && (
            <>
              <div className="h-64 overflow-y-auto p-3 space-y-3">
                {messages.map((message, index) => (
                  <div
                    key={index}
                    className={`${message.isUser ? "ml-auto bg-primary text-white" : "mr-auto bg-gray-100"} max-w-[80%] rounded-lg p-2`}
                  >
                    {message.text}
                  </div>
                ))}
              </div>
              <form onSubmit={handleSendMessage} className="border-t p-3 flex gap-2">
                <Input
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="Type your message..."
                  className="flex-1"
                />
                <Button type="submit" size="icon">
                  <Send size={18} />
                </Button>
              </form>
            </>
          )}
        </Card>
      )}

      <Button onClick={toggleChat} className="rounded-full h-14 w-14 shadow-lg" variant="primary">
        <MessageCircle size={24} />
      </Button>
    </div>
  )
}

// Make sure we export the component as both default and named export
export default LiveChatWidget
