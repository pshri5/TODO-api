export interface Itodo {
    title: String,
    description: String,
    status: TodoStatus,
    createdAt: Date,
    updatedAt: Date
}

export enum TodoStatus{
    PENDING = "Pending",
    IN_PROGRESS = "In-progess",
    COMPLETED = "Completed"
}

export interface ITodoDocument extends Itodo{

}


export interface TodoResponse{
    success: Boolean,
    data: ITodoDocument | ITodoDocument[] | null
}
