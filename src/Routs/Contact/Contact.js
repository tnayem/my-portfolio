import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
function ContactForm() {
    const [state, handleSubmit] = useForm("mwkzgang");
    if (state.succeeded) {
        return <p>Submited Successfull</p>;
    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content">
                <div className="card flex-shrink-0 w-full shadow-2xl bg-base-100">
                    <div className="card-body">
                        <form onSubmit={handleSubmit}>
                            <label className="label" htmlFor="email">
                                <span className="label-text">Your Email</span>
                            </label>
                            <input
                                className="input input-bordered w-full"
                                id="email"
                                type="email"
                                name="email"
                                placeholder="email"
                            />
                            <ValidationError
                                prefix="Email"
                                field="email"
                                errors={state.errors}
                            />
                            {/* phone number area start */}
                            <label className="label" htmlFor="number">
                                <span className="label-text">Your Phone Number</span>
                            </label>
                            <input
                                className="input input-bordered w-full"
                                id="number"
                                type="text"
                                name="number"
                                placeholder="your contact number"
                            />
                            <ValidationError
                                prefix="Number"
                                field="number"
                                errors={state.errors}
                            />
                            {/* phone number area end */}
                            <label className="label" htmlFor="message">
                                <span className="label-text">Your Message</span>
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                className="textarea textarea-bordered w-full"
                            />
                            <ValidationError
                                prefix="Message"
                                field="message"
                                errors={state.errors}
                            />
                            <button className="btn btn-primary w-full" type="submit" disabled={state.submitting}>
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
function App() {
    return (
        <ContactForm />
    );
}
export default App;
