import React, { useEffect, useState, type FormEvent } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import type { IData } from '../../../../types'
import { create, update } from '../../../../redux/features/studentsSlice'
import type { RootState } from '../../../../redux'
import { useNavigate } from 'react-router-dom'

const initialState: IData = {
    id: -1,
    fname: '',
    profession: '',
    gender: ''
}

const StudentsCreate = () => {
    const navigate = useNavigate()
    const updateStudent = useSelector((state: RootState) => state.students.updateStudent)
    const dispatch = useDispatch()

    const [formStudent, setFormStudent] = useState<IData>(initialState)

    useEffect(() => {
        if (updateStudent) {
            setFormStudent(updateStudent)
        }
    }, [updateStudent])

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (updateStudent) {
            dispatch(update(formStudent))
        } else {
            const newStudent: IData = {
                ...formStudent,
                id: Date.now()
            };

            dispatch(create(newStudent))
        }

        navigate('/students/all')
        setFormStudent(initialState)
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { value, name } = e.target;
        setFormStudent((p) => ({ ...p, [name]: value }));
    }

    return (
        <div className="my-2 bg-white p-6 rounded-xl">
            <h2 className="text-xl mb-4">Create Student</h2>
            <form onSubmit={handleSubmit} className=" grid md:grid-cols-2 gap-4 " action="">
                <input
                    required
                    name="fname"
                    value={formStudent.fname}
                    onChange={handleChange}
                    className="border border-slate-500 rounded-lg py-2 px-4 "
                    type="text"
                    placeholder="full name"
                />
                <input
                    required
                    name="profession"
                    value={formStudent.profession}
                    onChange={handleChange}
                    className="border border-slate-500 rounded-lg py-2 px-4 "
                    type="text"
                    placeholder="profession"
                />
                <select
                    required
                    name="gender"
                    value={formStudent.gender}
                    onChange={handleChange}
                    className="border border-slate-500 rounded-lg py-2 px-4"
                >
                    <option value="" hidden>
                        Select gender
                    </option>
                    <option value="male">
                        male
                    </option>
                    <option value="female">
                        female
                    </option>
                </select>
                <button className="border cursor-pointer hover:opacity-60 rounded-lg py-2 px-4 bg-[#BC8E5B] text-white">
                    {updateStudent ? "Save" : "Submit"}
                </button>
            </form>
        </div>
    )
}

export default React.memo(StudentsCreate)