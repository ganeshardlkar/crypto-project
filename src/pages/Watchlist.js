import React, { useState, useEffect } from "react";
import Header from "../components/Common/Header";
import { get100Coins } from "../functions/get100Coins";
import Button from "../components/Common/Button";
import TabsComponent from "../components/Dashboard/Tabs";
import Search from "../components/Dashboard/Search";
import Grid from "../components/Dashboard/Grid";

const Watchlist = () => {
    const watchlist = JSON.parse(localStorage.getItem("watchlist"));
    const [coins, setCoins] = useState([]);

    useEffect(() => {
        if (watchlist) {
            getData();
        }
    }, []);

    const getData = async () => {
        const allCoins = await get100Coins();
        if (allCoins) {
            setCoins(allCoins.filter((coin) => watchlist.includes(coin.id)));
        }
    };

    return (
        <div>
            <Header />
            {watchlist?.length > 0 ? (
                <TabsComponent coins={coins} />
            ) : (
                <div>
                    <h1 style={{ textAlign: "center" }}>
                        Sorry, No Items In The Watchlist.
                    </h1>
                    <div
                        style={{
                            display: "flex",
                            justifyContent: "center",
                            margin: "2rem",
                        }}
                    >
                        <a href="/dashboard">
                            <Button text="Dashboard" />
                        </a>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Watchlist;
