import { useState } from "react";

export function Form() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    return(
        <div>
            <h2>Login Form</h2>
            <form onSubmit={(events) => {
                events.preventDefault();
                console.log("SUBMITTING...")
                // const formData = new FormData(events.target);
                // console.log(formData);
                // console.log(formData.get("username"));
                // console.log(formData.get("password"));
                console.log(`USERNAME: ${username}`);
                console.log(`PASSWORD: ${password}`);
            }}>
                <label htmlFor="username">
                    Username
                </label>
                <br />
                <input 
                id="username"
                name="username"
                value={username}
                onChange={(events) => {
                    events.preventDefault();
                    setUsername(events.target.value);
                }}
                />
                <br />
                <label htmlFor="password">
                    Password
                </label>
                <br />
                <input 
                type="password" 
                id="password" 
                name="password" 
                value={password}
                onChange={(events) => {
                    events.preventDefault();
                    setPassword(events.target.value);
                }}
                />
                <br />
                <button type="submit">Login</button>
            </form>
        </div>
    );
}