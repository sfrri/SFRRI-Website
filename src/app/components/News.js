import Link from 'next/link'
import Paper from '@mui/material/Paper';

export const News1 = () => {
    return (
        <>
        <p><Link href='/presidential-address'>President&apos;s Welcome Message 2024</Link></p>
        <p><a href="downloads/SFRRI_Letter_to_Regional_SFRR_Executives_and_Member_12-09-23.pdf" target="_blank">President&apos;s Letter | Extension of SFRRI Officers Term for 1-year</a></p>
        <p>SFRRI 2023 Award Lectures</p>
        <ul>
            <li><a href="https://lpi.oregonstate.edu/faculty-staff/maret-traber" target="_blank">Prof. Maret Traber</a> - Trevor Slater Award</li>
            <li><a href="https://en.wikipedia.org/wiki/Helmut_Sies" target="_blank">Prof. Helmut Sies</a> - Alberto Boveris Award</li>
            <li><a href="https://www.uv.es/freshage/jose-vina.html" target="_blank">Prof. Jose Vina</a> - Lester Packer Award</li>
        </ul>
        <hr />
        <p>
          <span className="italic">June 3-6, 2025</span><br />
          <span className="bold">22nd Society for Free Radical Research International Biennial Meeting</span> (hosted by SFRR Europe)<br />
          <span className="italic">Location:</span> Galway, Ireland<br />
          <span className="italic">Further information:</span> <a href="downloads/22nd-SFRRI-Biennial-Meeting-Galway-3-6-June-2025.pdf" target="_blank">22nd SFRRI Biennial Conference, Galway, Ireland</a>
        </p>
        <hr />
        <p>
          <span className="italic">June 5-7, 2024</span><br />
          <span className="bold">Society for Free Radical Research - Europe Meeting &apos;From Molecules to Tissues: Redox Biology in Action&apos;</span><br />
          <span className="italic">Location:</span> Istanbul, Turkey<br />
          <span className="italic">Further information:</span> <a href="http://redoxistanbul2024.com" target="_blank">http://redoxistanbul2024.com</a>
        </p>
        <hr />
        <p>
          <span className="italic">November 20-23, 2024</span><br />
          <span className="bold">31<sup>st</sup> Annual Conference of the Society for Redox Biology &amp; Medicine</span><br />
          <span className="italic">Location:</span> Savannah Convention Center, Savannah, Georgia, USA<br />
          <span className="italic">Further information:</span> <a href="https://sfrbm.org/" target="_blank">sfrbm.org</a>
        </p>
        <p>
          <span className="italic">May 29-31, 2024</span><br />
          <span className="bold">16<sup>th</sup> International Conference on Reactive Oxygen and Nitrogen Species in Plants</span><br />
          <span className="italic">Location:</span> Antibes Juan-les-Pins, France<br />
          <span className="italic">Further information:</span> <a href="https://www.alphavisa.com/pog/2024/index.php" target="_blank">https://www.alphavisa.com/pog/2024/</a>
        </p>
        <hr />
      </>
      )
  }

export const News2 = () => {
    return (
        <>
        <p>
          <span className="italic">October 10-12, 2024</span><br />
          <span className="bold">Lipid Oxidation: New Biochemical Insights and Clinical Applications</span><br />
          <span className="italic">Location:</span> Genoa, Italy<br />
          <span className="italic">Further information:</span> <a href="downloads/HNE-Club-Meeting.pdf" target="_blank">download flyer</a>
        </p>
        <hr />
        <p>
          <span className="italic">October 21-23, 2024</span><br />
          <span className="bold">11<sup>th</sup> Biennial Meeting of SFRR Asia and Chinese National Conference of Redox Biology & Medicine 2024</span><br />
          <span className="italic">Location:</span> <a href="http://www.kuntaihotel.com/" target="_blank">Kuntai Hotel</a> (Beijing Wangjing), Beijing, China <br />
          <span className="italic">Further information:</span> <a href="http://www.sfrr-asia2024.com.cn/" target="_blank">http://www.sfrr-asia2024.com.cn/</a>
        </p>
        <hr />
        <p>
          <span className="bold">SFRRI Outreach Meeting Sponsorship Form</span><br />
          <a href="downloads/SFRRI_Outreach_Sponsorship_Application_Form_2019.doc" target="_blank">Please click here to download</a>
        </p>
        <hr />
        <p className="bold">In Memoriam</p>
        <p style={{ fontVariant: 'small-caps', textTransform: 'capitalize', }}>
          <a href="downloads/Pierre_Cillard_In_Memoriam.pdf" target="_blank">Pierre Cillard</a>
        </p>
        <p style={{ fontVariant: 'small-caps', textTransform: 'capitalize', }}>
          <a href="downloads/Robin-Willson-in-Memoriam-1-Aug.pdf" target="_blank">Robin Linhope Willson</a>
        </p>
        <p style={{ fontVariant: 'small-caps', textTransform: 'capitalize', }}>
          <a href="https://news.ki.se/professor-emeritus-sten-orrenius-has-died" target="_blank">Sten Orrensius</a>
        </p>
        <p style={{ fontVariant: 'small-caps', textTransform: 'capitalize', }}>
          <a href="downloads/Letter_in_memory_of_Professor_Alberto_Boveris_10-04-20.pdf" target="_blank">Alberto Boveris</a>
        </p>
        <p style={{ fontVariant: 'small-caps', textTransform: 'capitalize', }}>
          <a href="https://sites.unimi.it/HNECLUB/hne2020/obituary/" target="_blank">Peter Maria Eckl</a>
        </p>
        <p style={{ fontVariant: 'small-caps', textTransform: 'capitalize', }}>
          <a href="downloads/In_Memoriam_Irwin_Fridovich.docx" target="_blank">Irwin Friedovich</a>
        </p>
        <p style={{ fontVariant: 'small-caps', textTransform: 'capitalize', }}>
          <a href="downloads/In_Memoriam_William_Austin_Pryor_(1929-2019).pdf" target="_blank">William Austin Pryor</a>
        </p>
        </>
    )
}

export const News = () => {
    return (
      <div className="news">
        <h3>News</h3>
        <News1 />
        <News2 />
      </div>
    )
}
