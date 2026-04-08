import React from 'react';
import img1 from '../assets/ph2.png';
function StudentReportCard({ name, grade }) {
     const students=[
        {id:1, sname: "Sachin", marks : 90, i:img1},
        {id:2, sname: "Abhishek", marks : 80, i:img1},
        {id:3, sname: "Sakhyam", marks : 85, i:img1},
        {id:4, sname: "Sandeep", marks : 30, i:img1},
        {id:5, sname: "Satyam", marks : 95, i:img1},
        {id:6, sname: "Shashank", marks : 75, i:img1}   


     ]
     return (
        // step1 : page Wrapper (Tailwind){}
        <div className="min-h-screen bg-gray-100 p-6">
            {/* step2 : card Wrapper (Tailwind) */}
            <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md">
                {/* step3 : Title */}
                <h2 className="text-xl font-bold mb-4">
                    Student Report Card
                </h2>
                {/* step4 : Student Details */}
                <ul className='list-disc pl-5 space-y-3'>
                    {/* // html tags ke andar javascript code likhne ke liye {} ka use karte hai */}
                    {students.map((student) => (
                         // step 5 : for each student display name and grade 
                        <li key={student.id} 
                        className ='flex justify-between items-center border p-6 rounded'>
                        {/* // for single line data use span tag */}
                           <div>
                            {/* // step 6 : student name  */}
                            <span className ='text-gray-800 font-medium'>
                                {student.sname}
                            {/* // step 7 : topper badge */}
                            </span>
                            {
                                student.marks >= 90 && (
                                    <span className='ml-2 text-sm text-blue-600'>
                                        (Topper)
                                    </span>
                                )
                            }
                             {/* // step 8 : Conditional rendering for fail/pass */}
                            <span className ={student.marks < 40 ? 'text-green-600 font-semibold' : 'text-red-600 font-semibold'} >
                                {student.marks < 40 ? "Fail":"Pass"}
                            </span>
                            {/* step 8 : image of student  */}
                            {/* // this give error because we cannot directly use image in src attribute we have to import it first and then use it */}
                            {/* <span>
                                {student.i}
                            </span> */} 

                           </div>
                        </li>
                    ))}
                </ul>
            </div>
         </div>
     )
}
export default StudentReportCard;