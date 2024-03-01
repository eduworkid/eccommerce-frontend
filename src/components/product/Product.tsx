import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getDataProduct } from '../../app/feature/productSlice'; 
import { RootState,AppDispatch } from '../../app/store';
import {  MDBBtn, MDBTable, MDBTableHead, MDBTableBody,MDBIcon } from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';
import swal from 'sweetalert';
import axios from 'axios';
const ProductManage: React.FC = () => {
  const { product } = useSelector((state: RootState) => state.product);
  const dispatch: AppDispatch = useDispatch();  
  useEffect(() => {
    dispatch(getDataProduct());
  }, [dispatch]);
  const onDelete = (id: string) => {
    axios.delete(`${import.meta.env.VITE_REACT_APP_API}product/${id}`, {
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
        <Link to={'/products/add'}> <MDBIcon fas icon="upload" /> tambah data</Link>
    <MDBTable align='middle'>
      <MDBTableHead>
        <tr>
          
          <th scope='col'>Code</th>
          <th scope='col'>Name</th>
          <th scope='col'>Category</th>
          <th scope='col'>Price</th>
         
          <th scope='col'>Actions</th>
        </tr>
      </MDBTableHead>
      {product.map((prod) => (
      <MDBTableBody>
        <tr>
          <td>
            <p className='fw-bold mb-1'>{prod.pd_code}</p>
          </td>
          <td>
            <p className='fw-bold mb-1'>{prod.pd_name}</p>
          </td>
          <td>
            <p className='fw-bold mb-1'>{prod.pd_ct_id.ct_name}</p>
          </td>
          <td>
          <p className='text-muted mb-0'>Rp.{prod.pd_price}</p>
          </td>
         
          <td>
            <MDBBtn color='link' rounded size='sm' href={`/products/${prod._id}`}>
             Edit
            </MDBBtn>
            <MDBBtn color='link' rounded size='sm' onClick={() => onDelete(prod._id)}>
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

export default ProductManage;
