import {createSlice, PayloadAction} from "@reduxjs/toolkit";

export type CommentT = {
    id: number,
    writer: string,
    text: string,
}
export type CommentsT = CommentT[]

export type CardT = {
    id: number,
    writer: string,
    title: string,
    description: string,
    comments: CommentsT,
}

export type CardsT = CardT[]

export type ColumnT = {
    id: number,
    title: string,
    cards: CardsT,
}

export type ColumnsT = ColumnT[]

export type DataT = {
    columns: ColumnsT,
}

const initialState = {
    columns: [
        {
            id: 1,
            title: 'TODO',
            cards: [{
                id: 1,
                writer: 'Жека',
                title: 'прочитать книгу',
                description: '',
                comments: [
                    {id: 1, writer: 'Андрей', text: 'кто какую читал?'},
                    {id: 2, writer: 'Клим', text: 'Я не умею читать('}
                ]
            },
                {
                    id: 2,
                    writer: 'Жека',
                    title: 'списать с ментором',
                    description: '',
                    comments: [
                        {id: 1, writer: 'Андрей', text: 'когда напишешь?'},
                    ]
                },
                {
                    id: 3,
                    writer: 'Рома',
                    title: 'позвонить Маше',
                    description: '',
                    comments: [
                        {id: 1, writer: 'Андрей', text: 'передай привет'},
                    ]
                }
            ]
        },
        {
            id: 2,
            title: 'In Progress',
            cards: [{
                id: 1,
                writer: 'Андрей',
                title: 'зделать Trello',
                description: '',
                comments: [
                    {id: 1, writer: 'Коля', text: 'они не новые'},
                    {id: 2, writer: 'Аня', text: 'не осуждаю'}
                ]
            },

                {
                    id: 2,
                    writer: 'Жека',
                    title: 'изменить размер главного блока',
                    description: '',
                    comments: [
                        {id: 1, writer: 'Андрей', text: 'как успехи?'},
                    ]
                },
                {
                    id: 3,
                    writer: 'Рома',
                    title: 'посмотреть курс о react native',
                    description: '',
                    comments: [
                        {id: 1, writer: 'Андрей', text: 'передай привет'},
                    ]
                }
            ]
        },
        {
            id: 3,
            title: 'Testing',
            cards: [{
                id: 1,
                writer: 'Алиса',
                title: 'пишу тесты',
                description: '',
                comments: [
                    {id: 1, writer: 'Михаил', text: 'тестов много не бывает'},
                    {id: 2, writer: 'Аня', text: 'не осуждаю'}
                ]
            },

                {
                    id: 2,
                    writer: 'Жека',
                    title: 'переписать на styled components',
                    description: '',
                    comments: [
                        {id: 1, writer: 'Жека', text: 'почему не module?'},
                    ]
                }
            ]
        },
        {
            id: 4,
            title: 'Done',
            cards: [{
                id: 1,
                writer: 'Марат',
                title: 'почитать о Redux',
                description: '',
                comments: [
                    {id: 1, writer: 'Клим', text: 'не забудь про redux-toolkit'},
                    {id: 2, writer: 'Аня', text: 'I enjoy props'},
                    {id: 1, writer: 'Клим', text: 'не забудь про redux-toolkit'},
                ]
            },

                {
                    id: 2,
                    writer: 'Жека',
                    title: 'разобраться с redux-toolkit',
                    description: '',
                    comments: [
                        {id: 1, writer: 'Глеб', text: 'крутая штука!'},
                        {id: 2, writer: 'Аня', text: 'хочу-хочу'},
                        {id: 3, writer: 'Лиля', text: 'и я'},
                    ]
                },
                {
                    id: 3,
                    writer: 'Рома',
                    title: 'почитать о redux-ducks',
                    description: '',
                    comments: [
                        {id: 1, writer: 'Лёня', text: 'утка?'},
                        {id: 2, writer: 'Катя', text: 'кря)'},
                    ]
                }
            ]
        },

    ]
} as DataT

const columnSlice = createSlice({
    name: 'сolumn',
    initialState,
    reducers: {
        editColumnName(state, action: PayloadAction<{ columnId: number, nameChangeColumn: any }>) {
            const findColumn = state.columns.find(item => item.id === action.payload.columnId);
            if (findColumn) {
                findColumn.title = action.payload.nameChangeColumn;
            }
        },
        deleteCard(state, action: PayloadAction<{ columnId: number, cardId: number }>) {
            const findColumn = state.columns.find(item => item.id === action.payload.columnId);
            if (findColumn) {
                findColumn.cards = findColumn.cards.filter(item => item.id !== action.payload.cardId);
            }
        },
        addCard(state, action: PayloadAction<{ columnId: number, loginName: any }>) {
            const findColumn = state.columns.find(item => item.id === action.payload.columnId);
            if (findColumn) {
                findColumn.cards.push({
                    id: Date.now(),
                    writer: action.payload.loginName,
                    title: 'новая таска',
                    description: '',
                    comments: []
                });
            }
        },
        editCardName(state, action: PayloadAction<{ columnId: number, cardId: number, cardName: any }>) {
            const findColumn = state.columns.find(item => item.id === action.payload.columnId);
            if (findColumn) {
                const findCard = findColumn.cards.find(item => item.id === action.payload.cardId);
                if (findCard) {
                    findCard.title = action.payload.cardName;
                }
            }
        },
        addDescriptionCard(state, action: PayloadAction<{ columnId: number, cardId: number, description: any }>) {
            const findColumn = state.columns.find(item => item.id === action.payload.columnId);
            if (findColumn) {
                const findCard = findColumn.cards.find(item => item.id === action.payload.cardId);
                if (findCard) {
                    findCard.description = action.payload.description;
                }
            }
        },
        addComment(state, action: PayloadAction<{ columnId: number, cardId: number, comment: string, loginName: any }>) {
            const findColumn = state.columns.find(item => item.id === action.payload.columnId);
            if (findColumn) {
                const findCard = findColumn.cards.find(item => item.id === action.payload.cardId);
                if (findCard) {
                    findCard.comments.push({
                        id: Date.now(),
                        text: action.payload.comment,
                        writer: action.payload.loginName
                    })
                }
            }
        },
        deleteComment(state, action: PayloadAction<{ columnId: number, cardId: number, commentId: number }>) {
            const findColumn = state.columns.find(item => item.id === action.payload.columnId);
            if (findColumn) {
                const findCard = findColumn.cards.find(item => item.id === action.payload.cardId);
                if (findCard) {
                    findCard.comments = findCard.comments.filter(item => item.id !== action.payload.commentId)
                }
            }
        },
        editComment(state, action: PayloadAction<{ columnId: number, cardId: number, commentId: number, text: any }>) {
            const findColumn = state.columns.find(item => item.id === action.payload.columnId);
            if (findColumn) {
                const findCard = findColumn.cards.find(item => item.id === action.payload.cardId);
                if (findCard) {
                    const findComment = findCard.comments.find(item => item.id === action.payload.commentId)
                    if (findComment) {
                        findComment.text = action.payload.text
                    }
                }
            }
        },
    },
})


export const {
    deleteCard, addCard, addComment, deleteComment, editComment,
    addDescriptionCard, editColumnName, editCardName
} = columnSlice.actions
export default columnSlice.reducer

