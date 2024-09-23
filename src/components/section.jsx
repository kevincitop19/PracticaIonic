import React from 'react';
import { IonLabel, IonSegment, IonSegmentButton } from '@ionic/react';



function Segmento({ value, funcion }) {

  function handleClick(event){
    funcion(event.target.value);
  } 

  return (
    <>
      <IonSegment value="default">
        <IonSegmentButton value="default" onClick={handleClick}>
          <IonLabel>sda</IonLabel>
        </IonSegmentButton>
        <IonSegmentButton value="segment" onClick={handleClick}>
          <IonLabel>Segment</IonLabel>
        </IonSegmentButton>
      </IonSegment>
    </>
  );
}
export default Segmento;