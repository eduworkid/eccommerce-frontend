import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getDataOrder } from '../../app/feature/orderSlice';
import { RootState,AppDispatch } from '../../app/store';
import {  MDBBtn, MDBTable, MDBTableHead, MDBTableBody,MDBIcon } from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';
import axios from 'axios';
import swal from 'sweetalert';
const ListOrder: React.FC = () => {
  const { order } = useSelector((state: RootState) => state.order);
  const dispatch: AppDispatch = useDispatch();  
  useEffect(() => {
    dispatch(getDataOrder());
  }, [dispatch]);
  const onDelete = (id: string) => {
    axios.delete(`${import.meta.env.VITE_REACT_APP_API}orders/${id}`);
    swal({
     icon: "success",
     text: "Delete  Berhasil",
   });
   window.location.reload();
 }
  return (
    <div className="">
        <Link to={'/products/add'}> <MDBIcon fas icon="upload" /> tambah data</Link>
    <MDBTable align='middle'>
      <MDBTableHead>
        <tr>
          <th scope='col'>NO</th>
          <th scope='col'>Product Code</th>
          <th scope='col'>Name</th>
          <th scope='col'>Amount</th>
         
          <th scope='col'>Actions</th>
        </tr>
      </MDBTableHead>
      {order.map((or) => (
      <MDBTableBody>
        <tr>
          <td>
            <div className='d-flex align-items-center'>
              <div className='ms-3'>
                <p className='fw-bold mb-1'>{or.or_id}</p>
              </div>
            </div>
          </td>
          <td>
            <p className='fw-bold mb-1'>{or.or_pd_id?.pd_code}</p>
          </td>
          <td>
            <p className='fw-bold mb-1'>{or.or_pd_id?.pd_name}</p>
          </td>
         
          <td>
          <p className='text-muted mb-0'>Rp.{or.or_amount}</p>
          </td>
         
          <td>
            <MDBBtn color='link' rounded size='sm' onClick={() => onDelete(or._id)}>
             Delete
            </MDBBtn>
          </td>
        </tr>
        
      </MDBTableBody>
      ))}
    </MDBTable>
    </div>
  );
}

export default ListOrder;
