export class CreateTodoDto {
  readonly name: string;
  readonly priority: number;
  readonly description: string;
  readonly done: boolean;
}