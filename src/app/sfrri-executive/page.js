import * as React from 'react';
import Paper from '@mui/material/Paper';
import SFRRIExecutiveItem from '../components/SFRRIExecutiveItem';

const SFRRIExecutiveItems = [
    { 
        imgWidth: 122, 
        imgHeight: 131, 
        name: 'Giovanni E Mann', 
        title: 'President', 
        address: '<p><span class="bold">Giovanni E. Mann, Professor of Vascular Physiology</span><br />King\'s British Heart Foundation Centre of Research Excellence<br /\>School of Cardiovascular and Metabolic Medicine &amp; Sciences<br /> Faculty of Life Sciences and Medicine<br /\>King\'s College London</p><p>Franklin-Wilkins Building (Rm 3.01)<br /\>150 Stamford Street<br /\>London SE1 9NH<br /\>UK</p>', 
        tel: '+44 (0)20 7848 4306', 
        email: 'giovanni.mann@kcl.ac.uk', 
        link: 'https://www.kcl.ac.uk/people/giovanni-e-mann',
        bio: '<p>Giovanni Mann obtained his BSc in Zoology (1973) from George Washington University, Washington D.C. USA and MSc (1974) and PhD in Physiology (1978) from University College London. After a 4-year postdoctoral Research Fellowship at Queen Elizabeth College London, he was appointed to a Lectureship in Physiology (1981), Readership in Physiology (1992) and then as Professor of Vascular Physiology at King\'s College London in 1997.</p><p>He previously served as President-Elect and Secretary General of SFRR-International and as President of the SFRR-Europe, Chairman/Vice Chairman of The Physiological Society, President of the European Pancreatic Society, President of the European Microcirculation Society, President of the British Microcirculation Society and as a Council Member of the Physiological Society, Society for Free Radical Research-Europe, European Society for Microcirculation and Member of International Liaison Committee for Microcirculation.</p><p>Giovanni Mann is Reviews and Special Issues Editor for Free Radical Biology &amp; Medicine and the Chair of the Ethics Committee for Free Radical Biology &amp; Medicine. He is an Associate Editor for Physiological Reviews and on the Editorial Board of Redox Biology. He has served on Editorial Boards of The Journal of Physiology, Microcirculation and an Editorial Advisor for the Biochemical Journal. He serves on the Board of External Referees for the Biotechnology &amp; Biological Sciences Research Council and College of Experts for the Medical Research Council - Physiological Systems &amp; Clinical Sciences and was previously Chair of Heart Research UK Translational Sciences panel and served on The Royal Society International Networks Panel. He has published &gt;180 research papers (h-index 59) and coordinated &gt;45 research symposia at international conferences, including a Plenary Symposia focused on \'Oxygen Matters in Redox Biology\' at the joint meeting of the Society for Redox Biology (SFRBM) and Society for Free Radical Research International (SFRRI) in San Francisco 2016 and at the SFRRI Meeting in Lisbon, Portugal 2018.</p><p>His Vascular Biology research group at King\'s College London is investigating signalling cascades involved the transcriptional activation of antioxidant defence genes in endothelial and smooth muscle cells in oxidative stress. We are interested in vascular dysfunction induced by oxidative stress in diseases such as gestational diabetes and stroke, and the health benefits of dietary inducers of the redox sensitive transcription factor Nrf2 involved the upregulation of endogenous antioxidant defences. More recently, his group have focused on the importance of adapting human cultured vascular and other cell types long-term to \'physiological\' oxygen levels to investigate Nrf2 and nitric oxide signalling in response to inflammatory mediators and/or laminar shear stress.</p>',
    },
    { 
        imgWidth: 116, 
        imgHeight: 148, 
        name: 'Roland Stocker', 
        title: 'President-Elect', 
        address: '<p><span class="bold">Professor Roland Stocker</span><br />The Heart Research Institute<br />7 Eliza Street<br />Newtown NSW 2042<br />Australia</p>', 
        tel: '+61(410) 782 588',
        email: 'roland.stocker@hri.org.au', 
        link: 'https://www.hri.org.au/our-research/arterial-inflammation-and-redox-biology/professor-roland-stocker',
        bio: '<p>Roland Stocker trained as a biochemist at the Federal Institute of Technology in Zürich Switzerland (Dipl. Natw. ETH, 1981), the Australian National University in Canberra Australia (PhD, 1985), and the University of California, Berkeley USA (post-doc, 1986-1987). He has been an independent investigator since 1987, and currently leads the Arterial Inflammation &amp; Redox Biology Group and is Deputy Director, Research Strategy at the Heart Research Institute, Sydney, and Honorary Professor, School of Life and Environmental Sciences at the University of Sydney. </p><p>Roland has been a Fellow of the National Health &amp; Medical Research Council of Australia since 1994 and Senior Principal Research Fellow from 2001-2020. He has received the Lifetime Achievement Award from the Society for Free Radical Research Australasia, has been recognised as a “Redox Pioneer” by the journal, Antioxidants &amp; Redox Signalling, and was elected as a member of both the Swiss Academy of Medical Sciences and the Australian Academy of Health and Medical Sciences.</p><p>Roland\'s laboratory investigates redox processes in atherosclerosis and related vascular diseases and has made pioneering contributions to the discovery of the beneficial activities of bilirubin; the elucidation of the molecular action of vitamin E in lipoproteins; the identification of arterial myeloperoxidase activity as a cause of atherosclerotic plaque destabilization; and the discovery of a novel redox pathway that regulates vascular tone and blood pressure in inflammation.</p><p>Roland has served or currently serves as a member of the Editorial Board of all journals dedicated to free radical research, and he has also been President of the Society for Free Radical Research Australasia. He has published a career total of 333 articles. His work has been cited &gt;45,000 and his current h-index is 106.</p>',
    },
    { 
        imgWidth: 125, 
        imgHeight: 125, 
        name: 'Patricia Oteiza', 
        title: 'Secretary-General', 
        address: '<p><span class="bold">Professor Patricia Oteiza</span><br />Department of Nutrition<br />University of California - Davis<br />3135 Meyer Hall<br />One Shields Avenue<br />Davis, CA 95616-5270<br />USA</p>', 
        tel: '+1 53 0754 6074', 
        email: 'poteiza@ucdavis.edu', 
        link: 'https://nutrition.ucdavis.edu/people/patricia-oteiza',
        bio: '<p><span className="bold">Education</span></p><ul><li>M.S., Clinical Chemistry, School of Pharmacy and Biochemistry, University of Buenos Aires, Argentina</li><li>M.S., Biochemistry, School of Pharmacy and Biochemistry, University of Buenos Aires, Argentina</li><li>Ph.D., Biochemistry, School of Pharmacy and Biochemistry, University of Buenos Aires, Argentina</li></ul><p><span className="bold">Research Interests</span></p><p>Patricia Oteiza has been an active member of SFFRI and SFRBM since 1992, and a member of the Editorial Board of Free Radical Biology and Medicine and Redox Biology, Archives of Biochemistry and Biophysics, Biofactors and Food and Function (RSC). She has co-organized international conferences on redox biology as part of the Oxygen Club of California, and on polyphenols (International Conference on Polyphenols and Health). In 2004, Prof Otezia was a member of the organizing committee of the SFFRI biennial meeting in Buenos Aires, Argentina and Vice-President of the Free Radical-South America Group Congress in Buenos Aires in 2013. Dr. Oteiza\'s research program is focused on the basic mechanisms underlying interactions between nutrition and environmental toxicants in human health, in particular during early development and chronic inflammatory disorders. She studies the mechanisms of nutrients/bioactives and toxicants, mainly those involving redox-sensitive signals and that are relevant for neurodevelopment. She has also conducted extensive work on the capacity of plant bioactives, mainly flavonoids, to mitigate obesity- and inflammation-associated pathologies through redox-regulated mechanisms. She is currently studying how flavonoids can modulate inflammation- and oxidative-mediated impairment of events occurring in the gastrointestinal tract that can impact overall health, including insulin resistance, steatosis and brain inflammation.</p>',
    },
    { 
        imgWidth: 122, 
        imgHeight: 131, 
        name: 'Lin Mantell', 
        title: 'Treasurer', 
        address: '<p><span class="bold">Associate Professor Lin Mantell</span><br />Department of Pharmaceutical Sciences<br />St. John\'s University College of Pharmacy<br />128/SB28 St. Albert Hall<br />8000 Utopia Parkway, Queens<br />New York 11439<br />USA</p>', 
        tel: '+1 718 990 5933', 
        email: 'mantelll@stjohns.edu', 
        link: 'https://stjohns.edu/academics/bio/lin-l-mantell',
        bio: '<p><a href="http://www.stjohns.edu/academics/bio/lin-l-mantell" target="_blank">stjohns.edu/academics/bio/lin-l-mantell</a></p><p>Lin Mantell is Associate Professor in the College of Pharmacy &amp; HeaIth Sciences, St. John\'s University, USA have a long standing interest in studying molecular and cellular mechanisms underlying inflammatory lung injury and infection, especially the interplay between inflammation and infection. I have received extensive training and have broad background in biomedical research.</p><p>After receiving medical training at Beijing University School of Medicine and obtaining a PhD degree studying nuclear proteins, I was trained with Dr. Carol Greider, the co-winner of 2009 Nobel Prize in Physiology/Medicine, focusing on the regulation of telomerase in developmental biology. Together with Dr. Horowitz, we were the first to describe the involvement of programmed cell death in the pathogenesis of acute inflammatory lung injury.</p><p>My lab is the first to show that airway HMGB1 not only mediates inflammatory responses, it can also directly compromise macrophage functions in clearing invading bacteria, contributing to bacterial pneumonia observed in patients with CF and ventilator-associated pneumonia. Our studies on the effects of oxidative stress on macrophage functions of innate immunity have a strong impact on the management of patients on ventilators. In summary, I have a strong record of accomplished projects in an area highly relevant to this proposed project. I have supported SFRBM and SFRRI throughout my career and have served on the SFRBM Executive and SFRBM Outreach Committee.</p>',
    },
    { 
        imgWidth: 250, 
        imgHeight: 250, 
        name: 'José Viña', 
        title: 'Immediate Past-President', 
        address: '<p><span class="bold">Professor José Viña</span><br />Departamento Fisiologia<br />Facultad de Medicina y Odenotologia<br />Universidad de Valencia<br />Avda. Blasco Ibanez, 17<br />46010 Valencia<br />Spain</p>', 
        tel: '+34 983 864 650', 
        email: 'jose.vina@uv.es', 
        link: 'https://www.uv.es/freshage/jose-vina.html',
        bio: '<p>José Viña was born in Valencia, Spain in 1953. After pursuing his studies in Medicine at the University of Valencia, and undertaking research work under Prof Hans Krebs (Krebs cycle) in Oxford, he obtained his PhD in 1976. Prof Viña taught Physiology at Extremadura University and then returned to Valencia and took up his present position as full Professor of Physiology at the University of Valencia. Here Prof Viña combines his teaching duties with research work, the latter in two main lines, ageing and exercise.</p><p>José Viña leads a successful research group working on different aspects of ageing, including healthy ageing, exercise and Alzheimer\'s disease. He has published widely (over 300 publications in prestigious international journals) on glutathione, mitochondria, oxidative stress, free radicals and nutrition. Prof Viña has received numerous awards and honours, the most recent of which is the Albert Struyvenberg Medal, awarded by the European Society for Clinical Investigation (ESCI) 2017. He has also been awarded two Doctor honoris causa, Buenos Aires University (Argentina) and Rennes University (France).</p>',
    },
    { 
        imgWidth: 140, 
        imgHeight: 180, 
        name: 'Frank J Kelly', 
        title: 'Trustee', 
        address: ' <p><span class="bold">Professor Frank J Kelly, PhD, FRSB, FRSC, FKC, FMedSci</span><br />Environmental Research Group<br />Faculty of Medicine<br />Imperial College London <br />London W12 0BZ<br />UK</p>', 
        tel: '+44 (0)20 7594 8098 ext 48098', 
        email: 'frank.kelly@imperial.ac.uk', 
        link: 'https://www.imperial.ac.uk/people/frank.kelly',
        bio: '<p><a href="https://kcl.ac.uk/people/frank-kelly" target="_blank">kcl.ac.uk/lsm/research/divisions/aes/about/people/Kelly/index.aspx</a></p><p>Professor Frank Kelly holds the Inaugural Chair in Community Health and Policy at Imperial College London, where he is Director of the Environmental Research Group, Director of the NIHR Health Protection Research Unit on Environmental Exposures and health and Deputy Director of the MRC-PHE Centre for Environment &amp; Health.  </p><p>Prof Kelly leads a substantial research activity which spans all aspects of air pollution research from toxicology to science policy. He has examined the toxicity of PM associated metals and quinones, diesel and biodiesel exhaust emissions, wood smoke and the identification of biomarkers of exposure. A new area of investigation is ambient microplastics including heir identification and potential health effects.</p><p>Prof Kelly is past President of the European Society for Free Radical Research and past Chairman of the British Association for Lung Research. He provides policy support to the WHO on air pollution issues and he is past Chairman of COMEAP the UK\'s Department of Health\'s Expert Committee on the Medical Effects of Air Pollutants. </p>',
    },
]

export default async function SFRRIExecutive() {
    return (
        <main>
            <Paper variant="padded" elevation={3}>
                <h2 style={{marginBottom: '1em',}}>SFRRI Executive</h2>
                {SFRRIExecutiveItems.map(item => (
                    <SFRRIExecutiveItem
                        imgWidth={item.imgWidth}
                        imgHeight={item.imgHeight}
                        imgSrc={item.imgSrc}
                        name={item.name}
                        title={item.title}
                        address={item.address}
                        tel={item.tel}
                        email={item.email}
                        link={item.link}
                        bio={item.bio}
                        key={item.title}
                    />
                ))}
            </Paper>
        </main>
    );
}