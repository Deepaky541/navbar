import './Links.css'
export const Links=()=>{
    const links=['Services','Projects','About'];
    return(
        <div className="links">
        <a href='deepak'>
        {links.map(el=>el+" ")}
        </a>
        </div>
    );
}