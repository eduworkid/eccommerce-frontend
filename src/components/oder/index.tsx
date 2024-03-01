import axios from 'axios'
import swal from 'sweetalert'
import {useEffect} from 'react'
import { useNavigate, useParams } from 'react-router-dom'
const Order = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    useEffect(() => {
      const fetchOrder = async () => {
        try {
          await axios.post(`${import.meta.env.VITE_REACT_APP_API}orders/${id}`);
        } catch (error) {
          console.error('Error fetching order:', error);
        }
      };
      swal({
        icon: "success",
        text: "Order Berhasil",
      });
      navigate('/order');
      fetchOrder();
    });
  return (
    <div>index</div>
  )
}

export default Order