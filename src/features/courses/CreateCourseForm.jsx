import { useForm } from "react-hook-form";
import Button from "../../ui/Button";

function CreateCourseForm() {
//   const { isCreating, createCabin } = useCreateCabin();
//   const { isEditing, editCabin } = useEditCabin();
//   const isWorking = isCreating || isEditing;

//   const { id: editId, ...editValues } = cabinToEdit;
//   const isEditSession = Boolean(editId);

  const { register, handleSubmit, reset, getValues, formState } = useForm();
  const { errors } = formState;

  function onSubmit(data) {

  }

  function onError(errors) {
    // console.log(errors);
  }

  const isEditSession = false
  const onCloseModal = false

  return (
    <form
      className="text-white"
      onSubmit={handleSubmit(onSubmit, onError)}
      type={onCloseModal ? "modal" : "regular"}
    >
         <div className="flex flex-col gap-3.5 py-5">
        <label for="name" className="font-medium">Course Name</label>
        <input
          className="border border-solid border-[#4b5563] bg-[#18212f] py-2 px-4 shadow-sm rounded-lg"
          type="text"
          id="name"
          {...register("course_title", {
            required: "This field is required",
          })}
        />
      </div>

      <div className="flex flex-col gap-3.5 py-5">
        <label for="department" className="font-medium">Department</label>
        <input
          className="border border-solid border-[#4b5563] bg-[#18212f] py-2 px-4 shadow-sm rounded-lg"
          type="text"
          id="department"
          {...register("department", {
            required: "This field is required",
          })}
        />
      </div>

      <div className="flex flex-col gap-3.5 py-5">
        <label for="description" className="font-medium">Course Description</label>
        <input
          className="border border-solid border-[#4b5563] bg-[#18212f] py-2 px-4 shadow-sm rounded-lg"
          type="text"
          id="description"
          {...register("course_description", {
            required: "This field is required",
          })}
        />
      </div>

      <div className="flex gap-3.5">
        <input
          className="border border-solid border-[#4b5563] bg-[#18212f] py-2 px-4 shadow-sm rounded-lg"
          type="checkbox"
          id="priority"
          {...register("course_priority", {
              required: "This field is required",
            })}
        />
            <label for="priority" className="font-medium">Course Priority</label>
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
