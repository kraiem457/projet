import React, { useState } from 'react';
import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from "@chakra-ui/react";

export function SizeExample({ data }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [size, setSize] = useState("");

  const handleSizeClick = () => {
    setSize("");
    onOpen();
  };

  return (
    <>
      <Button onClick={handleSizeClick}>Open Modal</Button>

      <Modal onClose={onClose} size={size} isOpen={isOpen}>
        <ModalOverlay />
        <ModalContent height="84%" maxW="60%">
          <ModalHeader>Company details </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
          <h4 id="title" style={{color:"#686868",left:"-31px", position: "relative",top:"-41px", textAlign: "center", lineHeight:"100px", fontSize: 30}}> Ecole de formation NOZ </h4>
      
      <tr>

<td style={{left: "19px",top: "-50px",position: "relative",width: "1592px",color: "rgb(185 196 203)"}}>Company name  :</td>
   <td style={{ width: "208px",position: "relative",top: "-50px",left: "-4px"}}>{data.companyName}</td>
  
       <td style={{width: "600px",color: "rgb(185 196 203)",position: "relative",left: "30px",top: "-52px"}}> country :</td>
       <td style={{position: "relative", left: "-4pc",top: "-51px"}}>{data.country}</td>
      </tr>
      <tr>


       <td style={{top: "-43px",color: "rgb(168 174 181)",width: "535px",left: "17px",position: "relative"
}}> locality: </td>
       <td style={{position:"relative",top: "-43px",left: "-94px",width: "254px"}}> {data.locality} </td>
      </tr>
       <tr>

       <td style={{left: "18px",top: "-19px",position: "relative",width: "558px",color: "rgb(185 196 203)"}}> Code Postal:</td>
       <td style={{top: "-19px",position: "relative",left: "-58px",width: "6133px"}}> {data.codePostal}</td>
      </tr>
       <tr>

      <td style={{left: "16px",position: "relative",width: "558px",top: "-5px",color: "rgb(185 196 203)"}}> Ap: </td>
      <td style={{left: "-133px",top: "-3px",position: "relative"}} > {data.Ap} </td>
      </tr>
      <tr>

      <td style={{left: "13px",top: "13px",position: "relative",color: "rgb(185 196 203)"}}> Date de debut :  </td>
      <td style={{left: "-51px",top: "14px",position: "relative"}}> {data.StartDate}</td>
  
      <td style={{width: "260px",color: "rgb(185 196 203)",position: "relative",top: "14px",left:"76px"}} >Date de Fin: </td>
     <td style={{left: "-2px",position: "relative",top: "15px"}}> {data.EndDate}</td>
      </tr>
    <tr>

     <td style={{left: "12px",top: "36px",position: "relative",width: "6212px",color: "rgb(185 196 203)"}}> Numero  identifiant TVA: </td>
     <td style={{left: "6px",position: "relative",top: "37px"}}> {data.NIdentifiant} </td>
     
 
     <td style={{width: "6272px",color: "rgb(185 196 203)",position: "relative",left: "28px",top: "-142px"}}>Numero de Serie </td>
    
     <td style={{left: "-13px",position: "relative",top: "-142px"}}> {data.NumeroSiret} </td>   
    </tr>
    <tr>
     
 
    <td style={{left: "32px",top: "59px",position: "relative",width: "6212px",color: "rgb(185 196 203)"}}> Status juridique: </td>
     <td style={{left: "-15px",position: "relative",top: "59px"}}>  {data.statusJuridique} </td>
    </tr>
    <tr>
     
  
     <td style={{left: "83px",top: "77px",position: "relative",width: "5497px",color: "rgb(185 196 203)"}}> N accise  : </td>
     <td style={{left: "0px",position: "relative",top: "0px"}}>{data.accuseD}   </td>
    </tr>
  
            {/* ... display other data fields */}
          </ModalBody>

          <ModalFooter>
            {/* Modal footer content here */}
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
