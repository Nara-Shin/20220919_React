import React, { useState, useCallback } from "react";
import axios from 'axios';

function A01Axios() {
  const baseURL = "http://localhost:8000/contacts/";
  const [data, setData] = useState();

  const getContactList = useCallback(() => {
    axios.get(baseURL, { params: { pageno: 1, pagesize: 10 } })
      .then(resp => {
        // console.log(resp.data);
        setData(JSON.stringify(resp.data, '', 4))
      })
      .catch(err => console.error(err));
  }, []);

  const getContactListAsync = useCallback(async () => {
    try {
      const resp = await axios.get(baseURL, { params: { pageno: 2, pagesize: 10 } })
      // console.log(resp);
      setData(JSON.stringify(resp.data, '', 4))
    } catch (err) {
      console.error(err);
    }
  }, []);

  const getContact = useCallback(no => {
    /*
    axios.get(baseURL + no, {headers: { 'Content-Type': 'application/json', }})
      .then(resp => setData(JSON.stringify(resp.data, '', 4)))
      .catch(err => console.error(err));
    */
    axios({
      method: 'get',
      url: baseURL + no,
      data: {},
      headers: { 'Content-Type': 'application/json', }
    })
      .then(resp => setData(JSON.stringify(resp.data, '', 4)))
      .catch(err => console.error(err));
  }, []);

  const addContact = useCallback(() => {
    const data = {
      "name": "강감찬",
      "tel": "010-2222-3339",
      "address": "서울시"
    };

    axios.post(baseURL, data, { headers: { 'Content-Type': 'application/json', } })
      .then(resp => setData(JSON.stringify(resp.data, '', 4)))
      .catch(err => console.error(err));
  }, []);

  const updataContact = useCallback(() => {
    const data = {
      "no": 1663832080899,
      "name": "이순신",
      "tel": "010-1111-3339",
      "address": "서울시"
    };

    axios.put(baseURL + data.no, data, { headers: { 'Content-Type': 'application/json', } })
      .then(resp => setData(JSON.stringify(resp.data, '', 4)))
      .catch(err => console.error(err));
  }, []);

  const deleteContact = useCallback(no => {
    axios.delete(baseURL + no)
      .then(resp => setData(JSON.stringify(resp.data, '', 4)))
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <h3>A01 Axios GET</h3>
      <button onClick={getContactList}>DATA LIST</button>
      <button onClick={getContactListAsync}>DATA LIST ASYNC</button>
      <button onClick={() => getContact(100)}>GET</button>
      <button onClick={addContact}>ADD</button>
      <button onClick={updataContact}>UPDATE</button>
      <button onClick={() => deleteContact(1663832080899)}>DELETE</button>
      <br />
      <br />

      <textarea cols="100" rows="15" defaultValue={data}></textarea>
    </div>
  );
}
export default A01Axios;
