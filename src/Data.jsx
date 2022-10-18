import React, { useState } from 'react';

export function UserLogin() {
    const [SubmitBtn, setSubmitBtn] = useState({ value: "" });

    const handleChange = (e) => {
        setSubmitBtn({ value: e.target.value });
    }

    const handleSubmit = (e) => {
        console.log(`A name was submitted:  ${SubmitBtn.value}`);
        e.preventDefault();
    }


    return (
        <React.Fragment>
            <form onSubmit={handleSubmit}>
                <label>
                    Name:
                    <input type="text" value={SubmitBtn.value} onChange={handleChange} />
                </label>
                <input type="submit" value="Submit" />
                <br /> <br />
                <input type="file" />
            </form>
            <h1></h1>
        </React.Fragment>
    );
}