import React from "react";

function AddContact(props) {
  const { updateContact, contact, changeString } = props

  return (
    <div>
      <h3>Update Contact</h3>

      <div>
        Name: <input type="text" className="form-control" name="name"
          value={contact && contact.name} onChange={changeString} />
        Tel: <input type="text" className="form-control" name="tel"
          value={contact && contact.tel} onChange={changeString} />
        Address: <input type="text" className="form-control" name="address"
          value={contact && contact.address} onChange={changeString} />
      </div>
      <br />
      <button className="btn btn-outline-primary" onClick={() => updateContact(contact)}>UPDATE</button>
    </div>
  );
}
export default AddContact;
