import React from 'react';
import { PDFViewer, Document, Page, Text, View } from 'react-pdf';
// import pdfStyles from './pdfStyles.js';

// const PDFPreview = ({ title }) => (
//     <PDFViewer className="viewer">
//         <Document>
//             {/* <Page size="A4">
//                 <View>
//                     <Text>{title}</Text>
//                     <Text>This is a text in a generated PDF file.</Text>
//                 </View>
//             </Page> */}
//         </Document>
//     </PDFViewer>
// );

const PDFPreview = ({ title }) => (
    <div>
        {title}
    </div>
);

export default PDFPreview;