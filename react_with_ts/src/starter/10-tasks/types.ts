export type Task = {
  id: number;
  description: string;
  isCompleted: boolean;
};

export type addTask = (task: Task) => void;
