import ListGroup from 'react-bootstrap/ListGroup';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState,AppDispatch } from '../../app/store';
import Button from 'react-bootstrap/Button';
import { getMe } from '../../app/feature/authSlice';
const Profile = () => {
    const { user } = useSelector((state: RootState) => state.users);
    const dispatch: AppDispatch = useDispatch();    
  useEffect(() => {
    dispatch(getMe());
  }, [dispatch]);
  return (
    <ListGroup>
    <ListGroup.Item>Name : {user.user?.us_name} </ListGroup.Item>
    <ListGroup.Item>Email :  {user.user?.us_email} </ListGroup.Item>
    <ListGroup.Item>Phone : {user.user?.us_phone_number} </ListGroup.Item>
    <ListGroup.Item>Adress : {user.user?.us_address}</ListGroup.Item>
    <Button variant="warning" href={`/profile/${user.user?._id}`}>Edit</Button>{''}
  </ListGroup>
  )
}

export default Profile