import { useState } from "react"


function SignUpForm ({token, setToken}) {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState(null)
    const APIURL = "https://fsa-jwt-practice.herokuapp.com/signup"

    async function handleSubmit (event){
        event.preventDefault();
    try{
        const response = await fetch(APIURL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
              },
            body: JSON.stringify({username:username, password:password}),
        });
        const result = await response.json();
        console.log(result)
        setToken(result.token);
    }catch (error){
        setError(error.message)
        
    }
}
    return (
    <>
    <h2>Sign Up!</h2>
    {error && <p>{error}</p>}
    <form onSubmit={handleSubmit}>
        <label>Username: </label>
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)}/>
        <label>Password: </label>
        <input type="password" value={password} onChange={(e)=> setPassword(e.target.value)}/>
        <button>Submit</button>
    </form>
    </>
)}

export default SignUpForm