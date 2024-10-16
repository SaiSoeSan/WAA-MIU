import React,{useRef,KeyboardEvent} from "react";


type PropType = {
    onSearchHandler : (name : string) => void
}

const Header = (props : PropType) => {
    const {onSearchHandler} = props;
    const nameRef = useRef<HTMLInputElement | null>(null);

    const searchHandler = () => {
        if(nameRef.current){
            const name = nameRef.current.value.trim();
            if(name !== ""){
                onSearchHandler(name);
                nameRef.current.value = "";
            }
        }
    }
    return (
        <section className="jumbotron">
            <h3 className="jumbotron-heading">Search Github Users</h3>
            <div>
                <input type="text" onKeyDown={(e:KeyboardEvent<HTMLInputElement>) => {
                    if(e.key === 'Enter') searchHandler()
                } } placeholder="Enter the name you search" ref={nameRef}/>&nbsp;
                <button onClick={searchHandler}>Search</button>
            </div>
        </section>
    )
}
export default Header;