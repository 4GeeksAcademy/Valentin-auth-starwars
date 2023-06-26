import React, { useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";

const VehiclesDetails = (props) => {
  const { store, actions } = useContext(Context);
  const params = useParams();
  const vehicle = store.vehicle.find((vhc) => vhc.uid === params.id);

  
  useEffect(() => {
    actions.vehicleDescription(props.vehicle.url);
  }, []);


  
  if (!vehicle) {
    return (
      <div
        className={`modal ${props.isOpen ? "show" : ""}`}
        tabIndex="-1"
        style={{ display: props.isOpen ? "block" : "none" }}
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">vehicle Not Found</h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
                onClick={props.onClose}
              ></button>
            </div>
            <div className="modal-body">
              <p>The requested vehicle does not exist.</p>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-warning"
                data-bs-dismiss="modal"
                onClick={props.onClose}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div>
       <div
      className={`modal ${props.isOpen ? "show" : ""}`}
      tabIndex="-1"
      style={{ display: props.isOpen ? "block" : "none" }}
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
           
            <h5 className="modal-title">{props.vehicle.name}</h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
              onClick={props.onClose}
            ></button>
          </div>
          <div className="modal-body">
          <img
              src={`https://starwars-visualguide.com/assets/img/vehicles/${props.vehicle.uid}.jpg`}
              className="image-detalle col6 col-md-6"
              alt="..."
            />
            <div className="text-description">
              <p>Model: {vehicle.model}</p>
              <p>Vehicle class: {vehicle.vehicle_class}</p>
              <p>Max speed: {vehicle.max_atmosphering_speed}</p>
              <p>Passengers: {vehicle.passengers}</p>
              <p>Consumables: {vehicle.consumables}</p>
              <p>Cost in credits: {vehicle.cost_in_credits}</p>
              <p>Manufacturer: {vehicle.manufacturer}</p>
              <p>Length: {vehicle.length}</p>
            </div>
          </div>
          <div className="modal-footer">
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt quaerat dolorem corrupti incidunt eligendi, tenetur consectetur! Eaque asperiores maiores totam quaerat? Blanditiis eius necessitatibus beatae quam, ipsum quasi officiis vel!
            Rem saepe consectetur quam minima facere totam praesentium, illum ea ratione odit vel temporibus ad eos, quasi exercitationem. Eligendi consequatur veritatis dolorem beatae fugit reprehenderit illum consequuntur nostrum nihil corporis.</p>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default VehiclesDetails;