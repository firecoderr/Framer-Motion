import React from "react";
import TodoItem from "./TodoItem";
import { AnimatePresence, motion } from "framer-motion";

const TodoList = ({ todos, deleteItem }) => {
  if (!todos?.length)
    return (
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-center text-2xl"
      >
        The list is empty!
      </motion.h1>
    );

  return (
    <motion.ul layout className="flex flex-col gap-2">
      <AnimatePresence>
        {todos.map((todo) => {
          return (
            <TodoItem deleteItem={deleteItem} key={todo?.id} todo={todo} />
          );
        })}
      </AnimatePresence>
    </motion.ul>
  );
};

export default TodoList;
