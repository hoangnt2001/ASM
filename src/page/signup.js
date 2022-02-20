import { signup } from "../API/user";

// đăng kí
const signUp = {
    print() {
        return /* html */ `
    <!-- component -->
    <form id = "formSignUp">
        <div class="bg-grey-lighter min-h-screen flex flex-col">
        <div class="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
            <div class="bg-white px-6 py-8 rounded shadow-md text-black w-full">
                <h1 class="mb-8 text-3xl text-center">Sign up</h1>
                <input 
                    type="text" id="name"
                    class="block border border-grey-light w-full p-3 rounded mb-4"
                    name="fullname"
                    placeholder="Full Name" required/>
                <input 
                    type="text" id="email"
                    class="block border border-grey-light w-full p-3 rounded mb-4"
                    name="email"
                    placeholder="Email" autocomplete="email" required/>
                <input 
                    type="password" id="password"
                    class="block border border-grey-light w-full p-3 rounded mb-4"
                    name="password"
                    autocomplete
                    placeholder="Password" required/>
                    <button class="w-full text-center py-3 rounded bg-green-400 text-black hover:bg-green-500 my-1 " type="submit">Create Account</button>
            </div>
        
            <div class="text-grey-dark mt-6">
                Already have an account? 
                <a class="no-underline border-b border-blue text-blue" href="/signin">
                    Sign In
                </a>.
            </div>
        </div>
        </div>
    </form>
    `;
    },
    afterprint() {
        const formSignup = document.querySelector("#formSignUp");
        formSignup.addEventListener("submit", (e) => {
            e.preventDefault();
            signup({
                name: document.querySelector("#name").value,
                email: document.querySelector("#email").value,
                password: document.querySelector("#password").value,
            });
            document.location.href = "/signin";
        });
    },
};
export default signUp;