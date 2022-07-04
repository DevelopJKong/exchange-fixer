import fetch from "node-fetch";

export const home = async (req, res) => {
    const to = "KRW";
    const from = "EUR";
    const amount = 5;
    const rate = await (
        await fetch(`https://api.exchangerate.host/convert?from=${from}&to=${to}&amount=${amount}`, {
            method: "GET",
        })
    ).json();
    return res.render("home", { result: rate.result });
};
