import styles from "./Button.module.css"

function Button(){
    
    const handleClick = (e) => e.target.textContent = "HEY!";


    return(<button onDoubleClick={(e) => handleClick(e)} className={styles.button}>Click me</button>);
}

export default Button