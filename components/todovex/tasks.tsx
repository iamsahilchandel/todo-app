'use client';
import { api } from "@/convex/_generated/api";
import { useQuery } from "convex/react";

export default function Tasks() {
  const tasks = useQuery(api.tasks.get);
  console.log(tasks);
  return (
    <div>
      <h2>Tasks</h2>
      {tasks?.map((task, idx) => (
        <p key={idx}>{JSON.stringify(task)}</p>
      ))}
    </div>
  );
}
