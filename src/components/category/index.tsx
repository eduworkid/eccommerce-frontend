import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getDataCategory } from '../../app/feature/categorySlice';
import { RootState,AppDispatch } from '../../app/store';
import { Link } from 'react-router-dom';
import {  MDBBtn, MDBTable, MDBTableHead, MDBTableBody,MDBIcon } from 'mdb-react-ui-kit';
import axios from 'axios';
import swal from 'sweetalert';
const CategoryComponent: React.FC = () => {
  const { category } = useSelector((state: RootState) => state.category);
  const dispatch: AppDispatch = useDispatch();
 
  useEffect(() => {
    dispatch(getDataCategory());
  }, [dispatch]);
  const onDelete = (id: string) => {
    axios.delete(`${import.meta.env.VITE_REACT_APP_API}category/${id}`, {
      headers: {
        Authorization: localStorage.getItem("Authorization"),
      },
    });
    swal({
     icon: "success",
     text: "Delete  Berhasil",
   });
   window.location.reload();
 }
  return (
    <div className="">
        <Link to={'/category/add'}> <MDBIcon fas icon="upload" /> tambah data</Link>
    <MDBTable align='middle'>
      <MDBTableHead>
        <tr>
          <th scope='col'>NO</th>
          <th scope='col'>Code</th>
          <th scope='col'>Name</th>
          <th scope='col'>Actions</th>
        </tr>
      </MDBTableHead>
      {category.map((cat) => (
      <MDBTableBody>
        <tr>
          <td>
            <div className='d-flex align-items-center'>
              <div className='ms-3'>
                <p className='fw-bold mb-1'>{cat.ct_id}</p>
              </div>
            </div>
          </td>
          <td>
         
            <p className='fw-bold mb-1'>{cat.ct_code}</p>
          </td>
          <td>
          <p className='text-muted mb-0'>{cat.ct_name}</p>
          </td>
         
          <td>
            <MDBBtn color='link' rounded size='sm' href={`/category/${cat._id}`}>
             edit
            </MDBBtn>
            <MDBBtn color='link' rounded size='sm' onClick={() => onDelete(cat._id)}>
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

export default CategoryComponent;
