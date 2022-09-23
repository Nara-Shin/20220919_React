
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getContactAction } from './../../modules/contactR';

function AddContact(props) {
    const { goUpdate } = props;
    const { loading, error, contact } = useSelector(state => state.contactR);
    const dispatch = useDispatch();

    const params = useParams();

    useEffect(() => {
        dispatch(getContactAction(params.no));
    }, [dispatch, params])

    return (
        <div>
            {loading && <div>Loading...</div>}
            {error && <div>Error...</div>}
            {contact && (
                <>
                    <h3>Get Contact</h3>

                    <div>
                        Name: <input type="text" className="form-control" disabled
                            defaultValue={contact && contact.name} />
                        Tel: <input type="text" className="form-control" disabled
                            defaultValue={contact && contact.tel} />
                        Address: <input type="text" className="form-control" disabled
                            defaultValue={contact && contact.address} />
                    </div>
                    <br />
                    <button className="btn btn-outline-primary" onClick={goUpdate}>수정</button>
                    <button className="btn btn-outline-primary">삭제</button>
                </>
            )}

        </div>
    )
}

export default AddContact
