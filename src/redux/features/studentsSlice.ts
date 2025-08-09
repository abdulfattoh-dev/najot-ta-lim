import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { IData } from "../../types";

interface StudentsSlice {
    students: IData[],
    updateStudent: IData | null
}

const initialState: StudentsSlice = {
    students: JSON.parse(localStorage.getItem('students') || '[]') || [],
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
            localStorage.setItem('students', JSON.stringify(state.students))
        },
        remove: (state, actions: PayloadAction<number>) => {
            state.students = state.students.filter((student) => student.id != actions.payload)

            localStorage.setItem('students', JSON.stringify(state.students))
        },
        get: (state, actions: PayloadAction<IData>) => {
            state.updateStudent = actions.payload
        },
        update: (state, actions: PayloadAction<IData>) => {
            state.students = state.students.map((student) => student.id == actions.payload.id ? { ...student, ...actions.payload } : student)
            localStorage.setItem('students', JSON.stringify(state.students))
            state.updateStudent = null
        },
    }
})

export const { create, remove, update, get } = StudentsSlice.actions
export default StudentsSlice.reducer