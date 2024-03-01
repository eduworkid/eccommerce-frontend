import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getDataProduct } from '../../app/feature/productSlice'; 
import { RootState,AppDispatch } from '../../app/store';
import swal from 'sweetalert';
import {  MDBBtn, MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import axios from 'axios';
const Product: React.FC = () => {
  const { product } = useSelector((state: RootState) => state.product);
  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    dispatch(getDataProduct());
  }, [dispatch]);
  const onOrder = (id: string) => {
     axios.post(`${import.meta.env.VITE_REACT_APP_API}orders/${id}`);
     swal({
      icon: "success",
      text: "Order Berhasil",
    });
  }
  return (
    <div className="">
       
    <MDBTable align='middle'>
      <MDBTableHead>
        <tr>
          <th scope='col'>Product Code</th>
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
            <div className='d-flex align-items-center'>
              <div className='ms-3'>
                <p className='fw-bold mb-1'>{prod.pd_code}</p>
              </div>
            </div>
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
            <MDBBtn color='link' rounded size='sm' onClick={() => onOrder(prod._id)}>
             order
            </MDBBtn>
          </td>
        </tr>
        
      </MDBTableBody>
      ))}
    </MDBTable>
    </div>
  );
}

export default Product;
