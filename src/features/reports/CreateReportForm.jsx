import Button from "../../ui/Button";
import { useState } from "react";
import { useAddReport } from "./useAddReport";

function CreateReportForm({courses, onCloseModal}) {
  const [courseId, setCourseId] = useState(courses[0].id)
  const [classDate, setClassDate] = useState('')
  const [held, setHeld] = useState(false)
  const [attended, setAttended] = useState(false)

  const {isAdding, addReport} = useAddReport()

  function handleSubmit(e) {
    e.preventDefault()
    if(!courseId || !classDate || !held ) return
    addReport({courseId, classDate, held, attended}, {
      onSuccess:() => {
        onCloseModal?.();
      }
    })
  }



  return (
    <form
      className="text-white flex flex-col gap-5 "
      onSubmit={handleSubmit}
      type={onCloseModal ? "modal" : "regular"}
    >
         <div className="flex flex-col gap-3.5">
        <label className="font-medium">Select Course</label>
       
        <select 
        value={courseId}
        disabled={isAdding}
        onChange={(e) => setCourseId(e.target.value)}
        className="border border-solid border-[#4b5563] bg-[#18212f] py-2 px-4 shadow-sm rounded-lg w-full">
          {courses.map(course => <option value={course.id} key={course.id}>{course.course_title}</option>
       )}
        </select>
      </div>

      <div className="flex flex-col gap-3.5">
        <label htmlFor="date" className="font-medium">Class Date</label>
        <input
          className="w-[15rem] border border-solid border-[#4b5563] bg-[#18212f] py-2 px-4 shadow-sm rounded-lg"
          type="date"
          id="date"
          disabled={isAdding}
          value={classDate}
          onChange={(e) => setClassDate(e.target.value)}
        />
        </div>

      <div className="flex gap-3.5">
        <input
          className="border border-solid border-[#4b5563] bg-[#18212f] py-2 px-4 shadow-sm rounded-lg"
          type="checkbox"
          id="held"
          disabled={isAdding}
          checked={held}
          onChange={(e) => setHeld(!held)}
        />
            <label htmlFor="held" className="font-medium">Class Held</label>
      </div>

      <div className="flex gap-3.5">
        <input
          className="border border-solid border-[#4b5563] bg-[#18212f] py-2 px-4 shadow-sm rounded-lg"
          type="checkbox"
          id="attended"
          disabled={isAdding}
          checked={attended}
          onChange={(e) => setAttended(!attended)}
        />
            <label htmlFor="attended" className="font-medium">Class Attended</label>
      </div>

      

      <div className="flex flex-col gap-3.5 py-5">
        {/* type is an HTML attribute! */}
        <Button type="reset" variation="secondary" >
          Cancel
        </Button>
        <Button >
          Create new report
        </Button>
      </div>
    </form>
  );
}

export default CreateReportForm;


