import React, { useState, useCallback } from "react";
import produce from 'immer';
// npm i immer

function A08Immer() {
  const [person, setPerson] = useState({
    name: "",
    info: {
      address: "",
      tel: [10, 20, 30],
      etc: {
        one: "",
        two: "",
      },
    },
  });

  const changeName = useCallback(() => {
    setPerson(person => {
      return { ...person, name: '흥부' }
    })
  }, []);
  const changeAddress = useCallback(add => {
    setPerson(person => ({
      ...person,
      info: {
        ...person.info,
        address: add
      }
    }))
  }, []);
  const changeOne = useCallback(() => {
    setPerson(person => ({
      ...person,
      info: {
        ...person.info,
        etc: {
          ...person.info.etc,
          one: '복잡하다.....'
        }
      }
    }))
  }, []);
  const addArray = useCallback(() => {
    const random = Math.ceil(Math.random() * 100);
    setPerson(person => ({
      ...person,
      info: {
        ...person.info,
        tel: person.info.tel.concat(random)
      }
    }))
  }, []);

  // immer
  const changeNameImmer = useCallback(() => {
    setPerson(person => produce(person, draft => {
      draft.name = '방자';
    }))
  }, []);

  const changeAddressImmer = useCallback(add => {
    setPerson(person => produce(person, draft => {
      draft.info.address = add;
    }))
  }, []);
  const changeOneImmer = useCallback(() => {
    setPerson(person => produce(person, draft => {
      draft.info.etc.one = '간단하네...';
    }))
  }, []);

  // Array
  const addArrayImmer = useCallback(() => {
    const random = Math.ceil(Math.random() * 100);
    setPerson(person => produce(person, draft => {
      draft.info.tel.push(random);      // 기존 JavaScript의 동일 객체 제어 방식 그대로 사용
    }))
  }, []);
  const updateArrayImmer = useCallback((index, value) => {
    setPerson(person => produce(person, draft => {
      draft.info.tel[index] = value;
    }))
  }, []);
  const deleteArrayImmer = useCallback(index => {
    setPerson(person => produce(person, draft => {
      draft.info.tel.splice(index, 1);
    }))
  }, []);

  return (
    <div>
      <h3>A08. Immer</h3>

      Name: {person.name}
      <br />

      Address: {person.info.address}
      <br />

      One: {person.info.etc.one}
      <br />

      Ary:{" "}
      {person.info.tel.map((item, i) => (
        <span key={i}>{item} </span>
      ))}
      <br />

      <button onClick={changeName}>Name</button>
      <button onClick={() => changeAddress('Seoul')}>Address</button>
      <button onClick={changeOne}>One</button>
      <button onClick={addArray}>ADD</button>
      <br />

      <button onClick={changeNameImmer}>Name</button>
      <button onClick={() => changeAddressImmer('Busan')}>Address</button>
      <button onClick={changeOneImmer}>One</button>

      <button onClick={addArrayImmer}>ADD</button>
      <button onClick={() => updateArrayImmer(1, 200)}>UPDATE</button>
      <button onClick={() => deleteArrayImmer(1)}>DELETE</button>
    </div>
  );
}
export default A08Immer;
