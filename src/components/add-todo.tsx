"use client";

import { useState } from "react";
import { Plus, PencilLine } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

type AddTodoProps = {
  handleAddTodo: (text: string) => void;
};

// * AddTodo component
// * Task 6: Continues
export function AddTodo(props: AddTodoProps) {
  // * Task 6: Destructure the prop, then create a state `addTask` 
  // and initialize it with an empty string.


  // * Task 6: Continues to the Add button below

  // * Task 7: Starts here
  // Create a function `handleChange` that takes an `event` argument and updates
  // the `addTask` state with the value entered in the text field.


  // * Task 7: Continues to the Input component below

  return (
    <div className="flex items-center gap-2">
      <div className="relative flex-1">
        <PencilLine
          className="pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2 text-muted-foreground/70"
          aria-hidden
        />
        <Input
          placeholder="Add a to-do…"
          aria-label="Add a to-do"
          className="h-11 rounded-xl pl-9 text-base shadow-sm transition-all focus-visible:ring-primary/30 md:text-sm"
          // * Task 7: Continues
          // Assign an event handler that calls the `handleChange` function to update the state with the input value.

          
          // * Task 7: Ends here
        />
      </div>
      <Button
        type="button"
        className="h-11 rounded-xl px-4 shadow-sm shadow-primary/20 transition-all hover:-translate-y-0.5 hover:shadow-md hover:shadow-primary/25 active:translate-y-0"
        // * Task 6: Continue
        // Assign an event handler that calls add function resetting the 
        // input field to an empty string.

        
        // * Task 6: Ends here
      >
        <Plus
          className="size-4 transition-transform group-hover/button:rotate-90"
          aria-hidden
        />
        Add
      </Button>
    </div>
  );
}
