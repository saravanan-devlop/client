import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loader from "../components/Loader";
import Error from "../components/Error";
import moment from "moment";

function Bookingscreen() {
  const { roomid, fromdate, todate } = useParams(); 
  const firstdate = moment(fromdate,'DD-MM-YYYY')
  const lastdate = moment(todate,'DD-MM-YYYY')

  const totaldays = moment.duration(lastdate.diff(firstdate)).asDays()+1
    const [totalamount, settotalamount] =useState()

  const [loading, setloading] = useState(true);
  const [error, seterror] = useState();
  const [room, setroom] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        setloading(true);
        const data = (await axios.post('/api/rooms/getroombyid', { roomid })).data;
        setroom(data.rentperday*totaldays);
        setroom(data);
        setloading(false);
      } 
      catch (error) {
        setloading(false);
        seterror(true);
      }
    };

    fetchData();
  }, [roomid]);


  async function Booking() {
    
    const bookingDetails = {
        room,
        // userid: JSON.parse(localStorage.getItem('currentUser'))._id,
        fromdate,
        todate,
        totalamount,
        totaldays
    }

    try {
        const result = await axios.post('/api/bookings/bookroom',bookingDetails)
       
    }catch(error) {

    }
    alert("payment made")
  }

  return (
    <div className="m-4">
      {loading ? (
        <h1><Loader/></h1>
      ) : room ? (
        <div>
          <div className="row justify-content-center mt-5 bs">
            <div className="col-md-5">
              <h1>{room.name}</h1>
              <img src={room.imageurls[0]} className="bigimg"/>
            </div>
            <div className="col-md-5 mx-5" style={{ textAlign: 'right' }}>
              <h1>Booking Details</h1>
              <hr/>
              <b>
                <p>Name:</p>
                <p>From Date: {fromdate}</p> 
                <p>To Date: {todate}</p> 
                <p>Max Count: {room.maxcount}</p>
              </b>

              <div style={{ textAlign: 'right' }}>
                <b>
                  <h1>Amount</h1>
                  <hr/>
                  <p>Total days :{totaldays}</p>
                  <p>Rent per day: {room.rentperday}</p>
                  <p>Total amount:{totalamount}</p>
                </b>
              </div>

              <div style={{ float: 'right' }}>
                <button className="btn btn-primary" onClick={Booking}>Pay Now</button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <Error/>
      )}
    </div>
  );
}

export default Bookingscreen;
