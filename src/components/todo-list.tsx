"use client";

import { Trash2, CheckCircle2 } from "lucide-react";

import type { Todo } from "@/lib/types";
import { Button } from "@/components/ui/button";

type TodoListProps = {
  todos: Todo[];
  handleDeleteTodo: (id: string) => void;
};

// * Todo component
// * Task 3: Continue
export function TodoList(props: TodoListProps) {
  // * Task 3: Destructure the props here


  // * Task 3: Ends here

  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-center justify-between">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-2.5 py-1 text-xs font-medium text-primary">
          <span className="size-1.5 rounded-full bg-primary" />
          {todos?.length ?? 0} {todos?.length === 1 ? "to-do" : "to-dos"}
        </span>
      </div>

      {todos?.length ? (
        <ul className="flex flex-col gap-2.5">
          {todos.map((todo) => (
            <li
              key={todo.id}
              className="group/item relative flex items-center gap-3 overflow-hidden rounded-xl border border-border/70 bg-card px-4 py-3 shadow-sm transition-all duration-300 ease-out animate-in fade-in-0 slide-in-from-top-1 hover:-translate-y-0.5 hover:border-primary/30 hover:shadow-md hover:shadow-primary/10"
            >
              <span className="absolute inset-y-2 left-0 w-0.5 origin-top scale-y-0 rounded-full bg-primary transition-transform duration-200 group-hover/item:scale-y-100" />
              <span className="size-2 shrink-0 rounded-full bg-primary/30 transition-colors duration-200 group-hover/item:bg-primary" />
              <span className="flex-1 text-sm wrap-break-word text-foreground/90">
                {todo.task}
              </span>
              <Button
                variant="ghost"
                size="icon"
                aria-label={`Delete "${todo.task}"`}
                className="size-8 shrink-0 text-muted-foreground/60 transition-all duration-200 hover:scale-110 hover:bg-destructive/10 hover:text-destructive active:scale-95"
                // * Task 4: Starts here
                // Add an event handler that calls the delete function with the todo's id

                
                // * Task 4: Ends here
              >
                <Trash2 className="size-4" aria-hidden />
              </Button>
            </li>
          ))}
        </ul>
      ) : (
        <div className="flex flex-col items-center gap-2 rounded-xl border border-dashed border-border py-10 text-center duration-300 animate-in fade-in-0 zoom-in-95">
          <CheckCircle2 className="size-8 text-primary/40" aria-hidden />
          <p className="text-sm font-medium">All clear!</p>
          <p className="text-xs text-muted-foreground">
            No to-dos yet — add one above to get started.
          </p>
        </div>
      )}
    </div>
  );
}
