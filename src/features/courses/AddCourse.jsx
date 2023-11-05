import Button from "../../ui/Button";
import Modal from "../../ui/Modal";
import CreateCourseForm from "./CreateCourseForm";

function AddCourse() {
  return (
    <div>
      <Modal>
        <Modal.Open opens="course-form">
        <Button className="text-[#eef2ff] bg-[#4f46e5] hover:bg-[#4338ca] py-3 px-3 rounded-lg">
            Add new course</Button>
        </Modal.Open>
        <Modal.Window name="course-form">
          <CreateCourseForm />
        </Modal.Window>
      </Modal>
    </div>
  );
}

export default AddCourse;
