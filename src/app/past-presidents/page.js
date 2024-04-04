import * as React from 'react';
import Paper from '@mui/material/Paper';

export default async function PastPresidential() {
    "use server";
    return (
        <main>
            <Paper variant="padded" elevation={3}>
                <h2>Past Presidents</h2> 
                <p>Trevor Slater</p>
                <p>John Perkins</p>
                <p>Tom Dormandy</p>
                <p>Britton Chance</p>
                <p>Irwin Fridovich</p>
                <p>Etsuo Niki</p>
                <p>Robin Wilson</p>
                <p>Lester Packer</p>
                <p>Helmut Sies</p>
                <p>Alberto Boveris</p>
                <p>Kelvin J.A. Davies</p>
                <p>Toshikazu Yoshikawa</p>
                <p>Enrique Cadenas</p>
                <p>Angelo Azzi</p>
                <p>Malcolm Jackson</p>
                <p>Michael Davies</p>
                <p>Rafael Radi</p>
                <p>Shinya Toyokuni</p>
                <p>Jose Viña</p>
            </Paper>
        </main>
    );
}