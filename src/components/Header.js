import NavigationBar from "./NavigationBar";

const menus = ["Home", "Project"];

function Header(props) {
    return(
        <>
            Ini header
            <NavigationBar menu={menus} customTitle={props.customTitle}></NavigationBar>
        </>
    );
}

export default Header;