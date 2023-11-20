import '../App.css'
const Career = () => {
    // Pobierz aktualną datę
    function getCurrentDate() {
        const options = { year: 'numeric', month: 'long' };
        const currentDate = new Date().toLocaleDateString('en-US', options);
        return currentDate;
    }

    return (
        <section id='career' className='section-padding career-section'>
            <h2 className='section-heading'>Career</h2>
            <div className='career-tiles'>
                <div className='career-tile'>
                    <h3>{getCurrentDate()}</h3>
                    <p>In Progress (Learning + Job Applications)</p>
                </div>
            </div>
        </section>
    );
}

export default Career;