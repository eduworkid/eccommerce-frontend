import { MDBListGroup, MDBListGroupItem } from "mdb-react-ui-kit";
import axios from "axios";
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBDropdown,
  MDBDropdownToggle,
  MDBCollapse,
  MDBBadge,
} from "mdb-react-ui-kit";
import { useNavigate } from "react-router-dom";

export default function Sidebar() {
    const navigate = useNavigate();

    const handleLogout = async () => {
      event?.preventDefault()
      try {
          await axios.post(`${import.meta.env.VITE_REACT_APP_API_AUTH}logout`, {}, {
              headers: {
                  'Authorization': localStorage.getItem("Authorization")
              }
          });
          localStorage.removeItem("Authorization");
          navigate('/login');
      } catch (error) {
          console.error('Error logging out:', error);
      }
  };
  return (
    <>
      <link
        href="https://use.fontawesome.com/releases/v5.15.1/css/all.css"
        rel="stylesheet"
      />
      <MDBCollapse tag="nav" className="d-lg-block bg-white sidebar">
        <div className="position-sticky">
          <MDBListGroup flush className="mx-3 mt-4">
            <MDBListGroupItem
              tag="a"
              href="/"
              action
              className="border-0 border-bottom rounded rounded"
            >
              <MDBIcon fas icon="tachometer-alt me-3" />
              Main Dashboard
            </MDBListGroupItem>

            <MDBListGroupItem
              tag="a"
              href="/products"
              action
              className="border-0 border-bottom rounded"
            >
              <MDBIcon fas icon="chart-area me-3" />
            Product
            </MDBListGroupItem>

            <MDBListGroupItem
              tag="a"
              href="/category"
              action
              className="border-0 border-bottom rounded"
            >
             <MDBIcon far icon="chart-bar me-3" />
              Category
            </MDBListGroupItem>

            

            <MDBListGroupItem
              tag="a"
              href="/order"
              action
              className="border-0 border-bottom rounded"
            >
              <MDBIcon fas icon="chart-pie me-3" />
             Order List
            </MDBListGroupItem>
            {localStorage.getItem("Authorization") ? 
            <div>

<MDBListGroupItem
              tag="a"
              href="/profile"
              action
              className="border-0 border-bottom rounded"
            >
              
               <MDBIcon fas icon="lock me-3" />
            Profile
            </MDBListGroupItem>
             <MDBListGroupItem
             tag="a"
             href="/"
             action
             onClick={handleLogout}
             className="border-0 border-bottom rounded"
           >
             <MDBIcon far icon="chart-bar me-3" />
           logout
           </MDBListGroupItem>
        
          
            </div>
            : 
            <MDBListGroupItem
              tag="a"
              href="/login"
              action
              className="border-0 border-bottom rounded"
            >
              
               <MDBIcon fas icon="lock me-3" />
            login
            </MDBListGroupItem>
           
            }
          </MDBListGroup>
        </div>
      </MDBCollapse>

      <MDBNavbar expand="lg" light bgColor="light">
        <MDBContainer fluid>
          <MDBNavbarNav className="d-flex flex-row align-items-center w-auto">
            <MDBNavbarBrand href="#">
              <img
                src="https://mdbootstrap.com/img/logo/mdb-transaprent-noshadows.webp"
                height="30"
                alt=""
                loading="lazy"
              />
            </MDBNavbarBrand>
          </MDBNavbarNav>
          <MDBNavbarNav className="d-flex flex-row justify-content-end w-auto">
            <MDBNavbarItem className="me-3 me-lg-0 d-flex align-items-center">
              <MDBDropdown>
                <MDBDropdownToggle
                  tag="a"
                  href="#!"
                  className="hidden-arrow nav-link"
                >
                  <MDBIcon fas icon="bell" />
                  <MDBBadge color="danger" notification pill>
                    1
                  </MDBBadge>
                </MDBDropdownToggle>
              </MDBDropdown>
            </MDBNavbarItem>

            <MDBNavbarItem className="me-3 me-lg-0">
              <MDBNavbarLink href="#">
                <MDBIcon fas icon="fill-drip" />
              </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem className="me-3 me-lg-0">
              <MDBNavbarLink href="#">
                <MDBIcon fab icon="github" />
              </MDBNavbarLink>
            </MDBNavbarItem>

            <MDBNavbarItem className="me-3 me-lg-0 d-flex align-items-center">
              <MDBDropdown>
                <MDBDropdownToggle
                  tag="a"
                  href="#!"
                  className="hidden-arrow nav-link"
                >
                  <img
                    src="https://mdbootstrap.com/img/Photos/Avatars/img (31).jpg"
                    className="rounded-circle"
                    height="22"
                    alt=""
                    loading="lazy"
                  />
                </MDBDropdownToggle>
              </MDBDropdown>
            </MDBNavbarItem>
          </MDBNavbarNav>
        </MDBContainer>
      </MDBNavbar>
    </>
  );
}
