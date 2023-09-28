// import { useState } from "react";
import Button from "../../ui/Button";
import Modal from "../../ui/Modal";
import CreateCabinForm from "./CreateCabinForm";
function AddCabin() {
  return (
    <div>
      <Modal>
        <Modal.Open opens="cabin-form">
          <Button>Add new cabin</Button>
        </Modal.Open>
        <Modal.Window name="cabin-form">
          <CreateCabinForm />
        </Modal.Window>
      </Modal>
    </div>
  );
}

// function AddCabin() {
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   return (
//     <div>
//       <Button onClick={() => setIsModalOpen((show) => !show)}>
//         Add new cabin
//       </Button>
//       {isModalOpen && (
//         <Modal onClose={() => setIsModalOpen(false)}>
//           <CreateCabinForm onClose={() => setIsModalOpen(false)} />
//         </Modal>
//       )}
//     </div>
//   );
// }

export default AddCabin;
