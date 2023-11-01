import classes from "./Card.module.css";

const App=props=>{
    return <div className={classes.card}>
        {props.children}
    </div>
}

export default App;