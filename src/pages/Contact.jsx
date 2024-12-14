export const Contact = () => {
    const handleFormSubmit = (event) => {
        event.preventDefault(); // Prevent page reload
        const formData = new FormData(event.target); // Collect form data
        const formInputData = Object.fromEntries(formData.entries()); // Convert formData to object

        console.log(formInputData); // Log the form data object
    };

    return (
        <section className="section-contact">
            <h2 className="container-title">Contact Us</h2>

            <div className="contact-wrapper container">
                {/* Use onSubmit for form submission */}
                <form onSubmit={handleFormSubmit}>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Enter your name"
                        name="username"
                        required
                        autoComplete="off"
                    />

                    <input
                        type="email"
                        className="form-control"
                        placeholder="Enter your email"
                        name="email"
                        required
                        autoComplete="off"
                    />

                    <textarea
                        className="form-control"
                        rows="10"
                        placeholder="Enter your message"
                        name="message"
                        required
                        autoComplete="off"
                    ></textarea>

                    <button type="submit">
                        Send
                    </button>
                </form>
            </div>
        </section>
    );
};
