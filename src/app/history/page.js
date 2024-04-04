import * as React from 'react';
import Paper from '@mui/material/Paper';

export default async function History() {
    "use server";
    return (
        <main>
            <Paper variant="padded" elevation={3}>
                <h2>History</h2>
                <h4>A brief history of the Society</h4>

                <p>The Society promotes interest in all aspects of research into the reactions and properties of free radicals and into their physical, chemical, biological, medical and industrial roles.</p>

                <p>Founded in 1982, and now with over 2500 members worldwide, the Society consists of five autonomous regional groups: SFRR Asia, SFRR Europe, SFRR Australasia, Society for Free Radical Biology and Medicine (SFRR Americas) and SFRR Africa. A number of regional groups have also been established within these areas.</p>

                <p>The Inaugural Meeting of the Society was organized by Profs. Trevor Slater and Robin Willson held at The Royal Institution, London on 9 July 1982.</p>

                <p>At the First Biennial Meeting, held at Brunel University in September 1982, the name Society for Free Radical Research was adopted, a Constitution agreed, and a President (Chairman) and Officers and Committee elected.</p>

                <p>To accommodate the increasing size of the Society, a new Constitution was proposed and adopted in 1988 at a meeting in Kyoto, and the autonomous regional groups: SFRR (Asia), SFRR (Australasia) and SFRR (Europe), inaugurated. The Oxygen Society, founded in the USA in 1987, became a constituent member of SFRR and de facto SFRR (Americas). The Oxygen Society later changed its name to the Society for Redox Biology and Medicine (SFRBM).</p>

                <p>The international society has held meetings every two years with the first of these being at Brunel University in 1982. Further meetings have been held at the following places: York, England (1984); Dusseldorf, Germany (1986); Kyoto, Japan (1988); Pasadena, USA (1990); Turin, Italy (1992); Sydney, Australia (1994); Barcelona, Spain (1996); Sao Paulo, Brazil (1998); Kyoto, Japan (2000); Paris, France (2002); Buenos Aires, Argentina (2004); Davos, Switzerland (2006); Beijing, China (2008), Orlando, Florida, USA (2010), London, England (2012), Kyoto, Japan (2014), San Francisco, USA (2016) and Lisbon, Portugal (2018).</p>
            </Paper>
        </main>
    );
}