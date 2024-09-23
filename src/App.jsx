
import {
  IonApp,
  IonButton,
  IonContent,
  setupIonicReact
} from '@ionic/react';


/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/**
 * Ionic Dark Mode
 * -----------------------------------------------------
 * For more info, please see:
 * https://ionicframework.com/docs/theming/dark-mode
 */

/* import '@ionic/react/css/palettes/dark.always.css'; */
/* import '@ionic/react/css/palettes/dark.class.css'; */
import '@ionic/react/css/palettes/dark.system.css';

/* Theme variables */
import './theme/variables.css';
import { IonFooter, IonHeader, IonTitle, IonToolbar } from '@ionic/react';
import { IonButtons, IonModal } from '@ionic/react';


import Segmento from './components/section';
import Card from './components/card'
import { useState } from 'react'; 

setupIonicReact();

const App = () => {
  const [valor, setValor] = useState('');
  const [isOpen,setOpen] = useState(false);
  

  const actualizarValor = (nuevoValor) => {
    setValor(nuevoValor);
  };

  const AggInfo = ()=>{
    if(isOpen=== false){
      setOpen(true);
    }else{
      setOpen(false);
    }
   
  }

  return (
    <IonApp>
      <IonHeader>
        <IonToolbar>
          <IonTitle>{valor}</IonTitle>
        </IonToolbar>
      </IonHeader>
      <Segmento value={valor} funcion={actualizarValor}/>
      <IonContent>
       <Card></Card>
       <IonButton onClick={AggInfo} >Agregar Informacion</IonButton>
       <IonModal isOpen={isOpen}>
          <IonHeader>e
            <IonToolbar>
              <IonTitle>Modal</IonTitle>
              <IonButtons slot="end">
                <IonButton onClick={AggInfo}>Close</IonButton>
              </IonButtons>
            </IonToolbar>
          </IonHeader>
          <IonContent className="ion-padding">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni illum quidem recusandae ducimus quos
              reprehenderit. Veniam, molestias quos, dolorum consequuntur nisi deserunt omnis id illo sit cum qui.
              Eaque, dicta.
            </p>
          </IonContent>
        </IonModal>
      </IonContent>
      <IonFooter>
        <IonToolbar>
          <IonTitle>Footer Toolbar</IonTitle>
        </IonToolbar>
      </IonFooter>
    </IonApp>
  );
}
  

  


export default App;
