import React, { useState, useEffect } from "react";
import axios from "axios";

const TestBackend = () => {
    const [message, setMessage] = useState("");

    useEffect(() => {
        axios
            .get("http://127.0.0.1:8000/") // URL of your Django backend
            .then((response) => {
                setMessage(response.data.message);
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
            });
    }, []);

    return (
        <div>
            <h1>Backend Message:</h1>
            <p>{message}</p>
        </div>
    );
};

export default TestBackend;
