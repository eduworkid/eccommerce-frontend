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
  MDBBadge,
} from "mdb-react-ui-kit";
const Topbar = () => {
  return (
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
  )
}

export default Topbar