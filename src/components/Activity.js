import './components.css';


function Activity({props}) {
    const date = new Date(props.updatedAt).toDateString();
    console.log(props)
    return(
        <li id={props.id}>
            <p className="activities">
            <span className="highlight">{props.user.username}</span> {'added '}
            <span className="highlight">{props.title.title}</span> to {props.activityType } - {date}
            </p>
        </li>
    )
}

export default Activity;
