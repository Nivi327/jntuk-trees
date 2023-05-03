import JNTUK from './assets/Jntuk-logo.png';

const Details = ({image, name, age, area, height, latitude, longitude, plantationYear, oxygenReleased, audio}) => {
    return (<section className="outer-section">
        <nav>
            <div className="nav-header">
                <div className="jntu-logo">
                    <img src={JNTUK} alt="JNTUK" />
                </div>
            </div>
        </nav>
        <div className="detials">
            <div className="tree-img">
                <img src={image} alt="Tree" />
            </div>
            <div className="tree-details">
                <table>
                    <tbody>
                        <tr>
                            <td className="deatail-heading"><strong className="heading">Name</strong> </td>
                            <td className="detail-value">:   {name}</td>
                        </tr>
                        <tr className="active-row">
                            <td className="deatail-heading"><strong className="heading">Area</strong></td>
                            <td className="detail-value">:   {area} sq.feet</td>
                        </tr>
                        <tr>
                            <td className="deatail-heading"><strong className="heading">Age</strong></td>
                            <td className="detail-value">:   {age} years</td>
                        </tr>
                        <tr className="active-row">
                            <td className="deatail-heading"><strong className="heading">Height</strong></td>
                            <td className="detail-value">:   {height} sq.feet</td>
                        </tr>
                        <tr className="active-row">
                            <td className="deatail-heading"><strong className="heading">Latitude</strong></td>
                            <td className="detail-value">:   {latitude}&#176;</td>
                        </tr>
                        <tr>
                            <td className="deatail-heading"><strong className="heading">Longitude</strong></td>
                            <td className="detail-value">:   {longitude}&#176;</td>
                        </tr>
                        <tr className="active-row">
                            <td><strong className="heading">Plantation Year</strong></td>
                            <td className="detail-value">:   {plantationYear}</td>
                        </tr>
                        <tr>
                            <td><strong className="heading">Oxygen Released</strong></td>
                            <td className="detail-value">:   {oxygenReleased}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <div className="description">
            <h2>Description: </h2>
            <audio controls src={audio} />
        </div>
    </section>
    )
};

export default Details;