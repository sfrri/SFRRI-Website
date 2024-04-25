import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
// import DOMPurify from 'isomorphic-dompurify';
import Markdown from 'react-markdown'
import rehypeExternalLinks from 'rehype-external-links'

export default function AccordionUsage({bio}) {
  return (
    <div>
      <Accordion elevation={0}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel-content"
          id="panel-header"
          sx={{
            padding:{xs: 0, lg: '0 1em'},
            color: '#4282dd !important',
            fontWeight: 500,
          }}
        >
          Read Bio
        </AccordionSummary>
        {/* {bio && <AccordionDetails dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(bio) }} />} */}
        <AccordionDetails>
            {bio && <Markdown rehypePlugins={[[rehypeExternalLinks, {target: '_blank'}]]}>{bio}</Markdown>}
        </AccordionDetails>
      </Accordion>
    </div>
  );
}