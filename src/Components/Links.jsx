import './Links.css'
export const Links=()=>{
    const links=['Services','Projects','About'];
   const map1=links.map(x=>x+" ");
    return(
        <div className="links">
        <a href='deepak'>
        {map1}
        </a>
        </div>
    );
}