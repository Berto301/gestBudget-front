/*function*/
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import moment from 'moment';
import { ERROR, SUCCESS } from "./_constants";
export const setNotificationError = (dispatch, message, delay = 0) => {
  setTimeout(() => {
    dispatch({
      type: "STANDARD_NOTIFICATION",
      payload: {
        type: ERROR,
        message,
      },
    });
  }, delay);
};

export const setNotificationSuccess = (dispatch, message, delay = 0) => {
  setTimeout(() => {
    dispatch({
      type: "STANDARD_NOTIFICATION",
      payload: {
        type: SUCCESS,
        message,
      },
    });
  }, delay);
};

export const exportPdf = (params)=>{
  const print = document.getElementById(`print-${params}`)
  html2canvas(print,{logging:true,letterRendering:1,useCors:true}).then((canvas)=>{
     const imgWidth = 208
     const imgHeight = canvas?.height * imgWidth / canvas?.width
     const imgData = canvas?.toDataURL('img/png')
     const pdf = new jsPDF('p','mm','a4')
     pdf.addImage(imgData,"PNG",0,0,imgWidth,imgHeight)
     pdf.save(`facture-${params}-${moment(new Date()).format('dd/mm/yyyy')}.pdf`)
  })
  .catch((err)=>console.log(err))
}
