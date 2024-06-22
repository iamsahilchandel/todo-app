import Tasks from "@/components/todovex/tasks";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="bg-gradient-to-r from-purple-200 to-orange-200 h-full min-h-screen">
      <h1>Todo App</h1>
      <Button variant={"destructive"}>Click Me!</Button>

      <Tasks />
      <form action={signInAction}>
        <Button variant={"outline"}>Sign In</Button>
      </form>
    </main>
  );
}
