import React, { useState, useCallback, useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import axios from "axios";

import ContactHeader from "./Contact/ContactHeader";
import ContactHome from "./Contact/ContactHome";
import AddContact from "./Contact/AddContact";
import UpdateContact from "./Contact/UpdateContact";
import GetContact from "./Contact/GetContact";
import GetContactList from "./Contact/GetContactList";

function ContactApp() {
  const baseURL = "http://localhost:8000/contacts/";

  const [contactList, setContactList] = useState({ pageno: '', pagesize: '', totalcount: '', contacts: [] });
  const [contact, setContact] = useState({ no: '', name: '', tel: '', address: '', photo: '' });

  const navigate = useNavigate();

  const getContactList = useCallback(async () => {
    try {
      const resp = await axios.get(baseURL, { params: { pageno: 1, pagesize: 10 } })
      setContactList(resp.data);
    } catch (err) {
      console.error(err);
    }
  }, []);

  const getContact = useCallback(async no => {
    try {
      const resp = await axios.get(baseURL + no)
      setContact(resp.data);
      navigate('/getContact')
    } catch (err) {
      console.error(err);
    }
  }, [navigate]);

  const deleteContact = useCallback(async no => {
    try {
      await axios.delete(baseURL + no)
      navigate('/getContactList');
      getContactList();
    } catch (err) {
      console.error(err);
    }
  }, [navigate, getContactList]);



  // 페이지 이동
  const goURL = path => navigate(path);

  useEffect(() => {
    getContactList();
  }, [getContactList])

  return (
    <div>
      <ContactHeader />
      <br />

      <Routes>
        <Route path="/" element={<ContactHome />} />
        <Route path="/getContactList" element={<GetContactList contactList={contactList} getContact={getContact} />} />
        <Route path="/getContact" element={<GetContact contact={contact} goURL={goURL} deleteContact={deleteContact} />} />
        <Route path="/addContact" element={<AddContact />} />
        <Route path="/updateContact" element={<UpdateContact />} />
        <Route path="*" element={<h3>Not Found</h3>} />
      </Routes>
    </div>
  );
}
export default ContactApp;
