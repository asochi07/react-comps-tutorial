import classNames from "classnames";
import useNavigation from "../hooks/use-navigate-context";

function Link({ to, children,
     className,
     activeLink}){

    const { navigate, currentPath } = useNavigation();

    const classes = classNames("text-blue-500", 
    className,
    currentPath === to && activeLink);
    const handleClick = (event) => {
        if(event.ctrlKey || event.metaKey){
            return;
        };
        event.preventDefault();
        navigate(to);
    };

    return <a className={classes} href={to} onClick={handleClick} >
        {children}
    </a>
}

export default Link;