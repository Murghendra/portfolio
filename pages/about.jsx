import { pdfjs, Document, Page } from 'react-pdf'
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`
const myResume = './my_resume.pdf';

const AboutPage = () => {
  return (
    <>
      <h3>About Me</h3><br/>
      <p>I'm Murghendra, B.Tech 4th year Student of KLE Dr MSSCET Engineering College, Belagavi. With expertise in Data Structures and Algorithms (DSA), Development in ReactJs, NodeJs, MongoDB, ExpressJs & much more. As a dynamic and forward-thinking programmer, I'm committed to staying up to date with the latest trends and technologies in the field.</p>
      <br />
  
      <ul>
        <li><span role="img" aria-label="book">📖</span> Pursuing Engineering in Computer Science & Engineering @ <a href='https://www.klescet.ac.in/main/'>The University of KLE Tech, Belagavi</a>.</li>
        <br />
        <li><span role="img" aria-label="laptop">💻</span> Currently building UI of GPT3 using React. </li>
      </ul>
      <br/>
      <center>
        <h3>Resume (<a href={myResume} download="Resume-MurghendraAkki.pdf">Download</a>)</h3>
        <br />
        <Document file={myResume}>
          <Page pageIndex={0} renderMode="svg"/>
          {/* <Page pageIndex={1} renderMode="svg"/> */} {/* if the resume is more than 1 page, then uncomment this line.*/}

        </Document>
      </center>
    </>
  );
};

export async function getStaticProps() {
  return {
    props: { title: 'About' },
  };
}

export default AboutPage;
