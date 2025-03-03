import React from "react";
import { motion } from "framer-motion";

const TodoItem = ({ todo, deleteItem }) => {
  return (
    <motion.li
      layout
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ x: -50, opacity: 0 }}
      transition={{ duration: 0.15 }}
      className="p-2 border flex gap-3 items-start border-black rounded-md"
    >
      <p className="text-justify w-full">{todo?.name}</p>

      <button
        // onClick={() => deleteItem(index)}
        className="border border-red-600 hover:bg-red-600 hover:text-white text-red-600 rounded-md p-1"
      >
        delete
      </button>
    </motion.li>
  );
};

export default TodoItem;
