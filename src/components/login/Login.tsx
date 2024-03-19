import { createSignal } from "solid-js";
import styles from "./Login.module.css";
import postUserData from "../../utils/AuthService";
import { Router, useNavigate } from "@solidjs/router";
import { Box } from "@suid/material";


function Login() {
    const [warn, setWarn] = createSignal("rgb(255, 255, 255)")
    const [email, setEmail] = createSignal("");
    const [password, setPassword] = createSignal("");
    const [loading, setLoading] = createSignal(false);
    const navigate = useNavigate();

    const handleLogin = async (e: SubmitEvent) => {
        e.preventDefault();

        setLoading(true);


        try {
            const isLoggedIn = await postUserData(email(), password());

            if (isLoggedIn) {
                // Login successful! Update user state or redirect to home page
                navigate("/home")
                //alert("You nailed!");

            } else {
                alert("Login failed! Please check your credentials.");
            }
        } catch (error) {
            console.error("Login error:", error);
            alert("An error occurred during login. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div class={styles.loginContainer}>
            <Box component="section" sx={{ p: 2, border: '2px solid black' }}>
                <form class="form-widget" onSubmit={handleLogin}>
                    <div class={styles.formRow}>
                        <label class={styles.title} for="email">Email</label>
                        <br />
                        <input
                            id="email"
                            class={styles.inputC}
                            type="email"
                            placeholder="Your email"
                            value={email()}
                            onChange={(e) => setEmail(e.currentTarget.value)}
                        />
                    </div>
                    <div class={styles.formRow}>
                        <label class={styles.title} for="password">Password</label>
                        <br />
                        <input
                            class={styles.inputC}
                            id="password"
                            type="password"
                            placeholder="your password"
                            value={password()}
                            onChange={(e) => setPassword(e.currentTarget.value)}
                        />
                    </div>
                    <div class={styles.formRow}>
                        <button type="submit" class={styles.submitBtn} aria-live="polite">
                            {loading() ? <span>Loading</span> : <span>LOGIN</span>}
                        </button>
                    </div>
                </form>
            </Box>
        </div>
    )
}

export default Login;