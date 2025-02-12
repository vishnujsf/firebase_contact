import React from "react";
import Modal from "./Modal";
import { Formik, Form, Field } from "formik";
import { addDoc,collection,updateDoc } from "firebase/firestore";
import { db } from "../config/firebase";
import { doc } from "firebase/firestore";
import { toast } from "react-toastify";




const AddAndUpdateContact = ({ onClose, isOpen,isUpdate,contact }) => {
  const addContact = async (contact) => {
    try {
      const contactRef = collection(db,"contacts")
      await addDoc(contactRef,contact)
      onClose()
     toast.success("Contact added Succesfully")
      
    } catch (error) {
      console.log(error)
    }
  }

    const updateContact = async (contact,id) => {
      try {
        const contactRef = doc(db,"contacts",id)
        await updateDoc(contactRef,contact)
        onClose()
        toast.success("Contact Updated Succesfully")
        
      } catch (error) {
        console.log(error)
      }
}


  return (
    <div>
      <Modal isOpen={isOpen} onClose={onClose}>
        <Formik 
        initialValues={isUpdate
          ?{
            name: contact.name,
            email: contact.email,
          } 
        :{
          name: "",
          email: "",
        }}
        onSubmit={(values)=>{
          console.log(values)
         isUpdate ?  updateContact(values,contact.id) : addContact(values)
        }}
        >
        <Form className="flex flex-col ">
          <div className="flex flex-col gap-1">
          <label htmlFor="name">Name</label>
          <Field name="name" className="h-10 border"/>
          </div>
          <div className="flex flex-col gap-1">
          <label htmlFor="email">Email</label>
          <Field name="email" className="h-10 border"/>
          </div>
          <button className="bg-yellow-500 border self-end m-2 py-1 px-3 ">{isUpdate ? "Update" : "Add"} Contact</button>
        </Form>
        </Formik>
        
      </Modal>
    </div>
  );
};


export default AddAndUpdateContact;
