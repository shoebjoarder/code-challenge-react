import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { TodoApp } from "@/components/todo-app";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex flex-1 items-start justify-center px-4 py-10 sm:items-center">
        <TodoApp />
      </main>
      <Footer />
    </>
  );
}
