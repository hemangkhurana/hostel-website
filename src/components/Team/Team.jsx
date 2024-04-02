import React, { useEffect, useState } from 'react';
import styles from './Team.module.css';
import TeamCard from './TeamCard.jsx';
// import SecteraryData from './Data/SecretaryData.jsx';
// import RepresentativeData from './Data/RepresentativeData';
// import CaptianAndViceCaptianData from './Data/CaptianAndViceCaptianData';

const Team = () => {
    const [SecyData, setSecyData] = useState([]);
    const [RepData, setRepData] = useState([]);
    const [CaptainData, setCaptainData] = useState([]);

    useEffect(() => {
        const fetchSecysData = async () => {
            const resp = await fetch(
                'https://docs.google.com/spreadsheets/d/1GJ1SUAIRbK9ep96SxbID8AmHUxiT_asiELv9WZQkGBE/export?format=tsv&gid=1477114139'
            );
            const text = await resp.text();
            const rows = text.split('\r');

            const secys = [];

            rows.forEach((row, index) => {
                if (index === 0) return;
                const cols = row.split('\t');
                const temp = {
                    name: cols[0].slice(1),
                    position: cols[1],
                    src: require(`./images/${cols[2]}`),
                };
                secys.push(temp);
            });
            console.log(secys);

            setSecyData(secys);
        };
        const fetchRepsData = async () => {
            const resp = await fetch(
                'https://docs.google.com/spreadsheets/d/1GJ1SUAIRbK9ep96SxbID8AmHUxiT_asiELv9WZQkGBE/export?format=tsv&gid=611378995'
            );
            const text = await resp.text();
            const rows = text.split('\r');

            const reps = [];

            rows.forEach((row, index) => {
                if (index === 0) return;
                const cols = row.split('\t');
                const temp = {
                    name: cols[0].slice(1),
                    position: cols[1],
                    src: require(`./images/${cols[2]}`),
                };
                reps.push(temp);
            });
            console.log(reps);

            setRepData(reps);
        };
        const fetchCaptainsData = async () => {
            const resp = await fetch(
                'https://docs.google.com/spreadsheets/d/1GJ1SUAIRbK9ep96SxbID8AmHUxiT_asiELv9WZQkGBE/export?format=tsv&gid=503217911'
            );
            const text = await resp.text();
            const rows = text.split('\r');

            const captains = [];

            rows.forEach((row, index) => {
                if (index === 0) return;
                const cols = row.split('\t');
                const temp = {
                    name: cols[0].slice(1),
                    position: cols[1],
                    src: require(`./images/${cols[2]}`),
                };
                captains.push(temp);
            });
            console.log(captains);
            setCaptainData(captains);
        };

        const fetchData = async () => {
            await fetchSecysData();
            await fetchRepsData();
            await fetchCaptainsData();
            console.log('Data fetched!');
        };
        fetchData();
    }, []);
    const [dropSec, setDropSec] = useState(false);
    const [dropReps, setDropReps] = useState(false);
    const [dropCVC, setDropCVC] = useState(false);

    const dropToggler = (key) => {
        const arraySetStates = [setDropSec, setDropReps, setDropCVC];
        const arrayStates = [dropSec, dropReps, dropCVC];
        const setState = arraySetStates[key];
        const state = arrayStates[key];

        setState(!state);
        arraySetStates[(key + 1) % 3](false);
        arraySetStates[(key + 2) % 3](false);
    };
    return (
        <div className={styles.team}>
            <h1 className={styles.heading1}>OUR TEAM</h1>
            <hr className={styles.hr1} />

            <h2
                className={styles.heading2}
                onClick={() => {
                    dropToggler(0);
                }}
            >
                Secretary
            </h2>
            <hr className={styles.hr2} />
            {dropSec ? (
                <>
                    <div className={styles.Team_container}>
                        {SecyData.map(TeamCard)}
                    </div>
                    <hr className={styles.hr2} />
                </>
            ) : (
                <></>
            )}

            <h2
                className={styles.heading2}
                onClick={() => {
                    dropToggler(1);
                }}
            >
                Representatives
            </h2>
            <hr className={styles.hr2} />
            {dropReps ? (
                <>
                    <div className={styles.Team_container}>
                        {RepData.map(TeamCard)}
                    </div>
                    <hr className={styles.hr2} />
                </>
            ) : (
                <></>
            )}

            <h2
                className={styles.heading2}
                onClick={() => {
                    dropToggler(2);
                }}
            >
                Captian and Vice-Captian
            </h2>
            <hr className={styles.hr2} />
            {dropCVC ? (
                <>
                    <div className={styles.Team_container}>
                        {CaptainData.map(TeamCard)}
                    </div>
                    <hr className={styles.hr2} />
                </>
            ) : (
                <></>
            )}
        </div>
    );
};

export default Team;
