function GithubUser(props) {
    return (
        <div className="card" style={{ width: '18rem' }}>
            <img src={props.avatar} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{props.login}</h5>
                <p className="card-text">{props.url}</p>
                <a href={props.id} className="btn btn-primary">Check out {props.login}</a>
            </div>
        </div>
    )
}

export default GithubUser;