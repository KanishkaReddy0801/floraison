export default function Card (props) {
    return (
        <div style={{width:'18rem',border:'1px solid black'}}>
            <div>
            <img width={"100%"} src={props.image}/>
            </div>
            <div style={{padding:'0.5rem'}}>
                <h3 style={{color:"black"}}>
                    {props.heading}
                </h3>
                <p>
                    {props.para}
                </p>
            </div>
         </div>
    )
}