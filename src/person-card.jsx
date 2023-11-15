export function PersonCard({description, username}) {
    return (
        <div className="sc-personinfo">
            <p>{username}</p>
            <img src="https://unavatar.io/github/1MrDavid" alt="This guys' avatar" />
            <h4>{description}</h4>
        </div>
    )
}
