import React from "react";

async function addTodo({ text }) {
  const { data, error } = await supabase.from("TodoList").insert([{ text }]);

  if (error) throw new Error(error.message);

  return data;
}

const AddForm = ({ formRef }) => {
  return (
    <form
      onSubmit={(e) => addTodo(formRef.current.value)}
      className="flex bg-green-300 rounded-md justify-stretch items-stretch gap-3 border p-3 w-full"
    >
      <input ref={formRef} type="text" className="w-full p-3 rounded-md" />
      <button className="bg-black text-white px-5 rounded-md">Add</button>
    </form>
  );
};

export default AddForm;
