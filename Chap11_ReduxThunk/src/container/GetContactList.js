import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import ContactGetList from './../components/Contact/ContactGetList';

import { getContactListAction } from './../modules/contactR';

function GetContactList() {
  const { loading, error, contactList } = useSelector(state => state.contactR);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getContactListAction());
  }, [dispatch]);

  return (
    <div>
      {loading && <div>Loading...</div>}
      {error && <div>Error...</div>}
      {contactList && <ContactGetList contactList={contactList} />}
    </div>
  )
}

export default GetContactList
