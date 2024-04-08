import classes from './Layout.module.css';
import "../styles/devices.css"
function Layout(props){
    return(
        <div>
            <main className={classes.main}>{props.children}</main>
        </div>
    );
}

export default Layout;