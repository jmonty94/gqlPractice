import { useState } from "react";
import { useQuery, useMutation } from "@apollo/client";
import { FETCH_USERS_QUERY } from "../utils/queries/FetchUserQuery";
import { CREATE_USER_MUTATION } from "../utils/mutations/createUserMutation";

const UsersHome = () => {
    const { loading, data, } = useQuery(FETCH_USERS_QUERY);
    const [handleCreateUserMutation,] = useMutation(CREATE_USER_MUTATION, {
        refetchQueries: [FETCH_USERS_QUERY],
    });

    const [usernameInput, setUsernameInput] = useState('')
    const [emailInput, setEmailInput] = useState('')
    const [passwordInput, setPasswordInput] = useState('')

    console.log(data);

    return (
        <div>
            <h1>Users</h1>
            <p>Username</p>
            <input value={usernameInput} onChange={(event) => setUsernameInput(event.target.value)} />
            <p>Email</p>
            <input value={emailInput} onChange={(event) => setEmailInput(event.target.value)} />
            <p>Password</p>
            <input value={passwordInput} onChange={(event) => setPasswordInput(event.target.value)} />
            <button
                onClick={async () => {
                    await handleCreateUserMutation({
                        variables: { username: usernameInput, email: emailInput, password: passwordInput }
                    })
                }}>
                    Sign Up
                </button>
            {
                loading ?
                    <p>Loading</p>
                    :
                    data?.users.map(user => {
                        return (
                            <div key={user._id}>
                                <h2>Username: {user.username}</h2>
                                <h2>email: {user.email}</h2>
                                <h2>ID: {user._id}</h2>
                            </div>
                        )

                    })
            }
        </div>
    )
};


export default UsersHome;