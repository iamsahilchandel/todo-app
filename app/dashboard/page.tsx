import React from 'react'
import Tasks from "@/components/todovex/tasks";
import UserProfile from '@/components/todovex/user-profile';

export default function dashboard() {
  return (
    <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
      <h1>You're logged in!</h1>
      <UserProfile />
      <Tasks />
    </div>
  )
}
