type CommentT = {
    writer: string,
    text: string,
}
type CommentsT = CommentT[]

type CardT ={
    id: number,
    title: string,
    description: string,
    comments: CommentsT,
}
type CardsT = CardT[]

type ColumnT = {
    id: number,
    title: string,
    cards: CardsT,
}
type ColumnsT = ColumnT[]

export type DataT = {
    name: string,
    columns: ColumnsT,
}

export const data: DataT = {
    name: 'Andrew',
    columns: [
        {
            id: 1,
            title: 'TODO',
            cards: [{
                id: 1,
                title: 'read book',
                description: 'I want to read this book',
                comments: [
                    {writer: 'Andrew', text: 'what is it?'},
                    {writer: 'Ira', text: 'I don\'t know'}
                ]
            }]
        },
        {
            id: 2,
            title: 'In Progress',
            cards: [{
                id: 1,
                title: 'read book',
                description: 'I want to read this book',
                comments: [
                    {writer: 'Andrew', text: 'what is it?'},
                    {writer: 'Ira', text: 'I don\'t know'}
                ]
            }]
        },
        {
            id: 3,
            title: 'Testing',
            cards: [{
                id: 1,
                title: 'read book',
                description: 'I want to read this book',
                comments: [
                    {writer: 'Andrew', text: 'what is it?'},
                    {writer: 'Ira', text: 'I don\'t know'}
                ]
            }]
        },
        {
            id: 4,
            title: 'Done',
            cards: [{
                id: 1,
                title: 'read book',
                description: 'I want to read this book',
                comments: [
                    {writer: 'Andrew', text: 'what is it?'},
                    {writer: 'Ira', text: 'I don\'t know'}
                ]
            }]
        },

    ]
}