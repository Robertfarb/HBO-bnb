import React from 'react';
import { Link, Route, withRouter } from 'react-router-dom';
import LoadingIcon from '../spot_show/loading_icon';

class BookingsShow extends React.Component {
  constructor(props) {
    super(props);
    this.handleDelete = this.handleDelete.bind(this);

  }

  handleDelete(e, bookingId) {
    e.preventDefault();
    this.props.deleteBooking(bookingId);

  }

  componentDidMount() {
    this.props.fetchBookings();

  }

  render() {
    if (this.props.loading) { return <LoadingIcon />; }
    const {
      currentUser,
      bookings,
      spots,
      openModal } = this.props;

    const userMsg = bookings.length > 0 ?
      <h2>These are your upcoming trips</h2> : <h2>You have no upcoming trips at the moment</h2>;
    return (
      <div className="main-bookings-container">
        <header className="welcome-header">
          <section className="greet-user">
            <h1>Hello there, {currentUser.username}</h1>
            {userMsg}
          </section>
          <img src={currentUser.imgUrl} alt="user-photo"></img>
        </header>
        <section className="bookings-container">
          <ul>
            {bookings.map((booking, idx) => (
              <li key={idx} className="booking-box">
                <img src={spots[booking.spotId].imgUrl}></img>
                <h2>{spots[booking.spotId].title}</h2>
                <h3>{spots[booking.spotId].location}</h3>
                <span className="booking-dates">
                  <p className="date-info">{booking.startDate}</p>
                  <p>until</p>
                  <p className="date-info">{booking.endDate}</p>
                </span>
                <Link to={`/api/spots/${booking.spotId}`}>
                  <button>View Listing</button>
                </Link>
                <div className="booking-buttons">
                  <button
                    onClick={() => openModal('edit_booking', booking.id)}
                    className="btn">Edit Booking
                  </button>
                  <button onClick={(e) => this.handleDelete(e, booking.id)}
                    className="btn">Delete Booking
                  </button>

                </div>
              </li>

            ))}
          </ul>

        </section>
      </div>
    );
  }
}

export default BookingsShow;
