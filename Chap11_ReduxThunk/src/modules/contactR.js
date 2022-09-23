import { handleActions } from "redux-actions";
import axios from "axios";

const GET_CONTACTLIST = "CONTACT/GET_CONTACTLIST";
const GET_CONTACTLIST_SUCCESS = "CONTACT/GET_CONTACTLIST_SUCCESS";
const GET_CONTACTLIST_FAILURE = "CONTACT/GET_CONTACTLIST_FAILURE";

const GET_CONTACT = "CONTACT/GET_CONTACT";
const GET_CONTACT_SUCCESS = "CONTACT/GET_CONTACT_SUCCESS";
const GET_CONTACT_FAILURE = "CONTACT/GET_CONTACT_FAILURE";

const ADD_CONTACT = "CONTACT/ADD_CONTACT";
const ADD_CONTACT_SUCCESS = "CONTACT/ADD_CONTACT_SUCCESS";
const ADD_CONTACT_FAILURE = "CONTACT/ADD_CONTACT_FAILURE";

const baseURL = "http://localhost:8000/contacts/";
const baseLONG = "http://localhost:8000/contacts_long/";

// Action
export const getContactListAction = () => async dispatch => {
  dispatch({ type: GET_CONTACTLIST })
  try {
    const resp = await axios.get(baseLONG, { params: { pageno: 1, pagesize: 10 } });
    await dispatch({ type: GET_CONTACTLIST_SUCCESS, payload: resp.data });
  } catch (err) {
    console.error(err);
    await dispatch({ type: GET_CONTACTLIST_FAILURE, payload: err });
  }
}

export const getContactAction = no => async dispatch => {
  dispatch({ type: GET_CONTACT })
  try {
    const resp = await axios.get(baseURL + no);
    await dispatch({ type: GET_CONTACT_SUCCESS, payload: resp.data });
  } catch (err) {
    console.error(err);
    await dispatch({ type: GET_CONTACT_FAILURE, payload: err });
  }
}

const init = {
  loading: false,
  contactList: null,
  contact: null,
  error: null,
};
const contactR = handleActions(
  {
    // Get List
    [GET_CONTACTLIST]: (state, action) => {
      return { ...state, loading: true, contactList: null, error: null };
    },
    [GET_CONTACTLIST_SUCCESS]: (state, action) => {
      return { ...state, loading: false, contactList: action.payload };
    },
    [GET_CONTACTLIST_FAILURE]: (state, action) => {
      return { ...state, loading: false, contactList: null, error: action.payload };
    },
    // Get
    [GET_CONTACT]: (state, action) => {
      return { ...state, loading: true, contact: null, error: null };
    },
    [GET_CONTACT_SUCCESS]: (state, action) => {
      return { ...state, loading: false, contact: action.payload };
    },
    [GET_CONTACT_FAILURE]: (state, action) => {
      return { ...state, loading: false, contact: null, error: action.payload };
    },
    // Add
    [ADD_CONTACT]: (state, action) => {
      return;
    },
    [ADD_CONTACT_SUCCESS]: (state, action) => {
      return;
    },
    [ADD_CONTACT_FAILURE]: (state, action) => {
      return;
    },
  },
  init
);
export default contactR;
