import create from "zustand";

const useStore = create((set, get) => ({
  users: [],
  fetchUsers: () => {
    fetch("http://localhost:4000/users")
      .then(res => res.json())
      .then(allUser => set({ users: allUser }));
  },

  selectedUser: null,
  setSelectedUser: userId => {
    set({ selectedUser: userId });
  },

  todos: [],
  fetchTodos: id => {
    fetch(`http://localhost:4000/users/${id}/todos`)
      .then(res => res.json())
      .then(todos => {
        set({ todos: todos.map(todo => todo.content) });
      });
  },

  addTodos: todo => {
    set({ todos: [...get().todos, todo] });
  },

  handleSubmit: e => {
    e.preventDefault();
    get().addTodos(e.target.todo.value);
    e.target.reset();
  },

  logOut: () => {
    set({ selectedUser: null });
  },
}));

export default useStore;
