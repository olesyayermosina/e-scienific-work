import './Header.scss';
import logo from '../../assets/graduation-cap-on-a-book-in-vertical-position-svgrepo-com.svg'
import {Button} from "@mui/material";
import {NavLink, useNavigate} from "react-router-dom";

const Header = () => {
    const navigate = useNavigate();
    return (
        <header className="header">
            <NavLink to={"/"}>
                <img className={"logo"} src={logo} alt="logo"/>
            </NavLink>
            <div className={"menu"}>
                <Button
                    variant="contained"
                    sx={{textDecoration: 'none', textTransform: 'none', bgcolor: 'white.main', color: "primary.main"}}
                    onClick={() => navigate('/otolology-merging')}
                >
                    Increase system knowledge
                </Button>
            </div>
        </header>
    )
}

export default Header;