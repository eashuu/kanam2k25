import React, { useState, useEffect, useRef } from 'react';
import { Box } from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom';
import supabase from './Components/supabaseClient';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { useReactToPrint } from 'react-to-print';
import QRCode from "react-qr-code";
import generatePDF from 'react-to-pdf';
import logo2 from "../Pages/Components/Images/logo.png"

export default function Dashboard() {
    const navigate = useNavigate();
    const getCurrentDate = () => {
        const today = new Date();
        const options = { day: '2-digit', month: 'long', year: 'numeric' };
        return today.toLocaleDateString('en-GB', options);
    };
    const [event1, setEvent1] = useState("");
    const [event2, setEvent2] = useState("");
    const [workshop, setWorkshop] = useState("");
    const [work, setWork] = useState("");
    const [e1, setE1] = useState("");
    const [e2, setE2] = useState("");
    const [lock, setLock] = useState(false);
    const [ew, setEw] = useState("");
    const [pay, setPay] = useState("");
    const [userData, setUserData] = useState({});
    const { email, id, name, dob, degree, course, year, phone, gender, college } = userData;

    useEffect(() => {
        const storedUserData = localStorage.getItem('userData');
        if (storedUserData) {
            const parsedData = JSON.parse(storedUserData);
            setUserData(parsedData);
        }
    }, []);

    useEffect(() => {
        const fetchEventData = async () => {
            const { data, error } = await supabase
                .from('Participants')
                .select('Event_1, Event_2, WorkShop, Payment, EW')
                .eq('Email', email)
                .single();

            if (error) {
                console.error('Error fetching event data:', error);
            } else if (data) {
                setE1(data.Event_1);
                setE2(data.Event_2);
                setWork(data.WorkShop);
                setPay(data.Payment);
                setEw(data.EW);
            }
        };

        if (email) fetchEventData();
    }, [email]);

    async function handlePayment() {
        setLock(true);
        const { data, error } = await supabase
            .from('Participants')
            .update({ Payment: "Successful" })
            .eq('Email', email)
            .single();

        if (error) {
            console.error('Error updating payment:', error);
        } else {
            setPay("Successful");
        }
    }

    async function EventSubmit() {
        try {
            const { data: existingData, error: fetchError } = await supabase
                .from('Participants')
                .select('*')
                .eq('Email', email)
                .single();

            if (fetchError) {
                console.error('Error fetching participant:', fetchError);
                return;
            }

            let data, error;

            if (existingData) {
                ({ data, error } = await supabase
                    .from('Participants')
                    .update({ Event_1: event1, Event_2: event2, WorkShop: workshop, EW: "Registered" })
                    .eq('Email', email)
                    .single());
                window.location.reload();
            } else {
                ({ data, error } = await supabase
                    .from('Participants')
                    .insert({
                        Email: email,
                        Event_1: event1,
                        Event_2: event2,
                        WorkShop: workshop,
                        EW: "Registered"
                    })
                    .single());
                window.location.reload();
            }

            if (error) {
                console.error('Error updating/inserting event data:', error);
                window.location.reload();
            } else {
                setE1(data.Event_1);
                setE2(data.Event_2);
                setEw(data.EW);
                window.location.reload();
            }
        } catch (err) {
            console.error('An unexpected error occurred:', err);
        }
    }

    function HandleRefresh() {
        navigate('/login')
        window.location.reload();
    }

    const printRef = useRef();

    const handPrint = useReactToPrint({ printRef })

    // Function to trigger print and additional logic
    const handlePrint = async () => {
        try {
            handPrint();
        } catch (error) {
            console.error(error)
        }
    };

    const IDNum = `NGPK${String(userData.id).padStart(5, '0')}`;

    const Qrdata = [
        {
            cname: userData.name,
            cemail: userData.email,
            cphone: userData.phone,
            cid: IDNum,
            cevent1: e1,
            cevent2: e2,
            cworkshop: work,
            ccollege: userData.college,
        }
    ]

    return (
        <div style={{ height: "100vh", overflow: "scroll" }}>

            <div className="flex">
                <div className="w-full" style={{ height: "100vh", overflowY: "scroll" }}>
                    <Box mt={8} className="flex flex-col md:flex-row gap-8 w-full p-5">
                        {/* General Info Box */}
                        <Box
                            mt={0}
                            sx={{ background: "rgba(44, 44, 46, 1)" }}
                            className="flex-1 p-6 rounded-lg shadow "
                        >
                            <p className="text-3xl font-bold text-white">General Info</p>
                            <hr className="my-5" />
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {[
                                    {
                                        label: "ID", value: pay === "Successful" ? (
                                            IDNum
                                        ) : "Not Generated"
                                    },
                                    { label: "Name", value: userData.name },
                                    { label: "Email", value: userData.email },
                                    { label: "DOB", value: userData.dob },
                                    { label: "Degree", value: userData.degree },
                                    { label: "College Name", value: userData.college },
                                    { label: "Course", value: userData.course },
                                    { label: "Year of study", value: userData.year },
                                    { label: "Phone Number", value: userData.phone },
                                    { label: "Gender", value: userData.gender },
                                    {
                                        label: "Payment Status",
                                        value: pay === "Successful" ? (
                                            <Box className="flex gap-1">
                                                <CheckCircleIcon sx={{ color: "green" }} />
                                                <p className='text-green-500 font-bold'>Successful</p>
                                            </Box>
                                        ) : "Not Defined",
                                    },
                                    {
                                        label: "Registration Status",
                                        value: ew === "Registered" ? (
                                            <Box className="flex gap-1">
                                                <CheckCircleIcon sx={{ color: "green" }} />
                                                <p className='text-green-500 font-bold'>Completed</p>
                                            </Box>
                                        ) : "Not Defined",
                                    },
                                ].map((item, index) => (
                                    <div className="flex gap-3" key={index}>
                                        <p className="font-bold text-white">{item.label}:</p>
                                        <p className="text-white">{item.value}</p>
                                    </div>
                                ))}
                            </div>
                        </Box>

                        {/* Events and Workshop Box */}
                        <Box className="flex flex-col w-full md:w-1/4">
                            <Box className="flex flex-col gap-4 w-full">
                                {/* Events Box */}
                                <Box sx={{ background: "rgba(44, 44, 46, 1)" }} mt={0} className="w-full p-6 rounded-lg shadow ">
                                    <p className='text-white text-3xl font-bold'>Events</p>
                                    <hr className='my-6' />
                                    <ul>
                                        <li className='flex gap-3'>
                                            <p className='font-bold text-white'>Day 1:</p>
                                            <p className='text-white'>{e1 ?? "Not Selected"}</p>
                                        </li>
                                        <li className='flex gap-3'>
                                            <p className='font-bold text-white'>Day 2:</p>
                                            <p className='text-white'>{e2 ?? "Not Selected"}</p>
                                        </li>
                                    </ul>
                                </Box>

                                {/* Workshop Box */}
                                <Box sx={{ background: "rgba(44, 44, 46, 1)" }} mt={1} className="w-full p-6 rounded-lg shadow ">
                                    <p className='text-white text-3xl font-bold'>Workshop</p>
                                    <hr className='my-6' />
                                    <ul>
                                        <li className='flex gap-3'>
                                            <p className='font-bold text-white'>Workshop:</p>
                                            <p className='text-white'>{work ?? "Not Selected"}</p>
                                        </li>
                                    </ul>
                                </Box>
                            </Box>
                        </Box>

                    </Box>

                    {ew === "Registered" && (
                        <Box p={3}>
                            <Box sx={{ background: "rgba(44, 44, 46, 1)" }} p={3} className="w-full rounded-lg shadow">
                                <div className='flex flex-col justify-center items-center'>
                                    <div className=''>
                                        <p className="text-white text-center text-2xl lg:text-3xl sm:text-2xl md:text-2xl font-bold">
                                            Get your ID Card
                                        </p>
                                        <Box className="mt-5" sx={{ overflow: "scroll", width: { lg: "100%", md: "350px", sm: "300px", xs: "290px" }, height: "400px" }}>
                                            <div ref={printRef} style={{ height: "17cm", width: "11cm", border: "0.1px solid gray" }} className='bg-white relative mt-5'>
                                                <div className=''>
                                                    <div className=''>
                                                        <div className='flex justify-between p-4'>
                                                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSg787J2ldBefN_heNoIDtyvK2o70aKmIIakw&s" alt="" style={{ width: "60px" }} />
                                                            
                                                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2vt-PWNH-kBNYYcyZBO1JYWiJIBMXWFH_WA&s" alt="" style={{ width: "60px" }} />
                                                        </div>

                                                        <div className='flex justify-center h-full'>
                                                            <div style={{ height: "75%", width: "90%" }} >
                                                                <div className='mt-5 flex justify-center'>
                                                                    <div className=''>
                                                                        <p className='text-center'><span className='font-bold'>ID. No </span> {`NGPK${String(userData.id).padStart(5, '0')}`}</p>
                                                                        <QRCode
                                                                            value={JSON.stringify(Qrdata)}
                                                                            style={{ width: "150px", padding: 0, height: "220px" }}
                                                                        />
                                                                    </div>
                                                                </div>
                                                                <div className="text-sm md:text-base lg:text-base mt-4" style={{ lineHeight: "30px", marginLeft: "30px" }}>
                                                                    <p className=''><span className='font-bold'>Name: </span> {userData.name}</p>
                                                                    <p className=''><span className='font-bold'>College: </span> {userData.college}</p>
                                                                    <p className=''><span className='font-bold'>Events: </span> {`${e1}, ${e2}`}</p>
                                                                    <p className=''><span className='font-bold'>Workshop: </span> {`${work}`}</p>
                                                                    <p className=''><span className='font-bold'>Hackathon: </span> No</p>
                                                                    <p className=''><span className='font-bold'>Consert Night: </span> Yes</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className='absolute bottom-0 w-full'>
                                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                                                                <path fill="#0099ff" fillOpacity="1" d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,250.7C1248,256,1344,288,1392,304L1440,320L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
                                                            </svg>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </Box>
                                    </div>
                                </div>
                                <div className='w-ful flex justify-center'>
                                    <button
                                        onClick={() => generatePDF(printRef, { filename: `${IDNum}.pdf` })}
                                        className='btn bg-black mt-5 text-white p-4 px-4 rounded-2xl hover:scale-110 transition-transform duration-200 ease-in-out'>
                                        Download ID Card
                                    </button>
                                </div>

                            </Box>
                        </Box>
                    )}



                    {pay === "Successful" ? (
                        <Box p={4} sx={{ display: ew === 'Registered' ? "none" : "flex" }} className="flex flex-col md:flex-row gap-8">
                            <Box sx={{ background: "rgba(44, 44, 46, 1)" }} mb={4} className="w-full p-4 rounded-lg shadow ">
                                <p className="text-white text-3xl font-bold">Events Registration</p>
                                <hr className="my-6" />
                                <div className="flex flex-col md:flex-row gap-8">
                                    {/* Day 1 Section */}
                                    <div className="w-full">
                                        <p className="text-white text-xl font-bold">Day 1</p>
                                        <div className="mt-3">
                                            <label className="flex flex-row items-center gap-2.5 text-white">
                                                <input
                                                    onChange={() => setEvent1('Frontend')}
                                                    type="radio"
                                                    name="day1"
                                                    checked={event1 === 'Frontend'}
                                                    className="peer hidden"
                                                />
                                                <div className="h-5 w-5 flex rounded-md border border-[#a2a1a833] bg-[#212121] peer-checked:bg-[#7152f3] transition" />
                                                Frontend
                                            </label>
                                            <label className="flex flex-row items-center gap-2.5 text-white ">
                                                <input
                                                    onChange={() => setEvent1('Backend')}
                                                    type="radio"
                                                    name="day1"
                                                    checked={event1 === 'Backend'}
                                                    className="peer hidden"
                                                />
                                                <div className="h-5 w-5 flex rounded-md border border-[#a2a1a833] bg-[#212121] peer-checked:bg-[#7152f3] transition" />
                                                Backend
                                            </label>
                                            <label className="flex flex-row items-center gap-2.5 text-white">
                                                <input
                                                    onChange={() => setEvent1('Cyber Security')}
                                                    type="radio"
                                                    name="day1"
                                                    checked={event1 === 'Cyber Security'}
                                                    className="peer hidden"
                                                />
                                                <div className="h-5 w-5 flex rounded-md border border-[#a2a1a833] bg-[#212121] peer-checked:bg-[#7152f3] transition" />
                                                Cyber Security
                                            </label>
                                        </div>
                                    </div>

                                    {/* Day 2 Section */}
                                    <div className="w-full">
                                        <p className="text-white text-xl font-bold">Day 2</p>
                                        <div className="mt-3">
                                            <label className="flex flex-row items-center gap-2.5 text-white">
                                                <input
                                                    onChange={() => setEvent2('AI & ML')}
                                                    type="radio"
                                                    name="day2"
                                                    checked={event2 === 'AI & ML'}
                                                    className="peer hidden"
                                                />
                                                <div className="h-5 w-5 flex rounded-md border border-[#a2a1a833] bg-[#212121] peer-checked:bg-[#7152f3] transition" />
                                                AI & ML
                                            </label>
                                            <label className="flex flex-row items-center gap-2.5 text-white">
                                                <input
                                                    onChange={() => setEvent2('IoT')}
                                                    type="radio"
                                                    name="day2"
                                                    checked={event2 === 'IoT'}
                                                    className="peer hidden"
                                                />
                                                <div className="h-5 w-5 flex rounded-md border border-[#a2a1a833] bg-[#212121] peer-checked:bg-[#7152f3] transition" />
                                                IoT
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </Box>

                            <Box sx={{ background: "rgba(44, 44, 46, 1)" }} className="w-full p-4 rounded-lg shadow">
                                <p className="text-white text-3xl font-bold">Workshop Registration</p>
                                <hr className="my-6" />
                                <div className="flex flex-col gap-8">
                                    <div className="w-full">
                                        <p className="text-white text-xl font-bold"></p>
                                        <div className="mt-3">
                                            <label className="flex flex-row items-center gap-2.5 text-white">
                                                <input
                                                    onChange={() => setWorkshop('Block Chain')}
                                                    type="radio"
                                                    name="workshop"
                                                    checked={workshop === 'Block Chain'}
                                                    className="peer hidden"
                                                />
                                                <div className="h-5 w-5 flex rounded-md border border-[#a2a1a833] bg-[#212121] peer-checked:bg-[#7152f3] transition" />
                                                Block Chain
                                            </label>
                                            <label className="flex flex-row items-center gap-2.5 text-white">
                                                <input
                                                    onChange={() => setWorkshop('AI in BioTech')}
                                                    type="radio"
                                                    name="workshop"
                                                    checked={workshop === 'AI in BioTech'}
                                                    className="peer hidden"
                                                />
                                                <div className="h-5 w-5 flex rounded-md border border-[#a2a1a833] bg-[#212121] peer-checked:bg-[#7152f3] transition" />
                                                AI in BioTech
                                            </label>
                                        </div>
                                        <button onClick={EventSubmit} type="submit" className="btn bg-black float-right text-white p-2 mt-8 px-4 rounded-xl hover:scale-110 transition-transform duration-200 ease-in-out">Submit</button>
                                    </div>
                                </div>
                            </Box>
                        </Box>
                    ) : (
                        <Box p={3}>
                            <Box sx={{ background: "rgba(44, 44, 46, 1)" }} p={3} className="w-full rounded-lg shadow">
                                <div className='flex flex-col justify-center items-center'>
                                    <div className='text-center'>
                                        <p className="text-white text-xl lg:text-3xl sm:text-xl md:text-2xl font-bold">
                                            Get General Pass to Register for Events and Workshop
                                        </p>

                                        <button
                                            onClick={handlePayment}
                                            className='btn bg-black mt-5 text-white p-4 px-4 rounded-2xl hover:scale-110 transition-transform duration-200 ease-in-out'>
                                            Proceed to Pay
                                        </button>
                                    </div>
                                </div>

                            </Box>
                        </Box>
                    )}
                </div>
            </div>
            {/* <div className='bg-gray-300 flex justify-center' style={{ height: "700px", width: "100%" }}>
                <div ref={printRef}>
                    <div className=''>
                        <div style={{ height: "17cm", width: "12cm" }} className='bg-white relative'>
                            <div className='flex justify-between p-4'>
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSg787J2ldBefN_heNoIDtyvK2o70aKmIIakw&s" alt="" style={{ width: "60px" }} />
                                <p id='font' className='text-3xl mt-3'>KANAM '25</p>
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2vt-PWNH-kBNYYcyZBO1JYWiJIBMXWFH_WA&s" alt="" style={{ width: "60px" }} />
                            </div>

                            <div className='flex justify-center h-full'>
                                <div style={{ height: "75%", width: "90%" }} >
                                    <div className='mt-5 flex justify-center'>
                                        <div className=''>
                                            <p className='text-center'><span className='font-bold'>ID. No </span> {`NGPK${String(userData.id).padStart(5, '0')}`}</p>
                                            <QRCode
                                                value='hey'
                                                style={{ width: "150px", padding: 0, height: "200px" }}
                                            />
                                        </div>
                                    </div>
                                    <div className='mt-4' style={{ lineHeight: "28px", marginLeft: "30px" }}>
                                        <p className=''><span className='font-bold'>Name: </span> {userData.name}</p>
                                        <p className=''><span className='font-bold'>College: </span> {userData.college}</p>
                                        <p className=''><span className='font-bold'>Events: </span> {`${e1}, ${e2}`}</p>
                                        <p className=''><span className='font-bold'>Workshop: </span> {`${work}`}</p>
                                        <p className=''><span className='font-bold'>Hackathon: </span> No</p>
                                        <p className=''><span className='font-bold'>Concert Night: </span> Yes</p>
                                    </div>
                                </div>

                            </div>


                            <div className='absolute bottom-0 w-full'>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                                    <path fill="#0099ff" fill-opacity="1" d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,250.7C1248,256,1344,288,1392,304L1440,320L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
        </div>
    );
}
