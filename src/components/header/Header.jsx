import './Header.scss';
import logo from '../../assets/graduation-cap-on-a-book-in-vertical-position-svgrepo-com.svg'
import {Button} from "@mui/material";

const Header = () => {
    return (
        <header className="header">
            <img className={"logo"} src={logo} alt="logo"/>
            <div className={"menu"}>
                <Button
                    variant="contained"
                    sx={{textDecoration: 'none', textTransform: 'none', bgcolor: 'white.main', color: "primary.main"}}
                >
                    Increase system knowledge
                </Button>
            </div>
        </header>
    )
}

export default Header;