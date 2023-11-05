import { useForm } from "react-hook-form";
import Button from "../../ui/Button";

function CreateReportForm() {
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
      className="text-white flex flex-col gap-5 "
      onSubmit={handleSubmit(onSubmit, onError)}
      type={onCloseModal ? "modal" : "regular"}
    >
         <div className="flex flex-col gap-3.5">
        <label className="font-medium">Select Course</label>
        <select 
        {...register("course_title", {
          required: "This field is required",
        })}
        className="border border-solid border-[#4b5563] bg-[#18212f] py-2 px-4 shadow-sm rounded-lg w-full">
            <option>Company Law</option>
            <option>land Law</option>
            <option>admin Law</option>
        </select>
      </div>

      <div className="flex flex-col gap-3.5">
        <label for="date" className="font-medium">Class Date</label>
        <input
          className="w-[15rem] border border-solid border-[#4b5563] bg-[#18212f] py-2 px-4 shadow-sm rounded-lg"
          type="date"
          id="date"
          {...register("class_date", {
            required: "This field is required",
          })}
        />
        </div>

      <div className="flex gap-3.5">
        <input
          className="border border-solid border-[#4b5563] bg-[#18212f] py-2 px-4 shadow-sm rounded-lg"
          type="checkbox"
          id="held"
          {...register("class_held", {
              required: "This field is required",
            })}
        />
            <label for="held" className="font-medium">Class Held</label>
      </div>

      <div className="flex gap-3.5">
        <input
          className="border border-solid border-[#4b5563] bg-[#18212f] py-2 px-4 shadow-sm rounded-lg"
          type="checkbox"
          id="attended"
          {...register("class-attended", {
              required: "This field is required",
            })}
        />
            <label for="attended" className="font-medium">Class Attended</label>
      </div>

      

      <div className="flex flex-col gap-3.5 py-5">
        {/* type is an HTML attribute! */}
        <Button type="reset" variation="secondary" >
          Cancel
        </Button>
        <Button >
          {isEditSession ? "Edit report" : "Create new report"}
        </Button>
      </div>
    </form>
  );
}

export default CreateReportForm;


