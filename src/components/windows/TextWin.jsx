export default function TextWin({ icon, title, body, id }) {
    return (
        <div className="window" id={id}>
            <div className="header">
                <div className="title">
                    {icon}
                    {title}
                </div>
                <div className="btn-close">×</div>
            </div>
            <div className="text-box">
                <div className="text-area">{body}</div>
            </div>
        </div>
    );
}