import EditTodo from '@/components/EditTodo';
import Todo from '@/components/Todo'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="min-h-screen bg-[#F3F3F3] flex w-full">
      <Todo />
      <EditTodo/>
    </main>
  );
}
