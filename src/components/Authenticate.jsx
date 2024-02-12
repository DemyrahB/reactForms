import { useState } from "react";
import SignUpForm from "./SignUpForm";

function Authenticate({token}) {
    const [data, setData] = useState(null)
    const [successMessage, setSuccessMessage] = useState(null)
    const [error, setError] = useState(null)
    async function handleClick (event){
        event.preventDefault(); 
        try{
            const response = await fetch ("https://fsa-jwt-practice.herokuapp.com/authenticate", {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
              },
            });
            const result = await response.json();
            setSuccessMessage(result.message);
        } catch(error){
            setError(error.message)
        }
        
    }


    return (
    <>
    <h2>Authenticate</h2>
    {successMessage && <p>{successMessage} Thank you! </p>}
    {error && <p>{error}</p>}
    <button onClick={handleClick}>Authenticate Token</button>
    </>
)}

export default Authenticate