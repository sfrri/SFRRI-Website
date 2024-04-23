import * as React from 'react';
import Paper from '@mui/material/Paper';
import data from '../../../_data/conferences/rules-for-conference-organisation.json'
import Markdown from 'react-markdown'
import rehypeExternalLinks from 'rehype-external-links'
import rehypeRaw from 'rehype-raw'

export default async function RulesforConferenceOrganisation() {
    "use server";
    return (
        <main>
            <Paper variant="padded" elevation={3}>
                <h2>Rules for Conference Organisation</h2>
                <Markdown rehypePlugins={[[rehypeExternalLinks, { target: '_blank' }], [rehypeRaw]]}>{data.body}</Markdown>
                {/* <h2>Rules for Conference Organisation</h2>
                <h4>GUIDELINES FOR THE ORGANISERS OF INTERNATIONAL CONGRESSES </h4>
                <h4>Special Features of SFRRI Congresses</h4>

                <p>Congresses provide unique occasions for expert review of international advances in free radical biology and related fields being comprehensive in their coverage of free radical biology and related subjects and have an expected attendance of 400-800 persons. They provide concentrated opportunities to academic teachers and scientists in specialized research or in routine work to broaden and upgrade their knowledge. They provide occasions for those actively involved in specialized research to present and discuss their work with an audience of diverse interests.</p>
                <p>
                    A potential host organization must provide a written statement at the time of application giving assurances that the ICSU policy on free circulation of scientists, including a timetable for visa application and issuance, as recommended in the 1989 Resolution on the Free Circulation of Scientists, will apply. This provides for written assurances that:</p>
                <ul>
                    <li>no obstacles will be put to the granting of visas to bona fide scientists who wish to participate</li>
                    <li>information will be supplied concerning the mechanism for applications for visas and the time normally required between application for and receipt of a visa</li>
                </ul>
                <p>If the application is successful, the host organization will provide in writing an assurance to undertake to continue to observe the ICSU recommendations up to and during the Congress.</p>
                <p>A host organisation agrees, in writing, to observe the Guidelines for SFRRI Congresses. </p>
                <p>
                    Congress organisers will keep the Executive Committee of SFRRI well informed of the status of their planning through the Secretary General and consult with him/her on any matter of direct concern to SFRRI.  Planning of a Congress at all stages shall be made by the Organizing Committee and representatives of the SFRRI.  The organizers will supply the Secretary General with copies of all minutes of planning meetings and of all announcements and other publications.  The Secretary General is to be invited in the year that precedes the Congress by two years and at the expense of the Organizing Committee, to attend a meeting of that Organizing Committee.  During the same period, a member of the Organizing Committee will be invited, to attend an annual meeting of the Executive Committee of SFRRI to discuss plans for the Congress. </p>
                <p>    	  The Organizing Committee presents a tentative outline of the program for the Congress, including topics for symposia and colloquia and possibly plenary lectures, to the Executive Committee of SFRRI at least two years in advance of the Congress. </p>
                <p>
                    A host society for a Congress selects the Organizing Committee and forms an Advisory Committee including representatives of the Executive Committee of SFRRI, composed of internationally distinguished free radical scientists from outside its country to serve as Advisors who will help identify topics for each symposium </p>

                <p>The Organizing Committee ensures that the scheduling of the Congress does not conflict with any major scientific meeting. </p>
                <p>Soon after conclusion of the Congress the organizers will supply the Secretary General with a full report of the Congress and recommendations for the benefit of future Congress organizers. <br />
                    The Secretary General will offer all assistance and advice to the organizers.</p>

                <h4>Lecturers</h4>
                <p>Choice of lecturers, particularly plenary lectures, is governed by their excellence and didactic skill.  It should take into consideration the need for coverage of different areas of free radical research, wide geographical distribution, and suitable representation of female and younger scientists. </p>
                <p>SFRRI-sponsored plenary lecturers are chosen in consultation with the Executive Committee of SFRRI and an international scientific committee, coordinated by the hosting regional society. <br />
                    Congress organizers should consult SFRRI concerning the publication of plenary lectures.</p>
                <h4>Educational Activities</h4>
                <p>Since a large number of free radical researchers, particularly from less developed areas come from teaching institutions, educational activity should be included as a program theme.  The Organizing Committee should consult with the Secretary General on the program of educational activities.</p>

                <h4>Satellite Meetings</h4>

                <p>Satellite meetings enrich the Congress experience and offer further opportunities for in-depth scientific discussions, with savings in time and money.  They should be organized with the approval of and most advantageously in association with the Congress organizers to avoid possibilities of overlap or competition with the Congress. </p>
                <h4>SFRRI Activities</h4>

                <p>Congress organisers are to ensure that:</p>
                <ul>
                    <li>The President or General Secretary of SFRRI is given an opportunity at the Opening Session to present a brief report on SFRRI activities</li>
                    <li>Space is provided in the printed Congress Program for SFRRI to present information about its structure and activities</li>
                    <li>Space is provided at the Congress for graphic representation of SFRRI activities and for exhibition of SFRRI publications.  Space is provided free of charge for the General Assembly Meeting</li>
                    <li>Free time is provided for the General Assembly Meeting, so that it does not overlap the scientific program</li>
                    <li>The SFRRI logo will be displayed prominently on all announcements and publications</li>
                </ul>
                <h4>Advancement and Support of Young Scientists</h4>
                <ul>
                    <li>Younger free radical scientists are to be given opportunities to present their work in poster sessions and, as much as possible, to meet prominent scientists</li>
                    <li>Registration fees are to be reduced for scientists younger than 30 years</li>
                    <li>Registration fees are to be reduced for older bona fide students who present satisfactory documentation of this status</li>
                    <li>Congress organizers should ensure availability of cheap accommodation (for example in students&apos; dormitories)</li>
                    <li>Recipients of SFRRI Travel Fellowships are to receive a contribution towards travel, free registration and a contribution towards accommodation during the Congress</li>
                    <li>The selection of SFRRI Travel Fellowships is the responsibility of a Committee chaired by a member of the Executive Committee and further consisting of a representative of the Organizing Committee and of SFRRI Member Societies</li>
                </ul>

                <h4>Financial Matters</h4>
                <ul>
                    <li>SFRRI and regional SFRR societies have in the past agreed financially to support hosting regional societies in running the Biennial Congresses</li>
                    <li>Any financial profit realised by a Congress shall be shared between the organisers of the Congress and SFRRI in consultation with the SFRRI Treasurer</li>
                    <li>Congress organizers are to provide free office space and meeting facilities for the SFRRI Secretariat and the Executive Committee of SFRRI during the period of the Congress</li>
                    <li>Registration fees are to be waived for Trevor Slater Award Plenary Lecturer</li>
                    <li>The SFRRI Treasurer is responsible for discussion and negotiation of all financial matters in liaison with the Congress Organisers</li>
                </ul>

                <h4>Applications to host an SFRRI Congress</h4>

                <p>Applications from Adhering Bodies to host an SFRRI Congress will be reviewed by the Executive Committee of SFRRI according to the following criteria (not necessarily in this order):</p>
                <ul>
                    <li>time since the last Congress was held in that country</li>
                    <li>contributions of that country to international free radical biology</li>
                    <li>evidence of availability of appropriate infrastructure and facilities</li>
                    <li>estimated attendance</li>
                    <li>least cost and greatest ease of travel for the majority of participants</li>
                    <li>recent Congresses in that same geographical area</li>
                    <li>probability of political stability in the country</li>
                    <li>probability of financial success</li>
                    <li>attractiveness of the venue</li>
                </ul>

                <p>The Executive Committee of SFRRI will normally consider all applications at one of its meetings 2-3 years before the Congress year and select a short list.</p> */}
            </Paper>
        </main>
    );
}