import React, { useState } from "react";
import Modal from "react-modal"

function Card(props) {
  let subtitle;
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };
  const [modalIsOpen, setIsOpen] = useState(false);
  const openModal=()=> {
    setIsOpen(true);
  }
  const closeModal =()=> {
    setIsOpen(false);
  }
  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = "#f00";
  }
  const deleting = ()=>{
    let newArray= props.array
    console.log(newArray)
    newArray.splice(el=> el.Name !== props.info.Name)
    
  }
  console.log(props.array);

  return (
    <div className="card">
    <div><button  onClick={openModal}>{props.info.Trash }</button>
    <Modal isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal">
          <p ref={(_subtitle) => (subtitle = _subtitle)}>ایا شما از حذف کردن این مخاطب مطمئن هستید؟</p>
        <button onClick={closeModal}>خیر</button>
        <button onClick={deleting}>بلی</button>
        </Modal>
        
    <button> {props.info.Edit}</button>
    </div>
    <p>{props.info.Name} {props.info.Family}</p>
    <p>{props.info.Option}</p>
    <p>{props.info.Phone}</p>
    <p>{props.info.Email}</p>
  </div>
  )
}

export default Card
