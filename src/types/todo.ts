export interface TodoForm {
  todo?: string;
}

export interface TodoUpdateForm extends TodoForm {
  isCompleted?: boolean;
  id: number;
}

export interface TodoData {
  id: number;
  todo: string;
  isCompleted: boolean;
  userId: number;
}
