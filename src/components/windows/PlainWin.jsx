export default function PlainWin({icon, title, body, id}){
    return (
        <div className="window" id={id}>
            <div className="header">
                <div className="title">
                    {icon}
                    {title}
                </div>
                <div className="btn-close">×</div>
            </div>
            {body}
        </div>
    );
}