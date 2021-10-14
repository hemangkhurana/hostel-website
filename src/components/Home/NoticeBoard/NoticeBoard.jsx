import React from "react";
import styles from "./NoticeBoard.module.css";
// import NoticeBoardData from "./NoticeBoardData.jsx";
import NoticeBoardCard from "./NoticeBoardCard";
import { useState , useEffect} from "react" ; 

function NoticeBoard() {
    const [ NoticeBoardData , setNoticeBoardData] = useState([]) ; 
   
    useEffect( () => {
            console.log("working") ; 
          fetch("https://docs.google.com/spreadsheets/d/1mVEfz2XBOMTWfqHKQ0Hjdwv_Ln3RXFqVGqJtlDfj5rs/export?format=tsv")
           .then(response => {
               console.log(response) ; 
              return response.text()
        } )
           .then( text => {
             console.log(text)
             const Notice = []  ;   
             const rows =  text.split('\r')  ; 
             rows.forEach( row => {
                const col =  row.split('\t')  ; 
                const temp = {
                    index : col[0] , 
                    displayName : col[1]  , 
                    url : col[2]
                }; 
                Notice.push(temp) ; 
             })
            
             setNoticeBoardData(Notice) ; 
             console.log(Notice)  ; 
          }).catch( err => {
              console.log(err);
          })
    
    
    } , []) ; 
    return (
        <div className={styles.noticeBoard}>
            <div className={styles.heading1}>Notice Board</div>
            {/* <hr className={styles.hr}/> */}
            <div className={styles.noticeBoard_body}>
                {NoticeBoardData.map(NoticeBoardCard)}
            </div>
        </div>
    );
}

export default NoticeBoard;