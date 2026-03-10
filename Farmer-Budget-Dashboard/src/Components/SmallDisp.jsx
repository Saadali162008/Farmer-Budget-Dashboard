import './smalldisp.css'
export function SmallDisp({icon,name,amount}){
    return (
        <div className="small-disp">
            <div className="small-disp-head">
                <p>{name}</p>
                <img src={icon}/>
            </div>
            <p className="small-disp-body">{amount}</p>
        </div>
    );
}