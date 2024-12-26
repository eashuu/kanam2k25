import React, { useState } from "react";
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import { Box, Typography, Button } from "@mui/material";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
import supabase from "./Components/supabaseClient";
import { useNavigate } from "react-router-dom";
import logo2 from "../Pages/Components/Images/logo.png"
import home2 from "../Pages/Components/Images/home2.jpeg"
AOS.init();

const Glogin = () => {
    return (
        <Box>
            <Box>
                <Hero />
            </Box>
        </Box>
    );
};


function Hero() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [userEmail, setUserEmail] = useState("");
    const [userName, setUserName] = useState("");
    const [dob, setDob] = useState("");
    const [degree, setDegree] = useState("");
    const [course, setCourse] = useState("");
    const [year, setYear] = useState("");
    const [phone, setPhone] = useState("");
    const [gender, setGender] = useState("");
    const [college, setCollege] = useState("");
    const [id, setId] = useState("")
    const [userProfilePicture, setUserProfilePicture] = useState("");
    const [lock, setLock] = useState(false);

    const navigate = useNavigate();

    const handleLoginSuccess = async (response) => {
        try {
            const decodedToken = jwtDecode(response.credential);
            const email = decodedToken.email;
            const profilePicture = decodedToken.picture; // Get the profile picture URL

            // Set user email, name, and profile picture in state
            setUserEmail(email);
            setUserName(decodedToken.name);
            setUserProfilePicture(profilePicture); // Assuming you have a state for the profile picture
            setIsLoggedIn(true);

            // Fetch user data from Supabase
            const { data, error } = await supabase
                .from('Participants')
                .select('*')
                .eq('Email', email)
                .single(); // Assuming email is unique

            if (error) {
                console.error("Error fetching user data:", error.message);
            } else if (data) {
                // Store fetched data in state variables
                setId(data.id);
                setUserName(data.Name);
                setDob(data.DOB);
                setDegree(data.Degree);
                setCourse(data.Course);
                setYear(data.Year);
                setPhone(data.Phone);
                setGender(data.Gender);
                setCollege(data.College);

                // Navigate to Dashboard with fetched data
                navigate('/dashboard');

                localStorage.setItem('userData', JSON.stringify({
                    name: data.Name,
                    email: data.Email,
                    dob: data.DOB,
                    degree: data.Degree,
                    course: data.Course,
                    year: data.Year,
                    phone: data.Phone,
                    gender: data.Gender,
                    college: data.College,
                    id: data.id,
                    profilePicture: profilePicture
                }));

                window.location.reload(true);


            }
        } catch (error) {
            console.error("Error in handling login:", error);
            alert("An error occurred during login. Please try again.");
        }
    };


    const handleLoginFailure = (error) => {
        console.error("Login Failed:", error);
    };

    // Function to handle form submission and save data to Supabase
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // Check if the email already exists in Supabase
            const { data } = await supabase
                .from('Participants')
                .select('*')
                .eq('Email', userEmail);

            if (data && data.length > 0) {
                // If user already registered, navigate to Dashboard
                navigate('/dashboard');
            } else {
                // If user not registered, insert data and navigate to Dashboard
                const { error } = await supabase.from('Participants').insert([
                    {
                        Name: userName,
                        Email: userEmail,
                        DOB: dob,
                        Degree: degree,
                        Course: course,
                        Year: year,
                        Phone: phone,
                        Gender: gender,
                        College: college
                    },
                ]);

                if (error) throw error;

                alert("Registration successful!");
                navigate('/login');
            }
            window.location.reload(true)
        } catch (error) {
            console.error("Error inserting data:", error.message);
            alert("An error occurred while registering. Please try again.");
        }
    };

    return (
        <Box height="100vh" sx={{ overflow: "scroll" }} className="relative w-full">
            <div
                style={{
                    backgroundImage: `url(${home2})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    backgroundAttachment: "fixed", // Makes the image fixed in the background
                    width: "100%",
                    height: "100vh",
                }}
            >
                {/* Add your content here */}
            </div>

            <Box className="absolute top-0 left-0 w-full h-full z-10 flex items-center justify-center"
                style={{ background: "linear-gradient(to bottom, rgba(20, 20, 22, 0.4), rgba(20, 20, 22, 0.6))" }}
            >
                <Box p={4} className="flex flex-col md:flex-row items-center w-full max-w-7xl mx-auto" gap={{lg:28, xs:0}}>
                    <Box component="img" src={logo2} sx={{width:"450px", display:{lg:"flex", md:"none", sm:"none", xs:"none"}}}></Box>
                    <Box p={4} mt={{lg:4, xs:5}} sx={{ background: "rgba(241, 241, 241, 0.25)", backdropFilter: "blur(10px)" }}
                        className="rounded-2xl w-full md:w-1/2 flex items-center justify-center"
                    >
                        <Box className="w-full">
                            <p className="font-sans font-bold text-3xl text-white md:text-3xl text-center">
                                Register / Login
                                <hr className="my-7" />
                            </p>
                            {!isLoggedIn ? (
                                <div >
                                    <div className="mt-6  flex justify-center">
                                        <GoogleOAuthProvider clientId="554313071695-88jnv5oetp69fknghnocq7i8dogh28s6.apps.googleusercontent.com">
                                            <GoogleLogin
                                                onSuccess={handleLoginSuccess}
                                                onError={handleLoginFailure}
                                            />
                                        </GoogleOAuthProvider>
                                    </div>
                                    <div className="mt-6 text-white">
                                        <strong>Note : </strong> If you have registered already, please login with your registered Gmail id to view your dashboard
                                    </div>
                                </div>
                            ) : (
                                <Box>
                                    <form
                                        onSubmit={handleSubmit}
                                        className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4"
                                    >
                                        {/* Name */}
                                        <div>
                                            <label htmlFor="name" className="text-white">
                                                Name
                                            </label>
                                            <input
                                                className="shadow-sm mt-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                                                type="text"
                                                id="name"
                                                placeholder="Name"
                                                required
                                                value={userName}
                                                onChange={(e) => setUserName(e.target.value)}
                                            />
                                        </div>

                                        {/* Email */}
                                        <div>
                                            <label htmlFor="email" className="text-white">
                                                Email
                                            </label>
                                            <input
                                                className="shadow-sm mt-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                                                type="email"
                                                id="email"
                                                placeholder="name@gmail.com"
                                                required
                                                value={userEmail}
                                                readOnly
                                            />
                                        </div>

                                        {/* Date of Birth */}
                                        <div>
                                            <label htmlFor="dob" className="text-white">
                                                Date of Birth
                                            </label>
                                            <input
                                                className="shadow-sm mt-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                                                type="date"
                                                id="dob"
                                                required
                                                value={dob}
                                                onChange={(e) => setDob(e.target.value)}
                                            />
                                        </div>

                                        {/* College Name */}
                                        <div>
                                            <label htmlFor="college" className="text-white">
                                                College Name
                                            </label>
                                            <input
                                                className="shadow-sm mt-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                                                type="text"
                                                id="college"
                                                placeholder="College Name"
                                                required
                                                value={college}
                                                onChange={(e) => setCollege(e.target.value)}
                                            />
                                        </div>

                                        {/* Degree */}
                                        <div>
                                            <label htmlFor="degree" className="text-white">
                                                Degree
                                            </label>
                                            <select
                                                className="shadow-sm mt-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                                                id="degree"
                                                required
                                                value={degree}
                                                onChange={(e) => setDegree(e.target.value)}
                                            >
                                                <option value="">Select Degree</option>
                                                <option value="BE">B.E</option>
                                                <option value="BTech">B.Tech</option>
                                                <option value="BS">B.Sc</option>
                                                <option value="BS">M.Sc</option>
                                                <option value="BS">M.Tech</option>
                                            </select>
                                        </div>

                                        {/* Course */}
                                        <div>
                                            <label htmlFor="course" className="text-white">
                                                Course
                                            </label>
                                            <input
                                                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                                                type="text"
                                                id="course"
                                                placeholder="CS, Cyber, AI&DS, etc"
                                                required
                                                value={course}
                                                onChange={(e) => setCourse(e.target.value)}
                                            />
                                        </div>

                                        {/* Year */}
                                        <div>
                                            <label htmlFor="year" className="text-white">
                                                Year
                                            </label>
                                            <select
                                                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                                                id="year"
                                                required
                                                value={year}
                                                onChange={(e) => setYear(e.target.value)}
                                            >
                                                <option value="">Select Year</option>
                                                <option value="I">I</option>
                                                <option value="II">II</option>
                                                <option value="III">III</option>
                                                <option value="IV">IV</option>
                                            </select>
                                        </div>

                                        {/* Phone */}
                                        <div>
                                            <label htmlFor="phone" className="text-white">
                                                Phone Number
                                            </label>
                                            <input
                                                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                                                type="number"
                                                id="phone"
                                                placeholder="Phone number"
                                                required
                                                value={phone}
                                                onChange={(e) => setPhone(e.target.value)}
                                            />
                                        </div>

                                        {/* Gender */}
                                        <div>
                                            <label htmlFor="gender" className="text-white">
                                                Gender
                                            </label>
                                            <select
                                                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                                                id="gender"
                                                required
                                                value={gender}
                                                onChange={(e) => setGender(e.target.value)}
                                            >
                                                <option value="">Select Gender</option>
                                                <option value="male">Male</option>
                                                <option value="female">Female</option>
                                                <option value="other">Other</option>
                                            </select>
                                        </div>

                                        {/* Submit Button */}
                                        <button
                                            type="submit"
                                            onClick={() => {
                                                setLock(true);
                                            }}
                                            className="text-white mt-4 text-lg bg-blue-600 w-full md:col-span-2  font-medium rounded-lg px-5 py-2.5 text-center"
                                        >
                                            Register
                                        </button>
                                    </form>
                                </Box>
                            )}
                        </Box>
                    </Box>

                </Box>
            </Box>

        </Box>
    );
}

export default Glogin;
