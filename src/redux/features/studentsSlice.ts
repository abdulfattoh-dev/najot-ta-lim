import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { IData } from "../../types";

interface StudentsSlice {
    students: IData[],
    updateStudent: IData | null
}

const initialState: StudentsSlice = {
    students: [],
    updateStudent: null
}

export const StudentsSlice = createSlice({
    name: 'students',
    initialState,
    reducers: {
        create: (state, actions: PayloadAction<IData>) => {
            state.students = [
                ...state.students,
                actions.payload
            ]
        },
        remove: (state, actions: PayloadAction<number>) => {
            state.students = state.students.filter((student) => student.id != actions.payload)
        },
        get: (state, actions: PayloadAction<IData>) => {
            state.updateStudent = actions.payload
        },
        update: (state, actions: PayloadAction<IData>) => {
            state.students = state.students.map((student) => student.id == actions.payload.id ? { ...student, ...actions.payload } : student)
            state.updateStudent = null
        },
    }
})

export const { create, remove, update, get } = StudentsSlice.actions
export default StudentsSlice.reducer