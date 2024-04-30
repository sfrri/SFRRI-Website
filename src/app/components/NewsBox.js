'use client';
import { usePathname } from "next/navigation";
import Box from "@mui/material/Box";
import { styled } from '@mui/material/styles';

const StyledBox = styled(Box)(({pathname}) => ({
    position: 'relative',
    padding: pathname === '/' ? '2px 10px' : '2px 0',
    pageBreakInside: 'avoid',                 /* Theoretically FF 20+ */
    breakInside: 'avoid-column',              /* Chrome, Safari, IE 11 */
    // display: 'table',                      /* Actually FF 20+ */

}));

const NewsBox = ({children}) => {
    const pathname = usePathname();
    return (
        <StyledBox pathname={pathname}>
            {children}
        </StyledBox>
    )
}

export default NewsBox