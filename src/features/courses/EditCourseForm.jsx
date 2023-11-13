import Button from "../../ui/Button";
import { useState } from "react";
import { useEditCourse } from "./useEditCourse";
import SpinnerMini from "../../ui/SpinnerMini";

function CreateCourseForm({onCloseModal, course}) {
  const {id: courseId, course_title,course_priority, department: course_department, course_description } = course

    const [courseTitle, setCourseTitle] = useState(course_title)
    const [department, setDepartment] = useState(course_department)
    const [coursePriority, setCoursePriority] = useState(course_priority)
    const [courseDescription, setCourseDescription] = useState(course_description)
    const {isEditing, editCourse} = useEditCourse()
  function handleSubmit(e) {
    e.preventDefault()
    if(!courseTitle || !department || !courseDescription) return;
    editCourse({courseDescription,courseTitle, coursePriority,department, courseId}, {
      onSuccess: () => {
        onCloseModal?.();
      }
    })
    
  }

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
          disabled={isEditing}
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
          disabled={isEditing}
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
          disabled={isEditing}
          value={courseDescription}
          onChange={(e) => setCourseDescription(e.target.value)}
        />
      </div>

      <div className="flex gap-3.5">
        <input
          className="border border-solid border-[#4b5563] bg-[#18212f] py-2 px-4 shadow-sm rounded-lg"
          type="checkbox"
          id="priority"
          disabled={isEditing}
          checked={coursePriority}
          onChange={(e) => setCoursePriority(!coursePriority)}
        />
            <label htmlFor="priority" className="font-medium">Compulsory</label>
      </div>
      <div className="flex flex-col gap-3.5 py-5">
        <Button type="reset" variation="secondary"  onClick={() => onCloseModal?.()}>
          Cancel
        </Button>
        <div className="flex justify-center gap-3.5 py-1">
        <Button >
        {!isEditing ? "Edit Course" : <SpinnerMini />}
        </Button>
        </div>
      </div>
    </form>
  );
}

export default CreateCourseForm;
