import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import { FiSearch } from "react-icons/fi";
import { FaCirclePlus } from "react-icons/fa6";
import { db } from "./config/firebase";
import "./App.css";
import { collection, getDocs } from "firebase/firestore";
import { HiOutlineUserCircle } from "react-icons/hi";
import { IoMdTrash } from "react-icons/io";
import { RiEditCircleLine } from "react-icons/ri";
import Contactcard from "./components/Contactcard";
import Modal from "./components/Modal";
import AddAndUpdateContact from "./components/AddAndUpdateContact";
import UseDisclouse from "./Hooks/UseDisclouse";
import { ToastContainer, toast } from 'react-toastify';


function App() {
  const [contacts, setContacts] = useState([]);
  const {isOpen,onClose,onOpen}= UseDisclouse()

  

  // useEffect = (() => {

  const getContacts = async () => {
    try {
      const contactRef = collection(db, "contacts");
      const contactSnapshot = await getDocs(contactRef);
      const contactLists = contactSnapshot.docs.map((doc) => {
        return {
          id: doc.id,
          ...doc.data(),
        };
      });
      // console.log(contactLists)
      setContacts(contactLists);
    } catch (error) {
      console.log(error);
    }
  };

  getContacts();

  // },[]);

  return (
    <>
      <div className="mx-auto max-w-[370px] p-2">
        <Navbar />
        <div className="">
          <div className="flex relative items-center gap-2">
            <FiSearch className="absolute text-white text-3xl ml-1" />
            <input
              type="text"
              className="h-10 flex-grow rounded-md border border-white text-white pl-9"
            />
            <FaCirclePlus onClick={onOpen} className="text-white text-4xl cursor-pointer" />
          </div>
        </div>
        <div className="mt-4">
          {contacts.map((contact) => (
            <Contactcard key={contact.id} contact={contact}/>
          ))}
        </div>
        <AddAndUpdateContact onClose={onClose} isOpen={isOpen}/>
        <ToastContainer position="bottom-center"/>
      </div>
      
    </>
  );
}

export default App;
