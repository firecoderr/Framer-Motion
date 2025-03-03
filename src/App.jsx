import React, { useRef } from "react";
import supabase from "./supabase-client";
import { useQuery } from "@tanstack/react-query";
import AddForm from "./components/AddForm";
import TodoList from "./components/TodoList";

// Fetch todos
async function fetchTodos() {
  const { data, error } = await supabase.from("TodoList").select("*");

  if (error) throw new Error(error.message);

  return data;
}

const App = () => {
  const {
    data: todos,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["todos"],
    queryFn: fetchTodos,
  });

  const formRef = useRef(null);

  // Content //////////////////////////////////////////
  const content = isLoading ? <h1>...Loading</h1> : <TodoList todos={todos} />;

  if (error) return <p className="text-center">{error.message}</p>;

  return (
    <div className="p-5">
      <div className="max-w-[500px] flex-col gap-5 w-full mx-auto flex justify-center pt-10">
        <AddForm formRef={formRef} />
        {content}
      </div>
    </div>
  );
};

export default App;
