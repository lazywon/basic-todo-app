export interface TodoForm {
  todo: string;
}

export interface TodoUpdateForm extends TodoForm {
  isCompleted: boolean;
  id: number;
}
