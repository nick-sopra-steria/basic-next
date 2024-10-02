// src/app/companies/page.tsx
'use client'

import { FC, FormEvent, useEffect, useState } from "react";

interface CompanyProps {
    enhet: {
        navn: string;
        naeringskode1?: {
            kode: string,
            beskrivelse: string,
        }
    }
}

const Company: FC<CompanyProps> = ({ enhet }) => {
    const { navn, naeringskode1 } = enhet;
    return <tr>
        <td>{navn}</td>
        <td>{naeringskode1?.kode ? naeringskode1?.kode : '-'}</td>
        <td>{naeringskode1?.beskrivelse ? naeringskode1?.beskrivelse : '-'}</td>
    </tr>
}

const Companies = () => {
    const [enheter, setEnheter] = useState<[]>([]);

    const handleSearch = async (search: string) => {
        const enheter = await fetch('/api/companies',
            { method: "POST", body: JSON.stringify({ search: search }) }
        )
            .then(res => res.json())
            .then(data => data.enheter)
            .catch(e => console.error(e));
        setEnheter(enheter ? enheter : [])
    }

    useEffect(() => { handleSearch('Sopra Steria') }, [])

    async function onSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()
        const formData = new FormData(event.currentTarget)
        const searchString = formData.get('search');
        if (searchString && typeof searchString === 'string') handleSearch(searchString);
    }

    return (
        <div>
            <h1>Firmaer</h1>
            <h2>Søk</h2>
            <form onSubmit={onSubmit}>
                <label htmlFor="search">Søk etter firma: </label>
                <input type="text" name="search" />
                <button type="submit">Søk</button>
            </form>
            <table>
                <thead>
                    <tr>
                        <th>Navn</th>
                        <th>Næringskode</th>
                        <th>Beskrivelse</th>
                    </tr>
                </thead>
                <tbody>
                    {enheter.map(enhet => {
                        const { organisasjonsnummer } = enhet;
                        return <Company key={organisasjonsnummer} enhet={enhet} />
                    })}
                </tbody>
            </table>
        </div>
    );
};

export default Companies;