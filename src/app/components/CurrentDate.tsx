"use client";

import { useEffect, useState } from "react";

const CurrentDate = () => {
    const [date, setDate] = useState("তারিখ লোড হচ্ছে...");

    useEffect(() => {
        const updateDate = () => {
            setDate(
                new Date().toLocaleDateString("bn-BD", {
                    dateStyle: "full",
                })
            );
        };

        updateDate();
        const intervalId = window.setInterval(updateDate, 60_000);

        return () => window.clearInterval(intervalId);
    }, []);

    return <>{date}</>;
};

export default CurrentDate;
