
const Button = ({title,onClick})=> {
    console.log(title)
    return <button onClick={onClick}>{title}</button>;
}

export default Button