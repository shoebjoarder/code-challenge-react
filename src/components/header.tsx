import { ListTodo } from "lucide-react";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/70 backdrop-blur-xl">
      <div className="mx-auto flex h-16 w-full max-w-5xl items-center gap-3 px-4 sm:px-6">
        <span className="flex size-9 items-center justify-center rounded-xl bg-linear-to-br from-primary to-primary/70 text-primary-foreground shadow-sm shadow-primary/30 ring-1 ring-primary/20 transition-transform duration-200 hover:scale-105">
          <ListTodo className="size-5" aria-hidden />
        </span>
        <div className="flex flex-col leading-none">
          <span className="text-[0.95rem] font-semibold tracking-tight">
            IKIM Code Challenge
          </span>
          <span className="mt-0.5 text-xs text-muted-foreground">
            A Simple To-Do List
          </span>
        </div>
      </div>
    </header>
  );
}
