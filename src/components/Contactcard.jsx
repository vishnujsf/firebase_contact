import { deleteDoc,doc } from "firebase/firestore";
import React from "react";
import { HiOutlineUserCircle } from "react-icons/hi";
import { IoMdTrash } from "react-icons/io";
import { RiEditCircleLine } from "react-icons/ri";
import { db } from "../config/firebase";
import UseDisclouse from "../Hooks/UseDisclouse";
import AddAndUpdateContact from "./AddAndUpdateContact";
import {toast} from "react-toastify";

const Contactcard = ({contact}) => {
  const {isOpen,onClose,onOpen}= UseDisclouse()

  const deleteContact = async (id) => {
    try {
      await deleteDoc(doc(db,"contacts",id))
      toast.success("Contact Deleted Successfully")
      
    } catch (error) {
      console.log(error)
      
    }

    
  }
  
  return (
    <>
    <div>
      <div
        key={contact.id}
        className=" m-2 p-2 bg-yellow-400 flex rounded-lg items-center justify-between"
      >
        <HiOutlineUserCircle className="text-4xl text-orange-900 " />
        <div className="">
          <h2 className="font-bold">{contact.name}</h2>
          <p className="text-sm">{contact.email}</p>
        </div>
        <div className="flex">
          <IoMdTrash onClick={()=>deleteContact(contact.id)} className="text-4xl" />
          <RiEditCircleLine onClick={onOpen} className="text-4xl text-orange-900" />
        </div>
      </div>
    </div>
    <AddAndUpdateContact isUpdate contact={contact} isOpen={isOpen} onClose={onClose}/>
    </>
  );
};

export default Contactcard;
