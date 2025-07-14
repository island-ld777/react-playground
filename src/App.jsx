import { Form } from "./components/Form";
import { UserProfile } from "./components/UserProfile";

export default function App() {
    const hiddenMessage = true;
    const mockUsers = [
        {
            id: 1,
            username: "johnsmith",
            age: 21,
        },
        {
            id: 2,
            username: "qwerty",
            age: 123
        },
        {
            id: 3,
            username: "saheeli",
            age: 29
        }
    ];
    return (
    <div>
        <h1>Hello from React! I am in the App Component!</h1>
        {
           hiddenMessage ? (
                <h4>This is a secret to everybody</h4>
            ): (
                <></>
            )
        }
        {mockUsers.map((user) => {
            return(
                <UserProfile
                username={user.username}
                age={user.age}
                ></UserProfile>
            );
        })}
        <Form></Form>
    </div>
    );
}