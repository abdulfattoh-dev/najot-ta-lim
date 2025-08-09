import React, { useEffect, useState } from 'react'
import TableSkeleton from '../../../../components/ui/TableSkeleton'
import { Trash, Grid2x2, TableOfContents, SquarePen } from 'lucide-react'
import maleImage from "../../../../assets/male.png";
import femaleImage from "../../../../assets/female.png";
import { useDispatch, useSelector } from 'react-redux';
import type { RootState } from '../../../../redux';
import CardSkeleton from '../../../../components/ui/CardSkeleton';
import { get, remove } from '../../../../redux/features/studentsSlice';
import type { IData } from '../../../../types';
import { useNavigate } from 'react-router-dom';

const StudentsAll = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const students = useSelector((state: RootState) => state.students.students)

    const [style, setStyle] = useState<boolean>(JSON.parse(localStorage.getItem('style') || 'true'))

    useEffect(() => {
        localStorage.setItem('style', JSON.stringify(style))
    }, [style])

    const handleUpdate = (student: IData) => {
        dispatch(get(student))
        navigate('/students')
    }

    return (
        <div className='ml-7'>
            <div className='flex justify-between items-center mb-4'>
                <h2 className="text-xl">All Students</h2>
                <button onClick={() => setStyle(!style)} className='p-3 rounded-lg bg-[#BC8E5B] text-white flex justify-center items-center hover:opacity-60'>{style ? <Grid2x2 /> : <TableOfContents />}</button>
            </div>
            {
                style ? (
                    <div>
                        <table className="w-full bg-white border border-gray-700 rounded-xl overflow-hidden">
                            <thead className="border-b-1">
                                <tr>
                                    <th className="py-3 px-6 text-left">#</th>
                                    <th className="py-3 px-6 text-left">Full Name</th>
                                    <th className="py-3 px-6 text-left">Profession</th>
                                    <th className="py-3 px-6 text-left">Gender</th>
                                    <th>Update</th>
                                    <th>Delete</th>
                                </tr>
                            </thead>
                            {
                                students.length == 0 ? <TableSkeleton /> : (
                                    <tbody>
                                        {
                                            students?.map((student, index) => (
                                                <tr key={student.id} className='border-b-1 hover:bg-gray-50'>
                                                    <td className="py-3 px-6">{index + 1}</td>
                                                    <td className="py-3 px-6">{student.fname}</td>
                                                    <td className="py-3 px-6">{student.profession}</td>
                                                    <td className="py-3 px-6">{student.gender}</td>
                                                    <td onClick={() => handleUpdate(student)} className="text-center"><button><SquarePen /></button></td>
                                                    <td onClick={() => dispatch(remove(student.id))} className="text-center"><button><Trash /></button></td>
                                                </tr>
                                            ))
                                        }
                                    </tbody>
                                )
                            }
                        </table>
                    </div>
                ) : (
                    <>
                        {
                            students.length == 0 ? <CardSkeleton /> : (
                                <div className="grid lg:grid-cols-5 md:grid-cols-3 gap-3">
                                    {
                                        students?.map((student) => (
                                            <div key={student.id} className="p-4 bg-white rounded-xl">
                                                <div className="relative">
                                                    <img
                                                        className="size-40 object-cover mx-auto rounded-full"
                                                        src={student.gender == "male" ? maleImage : femaleImage}
                                                        alt=""
                                                    />
                                                </div>
                                                <div className="text-center mt-4">
                                                    <h3 className="font-bold text-xl">{student.fname}</h3>
                                                    <p className="my-2 text-gray-500">{student.profession}</p>

                                                    <div className="flex gap-2 mt-4">
                                                        <button onClick={() => handleUpdate(student)} className="py-0.5 border rounded-lg text-sm flex-1 text-green-700 hover:bg-green-700 hover:text-white">
                                                            Update
                                                        </button>
                                                        <button onClick={() => dispatch(remove(student.id))} className="py-0.5 border rounded-lg text-sm flex-1 text-red-500 hover:bg-red-500 hover:text-white">
                                                            Delete
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        ))
                                    }
                                </div>
                            )
                        }
                    </>
                )
            }
        </div>
    )
}

export default React.memo(StudentsAll)