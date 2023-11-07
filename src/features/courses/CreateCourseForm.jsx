import { useForm } from "react-hook-form";
import Button from "../../ui/Button";
import { useState } from "react";
import { useCreateCourse } from "./useCreateCourse";

function CreateCourseForm({onCloseModal}) {
    const [courseTitle, setCourseTitle] = useState('')
    const [department, setDepartment] = useState('')
    const [coursePriority, setCoursePriority] = useState(true)
    const [courseDescription, setCourseDescription] = useState('')
    const {isCreating, createCourse} = useCreateCourse()
  function handleSubmit(e) {
    e.preventDefault()
    if(!courseTitle || !department || !courseDescription) return;
    createCourse({courseDescription,courseTitle, coursePriority,department}, {
      onSuccess: () => {
        onCloseModal?.();
      }
    })
    
  }


  const isEditSession = false

  return (
    <form
      className="text-white"
      onSubmit={handleSubmit}
      type={onCloseModal ? "modal" : "regular"}
    >
         <div className="flex flex-col gap-3.5 py-5">
        <label htmlFor="name" className="font-medium">Course Name</label>
        <input
          className="border border-solid border-[#4b5563] bg-[#18212f] py-2 px-4 shadow-sm rounded-lg"
          type="text"
          id="name"
          disabled={isCreating}
          value={courseTitle}
          onChange={(e) => setCourseTitle(e.target.value)}
        />
      </div>

      <div className="flex flex-col gap-3.5 py-5">
        <label htmlFor="department" className="font-medium">Department</label>
        <input
          className="border border-solid border-[#4b5563] bg-[#18212f] py-2 px-4 shadow-sm rounded-lg"
          type="text"
          id="department"
          disabled={isCreating}
          value={department}
          onChange={(e) => setDepartment(e.target.value)}
        />
      </div>

      <div className="flex flex-col gap-3.5 py-5">
        <label htmlFor="description" className="font-medium">Course Description</label>
        <input
          className="border border-solid border-[#4b5563] bg-[#18212f] py-2 px-4 shadow-sm rounded-lg"
          type="text"
          id="description"
          disabled={isCreating}
          value={courseDescription}
          onChange={(e) => setCourseDescription(e.target.value)}
        />
      </div>

      <div className="flex gap-3.5">
        <input
          className="border border-solid border-[#4b5563] bg-[#18212f] py-2 px-4 shadow-sm rounded-lg"
          type="checkbox"
          id="priority"
          disabled={isCreating}
          checked={coursePriority}
          onChange={(e) => setCoursePriority(!coursePriority)}
        />
            <label htmlFor="priority" className="font-medium">Compulsory</label>
      </div>
      <div className="flex flex-col gap-3.5 py-5">
        {/* type is an HTML attribute! */}
        <Button type="reset" variation="secondary" >
          Cancel
        </Button>
        <Button >
          {isEditSession ? "Edit course" : "Create new course"}
        </Button>
      </div>
    </form>
  );
}

export default CreateCourseForm;
