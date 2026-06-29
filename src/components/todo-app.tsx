"use client";

import { useState } from "react";

import type { Todo } from "@/lib/types";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { AddTodo } from "@/components/add-todo";
import { TodoList } from "@/components/todo-list";

export function TodoApp() {
  // * Task 1: Starts here
  // Create a state called `todos` and initialize it with an array of four to
  // five objects. Each object has two keys: `id` (a number) and `task` (a string).


  // * Task 1: Ends here

  // * Task 2: Starts here
  // Create a function `handleDeleteTodo` that takes an `id`, uses the filter
  // method to build a list of todos without that id, and updates the state.


  // * Task 2: Ends here

  // * Task 5: Starts here
  // Create a function `handleAddTodo` that takes a `text` argument, builds
  // a new todo object (id from crypto.randomUUID(), task from text), and appends it
  // to the existing `todos` before updating the state.

  
  // * Task 5: Ends here

  return (
    <Card className="w-full max-w-lg gap-0 overflow-hidden p-0 shadow-xl shadow-primary/5 ring-1 ring-border/70 duration-500 animate-in fade-in-0 zoom-in-95 slide-in-from-bottom-2">
      <div className="h-1 w-full bg-linear-to-r from-primary via-primary/70 to-primary/40" />
      <CardHeader className="px-6 pt-6 pb-5">
        <CardTitle className="text-center text-2xl font-semibold tracking-tight">
          <span className="bg-linear-to-br from-foreground to-foreground/60 bg-clip-text text-transparent">
            A Simple To-Do List
          </span>
        </CardTitle>
        <p className="text-center text-sm text-muted-foreground">
          Stay on top of what matters today.
        </p>
      </CardHeader>
      <Separator />
      <CardContent className="flex flex-col gap-5 px-6 py-6">
        {/* // * Task 6: Starts here */}
        {/* Render the AddTodo component and pass the add function as a prop: */}


        {/* // * Task 6: Continues to the AddTodo component */}

        {/* // * Task 3: Starts here */}
        {/* Render the TodoList component and pass `todos` and delete function: */}


        {/* // * Task 3: Continues to the TodoList component */}
      </CardContent>
    </Card>
  );
}
